import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allows specifying the HTML tag, defaults to 'section'
}

export function SectionContainer({ children, className, as: Tag = 'section', ...props }: SectionContainerProps) {
  return (
    <Tag className={cn('py-16 sm:py-24', className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
