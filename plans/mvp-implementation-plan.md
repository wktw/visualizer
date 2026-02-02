# Luminous Flow — MVP Implementation Plan

## Current State Summary

The app is a single-file React + Three.js 3D particle visualizer (~5,154 lines in `src/LuminousFlow.jsx`). It already has:

- **Working:** 65K-262K GPU particles with curl noise, shockwaves, mouse attractor, 5 geometric structures, 4 light ribbon types, wave grid, 6 color palettes, full post-processing (bloom, chromatic aberration, film grain, vignette, FXAA), adaptive quality system, keyboard shortcuts, touch support, preset gallery, toast notifications
- **Broken/Incomplete:**
  - Multiple attractors: UI exists but only mouse attractor reaches the GPU shader — vortex/orbit/repulsor types are dead code
  - Gravity direction: state variable exists, never applied to physics
  - Only 1 of 5 supported shockwaves passed to shader at a time
  - Structures don't affect particle physics (no collision/force fields)

## What's Needed for a Strong MVP

Four pillars the user requested, mapped against gaps:

| Pillar | Current State | Gap |
|--------|--------------|-----|
| **Particle/wave/effects** | Particles + wave grid work, but attractors are broken and simulation modes (boids, n-body) don't exist | Wire up multi-attractor GPU pipeline, add 2 simulation modes |
| **Parameter customization** | Control panel exists but has dead controls and no save/load | Fix dead controls, add save/load, add missing parameter exposure |
| **Camera controls** | OrbitControls work, auto-rotate exists, reset works | Add camera presets/fly-to animations, depth-of-field toggle |
| **Physics engine** | Curl noise + central attractor + shockwave only | Multi-attractor forces, particle-structure collision, gravity, boids |

---

## Phase Breakdown (5 Phases)

Phases are ordered to maximize incremental value — each phase produces a testable, visually improved build.

---

## Phase 1: Fix Broken Systems & Wire Up Physics Pipeline

**Goal:** Make every existing UI control actually work. Establish the multi-force GPU pipeline that all future physics depends on.

**Why first:** Everything else builds on a working force pipeline. Fixing dead controls is the highest-ROI work.

### Tasks

1. **Multi-attractor GPU pipeline** — Pass an attractor data texture (up to 16 attractors) to the velocity shader instead of a single `uAttractorPos` uniform. Each attractor has: position (vec3), strength (float), type (int: point/vortex/orbit/repulsor), radius (float). Loop over attractors in the shader computing per-type forces.

2. **Wire gravity direction** — Add `uGravityDirection` (vec3) and `uGravityStrength` (float) uniforms to the velocity shader. Apply as a constant acceleration vector. Connect the existing `gravityDirection` React state to these uniforms.

3. **Multi-shockwave support** — Pass all active shockwaves (up to 5) to the shader as a uniform array or small data texture. Loop in shader.

4. **Particle-structure force fields** — Pass structure bounding spheres (position + radius, up to 8) as uniforms to the velocity shader. Add a simple deflection force: when a particle is within `radius * 1.2`, push it outward along the surface normal. This makes structures feel physical.

5. **Fix attractor UI** — When the user clicks "Add Vortex" / "Add Orbit" / "Add Repulsor", create an actual attractor entry that gets uploaded to the GPU texture. Add a 3D position handle (draggable sphere) for each attractor so users can reposition them.

### Prompt for Sonnet — Phase 1

