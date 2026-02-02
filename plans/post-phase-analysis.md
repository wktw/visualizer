# Luminous Flow — Post-Phase Analysis (All 5 Phases Complete)

## Current State

All 5 phases implemented. Codebase is 7,618 lines. Build compiles successfully. Features present: multi-attractor physics pipeline, boids/n-body simulation modes, camera presets with fly-to/DoF/shake, AfterimagePass particle trails, smooth palette transitions, save/load system, collapsible UI sections with per-section reset, performance overlay, onboarding overlay, expanded parameter sliders.

---

## CRITICAL BUGS (Will Crash at Runtime)

### Bug 1: Undefined state setters in `resetCameraControls` (line ~5148)

```js
const resetCameraControls = useCallback(() => {
  setCameraDistance(15);        // ← DOES NOT EXIST
  setCameraHeight(8);           // ← DOES NOT EXIST
  setCameraAngle(0.8);          // ← DOES NOT EXIST
  setCameraRotationSpeed(0.5);  // ← DOES NOT EXIST
}, [showToast]);
```

**Impact:** Clicking the reset button on the Camera section will throw `ReferenceError`. None of these state variables are declared with `useState` anywhere in the file.

**Fix:** Either declare these state variables with `useState`, or replace these calls with the existing camera reset logic — call `flyToPreset('default')` and reset `autoRotateSpeed` via its existing setter.

### Bug 2: Undefined `setAudioSensitivity` in `resetAudioControls` (line ~5160)

```js
const resetAudioControls = useCallback(() => {
  setAudioSensitivity(1.5);  // ← DOES NOT EXIST
}, [showToast]);
```

**Impact:** Clicking the reset button on the Audio section throws `ReferenceError`.

**Fix:** Either add `const [audioSensitivity, setAudioSensitivity] = useState(1.5);` or remove the line.

### Bug 3: Undefined `uGlowIntensity` uniform access (line ~4034)

```js
gpuParticlesRef.current.particles.material.uniforms.uGlowIntensity.value = particleGlow;
```

**Impact:** `uGlowIntensity` is never declared in the particle material's uniforms object (lines 1298-1310). This throws `TypeError: Cannot set property 'value' of undefined` every frame when the animation loop runs.

**Fix:** Add `uGlowIntensity: { value: 1.5 }` to the particle material uniforms in the GPUParticleSystem constructor. Also add the corresponding `uniform float uGlowIntensity;` to the fragment shader and use it as a multiplier on the core glow.

### Bug 4: Save/load references undefined camera state (lines ~5220, ~5320)

```js
// In saveScene:
cameraDistance,       // undefined
cameraHeight,        // undefined
cameraAngle,         // undefined
cameraRotationSpeed, // undefined

// In loadScene:
if (sceneData.cameraDistance !== undefined) setCameraDistance(sceneData.cameraDistance);
// setCameraDistance doesn't exist
```

**Impact:** `saveScene` silently saves `undefined` for these keys. `loadScene` will throw `ReferenceError` when trying to restore camera state.

**Fix:** Remove these references from save/load. Instead, save/restore actual camera position (`cameraRef.current.position`) and controls target (`controlsRef.current.target`).

---

## HIGH-PRIORITY BUGS (Won't Crash But Cause Visible Problems)

### Bug 5: OrbitControls overrides camera fly-to animation (line ~3943)

```js
// In animation loop, AFTER fly-to interpolation:
if (controlsRef.current) {
  controlsRef.current.update();  // ← Overwrites interpolated target
}
```

**Impact:** Camera fly-to animations jitter because OrbitControls recalculates the camera target each frame, fighting the interpolation.

**Fix:** Disable controls during fly-to:
```js
if (cameraAnimRef.current.active) {
  controlsRef.current.enabled = false;
} else {
  controlsRef.current.enabled = true;
  controlsRef.current.update();
}
```

### Bug 6: Stale closure in keyboard shortcut handler (line ~4214)

Dependency array: `[uiVisible, randomize, clearScene, resetCamera, flyToPreset]`

But the handler body reads `colorPalette`, `simulationMode`, and calls `setColorPalette`, `setSimulationMode`, `showToast` — none of which are in the dependency array.

**Impact:** Number key palette switching (1-6) uses the palette value from the first render. Pressing "2" might set the wrong palette.

**Fix:** Add all read state to the dependency array, or (better) move to refs for values read in the keyboard handler.

### Bug 7: Gravity direction vectors allocated every frame (line ~4011)

6 new `THREE.Vector3` objects created unconditionally every frame inside `animate()`.

**Fix:** Move to a module-level constant:
```js
const GRAVITY_VECTORS = {
  down: new THREE.Vector3(0, -1, 0),
  up: new THREE.Vector3(0, 1, 0),
  // ...
};
```

### Bug 8: Camera fly-to allocates Vector3 every frame (line ~3866)

```js
const targetVec = new THREE.Vector3().lerpVectors(anim.startTarget, anim.endTarget, eased);
```

