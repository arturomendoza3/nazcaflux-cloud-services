
import React from 'react';
import { SUPPORT_CATEGORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Soporte Técnico de Clase Mundial</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Damos soporte a las arquitecturas más complejas, asegurando que su plataforma esté siempre disponible y optimizada para el rendimiento.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Respuesta Inmediata</p>
                  <p className="text-slate-600 text-sm">Contamos con ingenieros certificados listos para actuar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Enfoque Proactivo</p>
                  <p className="text-slate-600 text-sm">Detectamos problemas antes de que afecten a sus usuarios.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SUPPORT_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-sky-600 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  {cat.name}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
