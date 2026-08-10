import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;

      if (totalScroll > 0) {
        setScrollPercentage((scrollTop / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      <div
        style={{ width: `${scrollPercentage}%` }}
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 shadow-md shadow-cyan-500/50 transition-all duration-75"
      />
    </div>
  );
};
