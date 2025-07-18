import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    if (!name || !email || !phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para agendar sua aula.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Agendamento Recebido! ✅",
      description: `Obrigado, ${name}! Entraremos em contato em breve para confirmar sua aula.`,
    });

    e.target.reset();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <img 
        alt="Pessoas se exercitando em uma academia moderna e energética"
        class="absolute inset-0 w-full h-full object-cover z-[-1]"
       src="https://images.unsplash.com/photo-1567175099180-757bca70d462" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
              Transforme seu <span className="text-vibrant-orange">corpo</span>. Comece <span className="text-vibrant-orange">hoje!</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-light-gray max-w-lg mx-auto md:mx-0">
              Chega de desculpas. Na VivaFit, você tem tudo o que precisa para alcançar seus objetivos e construir a sua melhor versão.
            </p>
          </motion.div>
          <motion.div
            id="hero-form"
            className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center text-white mb-4">AGENDE SUA AULA GRÁTIS!</h2>
            <p className="text-center text-text-gray mb-6">Preencha o formulário e garanta sua vaga.</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone (WhatsApp)"
                  className="input-field"
                  required
                />
              </div>
              <button type="submit" className="cta-button w-full !py-4">
                Quero minha aula grátis!
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
