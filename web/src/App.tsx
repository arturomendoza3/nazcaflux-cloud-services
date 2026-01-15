import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import SupportSection from './components/SupportSection';
import ResourcesSection from './components/ResourcesSection';
import ArticlesListPage from './components/ArticlesListPage';
import ArticleView from './components/ArticleView';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string | null>(null);

  // Manejar clic en un artículo específico
  const handleArticleClick = (slug: string) => {
    setCurrentArticleSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Volver desde un artículo a la lista
  const handleBackFromArticle = () => {
    setCurrentArticleSlug(null);
    setCurrentPage('articles-list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegación general
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setCurrentArticleSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar clic en recursos desde la sección Home
  const handleResourceClick = (type: string, link: string) => {
    const typeLower = type.toLowerCase();
    
    if (typeLower.includes('artículo') || typeLower.includes('articulo')) {
      // Si es artículo, extraer el slug del link o ir a la lista
      if (link && !link.startsWith('http')) {
        // Es un slug directo
        handleArticleClick(link);
      } else {
        // Ir a la lista de artículos
        handleNavigate('articles-list');
      }
    } else if (typeLower.includes('video')) {
      handleNavigate('videos-list');
    } else if (link && link.startsWith('http')) {
      // Link externo (GitHub, etc)
      window.open(link, '_blank');
    }
  };

  // Renderizar contenido según la página actual
  const renderContent = () => {
    // Si hay un artículo seleccionado, mostrarlo
    if (currentArticleSlug) {
      return <ArticleView onBack={handleBackFromArticle} slug={currentArticleSlug} />;
    }

    // Si no, mostrar la página correspondiente
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onContactClick={() => handleNavigate('contact')} />
            <ServicesSection />
            <SupportSection />
            <ResourcesSection 
              onNavigate={handleNavigate}
              onResourceClick={handleResourceClick}
            />
            <AboutUs />
          </>
        );
      
      case 'services':
        return <ServicesSection />;
      
      case 'support':
        return <SupportSection />;
      
      case 'resources':
        // Si accede desde el menú a "Recursos", llevarlo a home y scroll
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
        // TODO: Crear componente VideosListPage
        return (
          <div className="py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Videos (Próximamente)</h1>
            <p className="text-slate-600">Esta sección estará disponible pronto.</p>
          </div>
        );
      
      case 'about':
        return <AboutUs />;
      
      case 'contact':
        return <ContactForm />;
      
      default:
        return (
          <>
            <Hero onContactClick={() => handleNavigate('contact')} />
            <ServicesSection />
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
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow pt-16">
        {renderContent()}
      </main>
      {/* Solo mostrar footer si no estamos viendo un artículo */}
      {!currentArticleSlug && <Footer onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;
