import React, { useRef, useState } from 'react';
import { useStore } from '../store/useStore';

const MagneticCategoryCard = ({ title, icon: Icon, neonColor, description }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const setActiveCategoryColor = useStore((state) => state.setActiveCategoryColor);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (adjust the divisor to increase/decrease the magnetic pull)
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseEnter = () => {
    setActiveCategoryColor(neonColor);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setActiveCategoryColor(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.1s ease-out' }}
      className={`
        glass-panel relative flex flex-col items-center justify-center p-8 
        cursor-pointer rounded-2xl border-t border-l border-white/40 dark:border-white/10 
        bg-white/60 dark:bg-white/5 backdrop-blur-xl overflow-hidden group h-64
      `}
    >
      {/* Dynamic Neon Glow Behind the Glass */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ backgroundColor: neonColor }}
      />

      <Icon size={48} className="text-slate-800 dark:text-[#f0f4f8] mb-4 group-hover:scale-110 transition-transform duration-300 pointer-events-none" style={{ color: neonColor }} />
      <h2 className="text-xl font-bold text-slate-800 dark:text-[#f0f4f8] tracking-wider uppercase z-10 text-center mb-2 pointer-events-none">
        {title}
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center z-10 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
        {description}
      </p>
    </div>
  );
};

export default MagneticCategoryCard;
