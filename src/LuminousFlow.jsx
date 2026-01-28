import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// ============================================================================
// COLOR PALETTES
// ============================================================================
const COLOR_PALETTES = {
  'Northern Lights': {
    primary: '#00ffaa',
    secondary: '#00aaff',
    accent: '#aa55ff',
    highlight: '#ffffff',
    background: ['#0a0a1a', '#051515', '#0a1a1a']
  },
  'Deep Ocean': {
    primary: '#0055ff',
    secondary: '#00ffff',
    accent: '#8800ff',
    highlight: '#ffffff',
    background: ['#000515', '#001025', '#000520']
  },
  'Solar Corona': {
    primary: '#ff8800',
    secondary: '#ffff00',
    accent: '#ff2200',
    highlight: '#ffffff',
    background: ['#1a0a00', '#150500', '#1a0500']
  },
  'Synthwave': {
    primary: '#ff00aa',
    secondary: '#00ffff',
    accent: '#aa00ff',
    highlight: '#ffaaff',
    background: ['#0a0015', '#150020', '#0a0520']
  },
  'Monochrome Zen': {
    primary: '#ffffff',
    secondary: '#aabbcc',
    accent: '#8899aa',
    highlight: '#ffffff',
    background: ['#0a0a0f', '#0f0f15', '#0a0a12']
  },
  'Ember & Ash': {
    primary: '#ff3300',
    secondary: '#ff8800',
    accent: '#ffaa00',
    highlight: '#ffffff',
    background: ['#0a0505', '#150a05', '#0a0805']
  }
};

// ============================================================================
// CUSTOM SHADERS
// ============================================================================

// Vignette shader
const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    offset: { value: 1.0 },
    darkness: { value: 1.2 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
      float vignette = 1.0 - dot(uv, uv);
      vignette = clamp(pow(vignette, darkness), 0.0, 1.0);
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `
};

// Film grain shader
const FilmGrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0.0 },
    intensity: { value: 0.05 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float intensity;
    varying vec2 vUv;

    float random(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      float noise = random(vUv + time) * 2.0 - 1.0;
      vec3 result = texel.rgb + texel.rgb * noise * intensity;
      gl_FragColor = vec4(result, texel.a);
    }
  `
};

// Chromatic aberration shader
const ChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    uIntensity: { value: 0.003 },
    uTime: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uIntensity;
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      // Radial chromatic aberration - stronger at edges
      vec2 center = vUv - 0.5;
      float dist = length(center);
      vec2 offset = center * uIntensity * dist;
      
      // Slight animation for subtle movement
      float animOffset = sin(uTime * 0.5) * 0.0005;
      offset += animOffset;
      
      // Sample RGB channels with offset
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
};

// Bloom presets per palette for optimized visual impact
const BLOOM_PRESETS = {
  'Northern Lights': { strength: 1.5, radius: 0.6, threshold: 0.3 },
  'Deep Ocean': { strength: 1.8, radius: 0.5, threshold: 0.2 },
  'Solar Corona': { strength: 2.2, radius: 0.7, threshold: 0.1 },
  'Synthwave': { strength: 2.0, radius: 0.5, threshold: 0.2 },
  'Monochrome Zen': { strength: 1.2, radius: 0.4, threshold: 0.4 },
  'Ember & Ash': { strength: 1.8, radius: 0.6, threshold: 0.2 }
};

// Particle glow vertex shader
const particleVertexShader = `
  attribute float size;
  attribute vec3 customColor;
  attribute float alpha;
  attribute float lifetime;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vLifetime;

  void main() {
    vColor = customColor;
    vAlpha = alpha;
    vLifetime = lifetime;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Particle glow fragment shader - volumetric orbs
const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vLifetime;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);

    // Soft volumetric falloff with bright core
    float core = exp(-dist * 8.0) * 1.5;
    float glow = exp(-dist * 3.0);
    float outer = exp(-dist * 1.5) * 0.5;

    float intensity = core + glow * 0.6 + outer * 0.3;
    intensity *= smoothstep(0.5, 0.2, dist);

    // Pulse based on lifetime
    float pulse = 1.0 + sin(vLifetime * 10.0) * 0.1;

    vec3 finalColor = vColor * intensity * pulse;
    float finalAlpha = vAlpha * intensity;

    if (finalAlpha < 0.01) discard;

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;

// Edge glow shader for structures
const edgeGlowVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const edgeGlowFragmentShader = `
  uniform vec3 glowColor;
  uniform float glowIntensity;
  uniform float time;

  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);

    // Animated energy pulse
    float pulse = sin(time * 2.0) * 0.3 + 0.7;

    vec3 color = glowColor * fresnel * glowIntensity * pulse;
    float alpha = fresnel * 0.8;

    gl_FragColor = vec4(color, alpha);
  }