```
You are working on /home/user/visualizer/src/LuminousFlow.jsx, a single-file React + Three.js particle visualizer (~5,154 lines).

TASK: Fix the broken physics pipeline so all UI controls actually affect particles.

CONTEXT:
- The GPUParticleSystem class uses GPUComputationRenderer with position and velocity FBO textures
- The velocity shader (inside getVelocityShader()) currently has: curl noise, a single central attractor (uAttractorPos/uAttractorStrength), a single mouse attractor (uMousePos/uMouseActive), and a single shockwave
- The React component has state for multiple attractors, gravity direction, and the ShockwaveManager supports 5 shockwaves, but only 1 attractor and 1 shockwave reach the GPU

CHANGES NEEDED:

1. MULTI-ATTRACTOR SYSTEM:
   - Add a uniform array `uAttractors[16]` as a struct {vec3 position; float strength; int type; float radius;} to the velocity shader (or encode as a float texture if struct arrays aren't practical in this GLSL version)
   - Add `uAttractorCount` int uniform
   - In the shader main(), loop over all attractors and compute force per type:
     - type 0 (point): force = normalize(attractorPos - pos) * strength / (dist^2 + 0.5)
     - type 1 (vortex): tangential force = cross(normalize(attractorPos - pos), vec3(0,1,0)) * strength / dist, plus weak radial pull
     - type 2 (orbit): force toward attractor that weakens inside radius (creates stable orbit shell)
     - type 3 (repulsor): force = normalize(pos - attractorPos) * strength / (dist^2 + 0.5)
   - In the GPUParticleSystem.update() method, pack all attractor data into uniforms from the attractors array passed in
   - Remove the old single-attractor uniforms (uAttractorPos, uAttractorStrength) and replace references

2. GRAVITY DIRECTION:
   - Add uniforms uGravityDir (vec3) and uGravityStrength (float) to velocity shader
   - Apply: acceleration += uGravityDir * uGravityStrength
   - In the React component, find where gravityDirection state is used and pass it to GPUParticleSystem uniforms on each frame

3. MULTI-SHOCKWAVE:
   - Change the velocity shader to accept uShockwaves as an array of {vec3 origin; float radius; float strength; float thickness;} up to 5
   - Add uShockwaveCount uniform
   - Loop over all active shockwaves in the shader
   - In ShockwaveManager or the update call, pack all active shockwaves into uniforms

4. PARTICLE-STRUCTURE FORCE FIELDS:
   - Add uniforms uStructures[8] with {vec3 position; float radius;} and uStructureCount
   - In the velocity shader, for each structure, if distance < radius * 1.3, add a repulsion force pushing particles outward along the surface normal: force = normalize(pos - structPos) * strength / max(dist - radius, 0.1)
   - In the animation loop where structures are updated, pass their world positions and bounding sphere radii to the GPU particle system

5. FIX ATTRACTOR UI:
   - The control panel already has "Add Point/Vortex/Orbit/Repulsor" buttons and per-attractor strength sliders
   - Make sure clicking these buttons creates attractor objects with the correct type
   - Each attractor needs a default 3D position (spread them out: first at (3,0,0), second at (-3,0,0), etc.)
   - The attractors state array must be passed to GPUParticleSystem on every frame

Keep the mouse attractor as a special case (type 0 point attractor at index 0 when mouseFollow is enabled).

Do NOT refactor into multiple files. Keep everything in LuminousFlow.jsx.
Do NOT add any new npm dependencies.
Test by ensuring: adding a vortex attractor creates visible spiral motion, repulsor pushes particles away, clicking triggers shockwave at click position, structures deflect nearby particles.
```

---

## Phase 2: Simulation Modes (Boids & N-Body)

**Goal:** Add two alternate physics modes that make the visualizer feel like a real simulation sandbox, not just a pretty screensaver.

**Why second:** The multi-attractor pipeline from Phase 1 provides the GPU infrastructure. These modes reuse the same FBO textures and rendering — only the velocity shader logic changes.

### Tasks

1. **Simulation mode switcher** — Add a "Simulation Mode" dropdown to the control panel: `Flow` (current default), `Boids`, `N-Body`. Store as React state. Pass as uniform to velocity shader.

2. **Boids mode** — In the velocity shader, when mode == BOIDS: sample 16 nearby particles (using pseudo-random UV offsets seeded by particle index), compute separation/alignment/cohesion forces. Add UI sliders for separation weight, alignment weight, cohesion weight, neighbor radius.

3. **N-Body mode** — When mode == NBODY: treat structures as massive bodies. Compute gravitational attraction from each structure with F = G * M / r². Add structure mass sliders to the structure control panels. Particles orbit and cluster around structures.

4. **Mode-specific presets** — Each simulation mode gets 2-3 tuned parameter presets (e.g., "Murmuration" for boids, "Solar System" for n-body).

### Prompt for Sonnet — Phase 2

