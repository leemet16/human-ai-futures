import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 font-sans text-sm uppercase tracking-wider transition-all duration-300 border sharp-corners group";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-transparent hover:text-white",
    secondary: "bg-transparent text-white border-noir-border hover:border-white",
    outline: "bg-transparent text-zinc-400 border-zinc-700 hover:text-white hover:border-white"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    // Intercept internal hash links to provide smooth scrolling
    // and prevent 'refused to connect' errors in preview environments
    const isHashLink = href.startsWith('#');
    const { onClick: propsOnClick, ...restProps } = props as any;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHashLink) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Trigger any passed onClick handler (e.g., closing a mobile menu)
      if (propsOnClick) {
        propsOnClick(e);
      }
    };

    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};