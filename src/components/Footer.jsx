import React from 'react';
import { Dumbbell } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-blue border-t border-blue-900 py-8">
            <div className="container text-center text-text-gray">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Dumbbell className="text-vibrant-orange" />
                    <span className="font-black text-white text-xl">VivaFit</span>
                </div>
                <p>&copy; {new Date().getFullYear()} VivaFit Academia. Todos os direitos reservados.</p>
                <p className="text-sm mt-2">
                    <a href="#" className="hover:text-vibrant-orange transition-colors">Política de Privacidade</a> | <a href="#" className="hover:text-vibrant-orange transition-colors">Termos de Uso</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