```
You are working on /home/user/visualizer/src/LuminousFlow.jsx, a single-file React + Three.js GPU particle visualizer.

TASK: Add two new simulation modes — Boids (flocking) and N-Body (gravity) — alongside the existing Flow mode.

CONTEXT:
- GPUParticleSystem uses GPUComputationRenderer with position/velocity FBO textures
- The velocity shader computes forces (curl noise, attractors, shockwaves, structure deflection) per frame
- Particles are rendered as points with glow shaders
- The control panel is JSX rendered at the bottom of the component

CHANGES NEEDED:

1. SIMULATION MODE STATE:
   - Add React state: simulationMode ('flow' | 'boids' | 'nbody'), default 'flow'
   - Add uniform uSimMode (int) to velocity shader: 0=flow, 1=boids, 2=nbody
   - Add a "Simulation Mode" dropdown at the TOP of the control panel, before other sections

2. BOIDS MODE (uSimMode == 1):
   In the velocity shader, add a boids computation block:
   - For each particle, sample 16 neighbors by computing pseudo-random UV coordinates:
     vec2 neighborUV = fract(uv + vec2(float(i) * 0.618033, float(i) * 0.381966));
   - Read neighbor position and velocity from textures
   - Compute 3 boid forces:
     a) Separation: if dist < separationRadius, push away: force += normalize(myPos - neighborPos) / max(dist, 0.01)
     b) Alignment: accumulate neighbor velocities, steer toward average heading
     c) Cohesion: accumulate neighbor positions, steer toward center of mass
   - Apply weights from uniforms: uSeparationWeight (default 1.5), uAlignmentWeight (default 1.0), uCohesionWeight (default 1.0), uNeighborRadius (default 2.0)
   - Still apply curl noise at 20% strength for organic feel
   - Limit speed to uMaxSpeed (default 4.0)
   - Add containment: soft force pushing particles back toward origin when dist > 8.0

   Add UI sliders in a "Boids Settings" section (only visible when mode is 'boids'):
   - Separation Weight (0-5)
   - Alignment Weight (0-5)
   - Cohesion Weight (0-5)
   - Neighbor Radius (0.5-5)
   - Max Speed (1-10)

3. N-BODY MODE (uSimMode == 2):
   In the velocity shader:
   - Use the existing uStructures array as massive bodies
   - For each structure: force = normalize(structPos - pos) * uStructureMass[i] * G / (dist^2 + softening)
   - G = 0.5 (gravitational constant, tunable)
   - softening = 0.5 (prevents singularities)
   - Also sample 8 nearby particles and add weak inter-particle gravity: force += dir * 0.001 / (dist^2 + 0.1)
   - Disable curl noise in this mode
   - No damping (preserve orbital energy) — or very light damping (0.999)

   Add UI controls in an "N-Body Settings" section (only visible when mode is 'nbody'):
   - Gravitational Constant G (0.01-2.0)
   - Softening (0.1-2.0)
   - Per-structure Mass slider (add to each structure's control panel, 0.1-10.0)
   - Damping (0.99-1.0)

4. MODE-SPECIFIC PRESETS:
   Add to the SCENE_PRESETS object:
   - "Murmuration" — boids mode, high separation, medium alignment/cohesion, Northern Lights palette, no structures
   - "Swarm" — boids mode, low separation, high cohesion, Synthwave palette
   - "Solar System" — nbody mode, 3 structures at different positions with varying mass, Solar Corona palette
   - "Galaxy" — nbody mode, 1 massive central structure, many light particles, Deep Ocean palette

   Update the preset gallery modal to show these new presets.

Do NOT refactor into multiple files. Do NOT add npm dependencies.
Ensure mode switching is instant — the velocity shader should branch on uSimMode, not require rebuilding the GPU compute system.
```

---

## Phase 3: Camera System & Scene Navigation

**Goal:** Give users cinematic control over how they view the scene — fly-to animations, camera presets, depth of field, and a smooth free-camera mode.

**Why third:** The simulation is now feature-complete from Phases 1-2. Camera polish makes everything look dramatically better with relatively low complexity.

### Tasks

1. **Camera presets** — Add 6 camera positions: Top-down, Side view, Close-up, Wide angle, Orbit low, Cinematic (angled). Each is a {position, target, fov} triple. Clicking a preset smoothly animates the camera using lerp over 60 frames.

2. **Fly-to animation system** — `flyTo(position, target, duration)` method that smoothly interpolates camera position, lookAt target, and FOV using eased lerp (ease-in-out cubic). Used by presets and also callable from keyboard shortcuts.

3. **Depth of field toggle** — Add BokehPass from Three.js examples to the post-processing chain. UI controls: focus distance (auto-focus on scene center or manual), aperture (0.001-0.1), max blur. Toggle on/off.