`;

// ============================================================================
// PARTICLE SYSTEM CLASS (OLD - DEPRECATED - GPU VERSION BELOW)
// ============================================================================
/*
class ParticleEmitter {
  constructor(scene, config) {
    this.scene = scene;
    this.config = {
      type: 'fountain',
      position: new THREE.Vector3(0, 0, 0),
      emissionRate: 50,
      particleLifetime: 3,
      particleSizeMin: 0.1,
      particleSizeMax: 0.3,
      velocityMin: 1,
      velocityMax: 3,
      colors: ['#00ffaa', '#00aaff', '#ffffff'],
      trailLength: 5,
      gravity: -2,
      turbulence: 0.5,
      ...config
    };

    this.maxParticles = 2000;
    this.particles = [];
    this.particlePool = [];

    this.initGeometry();
  }

  initGeometry() {
    const geometry = new THREE.BufferGeometry();

    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);
    this.sizes = new Float32Array(this.maxParticles);
    this.alphas = new Float32Array(this.maxParticles);
    this.lifetimes = new Float32Array(this.maxParticles);

    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(this.colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(this.alphas, 1));
    geometry.setAttribute('lifetime', new THREE.BufferAttribute(this.lifetimes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true
    });

    this.mesh = new THREE.Points(geometry, material);
    this.scene.add(this.mesh);

    // Trail geometry
    this.trailPositions = [];
    this.trailGeometry = new THREE.BufferGeometry();
    this.trailMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
  }

  createParticle() {
    const particle = this.particlePool.pop() || {};

    particle.position = this.config.position.clone();
    particle.age = 0;
    particle.lifetime = this.config.particleLifetime * (0.8 + Math.random() * 0.4);
    particle.size = this.config.particleSizeMin +
      Math.random() * (this.config.particleSizeMax - this.config.particleSizeMin);

    // Color from gradient
    const colorIndex = Math.floor(Math.random() * this.config.colors.length);
    particle.color = new THREE.Color(this.config.colors[colorIndex]);

    // Velocity based on emitter type
    particle.velocity = this.getInitialVelocity();

    // Trail history
    particle.trail = [];

    return particle;
  }

  getInitialVelocity() {
    const speed = this.config.velocityMin +
      Math.random() * (this.config.velocityMax - this.config.velocityMin);

    switch (this.config.type) {
      case 'fountain':
        return new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          speed,
          (Math.random() - 0.5) * 0.5
        );

      case 'vortex':
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.5 + Math.random() * 0.5;
        return new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 0.5,
          Math.sin(angle) * radius
        );

      case 'orbital':
        const orbAngle = Math.random() * Math.PI * 2;
        return new THREE.Vector3(
          Math.cos(orbAngle) * speed * 0.3,
          (Math.random() - 0.5) * speed * 0.2,
          Math.sin(orbAngle) * speed * 0.3
        );

      case 'explosion':
        const dir = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();
        return dir.multiplyScalar(speed);

      case 'stream':
        return new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          0,
          speed
        );

      default:
        return new THREE.Vector3(0, speed, 0);
    }
  }

  update(deltaTime, timeScale, globalGravity, globalTurbulence) {
    const dt = deltaTime * timeScale;

    // Emit new particles
    const particlesToEmit = Math.floor(this.config.emissionRate * dt);
    for (let i = 0; i < particlesToEmit && this.particles.length < this.maxParticles; i++) {
      this.particles.push(this.createParticle());
    }

    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.age += dt;

      if (p.age >= p.lifetime) {
        this.particlePool.push(this.particles.splice(i, 1)[0]);
        continue;
      }

      // Store trail position
      p.trail.unshift(p.position.clone());
      if (p.trail.length > this.config.trailLength) {
        p.trail.pop();
      }

      // Apply physics based on type
      const gravityEffect = globalGravity * this.config.gravity * 0.1;
      p.velocity.y += gravityEffect * dt;

      // Turbulence
      const turb = globalTurbulence * this.config.turbulence;
      p.velocity.x += (Math.random() - 0.5) * turb * dt;
      p.velocity.z += (Math.random() - 0.5) * turb * dt;

      // Vortex-specific behavior
      if (this.config.type === 'vortex') {
        const toCenter = new THREE.Vector3().subVectors(
          this.config.position, p.position
        );
        const dist = toCenter.length();
        if (dist > 0.1) {
          const tangent = new THREE.Vector3(
            -toCenter.z, 0, toCenter.x
          ).normalize();
          p.velocity.add(tangent.multiplyScalar(2 * dt));
          p.velocity.add(toCenter.normalize().multiplyScalar(0.5 * dt));
        }
      }

      // Orbital behavior
      if (this.config.type === 'orbital') {
        const toCenter = new THREE.Vector3().subVectors(
          this.config.position, p.position
        );
        const dist = toCenter.length();
        if (dist > 0.1) {
          const gravPull = toCenter.normalize().multiplyScalar(3 / (dist * dist));
          p.velocity.add(gravPull.multiplyScalar(dt));
        }
      }

      // Update position
      p.position.add(p.velocity.clone().multiplyScalar(dt));
    }

    // Update buffers
    this.updateBuffers();
  }

  updateBuffers() {
    for (let i = 0; i < this.maxParticles; i++) {
      if (i < this.particles.length) {
        const p = this.particles[i];
        const lifeRatio = p.age / p.lifetime;

        this.positions[i * 3] = p.position.x;
        this.positions[i * 3 + 1] = p.position.y;
        this.positions[i * 3 + 2] = p.position.z;

        // Color shifts over lifetime
        const birthColor = p.color.clone();
        const deathColor = p.color.clone().multiplyScalar(0.3);
        const currentColor = birthColor.lerp(deathColor, lifeRatio);

        this.colors[i * 3] = currentColor.r;
        this.colors[i * 3 + 1] = currentColor.g;
        this.colors[i * 3 + 2] = currentColor.b;

        // Size variation with velocity stretch
        const velocityStretch = 1 + p.velocity.length() * 0.1;
        this.sizes[i] = p.size * velocityStretch * (1 - lifeRatio * 0.5);

        // Alpha fade at end of life
        const alphaFade = lifeRatio < 0.8 ? 1 : 1 - (lifeRatio - 0.8) / 0.2;
        this.alphas[i] = alphaFade;

        this.lifetimes[i] = p.age;
      } else {
        this.sizes[i] = 0;
        this.alphas[i] = 0;
      }
    }

    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.attributes.customColor.needsUpdate = true;
    this.mesh.geometry.attributes.size.needsUpdate = true;
    this.mesh.geometry.attributes.alpha.needsUpdate = true;
    this.mesh.geometry.attributes.lifetime.needsUpdate = true;
  }

  setColors(colors) {
    this.config.colors = colors;
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
  }
}
*/

// ============================================================================
// GPU PARTICLE SYSTEM CLASS (NEW)
// ============================================================================
class GPUParticleSystem {
  constructor(renderer, scene, particleCount = 256) {
    this.renderer = renderer;
    this.scene = scene;
    this.SIZE = particleCount; // Texture width/height (total particles = SIZE²)
    this.count = this.SIZE * this.SIZE;
    this.initComputeRenderer();
    this.initParticles();
  }

  initComputeRenderer() {
    this.gpuCompute = new GPUComputationRenderer(this.SIZE, this.SIZE, this.renderer);

    // Check for float texture support
    if (!this.renderer.capabilities.isWebGL2) {
      console.warn('WebGL2 not supported, GPGPU may not work');
    }

    // Create initial data textures
    const dtPosition = this.gpuCompute.createTexture();
    const dtVelocity = this.gpuCompute.createTexture();

    // Fill with initial data
    this.fillPositionTexture(dtPosition);
    this.fillVelocityTexture(dtVelocity);

    // Create computation variables
    this.positionVariable = this.gpuCompute.addVariable(
      'texturePosition',
      this.getPositionShader(),
      dtPosition
    );
    this.velocityVariable = this.gpuCompute.addVariable(
      'textureVelocity',
      this.getVelocityShader(),
      dtVelocity
    );

    // Set variable dependencies
    this.gpuCompute.setVariableDependencies(this.positionVariable, [this.positionVariable, this.velocityVariable]);
    this.gpuCompute.setVariableDependencies(this.velocityVariable, [this.positionVariable, this.velocityVariable]);

    // Add uniforms
    this.positionUniforms = this.positionVariable.material.uniforms;
    this.velocityUniforms = this.velocityVariable.material.uniforms;

    this.positionUniforms.uTime = { value: 0.0 };
    this.positionUniforms.uDelta = { value: 0.0 };
    this.velocityUniforms.uTime = { value: 0.0 };
    this.velocityUniforms.uDelta = { value: 0.0 };
    this.velocityUniforms.uAttractorPos = { value: new THREE.Vector3(0, 0, 0) };
    this.velocityUniforms.uAttractorStrength = { value: 3.0 };
    this.velocityUniforms.uNoiseScale = { value: 0.5 };
    this.velocityUniforms.uNoiseSpeed = { value: 0.2 };
    
    // Mouse attractor uniforms
    this.velocityUniforms.uMouseAttractorPos = { value: new THREE.Vector3(0, 0, 0) };
    this.velocityUniforms.uMouseAttractorStrength = { value: 0.0 };
    this.velocityUniforms.uMouseAttractorActive = { value: 0.0 };
    
    // Shockwave uniforms
    this.velocityUniforms.uShockwaveOrigin = { value: new THREE.Vector3(0, 0, 0) };
    this.velocityUniforms.uShockwaveRadius = { value: 0.0 };
    this.velocityUniforms.uShockwaveStrength = { value: 0.0 };
    this.velocityUniforms.uShockwaveThickness = { value: 2.0 };

    // Initialize
    const error = this.gpuCompute.init();
    if (error !== null) {
      console.error('GPUComputationRenderer error:', error);
    }
  }

  fillPositionTexture(texture) {
    const data = texture.image.data;
    const radius = 5.0;

    for (let i = 0; i < data.length; i += 4) {
      // Random position in sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * radius;

      data[i + 0] = r * Math.sin(phi) * Math.cos(theta); // x
      data[i + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      data[i + 2] = r * Math.cos(phi);                   // z
      data[i + 3] = Math.random() * 5.0 + 2.0;           // lifetime
    }
  }

  fillVelocityTexture(texture) {
    const data = texture.image.data;

    for (let i = 0; i < data.length; i += 4) {
      data[i + 0] = (Math.random() - 0.5) * 0.5; // vx
      data[i + 1] = (Math.random() - 0.5) * 0.5; // vy
      data[i + 2] = (Math.random() - 0.5) * 0.5; // vz
      data[i + 3] = 1.0;                          // mass
    }
  }

  getPositionShader() {
    return `
      uniform float uTime;
      uniform float uDelta;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        // Update position
        pos.xyz += vel.xyz * uDelta;

        // Decrease lifetime
        pos.w -= uDelta;

        // Respawn if dead
        if (pos.w <= 0.0) {
          // Respawn at random position in sphere
          float theta = fract(sin(uv.x * 123.456 + uTime) * 43758.5453) * 6.28318;
          float phi = acos(2.0 * fract(sin(uv.y * 789.012 + uTime) * 43758.5453) - 1.0);
          float r = pow(fract(sin((uv.x + uv.y) * 456.789 + uTime) * 43758.5453), 0.333) * 3.0;

          pos.x = r * sin(phi) * cos(theta);
          pos.y = r * sin(phi) * sin(theta);
          pos.z = r * cos(phi);
          pos.w = 3.0 + fract(sin(uv.x * uv.y * 999.0 + uTime) * 43758.5453) * 4.0;
        }

        gl_FragColor = pos;
      }
    `;
  }

  getVelocityShader() {
    return `
      uniform float uTime;
      uniform float uDelta;
      uniform vec3 uAttractorPos;
      uniform float uAttractorStrength;
      uniform float uNoiseScale;
      uniform float uNoiseSpeed;
      
      // Mouse attractor uniforms
      uniform vec3 uMouseAttractorPos;
      uniform float uMouseAttractorStrength;
      uniform float uMouseAttractorActive;
      
      // Shockwave uniforms
      uniform vec3 uShockwaveOrigin;
      uniform float uShockwaveRadius;
      uniform float uShockwaveStrength;
      uniform float uShockwaveThickness;

      // Simplex noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
      }

      vec3 curlNoise(vec3 p) {
        const float e = 0.1;
        float n1 = snoise(p + vec3(e, 0, 0));
        float n2 = snoise(p - vec3(e, 0, 0));
        float n3 = snoise(p + vec3(0, e, 0));
        float n4 = snoise(p - vec3(0, e, 0));
        float n5 = snoise(p + vec3(0, 0, e));
        float n6 = snoise(p - vec3(0, 0, e));

        float x = (n3 - n4) - (n5 - n6);
        float y = (n5 - n6) - (n1 - n2);
        float z = (n1 - n2) - (n3 - n4);

        return normalize(vec3(x, y, z));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        vec3 acceleration = vec3(0.0);

        // Central attractor force
        vec3 toAttractor = uAttractorPos - pos.xyz;
        float dist = length(toAttractor);
        if (dist > 0.1) {
          acceleration += normalize(toAttractor) * uAttractorStrength / (dist * dist + 1.0);
        }
        
        // Mouse attractor force (when active)
        if (uMouseAttractorActive > 0.5) {
          vec3 toMouse = uMouseAttractorPos - pos.xyz;
          float mouseDist = length(toMouse);
          if (mouseDist > 0.1) {
            // Smooth falloff for mouse attractor
            float falloff = 1.0 / (mouseDist * mouseDist * 0.5 + 1.0);
            acceleration += normalize(toMouse) * uMouseAttractorStrength * falloff;
          }
        }
        
        // Shockwave force - spherical expanding wave
        if (uShockwaveStrength > 0.01) {
          vec3 toParticle = pos.xyz - uShockwaveOrigin;
          float particleDist = length(toParticle);
          
          // Calculate distance from shockwave shell
          float shellDist = abs(particleDist - uShockwaveRadius);
          
          // Particles within the shockwave thickness are affected
          if (shellDist < uShockwaveThickness) {
            // Falloff based on distance from shell center
            float shellFalloff = 1.0 - (shellDist / uShockwaveThickness);
            shellFalloff = shellFalloff * shellFalloff; // Quadratic falloff
            
            // Push particles outward from shockwave origin
            vec3 pushDir = normalize(toParticle);
            
            // Add tangential swirl for more interesting motion
            vec3 tangent = normalize(cross(pushDir, vec3(0.0, 1.0, 0.0)));
            if (length(tangent) < 0.1) {
              tangent = normalize(cross(pushDir, vec3(1.0, 0.0, 0.0)));
            }
            
            // Combine radial push with slight swirl
            vec3 shockForce = pushDir * uShockwaveStrength * shellFalloff;
            shockForce += tangent * uShockwaveStrength * shellFalloff * 0.3;
            
            acceleration += shockForce;
          }
        }

        // Curl noise for organic movement
        vec3 noisePos = pos.xyz * uNoiseScale + uTime * uNoiseSpeed;
        vec3 curl = curlNoise(noisePos);
        acceleration += curl * 2.0;

        // Apply acceleration
        vel.xyz += acceleration * uDelta;

        // Damping
        vel.xyz *= 0.98;

        // Speed limit (increased to allow shockwave bursts)
        float speed = length(vel.xyz);
        float maxSpeed = 8.0;
        if (speed > maxSpeed) {
          vel.xyz = normalize(vel.xyz) * maxSpeed;
        }

        // Reset velocity if particle respawned
        if (pos.w <= 0.0) {
          vel.xyz = vec3(0.0);
        }

        gl_FragColor = vel;
      }
    `;
  }

  initParticles() {
    // Create geometry with reference UVs
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.count * 3);
    const references = new Float32Array(this.count * 2);

    for (let i = 0; i < this.count; i++) {
      const x = (i % this.SIZE) / this.SIZE;
      const y = Math.floor(i / this.SIZE) / this.SIZE;

      references[i * 2 + 0] = x;
      references[i * 2 + 1] = y;

      positions[i * 3 + 0] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('reference', new THREE.BufferAttribute(references, 2));

    // Create material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        texturePosition: { value: null },
        textureVelocity: { value: null },
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(0x00ffaa) },
        uColor2: { value: new THREE.Color(0x00aaff) },
        uColor3: { value: new THREE.Color(0xaa55ff) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 4.0 }
      },
      vertexShader: `
        uniform sampler2D texturePosition;
        uniform sampler2D textureVelocity;
        uniform float uPixelRatio;
        uniform float uSize;
        uniform float uTime;

        attribute vec2 reference;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vLife;

        void main() {
          vec4 pos = texture2D(texturePosition, reference);
          vec4 vel = texture2D(textureVelocity, reference);

          float life = pos.w / 7.0; // Normalize
          float speed = length(vel.xyz);

          // Life-based alpha
          vAlpha = smoothstep(0.0, 0.15, life) * smoothstep(1.0, 0.7, life);
          vLife = life;

          // Speed-based color mixing
          float colorMix = clamp(speed * 0.3, 0.0, 1.0);
          vColor = mix(vec3(0.0, 1.0, 0.67), vec3(1.0, 0.4, 0.2), colorMix);

          vec4 mvPosition = modelViewMatrix * vec4(pos.xyz, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size with attenuation
          float sizeAtten = 200.0 / -mvPosition.z;
          gl_PointSize = uSize * sizeAtten * uPixelRatio * (0.5 + speed * 0.2);
          gl_PointSize = max(gl_PointSize, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        varying float vLife;

        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);

          // Soft glow with bright core
          float core = exp(-dist * 10.0) * 1.5;
          float glow = exp(-dist * 4.0);
          float outer = exp(-dist * 2.0) * 0.4;

          float intensity = core + glow * 0.5 + outer * 0.2;
          intensity *= smoothstep(0.5, 0.15, dist);

          // Pulse
          intensity *= 0.9 + sin(vLife * 15.0) * 0.1;

          vec3 finalColor = vColor * intensity;
          float finalAlpha = vAlpha * intensity;

          if (finalAlpha < 0.01) discard;

          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, material);
    this.particles.frustumCulled = false;
    this.scene.add(this.particles);
  }

  update(deltaTime, elapsedTime) {
    // Clamp delta to avoid instability
    const dt = Math.min(deltaTime, 0.05);

    // Update uniforms
    this.positionUniforms.uTime.value = elapsedTime;
    this.positionUniforms.uDelta.value = dt;
    this.velocityUniforms.uTime.value = elapsedTime;
    this.velocityUniforms.uDelta.value = dt;

    // Compute
    this.gpuCompute.compute();

    // Update particle material with new textures
    this.particles.material.uniforms.texturePosition.value =
      this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture;
    this.particles.material.uniforms.textureVelocity.value =
      this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;
    this.particles.material.uniforms.uTime.value = elapsedTime;
  }

  setAttractor(position, strength) {
    this.velocityUniforms.uAttractorPos.value.copy(position);
    this.velocityUniforms.uAttractorStrength.value = strength;
  }

  setMouseAttractor(position, strength, active) {
    this.velocityUniforms.uMouseAttractorPos.value.copy(position);
    this.velocityUniforms.uMouseAttractorStrength.value = strength;
    this.velocityUniforms.uMouseAttractorActive.value = active ? 1.0 : 0.0;
  }

  setShockwave(origin, radius, strength, thickness) {
    this.velocityUniforms.uShockwaveOrigin.value.copy(origin);
    this.velocityUniforms.uShockwaveRadius.value = radius;
    this.velocityUniforms.uShockwaveStrength.value = strength;
    this.velocityUniforms.uShockwaveThickness.value = thickness;
  }

  setColors(color1, color2, color3) {
    this.particles.material.uniforms.uColor1.value.set(color1);
    this.particles.material.uniforms.uColor2.value.set(color2);
    this.particles.material.uniforms.uColor3.value.set(color3);
  }

  dispose() {
    this.particles.geometry.dispose();
    this.particles.material.dispose();
    this.scene.remove(this.particles);
    // GPUComputationRenderer doesn't have a dispose method, but textures are managed internally
  }
}

