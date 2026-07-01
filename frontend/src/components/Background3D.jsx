import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

function FloatingGeometries({ activeCategoryColor }) {
  const group = useRef()
  const speedRef = useRef(1) // Track the current speed for smooth deceleration
  
  // High-end glass-like material
  const sharedMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({ 
    color: '#00f0ff', 
    metalness: 0.2,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 1.5,
    transparent: true, 
    opacity: 0.8
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
    
    // Target speed: 5 if active, 1 if not
    const targetSpeed = activeCategoryColor ? 5 : 1
    
    // Smoothly interpolate the speed factor ("slowly slowly")
    speedRef.current = THREE.MathUtils.lerp(speedRef.current, targetSpeed, delta * 2)

    // Apply the smoothed speed to the rotation
    if (group.current) {
      group.current.rotation.y += 0.001 * speedRef.current
      group.current.rotation.x += 0.0005 * speedRef.current
    }
  })

  return (
    <group ref={group}>
      {shapes.map((props, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={props.position} rotation={props.rotation} scale={props.scale} material={sharedMaterial}>
            <icosahedronGeometry args={[1, 0]} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function Background3D() {
  // Move the store hook out of the R3F Canvas to prevent Invalid Hook Call
  const activeCategoryColor = useStore((state) => state.activeCategoryColor)
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, background: '#0a0514' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a777e3" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f0ff" />
        
        {/* We use subtle white/blue stars to fit the "Atmosphere" light mode */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <FloatingGeometries activeCategoryColor={activeCategoryColor} />
      </Canvas>
    </div>
  )
}