4. **Camera shake on shockwave** — When a shockwave triggers, add a small damped oscillation to camera position (amplitude 0.1, decay over 0.5 seconds).

5. **Camera section UI cleanup** — Reorganize the Camera section: presets as icon buttons in a row, auto-rotate toggle, rotation speed, immersion mode, DoF toggle with sub-controls, reset button.

### Prompt for Sonnet — Phase 3

```
You are working on /home/user/visualizer/src/LuminousFlow.jsx, a single-file React + Three.js GPU particle visualizer.

TASK: Upgrade the camera system with presets, fly-to animations, depth of field, and shockwave camera shake.

CONTEXT:
- Camera is a THREE.PerspectiveCamera at (0, 2, 8) looking at origin
- OrbitControls from Three.js is attached for mouse orbit/zoom
- The control panel has a "Camera" section with auto-rotate toggle, rotation speed, immersion mode, and reset button
- Post-processing uses EffectComposer with: RenderPass, BloomPass, ChromaticAberration, Vignette, FilmGrain, FXAA
- ShockwaveManager triggers shockwaves on click/spacebar

CHANGES NEEDED:

1. CAMERA PRESETS:
   Define 6 camera presets as constants:
   ```
   const CAMERA_PRESETS = {
     default: { position: [0, 2, 8], target: [0, 0, 0], fov: 75 },
     topDown: { position: [0, 15, 0.1], target: [0, 0, 0], fov: 60 },
     side: { position: [12, 0, 0], target: [0, 0, 0], fov: 70 },
     closeUp: { position: [0, 0.5, 3], target: [0, 0, 0], fov: 50 },
     wide: { position: [0, 5, 18], target: [0, 0, 0], fov: 90 },
     cinematic: { position: [6, 4, 6], target: [0, -1, 0], fov: 65 },
     low: { position: [4, -2, 4], target: [0, 1, 0], fov: 80 }
   };
   ```

2. FLY-TO ANIMATION:
   Add a camera animation system stored in a ref:
   - cameraAnimRef = useRef({ active: false, startPos, endPos, startTarget, endTarget, startFov, endFov, progress: 0, duration: 1.5 })
   - flyTo(preset) sets start values from current camera state, end values from preset, progress=0, active=true
   - In the animation loop, if cameraAnimRef.current.active:
     - Advance progress by deltaTime / duration
     - Use easeInOutCubic: t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2
     - Lerp position, target, fov using eased t
     - Set camera.position, controls.target, camera.fov, call camera.updateProjectionMatrix()
     - When progress >= 1, set active=false
   - Temporarily disable OrbitControls during animation, re-enable after

3. DEPTH OF FIELD:
   - Import BokehPass: import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
   - Create bokehPass with: focus: 8.0, aperture: 0.025, maxblur: 0.01
   - Insert into effect composer AFTER the bloom pass but BEFORE chromatic aberration
   - Add React state: dofEnabled (default false), dofFocus (1-30, default 8), dofAperture (0.001-0.1, default 0.025)
   - When dofEnabled is false, set bokehPass.enabled = false
   - Update bokeh uniforms when sliders change

4. CAMERA SHAKE:
   - Add cameraShakeRef = useRef({ intensity: 0, decay: 0.9 })
   - When a shockwave is triggered (in the existing triggerShockwave function), set intensity = 0.15
   - In the animation loop, if intensity > 0.001:
     - Add random offset: camera.position.x += (Math.random()-0.5) * intensity, same for y and z
     - Multiply intensity by decay each frame
     - Set to 0 when below threshold

5. CAMERA UI:
   In the Camera section of the control panel, render:
   - A row of small preset buttons: "Default", "Top", "Side", "Close", "Wide", "Cine", "Low"
     - Style them as compact pill buttons in a flex-wrap row
     - onClick calls flyTo with the corresponding preset
   - Existing: Auto Rotate toggle + speed slider
   - Existing: Immersion Mode toggle
   - NEW: Depth of Field toggle
     - When enabled, show: Focus Distance slider, Aperture slider
   - Existing: Reset Camera button (make it call flyTo('default'))

6. KEYBOARD SHORTCUTS:
   - Add number keys with Shift for camera presets: Shift+1 through Shift+6 for the 6 non-default presets
   - Update the keyboard shortcuts help modal to include these

Do NOT refactor into multiple files. Do NOT add npm dependencies beyond what three.js provides in its examples.
Make sure the BokehPass import works — it should be available from 'three/examples/jsm/postprocessing/BokehPass.js' with Three.js 0.160.0.
```

