import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Consultoría DevOps',
    message: ''
  });

  const saveToGoogleSheets = async (data: typeof formData) => {
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) return; // Si no está configurado, no intenta guardar
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fecha: new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }),
          nombre: data.name,
          email: data.email,
          empresa: data.company,
          servicio: data.service,
          mensaje: data.message,
        }),
      });
    } catch (error) {
      console.error('Error guardando en Google Sheets:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // 1. Enviar email de notificación a dirack2026@gmail.com
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION,
        {
          to_email: 'dirack2026@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          empresa: formData.company,
          servicio: formData.service,
          mensaje: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Enviar email automático de confirmación al cliente
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_AUTO_REPLY,
        {
          to_email: formData.email,
          to_name: formData.name,
          empresa: formData.company,
          servicio: formData.service,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 3. Guardar en Google Sheets
      await saveToGoogleSheets(formData);

      // 4. Mostrar mensaje de éxito
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Consultoría DevOps',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-32 bg-slate-50 flex items-center justify-center min-h-[60vh]">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md animate-fade-in border border-slate-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">¡Mensaje Recibido!</h2>
          <p className="text-slate-600 mb-8">Gracias por contactarnos. Un especialista de Nazcaflux se pondrá en contacto contigo en menos de 24 horas.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-500 transition-all"
          >
            Volver a inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-sky-600 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Hablemos de tu proyecto</h2>
            <p className="text-sky-100 mb-12">Cuéntanos tus necesidades y te propondremos la mejor arquitectura para tu negocio.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <span>Av. San Felipe 101, Lima-Perú</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <span>contacto@nazcaflux.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:w-2/3 p-12 space-y-6">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                Hubo un error al enviar el mensaje. Por favor, verifica tu configuración o intenta nuevamente.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Correo Corporativo</label>
                <input 
                  type="email" 
                  required
                  placeholder="juan@empresa.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Empresa</label>
                <input 
                  type="text" 
                  required
                  placeholder="Nombre de tu organización"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Servicio de Interés</label>
                <select 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  disabled={isSubmitting}
                >
                  <option>Consultoría DevOps</option>
                  <option>Automatización Infraestructura</option>
                  <option>Implementación Observabilidad</option>
                  <option>Migration Assessment</option>
                  <option>Seguridad Perimetral</option>
                  <option>Training</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Idea Base / Requerimiento</label>
              <textarea 
                rows={4}
                required
                placeholder="Cuéntanos brevemente qué necesitas..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-500 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;