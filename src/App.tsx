import { AppLayout }   from './components/ui/AppLayout'
import { NeuralScene } from './components/three/NeuralScene'

function App() {
  return (
    <AppLayout>
      {/* La escena 3D ocupa todo el espacio disponible */}
      <div className="w-full h-screen">
        <NeuralScene />
      </div>
    </AppLayout>
  )
}

export default App