import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
    const handleScheduleClick = () => {
        document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section bg-vibrant-orange">
            <motion.div 
                className="container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase">Seu novo estilo de vida começa agora!</h2>
                <p className="text-dark-blue font-semibold mt-4 mb-8 text-lg max-w-2xl mx-auto">Não espere mais para investir em você. Dê o primeiro passo hoje mesmo.</p>
                <button 
                    onClick={handleScheduleClick}
                    className="bg-white text-vibrant-orange font-bold uppercase tracking-wider py-4 px-10 rounded-full transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
                >
                    Agendar minha aula experimental
                </button>
            </motion.div>
        </section>
    );
};

export default CtaSection;
