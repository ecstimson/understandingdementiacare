import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase font-medium focus:outline-none";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90 hover:shadow-lg",
    outline: "border border-brand text-brand hover:bg-brand hover:text-white",
    text: "text-brand hover:text-brand/80 p-0 hover:translate-x-1"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;