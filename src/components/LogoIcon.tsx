
import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 bg-raumfabrik-blue rounded-sm overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-white transform -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 w-2 h-full bg-white transform -translate-x-1/2"></div>
      </div>
      <span className="font-bold text-raumfabrik-blue text-xl">RAUMFABRIK</span>
    </div>
  );
};

export default LogoIcon;
