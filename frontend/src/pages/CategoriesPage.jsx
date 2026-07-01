import React from 'react';
import { Cpu, Headphones, Camera, Watch, Gamepad2, Layers } from 'lucide-react';
import MagneticCategoryCard from '../components/MagneticCategoryCard';

const CategoriesPage = () => {
  const categories = [
    { title: "Compute & Workstations", icon: Cpu, color: "#00f0ff", description: "Ultra-high performance rigs and portable powerhouses for the next generation of computing." },
    { title: "Spatial Acoustics", icon: Headphones, color: "#a777e3", description: "Immersive audio equipment engineered for precision, clarity, and zero-gravity comfort." },
    { title: "Optical & Cinematic", icon: Camera, color: "#00f0ff", description: "Capture the universe with state-of-the-art cinematic lenses and drones." },
    { title: "Wearables & Telemetry", icon: Watch, color: "#a777e3", description: "Advanced biometric tracking and seamless connectivity seamlessly wrapped around your wrist." },
    { title: "Tactical Interfaces", icon: Gamepad2, color: "#00f0ff", description: "Esports-ready gaming gear with hyper-responsive mechanical precision." },
    { title: "Modular Upgrades", icon: Layers, color: "#a777e3", description: "Expand your capabilities with modular tech components and futuristic accessories." },
  ];

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto z-10 flex flex-col animate-fade-in pointer-events-none">
      <div className="text-center mb-16 pointer-events-auto">
        <h1 className="text-5xl md:text-6xl font-black text-slate-800 dark:text-white uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple inline-block">
          Explore Sectors
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Navigate our spatial HUD to discover the absolute pinnacle of technological engineering. Select a sector to begin.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {categories.map((cat, index) => (
            <MagneticCategoryCard 
              key={index} 
              title={cat.title} 
              icon={cat.icon} 
              neonColor={cat.color} 
              description={cat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
