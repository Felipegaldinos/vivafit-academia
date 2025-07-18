import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, Instagram, Facebook } from 'lucide-react';

const Location = () => {
    const handleSocialClick = () => {
        alert("🚧 Funcionalidade de rede social ainda não implementada!");
    };
    
  return (
    <section id="location" className="section bg-card-bg">
      <div className="container">
        <div className="section-title">
          <h2>Onde nos <span className="highlight">Encontrar</span></h2>
          <p>Estamos em uma localização de fácil acesso, prontos para te receber!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-start gap-4">
                    <MapPin className="text-vibrant-orange w-8 h-8 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-white text-xl">Endereço</h3>
                        <p className="text-text-gray">Avenida Principal, 456 - Bairro Fitness <br /> Cidade Ativa, CA - 12345-678</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="text-vibrant-orange w-8 h-8 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-white text-xl">Telefone</h3>
                        <p className="text-text-gray">(11) 4567-8901</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Clock className="text-vibrant-orange w-8 h-8 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-white text-xl">Horário de Funcionamento</h3>
                        <p className="text-text-gray">Seg - Sex: 06:00 - 23:00 <br /> Sábados: 08:00 - 18:00</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                    <a href="#" onClick={(e) => {e.preventDefault(); handleSocialClick()}} className="text-text-gray hover:text-vibrant-orange transition-colors"><Instagram size={28} /></a>
                    <a href="#" onClick={(e) => {e.preventDefault(); handleSocialClick()}} className="text-text-gray hover:text-vibrant-orange transition-colors"><Facebook size={28} /></a>
                </div>
            </motion.div>
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
             >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Localização da VivaFit Academia"
                ></iframe>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
