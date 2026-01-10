
//import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import SupportSection from './components/SupportSection';
import ResourcesSection from './components/ResourcesSection';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle simple routing via state
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onContactClick={() => setCurrentPage('contact')} />
            <ServicesSection />
            <SupportSection />
            <ResourcesSection />
          </>
        );
      case 'services':
        return <ServicesSection />;
      case 'support':
        return <SupportSection />;
      case 'resources':
        return <ResourcesSection />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactForm />;
      default:
        return <Hero onContactClick={() => setCurrentPage('contact')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow pt-16">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
