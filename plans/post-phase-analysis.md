# Luminous Flow — Post-Phase Analysis & Next Steps

## Current State

Phases 1–3 are implemented (multi-attractor physics, boids/n-body simulation modes, camera presets with fly-to/DoF/shake). Phases 4–5 (save/load, parameter exposure, particle trails, smooth transitions, onboarding, perf overlay) were **not implemented**. The codebase is 6,521 lines.

---

## BUGS

### Critical

1. **Vector3 allocation every frame in animation loop** (`LuminousFlow.jsx:3754`)
   ```js
   const targetVec = new THREE.Vector3().lerpVectors(anim.startTarget, anim.endTarget, eased);
   ```
   Allocates a new object 60 times/second during camera fly-to. Should use a pre-allocated vector on `cameraAnimRef`.

2. **Gravity direction vectors allocated every frame** (`LuminousFlow.jsx:3845-3853`)
   ```js
   const gravityVectors = {
     'down': new THREE.Vector3(0, -1, 0),
     // ... 6 total
   };
   ```
   Creates 6–7 Vector3 objects per frame unconditionally. Should be a module-level constant.

3. **OrbitControls fights camera fly-to** (`LuminousFlow.jsx:3778`)
   `controlsRef.current.update()` runs every frame including during fly-to animation. OrbitControls overwrites the interpolated target, causing jitter. Should set `controls.enabled = false` during animation.

4. **Stale closure in keyboard handler** (`LuminousFlow.jsx:4214`)
   Dependency array is `[uiVisible, randomize, clearScene, resetCamera, flyToPreset]` — missing `colorPalette`, `simulationMode`, `showToast`, and other state accessed inside the handler. Palette switching via number keys will use stale values.

5. **`gravityDirection` state is dead** (`LuminousFlow.jsx:3175`)
   State exists and is read in the animation loop, but no UI control lets the user change it from `'down'`. The gravity direction mapping code runs every frame for no benefit.

### Medium

6. **Auto-pulse creates Vector3 every trigger** (`LuminousFlow.jsx:3871`) — `new THREE.Vector3(0, 0, 0)` on every pulse. Minor since it's infrequent, but should be a constant.

7. **Structure `mass` not preserved through state updates** — Structures are created with `mass: 1.0` but React state updates may not carry it through, causing N-body mode to use `undefined || 1.0` silently.

8. **GPUComputationRenderer disposal incomplete** — `dispose()` on GPUParticleSystem doesn't release internal render targets from GPUComputationRenderer. Switching quality levels leaks GPU memory.

9. **BokehPass always in composer chain** (`LuminousFlow.jsx:3319`) — Added to composer even when disabled. Costs a render target allocation. Should only add when enabled.

---

## PERFORMANCE

1. **Boids: 16 texture lookups per particle per frame** — Each of 65K+ particles samples 16 neighbors from the position and velocity textures. That's 2M+ texture fetches per frame. Works but is the primary bottleneck in boids mode. Reducing to 8 neighbors would halve cost with minimal visual difference.

2. **Curl noise: 6× snoise per particle** — The `curlNoise()` function calls `snoise()` 6 times (finite differences). At 65K particles that's 390K noise evaluations per frame.

3. **Structure force field loop in shader** — Iterates over 8 structure slots unconditionally (with early break). Harmless but the loop bounds should use `min(8, uStructureCount)` for clarity.

4. **No object pooling for shockwaves** — `ShockwaveManager` splices arrays and creates new objects per trigger. Should pool and recycle.

---

## DEAD CODE

