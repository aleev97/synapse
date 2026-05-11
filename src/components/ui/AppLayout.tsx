// Este componente envuelve toda la app.
// Define la estructura base: sidebar + área principal.
// Separarlo en su propio componente me permite:
// 1. Reutilizarlo en todas las rutas
// 2. Agregar transiciones de página en un solo lugar
// 3. Mantener App.tsx limpio

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-synapse-bg text-synapse-text flex">

      {/* Sidebar — placeholder por ahora, lo construyo en la próxima sesión */}
      <aside className="w-64 border-r border-synapse-border flex-shrink-0">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-synapse-cyan/10 border border-synapse-cyan/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-synapse-cyan animate-pulse-slow" />
            </div>
            <span className="font-medium tracking-wide text-synapse-text">
              Synapse
            </span>
          </div>

          {/* Nav placeholder */}
          <nav className="space-y-1">
            {['Graph', 'Notes', 'Settings'].map((item) => (
              <button
                key={item}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-synapse-muted hover:text-synapse-text hover:bg-synapse-border/50 transition-colors duration-150"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Área principal */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>

    </div>
  )
}