import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  borderTop?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, borderTop = true }) => {
  return (
    <section 
      id={id} 
      className={`relative px-6 py-20 md:py-32 max-w-7xl mx-auto ${borderTop ? 'border-t border-noir-border' : ''} ${className}`}
    >
      {children}
    </section>
  );
};