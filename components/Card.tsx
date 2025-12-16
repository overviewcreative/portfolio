import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className, href }: CardProps) {
  const content = (
    <div
      className={cn(
        'border-4 p-6 transition-all duration-300',
        href && 'hover:cursor-pointer hover:-translate-y-1',
        className
      )}
      style={{
        backgroundColor: 'var(--color-light)',
        borderColor: 'var(--color-dark)',
      }}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
