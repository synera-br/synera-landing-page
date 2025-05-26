import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  description?: string;
}

export function SectionTitle({ children, className, description, ...props }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl',
          className
        )}
        {...props}
      >
        {children}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
