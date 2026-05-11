// Superficie elevada que contiene contenido.
// Uso composición — Card, CardHeader, CardContent, CardFooter.

interface CardProps {
  children:  React.ReactNode
  className?: string
  hoverable?: boolean  // activa efecto hover con borde iluminado
  onClick?:   () => void
}

export function Card({ children, className = '', hoverable, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        surface p-4
        ${hoverable ? 'hover:border-synapse-cyan/30 hover:glow-cyan cursor-pointer' : ''}
        ${onClick    ? 'cursor-pointer' : ''}
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Subcomponentes — separación clara de responsabilidades visuales
export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-3 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-sm text-synapse-muted ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mt-4 pt-3 border-t border-synapse-border flex items-center justify-between ${className}`}>
      {children}
    </div>
  )
}