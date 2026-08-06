import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const CYAN = '#38bdf8';
const VIOLET = '#a78bfa';
const PINK = '#f472b6';

function FloatingShape({ position, color, scale, speed }) {
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <Icosahedron args={[scale, 1]} position={position}>
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </Icosahedron>
    </Float>
  );
}

function BigSphere() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.08;
      mesh.current.rotation.x += delta * 0.02;
      const t = state.clock.elapsedTime;
      mesh.current.position.x = Math.sin(t * 0.5) * 0.6;
    }
  });
  return (
    <Sphere ref={mesh} args={[2.9, 32, 32]}>
      <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.08} />
    </Sphere>
  );
}

function Scene() {
  const group = useRef();

  const shapes = useMemo(
    () => [
      { position: [-5.2, 2.4, -3], color: CYAN, scale: 0.9, speed: 1.4 },
      { position: [5.4, -1.6, -2], color: VIOLET, scale: 1.1, speed: 1.1 },
      { position: [-4.0, -3.2, -1.5], color: PINK, scale: 0.6, speed: 1.7 },
      { position: [3.6, 3.8, -4], color: CYAN, scale: 0.7, speed: 1.3 },
      { position: [0.4, -5.2, -2.5], color: VIOLET, scale: 0.85, speed: 1.5 },
      { position: [-6.0, -0.6, -3.5], color: PINK, scale: 0.55, speed: 1.9 },
      { position: [6.2, 1.8, -3], color: CYAN, scale: 0.65, speed: 1.6 },
      { position: [-1.8, 4.8, -3.5], color: VIOLET, scale: 0.5, speed: 1.8 },
    ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Drift left <-> right and back, slightly quicker
    group.current.position.x = Math.sin(t * 0.55) * 1.7;
    group.current.position.y = Math.sin(t * 0.4) * 0.35;
    group.current.rotation.y = t * 0.06;
    const { pointer } = state;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.14, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.x * 0.1, 0.04);
  });

  return (
    <group ref={group}>
      <BigSphere />
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </group>
  );
}

const Background3D = () => {
  return (
    <div className="bg3d-wrap">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 60 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Stars radius={90} depth={60} count={2400} factor={4} saturation={0} fade speed={0.6} />
        <Scene />
        <fog attach="fog" args={['#020617', 11, 28]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
