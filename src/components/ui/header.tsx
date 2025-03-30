import React from 'react';

interface HeaderProps {
  headerTitle: string;
  IconComponent: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

export const Header = ({ headerTitle, IconComponent, children }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 ">
        <IconComponent className="w-5 h-5" />
        <h3 className="text-lg font-bold">{headerTitle}</h3>
      </div>
      {children}
    </div>
  );
};
