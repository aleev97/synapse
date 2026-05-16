import { useMemo } from 'react'
import { NeuralNode } from './NeuralNode'
import { NeuralEdge } from './NeuralEdge'

// Definimos los nodos con posición y color
// En la Fase 4 esto vendrá del store de Zustand (notas reales)
// Por ahora usamos datos estáticos para construir la visualización

const NODES = [
  { id: 0, position: [ 0.0,  0.0,  0.0] as [number,number,number], color: '#58E6D9', size: 0.22 },
  { id: 1, position: [ 1.2,  0.8, -0.8] as [number,number,number], color: '#388BFD', size: 0.16 },
  { id: 2, position: [-1.2,  0.9,  0.4] as [number,number,number], color: '#A371F7', size: 0.18 },
  { id: 3, position: [ 1.0, -1.0,  0.8] as [number,number,number], color: '#58E6D9', size: 0.14 },
  { id: 4, position: [-1.0, -0.8, -1.0] as [number,number,number], color: '#388BFD', size: 0.15 },
  { id: 5, position: [ 0.3,  1.6,  0.5] as [number,number,number], color: '#A371F7', size: 0.13 },
  { id: 6, position: [-0.5, -1.5,  0.2] as [number,number,number], color: '#58E6D9', size: 0.17 },
  { id: 7, position: [ 1.6, -0.3, -0.5] as [number,number,number], color: '#388BFD', size: 0.12 },
]

// Conexiones entre nodos — pares de IDs
const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 5], [1, 7], [2, 4], [2, 6],
  [3, 7], [5, 6], [4, 6],
]

export function NeuralNetwork() {
  // useMemo para no recalcular las conexiones en cada render
  const edges = useMemo(() =>
    EDGES.map(([a, b]) => ({
      id:    `${a}-${b}`,
      start: NODES[a].position,
      end:   NODES[b].position,
      color: NODES[a].color,
    })),
  [])

  return (
    <group position={[-0.5, 0, 0]}>
      {/* Renderizamos las conexiones primero (detrás de los nodos) */}
      {edges.map((edge) => (
        <NeuralEdge
          key={edge.id}
          start={edge.start}
          end={edge.end}
          color={edge.color}
          opacity={0.25}
        />
      ))}

      {/* Luego los nodos encima */}
      {NODES.map((node) => (
        <NeuralNode
          key={node.id}
          position={node.position}
          color={node.color}
          size={node.size}
        />
      ))}
    </group>
  )
}