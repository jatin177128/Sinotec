import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ContactSection from './components/sections/ContactSection'; 
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils/helpers';

// Home Page Component
function HomePage({ scrollToSection }) {
  return (
    <main>
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <WhyChooseUsSection />
    </main>
  );
}

// Why Choose Us Page Component
function WhyChooseUsPage() {
  return (
    <main className="">
      <div className="container mx-auto px-4 py-8">

        <WhyChooseUsSection />
      </div>
    </main>
  );
}

// Contact Page Component
function ContactPage() {
  return (
    <main >
      <div className="container mx-auto px-4 py-8">
        
        <ContactSection />
      </div>
    </main>
  );
}

export default function App() {
  const activeSection = useActiveSection();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                activeSection={activeSection} 
                scrollToSection={scrollToSection} 
              />
            } 
          />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}