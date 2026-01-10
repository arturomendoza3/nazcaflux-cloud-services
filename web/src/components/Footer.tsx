
import React from 'react';
import type { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">nazca<span className="text-sky-600">flux</span></span>
            </button>
            <p className="max-w-sm text-slate-400 leading-relaxed mb-6">
              Líderes en servicios cloud y automatización de procesos para la era digital. Innovación, seguridad y escalabilidad garantizada.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-600 transition-colors">in</span>
              <span className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-600 transition-colors">tw</span>
              <span className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-600 transition-colors">gh</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="hover:text-sky-400 transition-colors">Inicio</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-sky-400 transition-colors">Servicios</button></li>
              <li><button onClick={() => onNavigate('support')} className="hover:text-sky-400 transition-colors">Soporte</button></li>
              <li><button onClick={() => onNavigate('resources')} className="hover:text-sky-400 transition-colors">Recursos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li>info@nazcaflux.com</li>
              <li>+51 987 654 321</li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Nazcaflux.com - Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacidad</button>
            <button className="hover:text-white transition-colors">Términos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