---

## Phase 4: Parameter Customization & Save/Load

**Goal:** Make every meaningful parameter exposed, organized, and persistable. Users should be able to save their creations and reload them.

**Why fourth:** The simulation modes and camera are done — now we make all the knobs discoverable and persistent.

### Tasks

1. **Expose missing parameters** — Audit every uniform in every shader and ensure it has a UI control. Key missing ones: curl noise octaves, curl noise scale, particle damping, particle speed limit, particle size, particle glow intensity, bloom radius, bloom threshold (separate from strength), wave grid frequency, wave grid opacity, structure edge glow intensity, ribbon glow intensity.

2. **Collapsible parameter groups** — Each section in the control panel should be collapsible (click header to toggle). Remember collapsed state. Add section icons.

3. **Parameter reset per section** — Each section header gets a small reset button that restores defaults for that section only.

4. **Save/Load system** — Serialize all state into a JSON blob. Save to localStorage with a name. Load from a dropdown of saved scenes. Export as .json file download. Import from file upload.

5. **URL state sharing** — Encode a compressed version of key parameters into URL hash so users can share links. Use base64-encoded JSON of the most impactful parameters (palette, background, simulation mode, structure types).

### Prompt for Sonnet — Phase 4

```
You are working on /home/user/visualizer/src/LuminousFlow.jsx, a single-file React + Three.js GPU particle visualizer.

TASK: Complete the parameter customization UI and add a save/load system.

CONTEXT:
- The control panel is rendered as JSX at the bottom of the LuminousFlow component
- There are sections: Global Controls, GPU Particles, Attractors, Velocity Coloring, Structures, Ribbons, Camera
- Many shader uniforms exist that don't have UI controls yet
- The app has React state for all visual parameters

CHANGES NEEDED:

1. EXPOSE MISSING PARAMETERS:
   Add UI sliders for these currently-unexposed uniforms/settings:

   In "GPU Particles" section:
   - Particle Size (0.5-5.0, default 2.0) → maps to base size in vertex shader
   - Particle Glow Intensity (0.5-3.0, default 1.5) → maps to core glow multiplier in fragment shader
   - Speed Limit (2.0-15.0, default 8.0) → maps to velocity shader speed clamp
   - Damping (0.9-1.0, default 0.98) → maps to velocity damping in shader
   - Curl Noise Scale (0.1-3.0, default 0.8) → maps to noise frequency multiplier
   - Curl Noise Octaves dropdown (1-4, default 3) → controls noise detail level
   - Spawn Radius (2.0-15.0, default 8.0) → controls where particles respawn

   In "Wave Grid" section (expand beyond just amplitude/speed):
   - Wave Frequency (0.1-3.0, default 0.5)
   - Wave Opacity (0.0-1.0, default 0.5)
   - Wave Particle Size (0.5-5.0, default 2.5)

   In "Post-Processing" (new section, extract from Global Controls):
   - Bloom Strength (0-3.0, current control)
   - Bloom Radius (0-2.0, default 0.8)
   - Bloom Threshold (0-1.0, default 0.2)
   - Chromatic Aberration Intensity (0.001-0.02, current control)
   - Film Grain Intensity (0-0.5, default 0.15)
   - Vignette Intensity (0-1.5, default 0.7)

   In each Structure's controls:
   - Edge Glow Intensity (0-3.0, default 1.0)

   In each Ribbon's controls:
   - Opacity (0-1.0, default 0.7)

   For each new slider, add corresponding React state (or extend existing state objects), pass values to the appropriate shader uniforms in the animation loop, and set sensible defaults.

2. COLLAPSIBLE SECTIONS:
   - Add React state: an object tracking which sections are expanded, e.g. expandedSections = { global: true, particles: true, attractors: false, ... }
   - Each section header becomes clickable — clicking toggles that section
   - Add a chevron icon (▼/▶ using unicode) that rotates based on expanded state
   - Default: Global and Particles expanded, others collapsed
   - Persist expanded state in localStorage under key 'luminousFlow_uiState'

3. PER-SECTION RESET:
   - Define DEFAULT_VALUES constant object with all default parameter values grouped by section
   - Add a small "↺" reset button in each section header (right-aligned)
   - Clicking it resets all parameters in that section to defaults
   - Show a toast notification: "Reset [section name] to defaults"

4. SAVE/LOAD SYSTEM:
   Add a new "Scenes" section at the TOP of the control panel:

   a) Save:
   - Text input for scene name
   - "Save" button
   - Serializes ALL React state (palette, background, timeScale, bloom, particles, attractors, structures, ribbons, camera position/target, simulation mode, all new parameters) into a JSON object
   - Stores in localStorage under key 'luminousFlow_scenes' as { [name]: sceneData }
   - Toast: "Scene '[name]' saved"

   b) Load:
   - Dropdown of saved scene names (read from localStorage)
   - "Load" button
   - Deserializes and applies all state
   - Handles missing keys gracefully (use defaults for any missing values)
   - Toast: "Loaded scene '[name]'"

   c) Delete:
   - Small "×" button next to each saved scene in dropdown
   - Confirms with window.confirm()

   d) Export:
   - "Export" button
   - Downloads a .json file named 'luminous-flow-[sceneName].json'

   e) Import:
   - "Import" button that triggers a hidden file input
   - Reads .json file, validates it has expected shape, applies state
   - Toast: "Imported scene" or "Invalid scene file"

5. URL SHARING:
   - When saving a scene, also generate a shareable URL
   - Encode key params as base64 JSON in URL hash: #scene=BASE64
   - On component mount, check for hash parameter and load if present
   - Only encode: palette, background, simulationMode, timeScale, bloom strength, structure types/positions, simulation-specific params (keep URL under 2000 chars)
   - "Copy Link" button next to save that copies URL to clipboard
   - Toast: "Link copied to clipboard"

Do NOT refactor into multiple files. Do NOT add npm dependencies.
Make sure all new state variables have proper cleanup and don't cause re-render loops.
Keep slider labels short and values displayed with appropriate precision (1-2 decimal places).
```

