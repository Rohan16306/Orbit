import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

function FloatingGeometries() {
  const group = useRef()
  const activeCategoryColor = useStore((state) => state.activeCategoryColor)
  
  // Shared material to apply to all geometries for performance
  const sharedMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#00f0ff', 
    wireframe: true, 
    transparent: true, 
    opacity: 0.3 
  }), [])

  const targetColor = useMemo(() => new THREE.Color(), [])
  
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.5 + 0.2
    }))
  }, [])

  useFrame((state, delta) => {
    // Smoothly transition colors and opacity
    if (activeCategoryColor) {
      targetColor.set(activeCategoryColor)
    } else {
      targetColor.set('#00f0ff')
    }
    
    sharedMaterial.color.lerp(targetColor, delta * 5)
    const targetOpacity = activeCategoryColor ? 0.8 : 0.3
    sharedMaterial.opacity += (targetOpacity - sharedMaterial.opacity) * delta * 5

    // Speed up rotation when hovering over a category
    if (group.current) {
      const speedMultiplier = activeCategoryColor ? 5 : 1
      group.current.rotation.y += 0.001 * speedMultiplier
      group.current.rotation.x += 0.0005 * speedMultiplier
    }
  })

  return (
    <group ref={group}>
      {shapes.map((props, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={props.position} rotation={props.rotation} scale={props.scale} material={sharedMaterial}>
            <octahedronGeometry args={[1, 0]} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, background: '#f0f4f8' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a777e3" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f0ff" />
        
        {/* We use subtle white/blue stars to fit the "Atmosphere" light mode */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <FloatingGeometries />
      </Canvas>
    </div>
  )
}
