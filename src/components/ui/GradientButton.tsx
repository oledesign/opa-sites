import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className = '', 
  type = 'button',
  color = '#0C7F40',
  ...props 
}) => {
  return (
    <button 
      type={type}
      className={`relative inline-flex items-center justify-start p-0.5 overflow-hidden text-sm font-semibold rounded-full group ${className}`}
      {...props}
    >
      <span 
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
        style={{ backgroundColor: color }}
      />
      <span 
        className="relative inline-flex items-center gap-2 py-2 px-5 transition-all duration-500 ease-out rounded-full text-inherit"
        style={{ 
          borderColor: color, 
          borderWidth: '2px', 
          color: color,
          '--hover-color': 'white'
        } as React.CSSProperties}
      >
        <span className="group-hover:text-white transition-colors duration-500">
          {children}
        </span>
      </span>
    </button>
  );
};

export default GradientButton;