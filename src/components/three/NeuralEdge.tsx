import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface NeuralEdgeProps {
  start:  [number, number, number]
  end:    [number, number, number]
  color?: string
  opacity?: number
}

export function NeuralEdge({
  start,
  end,
  color   = '#58E6D9',
  opacity = 0.2,
}: NeuralEdgeProps) {
  const ref = useRef<THREE.LineSegments>(null)

  // useMemo evita recalcular la geometría en cada render
  // Solo se recalcula si cambian start o end
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ]
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [start, end])

  // Pulso de opacidad — la conexión "late" como una sinapsis
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const phase = start[0] * end[1]  // fase única por conexión
    const mat = ref.current.material as THREE.LineBasicMaterial
    mat.opacity = opacity + Math.sin(t * 1.2 + phase) * (opacity * 0.5)
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        linewidth={1}
      />
    </lineSegments>
  )
}