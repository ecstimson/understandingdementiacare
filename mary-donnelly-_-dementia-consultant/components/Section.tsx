import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', dark = false }) => {
  return (
    <section className={`py-20 md:py-32 ${dark ? 'bg-stone-100' : ''} ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;