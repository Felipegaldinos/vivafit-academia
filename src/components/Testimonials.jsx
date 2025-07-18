import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Juliana Almeida",
    text: "A VivaFit mudou minha vida! Os instrutores são super atenciosos e os equipamentos são fantásticos. Em 3 meses, já vejo resultados incríveis!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Ricardo Oliveira",
    text: "Nunca gostei de academia, mas a VivaFit é diferente. O ambiente é motivador e os treinos personalizados fazem toda a diferença. Recomendo demais!",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    name: "Carla Souza",
    text: "Além da estrutura impecável, o que mais me conquistou foi a comunidade. Fiz amigos e me sinto em casa. Treinar se tornou a melhor parte do meu dia.",
    image: "https://images.unsplash.com/photo-1594744800847-f6083af37413"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + testimonials.length) % testimonials.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);


  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-title">
          <h2>O que nossos <span className="highlight">membros</span> dizem</h2>
          <p>Resultados reais de pessoas que transformaram suas vidas conosco.</p>
        </div>
        <div className="relative h-80 md:h-64 max-w-3xl mx-auto flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full bg-card-bg p-8 rounded-lg shadow-xl border border-blue-900 flex flex-col md:flex-row items-center gap-8"
                >
                    <img  alt={`Foto de ${testimonials[page].name}`} class="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-vibrant-orange" src="https://images.unsplash.com/photo-1648134859177-d549c878346e" />
                    <div className="text-center md:text-left">
                        <p className="text-light-gray italic">"{testimonials[page].text}"</p>
                        <h4 className="mt-4 font-bold text-white text-lg">{testimonials[page].name}</h4>
                        <div className="flex justify-center md:justify-start mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <button onClick={() => paginate(-1)} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-vibrant-orange p-2 rounded-full z-10 hover:scale-110 transition-transform">
                <ChevronLeft size={24} />
            </button>
            <button onClick={() => paginate(1)} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-vibrant-orange p-2 rounded-full z-10 hover:scale-110 transition-transform">
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