// ============================================================================
// ATTRACTOR CLASS
// ============================================================================
class Attractor {
  constructor(position, strength, type = 'point') {
    this.position = position.clone();
    this.strength = strength; // positive = attract, negative = repel
    this.type = type; // 'point', 'vortex', 'orbit'
    this.active = true;
    this.radius = 3.0; // for orbit type
    this.vortexAxis = new THREE.Vector3(0, 1, 0); // for vortex type
  }

  setPosition(position) {
    this.position.copy(position);
  }

  toUniformData() {
    return {
      position: this.position,
      strength: this.active ? this.strength : 0,
      type: this.type === 'point' ? 0 : (this.type === 'vortex' ? 1 : 2),
      radius: this.radius
    };
  }
}

// ============================================================================
// SHOCKWAVE MANAGER CLASS
// ============================================================================
class ShockwaveManager {
  constructor(maxShockwaves = 5) {
    this.shockwaves = [];
    this.maxShockwaves = maxShockwaves;
  }

  trigger(origin, strength = 10.0, thickness = 2.0, expansionSpeed = 8.0) {
    // Remove oldest if at max
    if (this.shockwaves.length >= this.maxShockwaves) {
      this.shockwaves.shift();
    }

    this.shockwaves.push({
      origin: origin.clone(),
      radius: 0.1,
      strength: strength,
      thickness: thickness,
      expansionSpeed: expansionSpeed,
      decay: 0.92,
      active: true
    });
  }

  update(deltaTime) {
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];

      sw.radius += sw.expansionSpeed * deltaTime;
      sw.strength *= sw.decay;

      // Remove when too weak or too large
      if (sw.radius > 25 || sw.strength < 0.05) {
        this.shockwaves.splice(i, 1);
      }
    }
  }

  getActiveShockwave() {
    // Return the strongest active shockwave for the shader
    if (this.shockwaves.length === 0) {
      return {
        origin: new THREE.Vector3(0, 0, 0),
        radius: 0,
        strength: 0,
        thickness: 1
      };
    }

    // Find strongest
    let strongest = this.shockwaves[0];
    for (const sw of this.shockwaves) {
      if (sw.strength > strongest.strength) {
        strongest = sw;
      }
    }

    return strongest;
  }

  hasActive() {
    return this.shockwaves.length > 0;
  }

  clear() {
    this.shockwaves = [];
  }
}

// ============================================================================
// WAVE GRID CLASS
// ============================================================================
class WaveGrid {
  constructor(scene, config = {}) {
    this.scene = scene;
    this.config = {
      size: 128,           // Grid size (size x size points)
      gridScale: 20,       // World space size of the grid
      waveAmplitude: 1.0,
      waveFrequency: 0.5,
      waveSpeed: 1.0,
      color1: '#00ffaa',
      color2: '#00aaff',
      color3: '#aa55ff',
      opacity: 0.6,
      particleSize: 2.0,
      yOffset: -5.0,       // Vertical position offset
      ...config
    };

    this.time = 0;
    this.visible = true;
    this.createGrid();
    this.scene.add(this.mesh);
  }

  createGrid() {
    const size = this.config.size;
    const gridScale = this.config.gridScale;

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(size * size * 3);
    const uvs = new Float32Array(size * size * 2);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const idx = i * size + j;
        // Position in XZ plane
        positions[idx * 3 + 0] = (i / size - 0.5) * gridScale;
        positions[idx * 3 + 1] = 0; // Y will be computed in shader
        positions[idx * 3 + 2] = (j / size - 0.5) * gridScale;
        // UV coordinates
        uvs[idx * 2 + 0] = i / size;
        uvs[idx * 2 + 1] = j / size;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    // Create material with wave shaders
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uWaveAmplitude: { value: this.config.waveAmplitude },
        uWaveFrequency: { value: this.config.waveFrequency },
        uWaveSpeed: { value: this.config.waveSpeed },
        uColor1: { value: new THREE.Color(this.config.color1) },
        uColor2: { value: new THREE.Color(this.config.color2) },
        uColor3: { value: new THREE.Color(this.config.color3) },
        uOpacity: { value: this.config.opacity },
        uSize: { value: this.config.particleSize },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uYOffset: { value: this.config.yOffset }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uWaveAmplitude;
        uniform float uWaveFrequency;
        uniform float uWaveSpeed;
        uniform float uSize;
        uniform float uPixelRatio;
        uniform float uYOffset;

        varying float vHeight;
        varying vec2 vUv;

        // Simplex noise for organic waves
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
        }

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Multiple wave layers for organic motion
          float wave1 = sin(pos.x * uWaveFrequency + uTime * uWaveSpeed) * uWaveAmplitude;
          float wave2 = sin(pos.z * uWaveFrequency * 0.8 + uTime * uWaveSpeed * 1.2) * uWaveAmplitude * 0.7;
          float wave3 = snoise(vec3(pos.xz * 0.3, uTime * 0.2)) * uWaveAmplitude * 0.5;
          float wave4 = snoise(vec3(pos.xz * 0.15, uTime * 0.1)) * uWaveAmplitude * 0.8;

          // Combine waves
          pos.y = wave1 + wave2 + wave3 + wave4 + uYOffset;

          // Normalize height for color mapping
          vHeight = (pos.y - uYOffset) / (uWaveAmplitude * 3.0) * 0.5 + 0.5;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size with distance attenuation
          float sizeAtten = 300.0 / -mvPosition.z;
          gl_PointSize = uSize * sizeAtten * uPixelRatio;
          gl_PointSize = max(gl_PointSize, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uOpacity;
        uniform float uTime;

        varying float vHeight;
        varying vec2 vUv;

        void main() {
          // Distance from center of point
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);

          // Soft circular falloff
          float alpha = smoothstep(0.5, 0.2, dist);
          
          // Add glow
          float glow = exp(-dist * 4.0) * 0.8;
          alpha = max(alpha, glow);

          // Three-way color blend based on height
          vec3 color;
          if (vHeight < 0.5) {
            color = mix(uColor1, uColor2, vHeight * 2.0);
          } else {
            color = mix(uColor2, uColor3, (vHeight - 0.5) * 2.0);
          }

          // Add subtle pulse
          float pulse = sin(uTime * 2.0 + vUv.x * 10.0 + vUv.y * 10.0) * 0.1 + 0.9;
          color *= pulse;

          if (alpha < 0.01) discard;

          gl_FragColor = vec4(color, alpha * uOpacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.mesh = new THREE.Points(geometry, material);
    this.mesh.frustumCulled = false;
  }

  update(deltaTime, timeScale = 1.0) {
    this.time += deltaTime * timeScale;

    if (this.mesh && this.mesh.material.uniforms) {
      this.mesh.material.uniforms.uTime.value = this.time;
    }
  }

  setVisible(visible) {
    this.visible = visible;
    if (this.mesh) {
      this.mesh.visible = visible;
    }
  }

  setColors(color1, color2, color3) {
    if (this.mesh && this.mesh.material.uniforms) {
      this.mesh.material.uniforms.uColor1.value.set(color1);
      this.mesh.material.uniforms.uColor2.value.set(color2);
      this.mesh.material.uniforms.uColor3.value.set(color3);
    }
  }

  setWaveParams(amplitude, frequency, speed) {
    if (this.mesh && this.mesh.material.uniforms) {
      this.mesh.material.uniforms.uWaveAmplitude.value = amplitude;
      this.mesh.material.uniforms.uWaveFrequency.value = frequency;
      this.mesh.material.uniforms.uWaveSpeed.value = speed;
    }
  }

  setOpacity(opacity) {
    if (this.mesh && this.mesh.material.uniforms) {
      this.mesh.material.uniforms.uOpacity.value = opacity;
    }
  }

  dispose() {
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
      this.scene.remove(this.mesh);
    }
  }
}

