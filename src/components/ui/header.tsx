import { cn } from '@/lib/shadcn-ui';
import React from 'react';

interface HeaderProps {
  headerTitle: string;
  IconComponent: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
  className?: string;
}

export const Header = ({ headerTitle, IconComponent, className, children }: HeaderProps) => {
  return (
    <div className={cn('flex justify-between items-center ps-4', className)}>
      <div className="flex items-center gap-2 ">
        <IconComponent className="w-5 h-5" />
        <h3 className="text-lg font-bold">{headerTitle}</h3>
      </div>
      {children}
    </div>
  );
};
