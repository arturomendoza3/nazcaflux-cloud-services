
import React from 'react';
import { Rocket, Shield, Activity } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Elevamos su Infraestructura a <span className="text-sky-400">Nuevos Horizontes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            En Nazcaflux transformamos su complejidad operativa en agilidad empresarial. Expertos en Cloud, DevOps y Seguridad para empresas que no se detienen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onContactClick}
              className="px-8 py-4 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-500 transition-all shadow-xl shadow-sky-900/20 text-lg"
            >
              Comenzar Transformación
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all border border-slate-700 text-lg">
              Ver Soluciones
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Rocket className="w-10 h-10 text-sky-400" />, title: 'Despliegues Rápidos', desc: 'Reducimos el Time-to-Market de sus productos.' },
            { icon: <Shield className="w-10 h-10 text-sky-400" />, title: 'Nube Segura', desc: 'Seguridad perimetral y cumplimiento normativo.' },
            { icon: <Activity className="w-10 h-10 text-sky-400" />, title: 'Alta Disponibilidad', desc: 'Monitoreo 24/7 y resiliencia de carga.' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