---

## Phase 5: Visual Polish & Final Integration

**Goal:** Final quality pass — fix visual glitches, add missing feedback, ensure all systems work together, performance-test all modes.

**Why last:** Polish should come after all features are in. This phase catches integration bugs between the systems built in Phases 1-4.

### Tasks

1. **Particle trails (post-processing)** — Add a simple motion blur / frame accumulation effect. Use an AfterImagePass or custom accumulation buffer that blends 80% of the previous frame with the current. Toggle in Post-Processing section.

2. **Smooth transitions** — When switching palettes, simulation modes, or loading scenes, lerp colors and parameters over 30 frames instead of instant jumps.

3. **Performance audit** — Test all 3 simulation modes at each quality level. Ensure boids mode doesn't tank FPS (reduce neighbor samples if needed). Add a performance overlay toggle showing: FPS, particle count, draw calls, GPU memory estimate.

4. **Visual consistency** — Ensure all color palette changes propagate to: particles, structures, ribbons, wave grid, background, post-processing bloom tints. Currently some elements may not update.

5. **Onboarding tooltip** — On first visit (check localStorage flag), show a minimal 3-step overlay: "Click to create shockwaves", "Use the panel to customize", "Press ? for shortcuts". Dismissable, never shown again.

### Prompt for Sonnet — Phase 5

