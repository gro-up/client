import { cn } from '@/utils/shadcn';

export const ShadowContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={cn('shadow-md rounded-md bg-gray-50 dark:bg-gray-900', className)}>
    {children}
  </section>
);
