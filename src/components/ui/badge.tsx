// Etiqueta pequeña para categorías, estados, y tags — aparece en todas partes en Synapse.

type BadgeVariant = 'default' | 'cyan' | 'blue' | 'purple' | 'success' | 'warning'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-synapse-border/50   text-synapse-muted  border-synapse-border',
  cyan:    'bg-synapse-cyan/10     text-synapse-cyan   border-synapse-cyan/30',
  blue:    'bg-synapse-blue/10     text-synapse-blue   border-synapse-blue/30',
  purple:  'bg-synapse-purple/10   text-synapse-purple border-synapse-purple/30',
  success: 'bg-emerald-500/10      text-emerald-400    border-emerald-500/30',
  warning: 'bg-amber-500/10        text-amber-400      border-amber-500/30',
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-0.5
        text-xs font-medium rounded-full
        border
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}