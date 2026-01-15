import React from 'react';
import { ChevronDown, Menu, X, FileText, Video, Github } from 'lucide-react';
import type { Page } from '../types';
import { SERVICES, SUPPORT_CATEGORIES } from '@/constants';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const RESOURCE_ITEMS = [
    { label: 'Artículos', icon: FileText, page: 'articles-list' as Page },
    { label: 'Videos', icon: Video, page: 'videos-list' as Page },
    { label: 'GitHub', icon: Github, action: () => window.open('https://github.com/arturomendoza3', '_blank') }
  ];

  // Función para hacer scroll a una sección
  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavItem = ({ 
    label, 
    sectionId,
    hasDropdown = false, 
    dropdownItems = [],
    showDropdownIcons = false
  }: { 
    label: string, 
    sectionId?: string,
    hasDropdown?: boolean, 
    dropdownItems?: any[],
    showDropdownIcons?: boolean
  }) => (
    <div className="relative group">
      <button
        onClick={() => { 
          if(sectionId) {
            scrollToSection(sectionId);
          }
        }}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-sky-500 text-slate-600"
      >
        {label}
        {hasDropdown && <ChevronDown className="w-4 h-4" />}
      </button>

      {hasDropdown && dropdownItems.length > 0 && (
        <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-100 shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
          {dropdownItems.map((item, idx) => {
            // Para recursos (con iconos)
            if (showDropdownIcons && item.icon) {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else if (item.page) {
                      onNavigate(item.page);
                    }
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors flex items-center gap-3"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            }
            
            // Para servicios/soporte (sin iconos, solo scroll)
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(sectionId || 'home')}
                className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {item.title || item.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">nazca<span className="text-sky-600">flux</span></span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-sky-500 ${currentPage === 'home' ? 'text-sky-600' : 'text-slate-600'}`}
            >
              Inicio
            </button>
            <NavItem label="Servicios" sectionId="servicios" hasDropdown dropdownItems={SERVICES} />
            <NavItem label="Soporte" sectionId="soporte" hasDropdown dropdownItems={SUPPORT_CATEGORIES} />
            <NavItem label="Recursos" sectionId="recursos" hasDropdown dropdownItems={RESOURCE_ITEMS} showDropdownIcons />
            <NavItem label="Nosotros" sectionId="nosotros" />

            <button
              onClick={() => onNavigate('contact')}
              className="ml-4 px-5 py-2.5 bg-sky-600 text-white text-sm font-semibold rounded-full hover:bg-sky-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              CONTÁCTANOS
            </button>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-6 space-y-3 shadow-lg">
          <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium">Inicio</button>
          
          {/* Servicios */}
          <div className="border-t border-slate-50 pt-3">
            <button onClick={() => { scrollToSection('servicios'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium">Servicios</button>
          </div>

          {/* Soporte */}
          <button onClick={() => { scrollToSection('soporte'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium">Soporte</button>
          
          {/* Recursos */}
          <div className="border-t border-slate-50 pt-3">
            <button onClick={() => { scrollToSection('recursos'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium">Recursos</button>
            <div className="pl-4 mt-2 space-y-2">
              {RESOURCE_ITEMS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else if (item.page) {
                      onNavigate(item.page);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-1 text-sm text-slate-600"
                >
                  → {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <button onClick={() => { scrollToSection('nosotros'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium">Nosotros</button>
          <button onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-sky-600 text-white rounded-lg font-bold">CONTÁCTANOS</button>
        </div>
      )}
    </header>
  );
};

export default Header;