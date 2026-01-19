import React from 'react';
import { ArrowLeft, CheckCircle2, Target, TrendingUp, Workflow, Award, Lightbulb } from 'lucide-react';
import { getServiceBySlug } from '@/components/servicesData';

interface ServiceDetailPageProps {
  slug: string;
  onBack: () => void;
  onContact: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onBack, onContact }) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Servicio no encontrado</h1>
          <button onClick={onBack} className="text-sky-600 hover:underline">
            Volver a servicios
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Servicios
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
              <p className="text-xl text-sky-100">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Objetivo */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-sky-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Nuestro Objetivo</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed">{service.objective}</p>
          </div>
        </section>

        {/* Diferenciadores */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">¿Por qué elegirnos?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {service.differentiators.map((diff, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 leading-relaxed">{diff}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Workflow className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Nuestro Proceso</h2>
          </div>
          <div className="space-y-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border-l-4 border-sky-600 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Beneficios Esperados</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-slate-800 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        {service.technologies && service.technologies.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Tecnologías que Dominamos</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium hover:border-sky-500 hover:text-sky-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para transformar su {service.title}?</h3>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo podemos ayudarle a alcanzar sus objetivos
          </p>
          <button
            onClick={onContact}
            className="px-8 py-4 bg-white text-sky-600 font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Agendar Consultoría Gratuita
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;