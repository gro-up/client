import { cn } from '@/utils/shadcn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  containerTag: React.ElementType<
    Omit<React.HTMLAttributes<HTMLElement>, keyof React.DOMAttributes<HTMLElement>>
  >;
}

export const Container = ({ children, className, containerTag }: ContainerProps) => {
  const Container = containerTag ?? 'div';
  return <Container className={cn('rounded-md relative', className)}>{children}</Container>;
};