// ============================================================================
// GEOMETRIC STRUCTURE CLASS
// ============================================================================
class GeometricStructure {
  constructor(scene, config) {
    this.scene = scene;
    this.config = {
      type: 'icosahedron',
      position: new THREE.Vector3(0, 0, 0),
      rotationSpeed: { x: 0.1, y: 0.2, z: 0.05 },
      scale: 1,
      pulseIntensity: 0.1,
      materialStyle: 'holographic',
      complexity: 1,
      color: '#00ffaa',
      ...config
    };

    this.group = new THREE.Group();
    this.group.position.copy(this.config.position);
    this.time = Math.random() * 100;
    this.energyOffset = Math.random() * Math.PI * 2;

    this.createStructure();
    this.scene.add(this.group);
  }

  createStructure() {
    // Clear existing
    while (this.group.children.length) {
      const child = this.group.children[0];
      this.group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }

    switch (this.config.type) {
      case 'icosahedron':
        this.createNestedIcosahedron();
        break;
      case 'torus':
        this.createAnimatedTorus();
        break;
      case 'rings':
        this.createConcentricRings();
        break;
      case 'helix':
        this.createDNAHelix();
        break;
      case 'mobius':
        this.createMobiusStrip();
        break;
      default:
        this.createNestedIcosahedron();
    }
  }

  createNestedIcosahedron() {
    const color = new THREE.Color(this.config.color);

    // Outer dodecahedron
    const outerGeo = new THREE.DodecahedronGeometry(1.5 * this.config.scale, 0);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);

    // Glowing tube edges for outer
    this.createGlowingEdges(outerEdges, color, 1.5);

    // Inner icosahedron
    const innerGeo = new THREE.IcosahedronGeometry(0.8 * this.config.scale, this.config.complexity);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);

    // Inner mesh with glass material
    const innerMaterial = this.createMaterial(color);
    const innerMesh = new THREE.Mesh(innerGeo, innerMaterial);
    innerMesh.userData.isInner = true;
    this.group.add(innerMesh);

    // Glowing edges for inner
    this.createGlowingEdges(innerEdges, color.clone().multiplyScalar(1.5), 0.8);

    // Core glow
    const coreGeo = new THREE.SphereGeometry(0.3 * this.config.scale, 16, 16);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.5
    });
    const core = new THREE.Mesh(coreGeo, coreMaterial);
    core.userData.isCore = true;
    this.group.add(core);
  }

  createAnimatedTorus() {
    const color = new THREE.Color(this.config.color);

    // Main torus
    const torusGeo = new THREE.TorusGeometry(
      1 * this.config.scale,
      0.3 * this.config.scale,
      16,
      50
    );
    const torusMaterial = this.createMaterial(color);
    const torus = new THREE.Mesh(torusGeo, torusMaterial);
    this.group.add(torus);

    // Inner rotating pattern
    for (let i = 0; i < 3; i++) {
      const innerTorusGeo = new THREE.TorusGeometry(
        0.5 * this.config.scale,
        0.05 * this.config.scale,
        8,
        30
      );
      const innerMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8
      });
      const innerTorus = new THREE.Mesh(innerTorusGeo, innerMaterial);
      innerTorus.rotation.x = (i / 3) * Math.PI;
      innerTorus.userData.rotationOffset = i;
      this.group.add(innerTorus);
    }

    // Edge glow
    const edges = new THREE.EdgesGeometry(torusGeo);
    this.createGlowingEdges(edges, color, 1);
  }

  createConcentricRings() {
    const color = new THREE.Color(this.config.color);

    for (let i = 0; i < 4; i++) {
      const radius = (0.5 + i * 0.4) * this.config.scale;
      const ringGeo = new THREE.TorusGeometry(radius, 0.03 * this.config.scale, 8, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.9 - i * 0.15
      });
      const ring = new THREE.Mesh(ringGeo, ringMaterial);
      ring.userData.ringIndex = i;
      ring.rotation.x = Math.PI / 2 + (i % 2 === 0 ? 0 : Math.PI / 4);
      ring.rotation.y = (i / 4) * Math.PI / 2;
      this.group.add(ring);
    }

    // Center sphere
    const sphereGeo = new THREE.SphereGeometry(0.2 * this.config.scale, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.8
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
    sphere.userData.isCore = true;
    this.group.add(sphere);
  }

  createDNAHelix() {
    const color = new THREE.Color(this.config.color);
    const points1 = [];
    const points2 = [];
    const rungs = [];

    const height = 4 * this.config.scale;
    const radius = 0.5 * this.config.scale;
    const turns = 2;
    const segments = 100;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const y = (t - 0.5) * height;
      const angle = t * turns * Math.PI * 2;

      points1.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      ));

      points2.push(new THREE.Vector3(
        Math.cos(angle + Math.PI) * radius,
        y,
        Math.sin(angle + Math.PI) * radius
      ));

      // Add rungs every 10 segments
      if (i % 10 === 0 && i > 0 && i < segments) {
        rungs.push({
          start: points1[points1.length - 1].clone(),
          end: points2[points2.length - 1].clone()
        });
      }
    }

    // Create helix strands as tubes
    const curve1 = new THREE.CatmullRomCurve3(points1);
    const curve2 = new THREE.CatmullRomCurve3(points2);

    const tubeGeo1 = new THREE.TubeGeometry(curve1, segments, 0.05 * this.config.scale, 8, false);
    const tubeGeo2 = new THREE.TubeGeometry(curve2, segments, 0.05 * this.config.scale, 8, false);

    const tubeMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.9
    });

    const tube1 = new THREE.Mesh(tubeGeo1, tubeMaterial);
    const tube2 = new THREE.Mesh(tubeGeo2, tubeMaterial.clone());
    this.group.add(tube1);
    this.group.add(tube2);

    // Add rungs
    rungs.forEach((rung, index) => {
      const rungGeo = new THREE.CylinderGeometry(
        0.02 * this.config.scale,
        0.02 * this.config.scale,
        rung.start.distanceTo(rung.end),
        8
      );
      const rungMaterial = new THREE.MeshBasicMaterial({
        color: color.clone().multiplyScalar(0.7),
        transparent: true,
        opacity: 0.7
      });
      const rungMesh = new THREE.Mesh(rungGeo, rungMaterial);

      const midpoint = rung.start.clone().add(rung.end).multiplyScalar(0.5);
      rungMesh.position.copy(midpoint);
      rungMesh.lookAt(rung.end);
      rungMesh.rotateX(Math.PI / 2);
      rungMesh.userData.rungIndex = index;
      this.group.add(rungMesh);
    });
  }

  createMobiusStrip() {
    const color = new THREE.Color(this.config.color);

    // Create Mobius strip geometry
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];

    const radius = 1 * this.config.scale;
    const width = 0.4 * this.config.scale;
    const segments = 100;
    const segmentsWidth = 10;

    for (let i = 0; i <= segments; i++) {
      const u = (i / segments) * Math.PI * 2;

      for (let j = 0; j <= segmentsWidth; j++) {
        const v = (j / segmentsWidth - 0.5) * width;

        const x = (radius + v * Math.cos(u / 2)) * Math.cos(u);
        const y = (radius + v * Math.cos(u / 2)) * Math.sin(u);
        const z = v * Math.sin(u / 2);

        positions.push(x, y, z);

        // Approximate normal
        const nx = Math.cos(u) * Math.cos(u / 2);
        const ny = Math.sin(u) * Math.cos(u / 2);
        const nz = Math.sin(u / 2);
        normals.push(nx, ny, nz);

        uvs.push(i / segments, j / segmentsWidth);
      }
    }

    // Create indices
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < segmentsWidth; j++) {
        const a = i * (segmentsWidth + 1) + j;
        const b = a + segmentsWidth + 1;
        const c = a + 1;
        const d = b + 1;

        indices.push(a, b, c);
        indices.push(b, d, c);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);

    const material = this.createMaterial(color);
    material.side = THREE.DoubleSide;

    const mesh = new THREE.Mesh(geometry, material);
    this.group.add(mesh);

    // Add edge glow
    const edges = new THREE.EdgesGeometry(geometry, 30);
    this.createGlowingEdges(edges, color, 1);
  }

  createGlowingEdges(edgesGeometry, color, scale) {
    // Create tube geometry along edges for volumetric look
    const positions = edgesGeometry.attributes.position.array;

    // Line-based glow (multiple layers for thickness effect)
    for (let layer = 0; layer < 3; layer++) {
      const lineMaterial = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.6 - layer * 0.15,
        linewidth: 1,
        blending: THREE.AdditiveBlending
      });

      const lineGeometry = edgesGeometry.clone();
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      lines.scale.setScalar(1 + layer * 0.02);
      lines.userData.edgeLayer = layer;
      this.group.add(lines);
    }
  }

  createMaterial(color) {
    switch (this.config.materialStyle) {
      case 'glass':
        return new THREE.MeshPhysicalMaterial({
          color: color,
          transparent: true,
          opacity: 0.3,
          roughness: 0.1,
          metalness: 0.1,
          transmission: 0.9,
          thickness: 0.5
        });

      case 'holographic':
        return new THREE.MeshPhysicalMaterial({
          color: color,
          transparent: true,
          opacity: 0.4,
          roughness: 0.2,
          metalness: 0.8,
          iridescence: 1,
          iridescenceIOR: 1.5,
          sheen: 1,
          sheenColor: color
        });

      case 'solid':
        return new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.7
        });

      default:
        return new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.5
        });
    }
  }

  update(deltaTime, timeScale) {
    this.time += deltaTime * timeScale;

    // Rotation
    this.group.rotation.x += this.config.rotationSpeed.x * deltaTime * timeScale;
    this.group.rotation.y += this.config.rotationSpeed.y * deltaTime * timeScale;
    this.group.rotation.z += this.config.rotationSpeed.z * deltaTime * timeScale;

    // Pulse/breathing animation
    const pulse = 1 + Math.sin(this.time * 2) * this.config.pulseIntensity;
    this.group.scale.setScalar(pulse);

    // Update children with special behaviors
    this.group.children.forEach((child, index) => {
      // Inner structure counter-rotation
      if (child.userData.isInner) {
        child.rotation.y -= this.config.rotationSpeed.y * deltaTime * timeScale * 0.5;
      }

      // Core pulse
      if (child.userData.isCore) {
        const corePulse = 1 + Math.sin(this.time * 4) * 0.2;
        child.scale.setScalar(corePulse);
      }

      // Ring animations
      if (child.userData.ringIndex !== undefined) {
        const ringOffset = child.userData.ringIndex * 0.5;
        child.rotation.z += (0.5 + ringOffset * 0.2) * deltaTime * timeScale;
      }

      // Torus inner rotation
      if (child.userData.rotationOffset !== undefined) {
        child.rotation.x += (1 + child.userData.rotationOffset * 0.3) * deltaTime * timeScale;
      }

      // Energy traveling along edges
      if (child.userData.edgeLayer !== undefined) {
        const energyPulse = Math.sin(this.time * 3 + this.energyOffset + child.userData.edgeLayer) * 0.3 + 0.7;
        child.material.opacity = (0.6 - child.userData.edgeLayer * 0.15) * energyPulse;
      }

      // DNA rung pulse
      if (child.userData.rungIndex !== undefined) {
        const rungPulse = Math.sin(this.time * 5 + child.userData.rungIndex * 0.5) * 0.3 + 0.7;
        child.material.opacity = 0.7 * rungPulse;
      }
    });
  }

  setColor(color) {
    this.config.color = color;
    const threeColor = new THREE.Color(color);

    this.group.children.forEach(child => {
      if (child.material) {
        if (child.material.color) {
          child.material.color.set(threeColor);
        }
        if (child.material.sheenColor) {
          child.material.sheenColor.set(threeColor);
        }
      }
    });
  }

  dispose() {
    this.group.children.forEach(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
    this.scene.remove(this.group);
  }
}