**Fix:** Pre-allocate on `cameraAnimRef.current`:
```js
// At init:
cameraAnimRef.current.tempVec = new THREE.Vector3();
// In loop:
cameraAnimRef.current.tempVec.lerpVectors(anim.startTarget, anim.endTarget, eased);
```

### Bug 9: `lerpColor` allocates 2 THREE.Color objects per call per frame (line 260)

Called 6+ times per frame during palette transitions = 12+ allocations per frame for ~90 frames.

**Fix:** Use pre-allocated Color objects:
```js
const _c1 = new THREE.Color();
const _c2 = new THREE.Color();
function lerpColor(color1, color2, t) {
  _c1.set(color1);
  _c2.set(color2);
  return _c1.lerp(_c2, t).clone(); // clone only for the return value
}
```

### Bug 10: `gravityDirection` state has no UI control (line ~3231)

`useState('down')` is declared and read every frame in the animation loop, but no dropdown or selector exists in the UI to change it. Users can never change gravity direction.

**Fix:** Add a "Gravity Direction" dropdown in the Global Controls section with options: down, up, left, right, forward, backward.

---

## MEDIUM-PRIORITY ISSUES

### Issue 11: `emitters` state is dead code (line ~3301)
`const [emitters, setEmitters] = useState([]);` — never updated, never read for rendering. Remove it.

### Issue 12: GPUComputationRenderer render targets not disposed (GPU memory leak)
`GPUParticleSystem.dispose()` disposes geometry and material but not the internal render targets from `GPUComputationRenderer`. Quality level changes that rebuild the particle system leak VRAM.

### Issue 13: Structure `mass` may not survive React state round-trips
Structures created with `mass: 1.0` but state updates via spread operator may drop it. N-body mode then reads `undefined || 1.0` silently.

### Issue 14: `reducedMotion` partially enforced
Sets timeScale and autoPulse but doesn't disable bloom, film grain, chromatic aberration, or particle pulsing as accessibility guidelines recommend.

---

## SONNET BUG FIX PROMPT

