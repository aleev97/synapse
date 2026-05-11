// Componente base de botón con 3 variantes y 3 tamaños.
// Principio: un solo componente, múltiples apariencias via props.

import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?:    ButtonSize
  isLoading?: boolean
}

// Separo los estilos en objetos
const variants: Record<ButtonVariant, string> = {
  primary:   'bg-synapse-cyan text-synapse-bg font-medium hover:opacity-90 glow-cyan',
  secondary: 'bg-synapse-surface text-synapse-text border border-synapse-border hover:border-synapse-cyan/50 hover:text-synapse-cyan',
  ghost:     'text-synapse-muted hover:text-synapse-text hover:bg-synapse-border/30',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-4 py-2   text-sm rounded-xl',
  lg: 'px-6 py-3   text-base rounded-xl',
}

// forwardRef permite que el componente reciba refs desde afuera. Es útil para casos como focus, animaciones, etc.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, children, className = '', disabled, ...props }, ref) => {

    const base = 'inline-flex items-center justify-center gap-2 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-synapse-cyan/50'

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading && (
          <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'