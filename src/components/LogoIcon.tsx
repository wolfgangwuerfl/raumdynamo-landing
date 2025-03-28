
import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/48a81688-8f24-40d4-b446-df073b4e51c5.png" 
        alt="Raumfabrik Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default LogoIcon;
