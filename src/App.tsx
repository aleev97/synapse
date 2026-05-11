import { AppLayout } from './components/ui/AppLayout'
import { Button, Badge, Card, CardHeader, CardContent, CardFooter } from './components/ui'

function App() {
  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* Botones */}
        <section className="space-y-3">
          <p className="text-xs text-synapse-muted uppercase tracking-widest">Buttons</p>
          <div className="flex items-center gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" isLoading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-3">
          <p className="text-xs text-synapse-muted uppercase tracking-widest">Badges</p>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="cyan">Neural</Badge>
            <Badge variant="blue">Active</Badge>
            <Badge variant="purple">Special</Badge>
            <Badge variant="success">Connected</Badge>
            <Badge variant="warning">Pending</Badge>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-3">
          <p className="text-xs text-synapse-muted uppercase tracking-widest">Cards</p>
          <div className="grid grid-cols-2 gap-4 max-w-2xl">
            <Card hoverable>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-synapse-text">Idea #001</span>
                  <Badge variant="cyan">Neural</Badge>
                </div>
              </CardHeader>
              <CardContent>
                Las ideas se conectan como neuronas en una red viva de pensamientos.
              </CardContent>
              <CardFooter>
                <span className="text-xs text-synapse-muted">3 conexiones</span>
                <Button variant="ghost" size="sm">Ver →</Button>
              </CardFooter>
            </Card>

            <Card hoverable>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-synapse-text">Idea #002</span>
                  <Badge variant="purple">Special</Badge>
                </div>
              </CardHeader>
              <CardContent>
                Cada nota es un nodo neuronal con conexiones hacia otras ideas del grafo.
              </CardContent>
              <CardFooter>
                <span className="text-xs text-synapse-muted">7 conexiones</span>
                <Button variant="ghost" size="sm">Ver →</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

      </div>
    </AppLayout>
  )
}

export default App