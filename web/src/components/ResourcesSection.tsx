
import React from 'react';
import { RESOURCES } from '../constants';

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recursos para la Comunidad</h2>
            <p className="text-slate-600">Compartimos nuestro conocimiento para ayudar a crecer el ecosistema tech.</p>
          </div>
          <button className="text-sky-600 font-bold hover:underline">Ver todos los recursos &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((res, idx) => (
            <a 
              key={idx} 
              href={res.link} 
              className="flex flex-col p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-4">
                {res.icon}
              </div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-2">{res.type}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex-grow">{res.title}</h3>
              <span className="text-slate-400 text-sm font-medium">Leer más &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