```
You are working on /home/user/visualizer/src/LuminousFlow.jsx (7,618 lines), a single-file React + Three.js GPU particle visualizer.

TASK: Fix all critical and high-priority bugs to produce a working MVP. Do NOT add features, do NOT refactor structure, do NOT add dependencies. Only fix bugs.

BUG FIXES REQUIRED:

1. UNDEFINED STATE SETTERS IN resetCameraControls (~line 5148):
   The function calls setCameraDistance, setCameraHeight, setCameraAngle, setCameraRotationSpeed — none of which exist as state.
   FIX: Replace the body of resetCameraControls with:
   - Call flyToPreset('default') to reset camera position
   - Set autoRotateSpeed to 0.5 via its existing setter (setAutoRotateSpeed)
   - Set dofEnabled to false via setDofEnabled
   - Keep the showToast call
   Remove references to cameraDistance, cameraHeight, cameraAngle, cameraRotationSpeed from the dependency array too.

2. UNDEFINED setAudioSensitivity IN resetAudioControls (~line 5160):
   FIX: Add state: const [audioSensitivity, setAudioSensitivity] = useState(1.5);
   Place it near the other audio state variables (around line 3290-3300).
   If audioSensitivity is used as a multiplier anywhere in the audio processing logic, wire it up. If not, just add the state so the reset doesn't crash.

3. UNDEFINED uGlowIntensity UNIFORM (~line 4034):
   The animation loop sets gpuParticlesRef.current.particles.material.uniforms.uGlowIntensity.value but the uniform doesn't exist on the particle material.
   FIX:
   a) In GPUParticleSystem constructor, where particle material uniforms are defined (~line 1298-1310), add:
      uGlowIntensity: { value: 1.5 },
   b) In the particle fragment shader (getParticleFragmentShader), add:
      uniform float uGlowIntensity;
   c) In the fragment shader, multiply the core glow by uGlowIntensity:
      Change: float core = exp(-dist * 10.0) * 1.5;
      To:     float core = exp(-dist * 10.0) * uGlowIntensity;

4. SAVE/LOAD REFERENCES UNDEFINED CAMERA STATE (~lines 5220, 5320):
   FIX: In saveScene, replace cameraDistance/cameraHeight/cameraAngle/cameraRotationSpeed with:
   - cameraPosition: cameraRef.current ? [cameraRef.current.position.x, cameraRef.current.position.y, cameraRef.current.position.z] : [0, 2, 8],
   - cameraTarget: controlsRef.current ? [controlsRef.current.target.x, controlsRef.current.target.y, controlsRef.current.target.z] : [0, 0, 0],
   In loadScene, replace the setCameraDistance/etc calls with:
   - if (sceneData.cameraPosition) { cameraRef.current.position.set(...sceneData.cameraPosition); }
   - if (sceneData.cameraTarget) { controlsRef.current.target.set(...sceneData.cameraTarget); }
   Also remove cameraDistance, cameraHeight, cameraAngle, cameraRotationSpeed, audioSensitivity from the saveScene dependency array (they don't exist as variables).

5. ORBITCONTROLS OVERRIDES FLY-TO (~line 3943):
   FIX: Change the controls update block in the animation loop from:
     if (controlsRef.current) {
       controlsRef.current.update();
     }
   To:
     if (controlsRef.current) {
       if (cameraAnimRef.current.active) {
         controlsRef.current.enabled = false;
       } else {
         controlsRef.current.enabled = true;
         controlsRef.current.update();
       }
     }

6. STALE CLOSURE IN KEYBOARD HANDLER (~line 4214):
   The keyboard shortcut useEffect's dependency array is missing several state variables that are read inside the handler.
   FIX: Create refs for frequently-changing values read in keyboard handlers:
   a) Add: const colorPaletteRef = useRef(colorPalette);
      And update it: useEffect(() => { colorPaletteRef.current = colorPalette; }, [colorPalette]);
   b) In the keyboard handler, read from refs instead of state closures for palette names and simulation mode.
   c) Or simpler: add colorPalette, simulationMode, showToast to the dependency array. This causes the handler to re-register on every palette change, which is acceptable.

7. GRAVITY VECTORS ALLOCATED EVERY FRAME (~line 4011):
   FIX: Move the gravityVectors object OUTSIDE the component as a module-level constant:
   const GRAVITY_VECTORS = {
     down: new THREE.Vector3(0, -1, 0),
     up: new THREE.Vector3(0, 1, 0),
     left: new THREE.Vector3(-1, 0, 0),
     right: new THREE.Vector3(1, 0, 0),
     forward: new THREE.Vector3(0, 0, -1),
     backward: new THREE.Vector3(0, 0, 1),
   };
   const DEFAULT_GRAVITY = new THREE.Vector3(0, -1, 0);
   Then in the animate loop, replace with:
   const gravityDir = GRAVITY_VECTORS[gravityDirection] || DEFAULT_GRAVITY;

8. CAMERA FLY-TO Vector3 ALLOCATION (~line 3866):
   FIX: Add a tempVec to the cameraAnimRef initial value:
   const cameraAnimRef = useRef({ ..., tempVec: new THREE.Vector3() });
   In the animate loop, replace:
     const targetVec = new THREE.Vector3().lerpVectors(...)
   With:
     const targetVec = cameraAnimRef.current.tempVec.lerpVectors(...)

9. lerpColor ALLOCATIONS (~line 260):
   FIX: Add module-level reusable Color objects:
   const _lerpC1 = new THREE.Color();
   const _lerpC2 = new THREE.Color();
   function lerpColor(color1, color2, t) {
     _lerpC1.set(color1);
     _lerpC2.set(color2);
     return '#' + _lerpC1.lerp(_lerpC2, t).getHexString();
   }
   Return a hex string so it can be used as a color value without keeping a reference to the mutable objects.

10. ADD GRAVITY DIRECTION UI CONTROL:
    In the Global Controls section, after the Gravity slider, add a Gravity Direction dropdown:
    <select value={gravityDirection} onChange={(e) => setGravityDirection(e.target.value)}>
      <option value="down">Down</option>
      <option value="up">Up</option>
      <option value="left">Left</option>
      <option value="right">Right</option>
      <option value="forward">Forward</option>
      <option value="backward">Backward</option>
    </select>
    Style it to match the existing select elements in the control panel.

11. REMOVE DEAD emitters STATE (~line 3301):
    Delete: const [emitters, setEmitters] = useState([]);
    The expandedSections key 'emitters' can stay (it's just a section toggle name).

IMPORTANT:
- Do NOT refactor into multiple files
- Do NOT add npm dependencies
- Do NOT change any working features
- Fix ONLY the bugs listed above
- After fixing, ensure the build passes: npm run build
```

---

## CREATIVE FEATURE IDEAS

(Retained from previous analysis — all still applicable and compatible)

### Tier 1 — High Impact, Medium Effort

**A. Gravity Wells (Interactive Physics Playground)**
Click-and-drag to place gravity wells with adjustable mass. Visual: distortion sphere with fresnel glow. Extends existing attractor system.

**B. Particle Color by Life/Age**
4th velocity coloring mode: "Life Gradient" — hot at spawn, cool as they age. Uses existing `life` value in position texture W-channel.

**C. Magnetic Field Lines**
Visible force field lines between structures in N-body mode using TubeGeometry along computed paths.

**D. Particle Emission Shapes**
Emission shape selector: Sphere, Ring, Plane, Cube, Point. Remaps respawn logic in position shader.

### Tier 2 — Medium Impact, Lower Effort

**E. Time Reversal** — Ring buffer of position textures, play backward.
**F. Fractal Noise Terrain** — Ridged multifractal replacing wave grid, particles bounce off it.
**G. Particle Size by Velocity** — Expose as slider (fast=big vs fast=small).
**H. Connection Lines** — Proximity web between nearby particles.

### Tier 3 — Polish

**I. Reactive Bloom** — Bloom strength pulses with average particle velocity.
**J. Screenshot Mode** — Freeze time, hide UI, 4K render, save.
**K. Preset Thumbnails** — Offscreen canvas thumbnail per preset.
**L. MIDI Controller Support** — Web MIDI API mapped to sliders.
