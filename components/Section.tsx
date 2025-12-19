import { Separator } from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Section({
  children,
  className,
  title,
  description,
}: SectionProps) {
  return (
    <section className={cn('py-12 md:py-16', className)}>
      {(title || description) && (
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-slate-600 max-w-2xl">
              {description}
            </p>
          )}
          <Separator className="mt-6 h-1 bg-slate-200" />
        </div>
      )}
      {children}
    </section>
  );
}