// ============================================================================
// LIGHT RIBBON CLASS
// ============================================================================
class LightRibbon {
  constructor(scene, config) {
    this.scene = scene;
    this.config = {
      type: 'helix',
      position: new THREE.Vector3(0, 0, 0),
      animationSpeed: 1,
      thickness: 0.1,
      glowIntensity: 1,
      color: '#00ffaa',
      trailFade: 2,
      ...config
    };

    this.time = Math.random() * 100;
    this.group = new THREE.Group();
    this.group.position.copy(this.config.position);

    this.createRibbon();
    this.scene.add(this.group);
  }

  createRibbon() {
    // Clear existing
    while (this.group.children.length) {
      const child = this.group.children[0];
      this.group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }

    const points = this.generateCurvePoints();
    this.curve = new THREE.CatmullRomCurve3(points);

    // Main ribbon tube
    const tubeGeometry = new THREE.TubeGeometry(
      this.curve,
      200,
      this.config.thickness,
      8,
      false
    );

    const color = new THREE.Color(this.config.color);

    // Create gradient material with glow
    const tubeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: color },
        time: { value: 0 },
        glowIntensity: { value: this.config.glowIntensity }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform float glowIntensity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);

          // Flowing energy effect
          float flow = sin(vUv.x * 20.0 - time * 3.0) * 0.5 + 0.5;
          float pulse = sin(time * 2.0) * 0.2 + 0.8;

          vec3 finalColor = color * (1.0 + fresnel * glowIntensity) * (0.5 + flow * 0.5) * pulse;
          float alpha = (0.6 + fresnel * 0.4) * (0.3 + flow * 0.7);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    tube.userData.isMainRibbon = true;
    this.group.add(tube);

    // Glow layers
    for (let i = 0; i < 2; i++) {
      const glowGeometry = new THREE.TubeGeometry(
        this.curve,
        100,
        this.config.thickness * (2 + i),
        8,
        false
      );

      const glowMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.1 - i * 0.03,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.userData.glowLayer = i;
      this.group.add(glow);
    }
  }

  generateCurvePoints() {
    const points = [];
    const segments = 100;

    switch (this.config.type) {
      case 'helix':
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const angle = t * Math.PI * 6;
          const radius = 2 + Math.sin(t * Math.PI * 2) * 0.5;
          points.push(new THREE.Vector3(
            Math.cos(angle) * radius,
            (t - 0.5) * 6,
            Math.sin(angle) * radius
          ));
        }
        break;

      case 'lissajous':
        for (let i = 0; i <= segments; i++) {
          const t = (i / segments) * Math.PI * 2;
          points.push(new THREE.Vector3(
            Math.sin(3 * t) * 2,
            Math.sin(2 * t) * 2,
            Math.sin(5 * t) * 2
          ));
        }
        break;

      case 'toroidal':
        for (let i = 0; i <= segments; i++) {
          const t = (i / segments) * Math.PI * 2;
          const p = 3, q = 2;
          const r = 0.5 * (2 + Math.cos(q * t));
          points.push(new THREE.Vector3(
            r * Math.cos(p * t) * 1.5,
            r * Math.sin(p * t) * 1.5,
            -Math.sin(q * t) * 1.5
          ));
        }
        break;

      case 'spiral':
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const angle = t * Math.PI * 8;
          const radius = 0.5 + t * 2;
          points.push(new THREE.Vector3(
            Math.cos(angle) * radius,
            (t - 0.5) * 4,
            Math.sin(angle) * radius
          ));
        }
        break;

      default:
        // Default helix
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const angle = t * Math.PI * 4;
          points.push(new THREE.Vector3(
            Math.cos(angle) * 2,
            (t - 0.5) * 4,
            Math.sin(angle) * 2
          ));
        }
    }

    return points;
  }

  update(deltaTime, timeScale) {
    this.time += deltaTime * timeScale * this.config.animationSpeed;

    // Update shader uniforms
    this.group.children.forEach(child => {
      if (child.userData.isMainRibbon && child.material.uniforms) {
        child.material.uniforms.time.value = this.time;
      }

      // Animate glow layers
      if (child.userData.glowLayer !== undefined) {
        const pulse = Math.sin(this.time * 2 + child.userData.glowLayer) * 0.02 + 0.08;
        child.material.opacity = pulse;
      }
    });

    // Slow rotation
    this.group.rotation.y += 0.1 * deltaTime * timeScale;
  }

  setColor(color) {
    this.config.color = color;
    const threeColor = new THREE.Color(color);

    this.group.children.forEach(child => {
      if (child.material.uniforms && child.material.uniforms.color) {
        child.material.uniforms.color.value = threeColor;
      } else if (child.material.color) {
        child.material.color.set(threeColor);
      }
    });
  }

  dispose() {
    this.group.children.forEach(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
    this.scene.remove(this.group);
  }
}

// ============================================================================
// BACKGROUND MANAGER
// ============================================================================
class BackgroundManager {
  constructor(scene) {
    this.scene = scene;
    this.mesh = null;
    this.style = 'gradient';
    this.colors = ['#0a0a1a', '#051515', '#0a1a1a'];

    this.createBackground();
  }

