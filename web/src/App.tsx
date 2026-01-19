import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import SupportSection from './components/SupportSection';
import ResourcesSection from './components/ResourcesSection';
import ArticlesListPage from './components/ArticlesListPage';
import ArticleView from './components/ArticleView';
import ServicesListPage from './components/ServicesListPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string | null>(null);
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(null);

  // === NAVEGACIÓN GENERAL ===
  const handleNavigate = React.useCallback((page: Page) => {
    setCurrentPage(page);
    setCurrentArticleSlug(null);
    setCurrentServiceSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // === ARTÍCULOS ===
  const handleArticleClick = React.useCallback((slug: string) => {
    setCurrentArticleSlug(slug);
    setCurrentServiceSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackFromArticle = React.useCallback(() => {
    setCurrentArticleSlug(null);
    setCurrentPage('articles-list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // === SERVICIOS ===
  const handleServiceClick = React.useCallback((slug: string) => {
    setCurrentServiceSlug(slug);
    setCurrentArticleSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackFromService = React.useCallback(() => {
    setCurrentServiceSlug(null);
    setCurrentPage('services-list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Manejar clic en recursos desde la sección Home
  const handleResourceClick = React.useCallback((type: string, link: string) => {
    const typeLower = type.toLowerCase();
    
    if (typeLower.includes('artículo') || typeLower.includes('articulo')) {
      if (link && !link.startsWith('http')) {
        handleArticleClick(link);
      } else {
        handleNavigate('articles-list');
      }
    } else if (typeLower.includes('video')) {
      handleNavigate('videos-list');
    } else if (link && link.startsWith('http')) {
      window.open(link, '_blank');
    }
  }, [handleArticleClick, handleNavigate]);

  // Renderizar contenido según la página actual
  const renderContent = () => {
    // Si hay un artículo seleccionado
    if (currentArticleSlug) {
      return <ArticleView onBack={handleBackFromArticle} slug={currentArticleSlug} />;
    }

    // Si hay un servicio seleccionado
    if (currentServiceSlug) {
      return (
        <ServiceDetailPage 
          slug={currentServiceSlug} 
          onBack={handleBackFromService}
          onContact={() => handleNavigate('contact')}
        />
      );
    }

    // Páginas normales
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onContactClick={() => handleNavigate('contact')} />
            <ServicesSection onServiceClick={handleServiceClick} />
            <SupportSection />
            <ResourcesSection 
              onNavigate={handleNavigate}
              onResourceClick={handleResourceClick}
            />
            <AboutUs />
          </>
        );
      
      case 'services':
        setTimeout(() => {
          handleNavigate('home');
          setTimeout(() => {
            document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }, 0);
        return null;

      case 'services-list':
        return <ServicesListPage onServiceClick={handleServiceClick} />;
      
      case 'support':
        setTimeout(() => {
          handleNavigate('home');
          setTimeout(() => {
            document.getElementById('soporte')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }, 0);
        return null;
      
      case 'resources':
        setTimeout(() => {
          handleNavigate('home');
          setTimeout(() => {
            document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }, 0);
        return null;
      
      case 'articles-list':
        return <ArticlesListPage onArticleClick={handleArticleClick} />;
      
      case 'videos-list':
        return (
          <div className="py-24 text-center min-h-screen flex items-center justify-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Videos (Próximamente)</h1>
              <p className="text-slate-600">Esta sección estará disponible pronto.</p>
            </div>
          </div>
        );
      
      case 'about':
        setTimeout(() => {
          handleNavigate('home');
          setTimeout(() => {
            document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }, 0);
        return null;
      
      case 'contact':
        return <ContactForm />;
      
      default:
        return (
          <>
            <Hero onContactClick={() => handleNavigate('contact')} />
            <ServicesSection onServiceClick={handleServiceClick} />
            <SupportSection />
            <ResourcesSection 
              onNavigate={handleNavigate}
              onResourceClick={handleResourceClick}
            />
            <AboutUs />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
        onServiceClick={handleServiceClick}
      />
      <main className="flex-grow pt-16">
        {renderContent()}
      </main>
      {!currentArticleSlug && !currentServiceSlug && <Footer onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;