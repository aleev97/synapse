import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 180

// Generamos los datos FUERA del componente.
// Math.random() acá es válido — no está en el ciclo de render de React.
// Se ejecuta una sola vez cuando el módulo se importa.
function generateParticleData() {
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const colors    = new Float32Array(PARTICLE_COUNT * 3)
  const speeds    = new Float32Array(PARTICLE_COUNT)

  const palette = [
    new THREE.Color('#58E6D9'),
    new THREE.Color('#388BFD'),
    new THREE.Color('#A371F7'),
  ]

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3

    const radius = 4 + Math.random() * 8
    const theta  = Math.random() * Math.PI * 2
    const phi    = Math.acos(2 * Math.random() - 1)

    positions[i3]     = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    const color = palette[Math.floor(Math.random() * palette.length)]
    colors[i3]     = color.r
    colors[i3 + 1] = color.g
    colors[i3 + 2] = color.b

    speeds[i] = 0.2 + Math.random() * 0.5
  }

  return { positions, colors, speeds }
}

// Constante de módulo — se genera una vez, nunca cambia
const PARTICLE_DATA = generateParticleData()

export function NeuralParticles() {
  const pointsRef = useRef<THREE.Points>(null)

  // useMemo ahora solo lee datos ya calculados — completamente puro
  const { positions, colors, speeds } = useMemo(() => PARTICLE_DATA, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.elapsedTime
    const pos = pointsRef.current.geometry.attributes.position

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3    = i * 3
      const speed = speeds[i]
      const phase = i * 0.5

      pos.array[i3 + 1] = positions[i3 + 1] + Math.sin(t * speed + phase) * 0.15
    }

    pos.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
