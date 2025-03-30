import { cn } from '@/lib/shadcn-ui';
import React from 'react';

interface HeaderProps {
  headerTitle: string;
  IconComponent: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export const Header = ({
  headerTitle,
  IconComponent,
  className,
  iconClassName,
  children,
}: HeaderProps) => {
  return (
    <div className={cn('flex justify-between items-center ps-4', className)}>
      <div className="flex items-center gap-2 ">
        <IconComponent className={cn('w-5 h-5', iconClassName)} />
        <h3 className="text-lg font-bold">{headerTitle}</h3>
      </div>
      {children}
    </div>
  );
};
