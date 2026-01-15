
import React from 'react';
import { SERVICES } from '@/constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔴 TEST TAILWIND */}
        {/*<div className="text-5xl font-bold text-red-600 p-10 text-center">
          Tailwind OK
        </div>*/}
        <div className="text-center mb-16">
          <h2 className="text-sky-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestra Experticia</h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900">Servicios Cloud Especializados</p>
          <div className="w-20 h-1.5 bg-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon; // Obtener el componente
            return (
              <div key={idx}>
                <Icon className="w-8 h-8 text-sky-500" /> {/* Renderizar como componente */}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
