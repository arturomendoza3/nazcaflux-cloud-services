import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { getAllServices } from '@/components/servicesData';

interface ServicesListPageProps {
  onServiceClick: (slug: string) => void;
}

const ServicesListPage: React.FC<ServicesListPageProps> = ({ onServiceClick }) => {
  const services = getAllServices();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            Servicios Profesionales
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros <span className="text-sky-600">Servicios</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones especializadas en Cloud, DevOps y Seguridad para empresas que buscan transformación digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                onClick={() => onServiceClick(service.slug)}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Header with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-sky-500 to-sky-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-24"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Features Preview */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                      <span>{service.process.length} pasos metodológicos</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-3 transition-all">
                    Ver detalles
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué Nazcaflux?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nos diferenciamos por nuestro enfoque pragmático y orientado a resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Enfoque en Resultados</h3>
              <p className="text-slate-600">
                No solo implementamos tecnología, medimos el impacto en métricas de negocio
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Experiencia Comprobada</h3>
              <p className="text-slate-600">
                Más de 50 proyectos exitosos en empresas de diversos sectores
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Partnership de Largo Plazo</h3>
              <p className="text-slate-600">
                No solo consultamos, capacitamos y acompañamos en la transformación
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold">¿No estás seguro por dónde empezar?</h3>
            <p className="text-sky-100 max-w-md">
              Agenda una consultoría gratuita y te ayudaremos a identificar las mejores oportunidades de mejora
            </p>
            <button className="px-8 py-3 bg-white text-sky-600 font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg">
              Hablar con un Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesListPage;