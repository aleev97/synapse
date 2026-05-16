import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface NeuralNodeProps {
  position: [number, number, number]
  color?:   string
  size?:    number
  label?:   string
}

export function NeuralNode({
  position,
  color = '#58E6D9',
  size  = 0.15,
}: NeuralNodeProps) {
  const meshRef  = useRef<THREE.Mesh>(null)
  const glowRef  = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // useFrame corre en cada frame del loop de animación (~60fps)
  // Es el equivalente a requestAnimationFrame pero integrado con R3F
  // IMPORTANTE: nunca pongas lógica pesada acá — se corre 60 veces por segundo
  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return

    const t = state.clock.elapsedTime

    // Flotación suave — cada nodo tiene una fase distinta basada en su posición
    // Así no flotan todos sincronizados (se vería artificial)
    const phase = position[0] + position[1]
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8 + phase) * 0.08

    // El glow pulsa levemente
    const scale = hovered
      ? 1 + Math.sin(t * 3) * 0.1          // pulsa más rápido al hover
      : 1 + Math.sin(t * 1.5 + phase) * 0.05
    glowRef.current.scale.setScalar(scale * (hovered ? 2.2 : 1.8))
  })

  return (
    <group position={position}>

      {/* Esfera de glow — más grande, semitransparente */}
      <Sphere ref={glowRef} args={[size, 16, 16]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.15 : 0.08}
          depthWrite={false}   // evita artefactos visuales en transparencias
        />
      </Sphere>

      {/* Nodo principal */}
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
        onPointerOver={() => { setHovered(true);  document.body.style.cursor = 'pointer' }}
        onPointerOut ={() => { setHovered(false); document.body.style.cursor = 'auto' }}
      >
        {/* MeshDistortMaterial da esa forma orgánica que se distorsiona */}
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : 0.8}
          distort={0.3}        // cuánto se distorsiona la forma
          speed={2}            // velocidad de distorsión
          roughness={0}
          metalness={0.1}
        />
      </Sphere>

    </group>
  )
}