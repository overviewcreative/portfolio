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
  const baseStyles = 'font-mono font-bold tracking-wider uppercase border-2 transition-all relative hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:-translate-y-px';
  
  const variantStyles = {
    primary: 'bg-dark text-light border-dark hover:bg-light hover:text-dark',
    secondary: 'bg-light text-dark border-dark hover:bg-dark hover:text-light',
    outline: 'bg-light text-dark border-dark hover:bg-dark hover:text-light',
    accent: 'text-light border-orange-600 hover:border-orange-500',
    blue: 'text-light border-blue-600 hover:border-blue-500',
    green: 'text-light border-green-600 hover:border-green-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      style={
        variant === 'accent' ? {backgroundColor: 'var(--color-accent-orange)', borderColor: 'var(--color-accent-orange)'} :
        variant === 'blue' ? {backgroundColor: 'var(--color-accent-blue)', borderColor: 'var(--color-accent-blue)'} :
        variant === 'green' ? {backgroundColor: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)'} :
        {}
      }
      {...props}
    />
  );
}
