
import React from 'react';
import { SERVICES } from '@/constants';

interface ServicesSectionProps {
  onServiceClick?: (slug: string) => void;
}

// Mapeo de títulos a slugs
const TITLE_TO_SLUG: { [key: string]: string } = {
  'Consultoría DevOps': 'consultoria-devops',
  'Automatización Infraestructura': 'automatizacion-infraestructura',
  'Observabilidad Open-Source': 'observabilidad-open-source',
  'Migration Assessment': 'migration-assessment',
  'Consultoría y Seguridad Perimetral': 'seguridad-perimetral',
  'Training Especializado': 'training-especializado'
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  
  const handleServiceCardClick = (serviceTitle: string) => {
    const slug = TITLE_TO_SLUG[serviceTitle];
    if (slug && onServiceClick) {
      onServiceClick(slug);
    }
  };

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Transformamos su Infraestructura
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expertos en Cloud, DevOps y Seguridad para empresas que no se detienen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <button
                key={idx}
                onClick={() => handleServiceCardClick(service.title)}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-sky-400 hover:shadow-2xl transition-all duration-300 text-left"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:scale-110 transition-all">
                  <Icon className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sky-600 font-semibold group-hover:gap-2 transition-all">
                  Ver detalles
                  <svg className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">¿No encuentras lo que buscas?</p>
          <button 
            onClick={() => onServiceClick?.('services-list')}
            className="px-8 py-3 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 transition-all shadow-lg hover:shadow-xl"
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;