import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
    const { toast } = useToast();

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScheduleClick = () => {
      document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-dark-blue/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-2 text-2xl font-black text-white">
          <Dumbbell className="text-vibrant-orange" size={28} />
          VivaFit
        </a>
        <div className="hidden md:flex items-center gap-6">
            <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="text-light-gray hover:text-vibrant-orange transition-colors duration-300 font-semibold">Benefícios</a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-light-gray hover:text-vibrant-orange transition-colors duration-300 font-semibold">Depoimentos</a>
            <a href="#location" onClick={(e) => handleNavClick(e, 'location')} className="text-light-gray hover:text-vibrant-orange transition-colors duration-300 font-semibold">Localização</a>
        </div>
        <button onClick={handleScheduleClick} className="cta-button hidden md:inline-block">
          Agende sua Aula
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
