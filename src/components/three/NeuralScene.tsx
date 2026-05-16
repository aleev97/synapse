import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { NeuralNetwork } from './NeuralNetwork'
import { NeuralParticles } from './NeuralParticles'

export function NeuralScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true }}
        dpr={[1, Math.min(2, window.devicePixelRatio)]}
      >
        <Suspense fallback={null}>

          {/* Fog — hace que los nodos lejanos se desvanezcan en la oscuridad */}
          {/* Parámetros: color, distancia donde empieza, distancia donde es opaco */}
          <fog attach="fog" args={['#080B14', 8, 20]} />

          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]}   intensity={1}   color="#58E6D9" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#A371F7" />

          {/* Partículas neuronales — reemplazan las estrellas */}
          <NeuralParticles />

          <NeuralNetwork />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={4}
            maxDistance={15}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />

        </Suspense>
      </Canvas>
    </div>
  )
}