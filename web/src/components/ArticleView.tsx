import React from 'react';
import { ArrowLeft, Clock, Calendar, Share2, BookmarkPlus, CheckCircle, AlertTriangle, Terminal, Copy } from 'lucide-react';

interface ArticleViewProps {
  onBack: () => void;
  slug?: string;
}

const ArticleView: React.FC<ArticleViewProps> = ({ onBack }) => {
  // TODO: En el futuro, usar el slug para cargar el artículo correcto
  // Por ahora, siempre mostrar el artículo de SSL
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Recursos
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full">
              Seguridad
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              8 min de lectura
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Calendar className="w-4 h-4" />
              12 Enero 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Importación correcta de certificados SSL/TLS cuando la plataforma no acepta bundles
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            Guía completa para validar, ordenar e importar certificados SSL/TLS en plataformas como OVOC que requieren certificados separados por rol.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
              <Share2 className="w-4 h-4" />
              Compartir
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
              <BookmarkPlus className="w-4 h-4" />
              Guardar
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none">
          {/* Objetivo */}
          <div className="bg-sky-50 border-l-4 border-sky-600 rounded-r-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              📌 Objetivo
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Documentar el procedimiento correcto para validar, ordenar e importar certificados SSL/TLS cuando una plataforma no admite archivos bundle (.pem concatenados) y exige certificados separados por rol (server, intermedios y root), evitando errores como:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">"No certificate matches private key"</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">"Failed to generate SEM PKCS#12 file"</span>
              </li>
            </ul>
          </div>

          {/* Contexto */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Contexto del problema</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
              <p className="text-slate-700 mb-4 leading-relaxed">
                Algunas plataformas de gestión (por ejemplo, sistemas de monitoreo, NMS, appliances o plataformas propietarias) no interpretan automáticamente bundles de certificados, aun cuando estos sean técnicamente válidos.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                En estos casos:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                <p className="text-slate-700 font-medium">El proveedor CA entrega un único archivo .pem que contiene:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-slate-700">Certificado del servidor (leaf)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-slate-700">Certificado(s) intermedio(s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="text-slate-700">Certificado raíz (root)</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-700 mt-4">
                La plataforma espera archivos independientes, con nombres exactos y contenido específico.
              </p>
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">
                  ⚠️ Si no se cumple esta estructura, la importación falla.
                </p>
              </div>
            </div>
          </section>

          {/* Requisitos previos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Requisitos previos</h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
              <p className="mb-4">Antes de iniciar, asegúrate de contar con:</p>
              <ul className="space-y-3">
                {[
                  'Archivo de clave privada (.key)',
                  'Archivo de certificado entregado por la CA (bundle .pem o .crt)',
                  'Acceso a un sistema con openssl',
                  'Acceso al servidor destino'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Validación inicial */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Validación inicial: clave privada vs certificado</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Antes de importar cualquier archivo, verifica que la clave privada corresponde al certificado del servidor.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3.1 Verificar módulo del certificado</h3>
                <div className="bg-slate-900 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('openssl x509 -in server.crt -noout -modulus | openssl md5')}
                    className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Copy className="w-4 h-4 text-slate-400" />
                  </button>
                  <div className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                      <code>openssl x509 -in server.crt -noout -modulus | openssl md5</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3.2 Verificar módulo de la clave privada</h3>
                <div className="bg-slate-900 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('openssl rsa -in private.key -noout -modulus | openssl md5')}
                    className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Copy className="w-4 h-4 text-slate-400" />
                  </button>
                  <div className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                      <code>openssl rsa -in private.key -noout -modulus | openssl md5</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-6">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  🔎 Resultado esperado
                </h4>
                <p className="text-green-800">
                  Ambos valores MD5 deben ser idénticos. Si no coinciden, el certificado NO fue generado con esa clave privada.
                </p>
              </div>
            </div>
          </section>

          {/* Tabla de estructura */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Estructura requerida por la plataforma</h2>
            <p className="text-slate-700 mb-6">
              Muchas plataformas (OVOC incluido) esperan nombres fijos y un certificado por archivo.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Archivo</th>
                    <th className="px-6 py-4 text-left font-bold">Contenido</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-slate-200">
                    <td className="px-6 py-4 font-mono text-sky-600 font-semibold">server.key</td>
                    <td className="px-6 py-4 text-slate-700">Clave privada del servidor</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-6 py-4 font-mono text-sky-600 font-semibold">server.crt</td>
                    <td className="px-6 py-4 text-slate-700">Certificado del dominio</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-6 py-4 font-mono text-sky-600 font-semibold">ca1.crt</td>
                    <td className="px-6 py-4 text-slate-700">Certificado intermedio</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono text-sky-600 font-semibold">root.crt</td>
                    <td className="px-6 py-4 text-slate-700">Certificado raíz</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-900 font-semibold">
                ⚠️ No usar bundles ni concatenaciones
              </p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-r-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-7 h-7 text-green-600" />
                Conclusión
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Cuando una plataforma presenta errores al importar certificados SSL/TLS, el <strong>80% de los casos se debe a formato y estructura</strong>, no a la validez criptográfica del certificado.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Un ordenamiento correcto y validación previa garantizan una importación exitosa.
              </p>
            </div>
          </section>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 p-8 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda con la seguridad de tu infraestructura?</h3>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Nuestros especialistas en seguridad pueden ayudarte a implementar y gestionar certificados SSL/TLS correctamente
          </p>
          <button className="px-8 py-3 bg-white text-sky-600 font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg">
            Contactar con un Especialista
          </button>
        </div>
      </article>
    </div>
  );
};

export default ArticleView;