```
You are working on /home/user/visualizer/src/LuminousFlow.jsx, a single-file React + Three.js GPU particle visualizer.

TASK: Final polish pass — add particle trails, smooth transitions, performance overlay, and onboarding.

CONTEXT:
- The app now has 3 simulation modes (flow, boids, nbody), full camera system with presets/DoF, save/load, and comprehensive parameter controls
- Post-processing chain: RenderPass → BokehPass → BloomPass → ChromaticAberration → Vignette → FilmGrain → FXAA
- Color palettes define colors for all visual elements

CHANGES NEEDED:

1. PARTICLE TRAILS (AFTERIMAGE EFFECT):
   - Import AfterimagePass: import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'
   - Add it right after RenderPass (before BokehPass)
   - Set damp parameter to 0.85 (controls trail length: 0 = infinite trails, 1 = no trails)
   - Add React state: trailsEnabled (default false), trailLength (0.7-0.98, default 0.85)
   - Add UI toggle "Particle Trails" in Post-Processing section with a trail length slider
   - When disabled, set afterimagePass.enabled = false
   - Map trailLength to afterimagePass.uniforms['damp'].value

2. SMOOTH TRANSITIONS:
   Create a transition system:
   - Add a ref: transitionRef = useRef({ active: false, params: {}, targets: {}, progress: 0, duration: 1.0 })
   - smoothTransition(targetParams, duration) starts a transition
   - In the animation loop, if transition is active:
     - Lerp each numeric parameter from current to target using easeInOutCubic
     - For colors, lerp RGB components
     - When complete, set final values and deactivate

   Apply smooth transitions when:
   - Changing color palette: lerp all palette-derived colors (particle colors, background colors, structure colors) over 1 second
   - Switching simulation mode: cross-fade force weights over 0.5 seconds (e.g., gradually reduce curl noise while increasing boids forces)
   - Loading a scene/preset: transition all numeric params over 1.5 seconds

   For palette transition specifically:
   - Store currentPaletteColors and targetPaletteColors as refs
   - Each frame during transition, compute interpolated colors and pass to all systems
   - This means BackgroundManager.setColors(), structure materials, ribbon colors, and particle shader uniforms all get interpolated values

3. PERFORMANCE OVERLAY:
   - Add React state: showPerfOverlay (default false)
   - Toggle with keyboard shortcut 'I' (for info)
   - Render a small semi-transparent panel in the top-left corner showing:
     - FPS (from existing quality manager, updated every 500ms for readability)
     - Particle Count (from current quality level)
     - Draw Calls (from renderer.info.render.calls)
     - Triangles (from renderer.info.render.triangles)
     - Textures (from renderer.info.memory.textures)
     - Geometries (from renderer.info.memory.geometries)
     - Quality Level (current)
     - Simulation Mode (current)
   - Style: position fixed, top: 10px, left: 10px, background rgba(0,0,0,0.7), font-family monospace, font-size 11px, color #0f0, padding 8px, border-radius 4px, pointer-events none, z-index 1000
   - Update the keyboard shortcuts modal to include 'I' for performance overlay

4. COLOR PROPAGATION AUDIT:
   Review and fix color updates when palette changes. Ensure these all update:
   - GPU particle shader: update uColor1, uColor2, uColor3 uniforms (primary, secondary, accent)
   - Wave grid material: update color uniform to palette.secondary
   - Each GeometricStructure: update material color/emissive to palette colors
   - Each LightRibbon: update material color/emissive
   - BackgroundManager: already has setColors(), verify it receives all 3 background colors
   - Bloom pass: no color change needed (it's additive)
   - Edge glow materials on structures: update emissive color

   The palette change handler should iterate all active visual systems and push new colors.

5. ONBOARDING OVERLAY:
   - Add React state: showOnboarding (default: check localStorage 'luminousFlow_onboarded' !== 'true')
   - Render a full-screen semi-transparent overlay with 3 steps
   - Step 1: "Click anywhere to create shockwaves" with a mouse click icon/animation
   - Step 2: "Customize everything in the side panel →" with an arrow pointing right
   - Step 3: "Press ? for all keyboard shortcuts"
   - Each step has a "Next" button, step 3 has "Get Started"
   - On completion, set localStorage 'luminousFlow_onboarded' = 'true' and hide overlay
   - "Skip" link at bottom of each step
   - Style: centered card (max-width 400px), dark glass background (rgba(10,10,20,0.9) with backdrop-filter blur), rounded corners, palette accent color for buttons
   - Disable pointer events on canvas while onboarding is shown

Do NOT refactor into multiple files. Do NOT add npm dependencies beyond Three.js examples.
Ensure AfterimagePass import works with Three.js 0.160.0.
Test that smooth transitions don't conflict with the animation loop's normal parameter updates.
```

---

## Phase Summary

| Phase | Focus | Key Deliverables | Approx. Scope |
|-------|-------|-----------------|---------------|
| **1** | Fix broken physics | Multi-attractor GPU pipeline, gravity, multi-shockwave, structure force fields | Shader rewrites + UI wiring |
| **2** | Simulation modes | Boids flocking, N-Body gravity, mode switcher, new presets | New shader branches + UI |
| **3** | Camera system | 6 presets, fly-to animation, depth of field, camera shake | Camera logic + post-processing |
| **4** | Parameters & persistence | Expose all uniforms, collapsible UI, save/load/export/import, URL sharing | UI + serialization |
| **5** | Polish & integration | Particle trails, smooth transitions, perf overlay, onboarding, color audit | Post-processing + UX |

Each phase is self-contained and produces a working build. Phases can be tested independently before moving to the next.
