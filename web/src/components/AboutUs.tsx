
import React from 'react';
//import { ABOUTUS } from '@/constants';

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre Nazcaflux</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nacimos con la visión de democratizar el acceso a infraestructuras cloud de alta gama para empresas de todo tamaño. Nuestro equipo está conformado por ingenieros apasionados por la automatización y la eficiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://picsum.photos/seed/nazcaflux/800/600" 
            alt="Nuestro Equipo" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestra Misión</h3>
              <p className="text-slate-600">Proporcionar soluciones tecnológicas innovadoras que permitan a nuestros clientes centrarse en su negocio principal mientras nosotros gestionamos la complejidad de su infraestructura.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestra Visión</h3>
              <p className="text-slate-600">Ser el socio tecnológico de referencia en Latinoamérica para servicios gestionados en la nube y DevOps.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-sky-50 rounded-xl">
                <p className="text-3xl font-bold text-sky-600 mb-1">100+</p>
                <p className="text-sm text-slate-600 font-medium">Proyectos Exitosos</p>
              </div>
              <div className="p-4 bg-sky-50 rounded-xl">
                <p className="text-3xl font-bold text-sky-600 mb-1">15+</p>
                <p className="text-sm text-slate-600 font-medium">Ingenieros Certificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