  createBackground() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
    }

    const geometry = new THREE.SphereGeometry(100, 32, 32);

    let material;

    switch (this.style) {
      case 'solid':
        material = new THREE.MeshBasicMaterial({
          color: 0x000000,
          side: THREE.BackSide
        });
        break;

      case 'gradient':
        material = new THREE.ShaderMaterial({
          uniforms: {
            color1: { value: new THREE.Color(this.colors[0]) },
            color2: { value: new THREE.Color(this.colors[1]) },
            color3: { value: new THREE.Color(this.colors[2]) },
            time: { value: 0 }
          },
          vertexShader: `
            varying vec3 vPosition;
            void main() {
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform float time;
            varying vec3 vPosition;

            void main() {
              float y = (vPosition.y + 100.0) / 200.0;
              y = y + sin(time * 0.1 + vPosition.x * 0.02) * 0.05;

              vec3 color;
              if (y < 0.5) {
                color = mix(color1, color2, y * 2.0);
              } else {
                color = mix(color2, color3, (y - 0.5) * 2.0);
              }

              gl_FragColor = vec4(color, 1.0);
            }
          `,
          side: THREE.BackSide
        });
        break;

      case 'nebula':
        material = new THREE.ShaderMaterial({
          uniforms: {
            color1: { value: new THREE.Color(this.colors[0]) },
            color2: { value: new THREE.Color(this.colors[1]) },
            color3: { value: new THREE.Color(this.colors[2] || this.colors[1]) },
            time: { value: 0 }
          },
          vertexShader: `
            varying vec3 vPosition;
            varying vec2 vUv;
            void main() {
              vPosition = position;
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform float time;
            varying vec3 vPosition;
            varying vec2 vUv;

            // Simplex noise functions
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

            float snoise(vec3 v) {
              const vec2 C = vec2(1.0/6.0, 1.0/3.0);
              const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

              vec3 i  = floor(v + dot(v, C.yyy));
              vec3 x0 = v - i + dot(i, C.xxx);

              vec3 g = step(x0.yzx, x0.xyz);
              vec3 l = 1.0 - g;
              vec3 i1 = min(g.xyz, l.zxy);
              vec3 i2 = max(g.xyz, l.zxy);

              vec3 x1 = x0 - i1 + C.xxx;
              vec3 x2 = x0 - i2 + C.yyy;
              vec3 x3 = x0 - D.yyy;

              i = mod289(i);
              vec4 p = permute(permute(permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

              float n_ = 0.142857142857;
              vec3 ns = n_ * D.wyz - D.xzx;

              vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

              vec4 x_ = floor(j * ns.z);
              vec4 y_ = floor(j - 7.0 * x_);

              vec4 x = x_ *ns.x + ns.yyyy;
              vec4 y = y_ *ns.x + ns.yyyy;
              vec4 h = 1.0 - abs(x) - abs(y);

              vec4 b0 = vec4(x.xy, y.xy);
              vec4 b1 = vec4(x.zw, y.zw);

              vec4 s0 = floor(b0)*2.0 + 1.0;
              vec4 s1 = floor(b1)*2.0 + 1.0;
              vec4 sh = -step(h, vec4(0.0));

              vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
              vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

              vec3 p0 = vec3(a0.xy, h.x);
              vec3 p1 = vec3(a0.zw, h.y);
              vec3 p2 = vec3(a1.xy, h.z);
              vec3 p3 = vec3(a1.zw, h.w);

              vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
              p0 *= norm.x;
              p1 *= norm.y;
              p2 *= norm.z;
              p3 *= norm.w;

              vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
              m = m * m;
              return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
            }

            void main() {
              vec3 pos = vPosition * 0.01;

              // Multi-octave noise for rich nebula texture
              float n1 = snoise(pos + time * 0.02) * 0.5 + 0.5;
              float n2 = snoise(pos * 2.0 + time * 0.03) * 0.25 + 0.25;
              float n3 = snoise(pos * 4.0 - time * 0.01) * 0.125 + 0.125;
              float n4 = snoise(pos * 8.0 + time * 0.05) * 0.0625;

              float noise = n1 + n2 + n3 + n4;
              noise = pow(noise, 1.5); // Contrast boost

              // Three-way color blend for richer gradients
              vec3 color;
              if (noise < 0.5) {
                color = mix(color1, color2, noise * 2.0);
              } else {
                color = mix(color2, color3, (noise - 0.5) * 2.0);
              }

              // Add subtle animated stars
              float starNoise = snoise(pos * 100.0 + time * 0.1);
              float stars = pow(max(starNoise, 0.0), 20.0) * 0.5;
              color += vec3(stars);

              // Add subtle color variation based on position
              float colorVariation = snoise(pos * 0.5 + time * 0.005) * 0.1;
              color += colorVariation;

              // Vignette darkening at edges
              float vignette = 1.0 - length(vPosition.xy) * 0.003;
              vignette = clamp(vignette, 0.5, 1.0);
              color *= vignette;

              gl_FragColor = vec4(color, 1.0);
            }
          `,
          side: THREE.BackSide
        });
        break;

      default:
        material = new THREE.MeshBasicMaterial({
          color: 0x050510,
          side: THREE.BackSide
        });
    }

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  setStyle(style) {
    this.style = style;
    this.createBackground();
  }

  setColors(colors) {
    this.colors = colors;
    if (this.mesh && this.mesh.material.uniforms) {
      if (this.mesh.material.uniforms.color1) {
        this.mesh.material.uniforms.color1.value = new THREE.Color(colors[0]);
      }
      if (this.mesh.material.uniforms.color2) {
        this.mesh.material.uniforms.color2.value = new THREE.Color(colors[1]);
      }
      if (this.mesh.material.uniforms.color3) {
        this.mesh.material.uniforms.color3.value = new THREE.Color(colors[2]);
      }
    }
  }

  update(time) {
    if (this.mesh && this.mesh.material.uniforms && this.mesh.material.uniforms.time) {
      this.mesh.material.uniforms.time.value = time;
    }
  }

  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
    }
  }
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
function LuminousFlow() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const animationIdRef = useRef(null);

  // GPU Particle System (replaces emittersRef)
  const gpuParticlesRef = useRef(null);
  const waveGridRef = useRef(null);
  const structuresRef = useRef([]);
  const ribbonsRef = useRef([]);
  const backgroundRef = useRef(null);
  const filmGrainPassRef = useRef(null);
  const chromaticAberrationPassRef = useRef(null);
  const fxaaPassRef = useRef(null);
  const bloomPassRef = useRef(null);
  
  // Shockwave and interaction refs
  const shockwaveManagerRef = useRef(null);
  const mouseAttractorRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const lastPulseTimeRef = useRef(0);
  
  // Refs for state values accessible in animation loop
  const mouseFollowRef = useRef(true);
  const autoPulseRef = useRef(true);
  const pulseIntervalRef = useRef(4);

  // State
  const [timeScale, setTimeScale] = useState(1);
  const [gravity, setGravity] = useState(1);
  const [gravityDirection, setGravityDirection] = useState('down');
  const [turbulence, setTurbulence] = useState(0.5);
  const [bloomIntensity, setBloomIntensity] = useState(1.5);
  const [backgroundStyle, setBackgroundStyle] = useState('gradient');
  const [colorPalette, setColorPalette] = useState('Northern Lights');
  const [autoRotate, setAutoRotate] = useState(true);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.5);
  const [immersionMode, setImmersionMode] = useState(false);
  const [filmGrain, setFilmGrain] = useState(false);
  const [chromaticAberration, setChromaticAberration] = useState(true);
  const [chromaticIntensity, setChromaticIntensity] = useState(0.003);
  
  // Interactivity state
  const [mouseFollow, setMouseFollow] = useState(true);
  const [autoPulse, setAutoPulse] = useState(true);
  const [pulseInterval, setPulseInterval] = useState(4);
  
  // Wave grid state
  const [waveGridEnabled, setWaveGridEnabled] = useState(true);
  const [waveAmplitude, setWaveAmplitude] = useState(1.0);
  const [waveSpeed, setWaveSpeed] = useState(1.0);

  const [emitters, setEmitters] = useState([]);
  const [structures, setStructures] = useState([]);
  const [ribbons, setRibbons] = useState([]);

  const [expandedSections, setExpandedSections] = useState({
    global: true,
    emitters: true,
    structures: true,
    ribbons: false,
    camera: false
  });

  const [expandedItems, setExpandedItems] = useState({});

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 2;
    controls.maxDistance = 50;
    controlsRef.current = controls;

    // Post-processing
    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0.8;
    composer.addPass(bloomPass);
    bloomPassRef.current = bloomPass;
    
    // Chromatic aberration pass - after bloom
    const chromaticAberrationPass = new ShaderPass(ChromaticAberrationShader);
    chromaticAberrationPass.uniforms.uIntensity.value = 0.003;
    chromaticAberrationPass.enabled = true;
    composer.addPass(chromaticAberrationPass);
    chromaticAberrationPassRef.current = chromaticAberrationPass;

    const vignettePass = new ShaderPass(VignetteShader);
    vignettePass.uniforms.offset.value = 0.95;
    vignettePass.uniforms.darkness.value = 1.2;
    composer.addPass(vignettePass);

    const filmGrainPass = new ShaderPass(FilmGrainShader);
    filmGrainPass.uniforms.intensity.value = 0.03;
    filmGrainPass.enabled = false;
    composer.addPass(filmGrainPass);
    filmGrainPassRef.current = filmGrainPass;
    
    // FXAA anti-aliasing pass - last pass
    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.uniforms['resolution'].value.set(
      1 / window.innerWidth,
      1 / window.innerHeight
    );
    composer.addPass(fxaaPass);
    fxaaPassRef.current = fxaaPass;

    composerRef.current = composer;

    // Background
    const bg = new BackgroundManager(scene);
    backgroundRef.current = bg;

    // Ambient light for physical materials
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Fog for depth
    scene.fog = new THREE.FogExp2(0x000000, 0.02);

    // Initialize GPU Particle System
    const gpuParticles = new GPUParticleSystem(renderer, scene, 256); // 256² = 65,536 particles
    gpuParticlesRef.current = gpuParticles;
    
    // Initialize Shockwave Manager
    const shockwaveManager = new ShockwaveManager(5);
    shockwaveManagerRef.current = shockwaveManager;
    
    // Initialize Mouse Attractor
    const mouseAttractor = new Attractor(new THREE.Vector3(0, 0, 0), 8.0, 'point');
    mouseAttractorRef.current = mouseAttractor;
    
    // Initialize Wave Grid
    const palette = COLOR_PALETTES['Northern Lights'];
    const waveGrid = new WaveGrid(scene, {
      size: 128,
      gridScale: 25,
      waveAmplitude: 1.0,
      waveFrequency: 0.5,
      waveSpeed: 1.0,
      color1: palette.primary,
      color2: palette.secondary,
      color3: palette.accent,
      opacity: 0.5,
      particleSize: 2.5,
      yOffset: -6.0
    });
    waveGridRef.current = waveGrid;

    // Create default scene
    createDefaultScene();
    
    // Event handlers for interactivity
    const handleMouseMove = (event) => {
      // Calculate normalized mouse coordinates
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Raycast to find 3D position
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      
      // Create a plane at z=0 to intersect with
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersectPoint = new THREE.Vector3();
      raycasterRef.current.ray.intersectPlane(plane, intersectPoint);
      
      // Update mouse attractor position
      if (mouseAttractorRef.current && intersectPoint) {
        mouseAttractorRef.current.setPosition(intersectPoint);
      }
    };
    
    const handleClick = (event) => {
      // Calculate click position in 3D space
      const rect = renderer.domElement.getBoundingClientRect();
      const clickMouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
      
      raycasterRef.current.setFromCamera(clickMouse, camera);
      
      // Find intersection with a plane at z=0
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersectPoint = new THREE.Vector3();
      raycasterRef.current.ray.intersectPlane(plane, intersectPoint);
      
      // Trigger shockwave at click position
      if (shockwaveManagerRef.current && intersectPoint) {
        shockwaveManagerRef.current.trigger(intersectPoint, 15.0, 2.5, 10.0);
      }
    };
    
    // Add event listeners
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('click', handleClick);

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);
      
      // Update FXAA resolution uniform
      if (fxaaPassRef.current) {
        fxaaPassRef.current.uniforms['resolution'].value.set(
          1 / width,
          1 / height
        );
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const deltaTime = clockRef.current.getDelta();
      const elapsedTime = clockRef.current.getElapsedTime();

      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Update shockwave manager
      if (shockwaveManagerRef.current) {
        shockwaveManagerRef.current.update(deltaTime);
        
        // Pass shockwave data to GPU particles
        if (gpuParticlesRef.current) {
          const sw = shockwaveManagerRef.current.getActiveShockwave();
          gpuParticlesRef.current.setShockwave(sw.origin, sw.radius, sw.strength, sw.thickness);
        }
      }
      
      // Update mouse attractor (if mouseFollow is enabled)
      if (mouseAttractorRef.current && gpuParticlesRef.current) {
        const attractor = mouseAttractorRef.current;
        gpuParticlesRef.current.setMouseAttractor(
          attractor.position,
          attractor.strength,
          mouseFollowRef.current // Use ref for current state value
        );
      }
      
      // Periodic pulse effect (auto-pulse)
      if (shockwaveManagerRef.current && autoPulseRef.current) {
        const timeSinceLastPulse = elapsedTime - lastPulseTimeRef.current;
        // Auto-pulse at configured interval
        if (timeSinceLastPulse >= pulseIntervalRef.current) {
          // Trigger pulse at center with moderate strength
          shockwaveManagerRef.current.trigger(
            new THREE.Vector3(0, 0, 0),
            8.0,  // strength
            3.0,  // thickness
            6.0   // expansion speed
          );
          lastPulseTimeRef.current = elapsedTime;
        }
      }

      // Update GPU particles
      if (gpuParticlesRef.current) {
        gpuParticlesRef.current.update(deltaTime, elapsedTime);
      }

      // Update structures
      structuresRef.current.forEach(structure => {
        structure.update(deltaTime, timeScale);
      });

      // Update ribbons
      ribbonsRef.current.forEach(ribbon => {
        ribbon.update(deltaTime, timeScale);
      });
      
      // Update wave grid
      if (waveGridRef.current) {
        waveGridRef.current.update(deltaTime, timeScale);
      }

      // Update background
      if (backgroundRef.current) {
        backgroundRef.current.update(elapsedTime);
      }

      // Update film grain time
      if (filmGrainPassRef.current && filmGrainPassRef.current.enabled) {
        filmGrainPassRef.current.uniforms.time.value = elapsedTime;
      }
      
      // Update chromatic aberration time
      if (chromaticAberrationPassRef.current && chromaticAberrationPassRef.current.enabled) {
        chromaticAberrationPassRef.current.uniforms.uTime.value = elapsedTime;
      }

      // Immersion mode camera drift
      if (immersionMode && cameraRef.current) {
        const drift = Math.sin(elapsedTime * 0.2) * 0.5;
        cameraRef.current.position.y += drift * deltaTime;
      }

      // Render
      if (composerRef.current) {
        composerRef.current.render();
      }
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('click', handleClick);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Clear shockwave manager
      if (shockwaveManagerRef.current) {
        shockwaveManagerRef.current.clear();
        shockwaveManagerRef.current = null;
      }
      
      // Clear mouse attractor
      mouseAttractorRef.current = null;

      // Dispose GPU particles
      if (gpuParticlesRef.current) {
        gpuParticlesRef.current.dispose();
        gpuParticlesRef.current = null;
      }

      // Dispose structures
      structuresRef.current.forEach(s => s.dispose());
      structuresRef.current = [];

      // Dispose ribbons
      ribbonsRef.current.forEach(r => r.dispose());
      ribbonsRef.current = [];
      
      // Dispose wave grid
      if (waveGridRef.current) {
        waveGridRef.current.dispose();
        waveGridRef.current = null;
      }

      // Dispose background
      if (backgroundRef.current) {
        backgroundRef.current.dispose();
      }

      // Dispose renderer
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current && rendererRef.current.domElement) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  // Update effects based on state changes
  useEffect(() => {
    if (composerRef.current && composerRef.current.passes[1]) {
      composerRef.current.passes[1].strength = bloomIntensity;
    }
  }, [bloomIntensity]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
      controlsRef.current.autoRotateSpeed = autoRotateSpeed;
    }
  }, [autoRotate, autoRotateSpeed]);

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.setStyle(backgroundStyle);
    }
  }, [backgroundStyle]);

  useEffect(() => {
    if (filmGrainPassRef.current) {
      filmGrainPassRef.current.enabled = filmGrain;
    }
  }, [filmGrain]);

  // Sync interactivity state to refs for animation loop access
  useEffect(() => {
    mouseFollowRef.current = mouseFollow;
  }, [mouseFollow]);
  
  // Chromatic aberration effect
  useEffect(() => {
    if (chromaticAberrationPassRef.current) {
      chromaticAberrationPassRef.current.enabled = chromaticAberration;
    }
  }, [chromaticAberration]);
  
  useEffect(() => {
    if (chromaticAberrationPassRef.current) {
      chromaticAberrationPassRef.current.uniforms.uIntensity.value = chromaticIntensity;
    }
  }, [chromaticIntensity]);
  
  useEffect(() => {
    autoPulseRef.current = autoPulse;
  }, [autoPulse]);
  
  useEffect(() => {
    pulseIntervalRef.current = pulseInterval;
  }, [pulseInterval]);
  
  // Wave grid effects
  useEffect(() => {
    if (waveGridRef.current) {
      waveGridRef.current.setVisible(waveGridEnabled);
    }
  }, [waveGridEnabled]);
  
  useEffect(() => {
    if (waveGridRef.current) {
      waveGridRef.current.setWaveParams(waveAmplitude, 0.5, waveSpeed);
    }
  }, [waveAmplitude, waveSpeed]);

  // Apply color palette
  useEffect(() => {
    const palette = COLOR_PALETTES[colorPalette];
    if (!palette) return;

    // Update background colors
    if (backgroundRef.current) {
      backgroundRef.current.setColors(palette.background);
    }

    // Update GPU particles
    if (gpuParticlesRef.current) {
      gpuParticlesRef.current.setColors(palette.primary, palette.secondary, palette.accent);
    }
    
    // Update wave grid colors
    if (waveGridRef.current) {
      waveGridRef.current.setColors(palette.primary, palette.secondary, palette.accent);
    }
    
    // Apply bloom presets for this palette
    const bloomPreset = BLOOM_PRESETS[colorPalette];
    if (bloomPreset && bloomPassRef.current) {
      bloomPassRef.current.strength = bloomPreset.strength;
      bloomPassRef.current.radius = bloomPreset.radius;
      bloomPassRef.current.threshold = bloomPreset.threshold;
    }

    // Update structures
    structuresRef.current.forEach(structure => {
      structure.setColor(palette.primary);
    });

    // Update ribbons
    ribbonsRef.current.forEach(ribbon => {
      ribbon.setColor(palette.secondary);
    });

    // Update state for UI
    setStructures(prev => prev.map(s => ({
      ...s,
      color: palette.primary
    })));
    setRibbons(prev => prev.map(r => ({
      ...r,
      color: palette.secondary
    })));
  }, [colorPalette]);

  // Create default scene
  const createDefaultScene = useCallback(() => {
    const palette = COLOR_PALETTES[colorPalette];

    // Central nested structure
    const structureConfig = {
      type: 'icosahedron',
      position: new THREE.Vector3(0, 0, 0),
      rotationSpeed: { x: 0.1, y: 0.2, z: 0.05 },
      scale: 1,
      pulseIntensity: 0.1,
      materialStyle: 'holographic',
      complexity: 1,
      color: palette.primary
    };
    const structure = new GeometricStructure(sceneRef.current, structureConfig);
    structuresRef.current.push(structure);
    setStructures([{ id: Date.now(), ...structureConfig }]);

    // GPU particles are already initialized in useEffect
    // Set colors for particles
    if (gpuParticlesRef.current) {
      gpuParticlesRef.current.setColors(palette.primary, palette.secondary, palette.accent);
    }

    // Helix ribbon
    const ribbonConfig = {
      type: 'helix',
      position: new THREE.Vector3(0, 0, 0),
      animationSpeed: 1,
      thickness: 0.08,
      glowIntensity: 1.5,
      color: palette.accent
    };
    const ribbon = new LightRibbon(sceneRef.current, ribbonConfig);
    ribbonsRef.current.push(ribbon);
    setRibbons([{ id: Date.now(), ...ribbonConfig }]);
  }, [colorPalette]);

  // Old emitter functions - commented out (GPU particles replace these)
  /*
  const addEmitter = useCallback((type = 'fountain') => {
    // Replaced by GPU particle system
  }, [colorPalette]);

  const removeEmitter = useCallback((index) => {
    // Replaced by GPU particle system
  }, []);

  const updateEmitter = useCallback((index, key, value) => {
    // Replaced by GPU particle system
  }, []);
  */

  // Add structure
  const addStructure = useCallback((type = 'icosahedron') => {
    const palette = COLOR_PALETTES[colorPalette];
    const config = {
      type,
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 6
      ),
      rotationSpeed: { x: 0.1, y: 0.2, z: 0.05 },
      scale: 0.5 + Math.random() * 0.5,
      pulseIntensity: 0.1,
      materialStyle: 'holographic',
      complexity: 1,
      color: palette.primary
    };

    const structure = new GeometricStructure(sceneRef.current, config);
    structuresRef.current.push(structure);
    setStructures(prev => [...prev, { id: Date.now(), ...config }]);
  }, [colorPalette]);

  // Remove structure
  const removeStructure = useCallback((index) => {
    if (structuresRef.current[index]) {
      structuresRef.current[index].dispose();
      structuresRef.current.splice(index, 1);
      setStructures(prev => prev.filter((_, i) => i !== index));
    }
  }, []);

  // Update structure
  const updateStructure = useCallback((index, key, value) => {
    if (structuresRef.current[index]) {
      if (key === 'type') {
        structuresRef.current[index].config.type = value;
        structuresRef.current[index].createStructure();
      } else if (key === 'materialStyle') {
        structuresRef.current[index].config.materialStyle = value;
        structuresRef.current[index].createStructure();
      } else {
        structuresRef.current[index].config[key] = value;
      }
      setStructures(prev => prev.map((s, i) =>
        i === index ? { ...s, [key]: value } : s
      ));
    }
  }, []);

  // Add ribbon
  const addRibbon = useCallback((type = 'helix') => {
    const palette = COLOR_PALETTES[colorPalette];
    const config = {
      type,
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 4
      ),
      animationSpeed: 1,
      thickness: 0.08,
      glowIntensity: 1.5,
      color: palette.accent
    };

    const ribbon = new LightRibbon(sceneRef.current, config);
    ribbonsRef.current.push(ribbon);
    setRibbons(prev => [...prev, { id: Date.now(), ...config }]);
  }, [colorPalette]);

  // Remove ribbon
  const removeRibbon = useCallback((index) => {
    if (ribbonsRef.current[index]) {
      ribbonsRef.current[index].dispose();
      ribbonsRef.current.splice(index, 1);
      setRibbons(prev => prev.filter((_, i) => i !== index));
    }
  }, []);

  // Update ribbon
  const updateRibbon = useCallback((index, key, value) => {
    if (ribbonsRef.current[index]) {
      if (key === 'type') {
        ribbonsRef.current[index].config.type = value;
        ribbonsRef.current[index].createRibbon();
      } else {
        ribbonsRef.current[index].config[key] = value;
      }
      setRibbons(prev => prev.map((r, i) =>
        i === index ? { ...r, [key]: value } : r
      ));
    }
  }, []);

  // Clear scene
  const clearScene = useCallback(() => {
    // Dispose all emitters
    emittersRef.current.forEach(e => e.dispose());
    emittersRef.current = [];
    setEmitters([]);

    // Dispose all structures
    structuresRef.current.forEach(s => s.dispose());
    structuresRef.current = [];
    setStructures([]);

    // Dispose all ribbons
    ribbonsRef.current.forEach(r => r.dispose());
    ribbonsRef.current = [];
    setRibbons([]);
  }, []);

  // Randomize
  const randomize = useCallback(() => {
    // Clear existing
    clearScene();

    // Random palette
    const palettes = Object.keys(COLOR_PALETTES);
    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
    setColorPalette(randomPalette);

    const palette = COLOR_PALETTES[randomPalette];

    // Add 1-3 structures
    const structureTypes = ['icosahedron', 'torus', 'rings', 'helix', 'mobius'];
    const numStructures = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numStructures; i++) {
      const type = structureTypes[Math.floor(Math.random() * structureTypes.length)];
      setTimeout(() => addStructure(type), i * 100);
    }

    // GPU particles remain (always active, no need to add)

    // Add 1-2 ribbons
    const ribbonTypes = ['helix', 'lissajous', 'toroidal', 'spiral'];
    const numRibbons = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numRibbons; i++) {
      const type = ribbonTypes[Math.floor(Math.random() * ribbonTypes.length)];
      setTimeout(() => addRibbon(type), i * 100);
    }

    // Random settings
    setTimeScale(0.5 + Math.random() * 1.5);
    setBloomIntensity(1 + Math.random() * 1.5);
    setTurbulence(Math.random() * 1.5);
  }, [clearScene, addStructure, addRibbon]);

  // Reset camera
  const resetCamera = useCallback(() => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 2, 8);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  }, []);

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Toggle item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Three.js Canvas */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />

      {/* Control Panel */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '320px',
        height: '100%',
        background: 'rgba(10, 10, 20, 0.85)',
        backdropFilter: 'blur(10px)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        overflowY: 'auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '13px',
        color: '#fff'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(0, 0, 0, 0.3)'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '300',
            letterSpacing: '2px'
          }}>
            LUMINOUS FLOW
          </h1>
          <p style={{
            margin: '5px 0 0',
            opacity: 0.6,
            fontSize: '11px'
          }}>
            3D Particle & Light Sculpture Sandbox
          </p>
        </div>

        {/* Utility Buttons */}
        <div style={{
          padding: '15px 20px',
          display: 'flex',
          gap: '10px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <button onClick={randomize} style={buttonStyle}>
            Randomize
          </button>
          <button onClick={clearScene} style={buttonStyle}>
            Clear Scene
          </button>
        </div>

        {/* Global Controls Section */}
        <Section
          title="Global Controls"
          expanded={expandedSections.global}
          onToggle={() => toggleSection('global')}
        >
          <Slider
            label="Time Scale"
            value={timeScale}
            onChange={setTimeScale}
            min={0.1} max={3} step={0.1}
          />
          <Slider
            label="Gravity"
            value={gravity}
            onChange={setGravity}
            min={-2} max={2} step={0.1}
          />
          <Slider
            label="Turbulence"
            value={turbulence}
            onChange={setTurbulence}
            min={0} max={3} step={0.1}
          />
          <Slider
            label="Bloom Intensity"
            value={bloomIntensity}
            onChange={setBloomIntensity}
            min={0} max={3} step={0.1}
          />
          <Select
            label="Background Style"
            value={backgroundStyle}
            onChange={setBackgroundStyle}
            options={['solid', 'gradient', 'nebula']}
          />
          <Select
            label="Color Palette"
            value={colorPalette}
            onChange={setColorPalette}
            options={Object.keys(COLOR_PALETTES)}
          />
          <Checkbox
            label="Film Grain"
            checked={filmGrain}
            onChange={setFilmGrain}
          />
          <Checkbox
            label="Chromatic Aberration"
            checked={chromaticAberration}
            onChange={setChromaticAberration}
          />
          {chromaticAberration && (
            <Slider
              label="Aberration Intensity"
              value={chromaticIntensity}
              onChange={setChromaticIntensity}
              min={0.001} max={0.01} step={0.001}
            />
          )}
        </Section>

        {/* GPU Particles Section */}
        <Section
          title="GPU Particles"
          expanded={expandedSections.emitters}
          onToggle={() => toggleSection('emitters')}
        >
          <div style={{
            padding: '12px',
            background: 'rgba(0, 255, 170, 0.1)',
            borderRadius: '4px',
            border: '1px solid rgba(0, 255, 170, 0.3)',
            marginBottom: '10px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '6px',
              color: '#00ffaa'
            }}>
              ✓ GPU Particles Active
            </div>
            <div style={{
              fontSize: '11px',
              opacity: 0.8,
              lineHeight: '1.4'
            }}>
              65,536 particles (256×256 texture)<br/>
              GPU-computed positions & velocities<br/>
              Curl noise + central attractor
            </div>
          </div>
          
          {/* Interactivity Controls */}
          <div style={{
            marginTop: '12px',
            padding: '12px',
            background: 'rgba(255, 170, 0, 0.1)',
            borderRadius: '4px',
            border: '1px solid rgba(255, 170, 0, 0.3)'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '500',
              marginBottom: '10px',
              color: '#ffaa00'
            }}>
              Interactivity
            </div>
            <Checkbox
              label="Mouse Follow (particles follow cursor)"
              checked={mouseFollow}
              onChange={setMouseFollow}
            />
            <Checkbox
              label="Auto Pulse (periodic shockwaves)"
              checked={autoPulse}
              onChange={setAutoPulse}
            />
            {autoPulse && (
              <Slider
                label="Pulse Interval (seconds)"
                value={pulseInterval}
                onChange={setPulseInterval}
                min={1} max={10} step={0.5}
              />
            )}
            <div style={{
              fontSize: '10px',
              opacity: 0.6,
              marginTop: '8px',
              lineHeight: '1.4'
            }}>
              Click anywhere to trigger a shockwave!
            </div>
          </div>
          
          {/* Wave Grid Controls */}
          <div style={{
            marginTop: '12px',
            padding: '12px',
            background: 'rgba(0, 170, 255, 0.1)',
            borderRadius: '4px',
            border: '1px solid rgba(0, 170, 255, 0.3)'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '500',
              marginBottom: '10px',
              color: '#00aaff'
            }}>
              Wave Grid
            </div>
            <Checkbox
              label="Enable Wave Grid"
              checked={waveGridEnabled}
              onChange={setWaveGridEnabled}
            />
            {waveGridEnabled && (
              <>
                <Slider
                  label="Wave Amplitude"
                  value={waveAmplitude}
                  onChange={setWaveAmplitude}
                  min={0.2} max={3.0} step={0.1}
                />
                <Slider
                  label="Wave Speed"
                  value={waveSpeed}
                  onChange={setWaveSpeed}
                  min={0.2} max={3.0} step={0.1}
                />
              </>
            )}
            <div style={{
              fontSize: '10px',
              opacity: 0.6,
              marginTop: '8px',
              lineHeight: '1.4'
            }}>
              16,384 particles in undulating grid below the scene
            </div>
          </div>
        </Section>

        {/* Structures Section */}
        <Section
          title={`Structures (${structures.length})`}
          expanded={expandedSections.structures}
          onToggle={() => toggleSection('structures')}
        >
          <button
            onClick={() => addStructure()}
            style={{ ...buttonStyle, width: '100%', marginBottom: '10px' }}
          >
            + Add Structure
          </button>
          {structures.map((structure, index) => (
            <ItemPanel
              key={structure.id}
              title={`${structure.type}`}
              expanded={expandedItems[structure.id]}
              onToggle={() => toggleItem(structure.id)}
              onDelete={() => removeStructure(index)}
            >
              <Select
                label="Type"
                value={structure.type}
                onChange={(v) => updateStructure(index, 'type', v)}
                options={['icosahedron', 'torus', 'rings', 'helix', 'mobius']}
              />
              <Slider
                label="Rotation Speed"
                value={structure.rotationSpeed?.y || 0.2}
                onChange={(v) => updateStructure(index, 'rotationSpeed', { x: v * 0.5, y: v, z: v * 0.25 })}
                min={0} max={2} step={0.1}
              />
              <Slider
                label="Pulse Intensity"
                value={structure.pulseIntensity}
                onChange={(v) => updateStructure(index, 'pulseIntensity', v)}
                min={0} max={0.5} step={0.05}
              />
              <Slider
                label="Scale"
                value={structure.scale}
                onChange={(v) => updateStructure(index, 'scale', v)}
                min={0.2} max={3} step={0.1}
              />
              <Select
                label="Material"
                value={structure.materialStyle}
                onChange={(v) => updateStructure(index, 'materialStyle', v)}
                options={['glass', 'holographic', 'solid']}
              />
            </ItemPanel>
          ))}
        </Section>

        {/* Ribbons Section */}
        <Section
          title={`Ribbons (${ribbons.length})`}
          expanded={expandedSections.ribbons}
          onToggle={() => toggleSection('ribbons')}
        >
          <button
            onClick={() => addRibbon()}
            style={{ ...buttonStyle, width: '100%', marginBottom: '10px' }}
          >
            + Add Ribbon
          </button>
          {ribbons.map((ribbon, index) => (
            <ItemPanel
              key={ribbon.id}
              title={`${ribbon.type} Ribbon`}
              expanded={expandedItems[ribbon.id]}
              onToggle={() => toggleItem(ribbon.id)}
              onDelete={() => removeRibbon(index)}
            >
              <Select
                label="Curve Type"
                value={ribbon.type}
                onChange={(v) => updateRibbon(index, 'type', v)}
                options={['helix', 'lissajous', 'toroidal', 'spiral']}
              />
              <Slider
                label="Animation Speed"
                value={ribbon.animationSpeed}
                onChange={(v) => updateRibbon(index, 'animationSpeed', v)}
                min={0.1} max={3} step={0.1}
              />
              <Slider
                label="Thickness"
                value={ribbon.thickness}
                onChange={(v) => updateRibbon(index, 'thickness', v)}
                min={0.02} max={0.3} step={0.01}
              />
              <Slider
                label="Glow Intensity"
                value={ribbon.glowIntensity}
                onChange={(v) => updateRibbon(index, 'glowIntensity', v)}
                min={0.5} max={3} step={0.1}
              />
            </ItemPanel>
          ))}
        </Section>

        {/* Camera Section */}
        <Section
          title="Camera"
          expanded={expandedSections.camera}
          onToggle={() => toggleSection('camera')}
        >
          <Checkbox
            label="Auto Rotate"
            checked={autoRotate}
            onChange={setAutoRotate}
          />
          {autoRotate && (
            <Slider
              label="Rotation Speed"
              value={autoRotateSpeed}
              onChange={setAutoRotateSpeed}
              min={0.1} max={2} step={0.1}
            />
          )}
          <Checkbox
            label="Immersion Mode"
            checked={immersionMode}
            onChange={setImmersionMode}
          />
          <button
            onClick={resetCamera}
            style={{ ...buttonStyle, width: '100%', marginTop: '10px' }}
          >
            Reset Camera
          </button>
        </Section>

        {/* Footer */}
        <div style={{
          padding: '15px 20px',
          textAlign: 'center',
          opacity: 0.5,
          fontSize: '11px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          Drag to orbit | Scroll to zoom
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// UI COMPONENTS
// ============================================================================

const buttonStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '4px',
  color: '#fff',
  padding: '8px 16px',
  cursor: 'pointer',
  fontSize: '12px',
  transition: 'all 0.2s',
  flex: 1
};

function Section({ title, expanded, onToggle, children }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div
        onClick={onToggle}
        style={{
          padding: '12px 20px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.03)'
        }}
      >
        <span style={{ fontWeight: '500', letterSpacing: '0.5px' }}>{title}</span>
        <span style={{ opacity: 0.5 }}>{expanded ? '−' : '+'}</span>
      </div>
      {expanded && (
        <div style={{ padding: '10px 20px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function ItemPanel({ title, expanded, onToggle, onDelete, children }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '4px',
      marginBottom: '8px',
      overflow: 'hidden'
    }}>
      <div
        style={{
          padding: '10px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={onToggle}
      >
        <span style={{ fontSize: '12px', textTransform: 'capitalize' }}>{title}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ opacity: 0.5, fontSize: '12px' }}>{expanded ? '−' : '+'}</span>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            style={{
              background: 'none',
              border: 'none',
              color: '#ff6666',
              cursor: 'pointer',
              padding: '0',
              fontSize: '14px'
            }}
          >
            ×
          </button>
        </div>
      </div>
      {expanded && (
        <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px',
        fontSize: '11px'
      }}>
        <span style={{ opacity: 0.7 }}>{label}</span>
        <span style={{ opacity: 0.5 }}>{typeof value === 'number' ? value.toFixed(2) : value}</span>
      </div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        min={min}
        max={max}
        step={step}
        style={{
          width: '100%',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
          appearance: 'none',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{
        fontSize: '11px',
        opacity: 0.7,
        marginBottom: '4px'
      }}>
        {label}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '6px 10px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
          color: '#fff',
          fontSize: '12px',
          cursor: 'pointer'
        }}
      >
        {options.map(opt => (
          <option key={opt} value={opt} style={{ background: '#1a1a2e' }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px',
      cursor: 'pointer',
      fontSize: '12px'
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ cursor: 'pointer' }}
      />
      <span style={{ opacity: 0.8 }}>{label}</span>
    </label>
  );
}

// ============================================================================
// RENDER
// ============================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LuminousFlow />);

export default LuminousFlow;