1. `emitters` state (`line 3221`) — `useState([])` never used. Leftover from pre-GPU particle system.
2. `reducedMotion` state — Detected via media query but only partially enforced (sets timeScale and autoPulse, doesn't disable bloom/grain/pulsing).
3. `immersionMode` — Toggle exists but only adds subtle camera Y-drift. No other immersion effects.

---

## MISSING FROM PHASES 4–5

These were planned but not built:

- **Save/Load system** (localStorage + JSON export/import)
- **URL state sharing** (base64 params in URL hash)
- **Collapsible parameter sections** with per-section reset
- **Expose missing shader uniforms** (particle size, glow intensity, damping, speed limit, curl scale, bloom radius/threshold, vignette intensity, wave frequency/opacity)
- **Particle trails** (AfterimagePass)
- **Smooth palette/mode transitions** (lerp colors over 30 frames)
- **Performance overlay** (FPS, draw calls, triangles, GPU memory)
- **Onboarding overlay** (first-visit tooltip walkthrough)

---

## CREATIVE FEATURE IDEAS

These are consistent with "premium 3D particle & light sculpture sandbox" and compatible with the existing architecture:

### Tier 1 — High Impact, Medium Effort

**A. Gravity Wells (Interactive Physics Playground)**
Let users click-and-drag in 3D space to place gravity wells with adjustable mass. Particles orbit, spiral in, and get ejected. Visual: a warped space-time grid effect (distorted wave grid) around each well. This extends the existing attractor system — wells are just attractors with a visual representation (a distortion sphere with fresnel glow).

**B. Particle Color by Life/Age**
Add a 4th velocity coloring mode: "Life Gradient" — particles shift from hot (white/yellow) at spawn to cool (blue/purple) as they age, like cooling embers. Uses the existing `life` value already in the position texture W-channel. Add a user-configurable 3-stop color gradient picker.

**C. Magnetic Field Lines**
When in N-body mode, render visible force field lines between structures using StreamlineGeometry (or TubeGeometry along computed paths). Shows the gravitational field topology. Toggle on/off. Lines glow with palette accent color and pulse with field strength.

**D. Particle Emission Shapes**
Instead of always spawning particles in a sphere, let users choose emission shape: Sphere (current), Ring, Plane, Cube, Point. Each remaps the respawn logic in the position shader. A ring emitter + vortex attractor creates a beautiful accretion disk.

### Tier 2 — Medium Impact, Lower Effort

**E. Time Reversal**
Store the last 300 frames of position/velocity textures in a ring buffer (GPU memory permitting). "Rewind" button plays them backward. Shockwaves implode, boids un-flock, particles flow backward into structures. Visceral and unique.

**F. Fractal Noise Terrain**
Replace the current wave grid with a full fractal terrain using 4-octave noise with ridged multifractal. Particles that hit the terrain bounce. Terrain height responds to audio bass. Creates a landscape the particle simulation lives on top of.

**G. Particle Size by Velocity**
Already partially implemented (speed affects size in vertex shader) but not user-controllable. Expose as a "Size Response" slider (0 = uniform, 1 = fast=big, -1 = fast=small). Combined with trails, slow particles become tiny dots while fast ones streak.

**H. Connection Lines (Proximity Web)**
Draw lines between particles that are within a threshold distance. Use LineSegments geometry updated from a GPU readback of positions (sample every 4th frame for performance, only sample first 1000 particles). Creates a web/constellation effect. Toggle + distance threshold slider.

### Tier 3 — Polish & Feel

**I. Reactive Bloom**
Instead of static bloom, make bloom strength pulse with the average particle velocity. Fast-moving swarms glow bright, calm states dim. Already possible by reading back a velocity statistic from the GPU (or approximating via shockwave state).

**J. Screenshot Mode**
Freeze time, hide UI, increase resolution to 4K, render 16x MSAA, save. The screenshot infrastructure from Batch C exists but this adds the "beauty shot" workflow.

**K. Preset Thumbnails**
Render a small offscreen canvas for each preset and show as a thumbnail in the preset gallery. Makes preset selection visual instead of text-only.

**L. MIDI Controller Support**
Map MIDI CC values to sliders via Web MIDI API. Physical knobs controlling turbulence, bloom, and attractor strength. Natural fit for the audio reactivity system already built.

---

## Recommended Implementation Order

| Priority | Items | Rationale |
|----------|-------|-----------|
| **1 (fix)** | Bugs #1-5, dead code removal | Stability before features |
| **2 (complete)** | Phases 4-5 missing features | Save/load is table-stakes for a sandbox |
| **3 (feature)** | D (Emission Shapes) + B (Life Color) + G (Size Response) | Cheap wins — shader-only, huge visual variety |
| **4 (feature)** | A (Gravity Wells) + C (Field Lines) | Physics playground identity |
| **5 (feature)** | H (Connection Lines) + F (Fractal Terrain) | Wow factor |
| **6 (polish)** | I (Reactive Bloom) + J (Screenshot Mode) + K (Thumbnails) | Professional feel |
| **7 (stretch)** | E (Time Reversal) + L (MIDI) | Unique differentiators |
