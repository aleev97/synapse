import { AppLayout } from './components/ui/AppLayout'

function App() {
  return (
    <AppLayout>
      {/* Contenido temporal para verificar que todo funciona */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-light text-gradient">
            Synapse
          </h1>
          <p className="text-synapse-muted text-sm">
            Una red de ideas vivas
          </p>
          <div className="w-2 h-2 rounded-full bg-synapse-cyan mx-auto animate-pulse-slow" />
        </div>
      </div>
    </AppLayout>
  )
}

export default App