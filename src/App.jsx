import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>VivaFit Academia - Transforme seu corpo. Comece hoje!</title>
        <meta
          name="description"
          content="Junte-se à VivaFit e transforme seu corpo e sua vida. Oferecemos equipamentos de ponta, treinos personalizados e instrutores certificados. Agende sua aula experimental gratuita!"
        />
      </Helmet>
      <div className="bg-dark-blue text-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Testimonials />
          <CtaSection />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
