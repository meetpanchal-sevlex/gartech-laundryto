import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function Drum() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2, 2, 3, 32, 1, true]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
          emissive="#3b82f6"
          emissiveIntensity={2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh>
        <cylinderGeometry args={[1.9, 1.9, 2.9, 32]} />
        <meshStandardMaterial 
          color="#09090b" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <points>
        <sphereGeometry args={[1.5, 16, 16]} />
        <pointsMaterial color="#60a5fa" size={0.05} transparent opacity={0.5} />
      </points>
    </Float>
  );
}

export default function MachineCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <Drum />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}