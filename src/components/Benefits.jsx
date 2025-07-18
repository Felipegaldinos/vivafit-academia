import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, HeartPulse, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Dumbbell size={40} className="text-vibrant-orange" />,
    title: 'Equipamentos de Última Geração',
    description: 'Treine com os melhores e mais modernos equipamentos do mercado.'
  },
  {
    icon: <Zap size={40} className="text-vibrant-orange" />,
    title: 'Planos Acessíveis',
    description: 'Planos que cabem no seu bolso, sem taxas escondidas ou burocracia.'
  },
  {
    icon: <HeartPulse size={40} className="text-vibrant-orange" />,
    title: 'Treinos Personalizados',
    description: 'Receba um plano de treino exclusivo para seus objetivos e necessidades.'
  },
  {
    icon: <Users size={40} className="text-vibrant-orange" />,
    title: 'Instrutores Certificados',
    description: 'Nossa equipe está pronta para te motivar e garantir a execução correta dos exercícios.'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.1
    }
  })
};

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-card-bg">
      <div className="container">
        <div className="section-title">
          <h2>Por que escolher a <span className="highlight">VivaFit</span>?</h2>
          <p>Tudo o que você precisa para uma transformação completa e duradoura.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="bg-dark-blue p-8 rounded-lg text-center border border-blue-900 shadow-lg transition-transform duration-300 hover:-translate-y-2"
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-text-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
