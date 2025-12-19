import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-poppins font-bold tracking-tight transition-all relative hover:scale-105 backdrop-blur-sm transparent rounded-lg hover:-translate-y-0.5 active:scale-95 active:-translate-y-px';
  
  const variantStyles = {
    primary: 'bg-dark text-light hover:bg-light hover:text-dark',
    secondary: 'bg-light text-dark hover:bg-dark hover:text-light',
    outline: 'bg-light text-dark hover:bg-dark hover:text-light',
    accent: 'text-light hover:opacity-90',
    blue: 'text-light hover:opacity-90',
    green: 'text-light hover:opacity-90',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <><style>{`     
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .button-sheen:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className, 'button-sheen')}
      style={
        variant === 'accent' ? {backgroundColor: 'var(--color-accent-orange)', borderColor: 'var(--color-accent-orange)'} :
        variant === 'blue' ? {backgroundColor: 'var(--color-accent-blue)', borderColor: 'var(--color-accent-blue)'} :
        variant === 'green' ? {backgroundColor: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)'} :
        {}
      }
      {...props}
    />
    </>
  );
}
