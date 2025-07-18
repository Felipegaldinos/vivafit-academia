import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    toast({
      title: 'Fale conosco no WhatsApp!',
      description: '🚧 Esta funcionalidade ainda não foi implementada—mas você pode solicitar no próximo prompt! 🚀',
    });
  };

  return (
    <a
      href="#"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg z-40 transform hover:scale-110 transition-transform duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageSquare size={32} />
    </a>
  );
};

export default WhatsAppButton;
