
import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/Logo-Raumfabrik-RGB.png"
        alt="Raumfabrik Logo"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default LogoIcon;
