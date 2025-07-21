import React from 'react';
import Header from './components/layout/header';
// import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
// import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
// import ContactSection from './components/sections/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils/helpers';

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection scrollToSection={scrollToSection} />
        <ServicesSection />
        {/* <WhyChooseUsSection />
        <ContactSection /> */}
      </main>

      {/* <Footer />  */}
    </div>
  );
}