import React, { useState } from 'react';
import { BookOpen, Clock, Search, Shield, Code, Cloud, ArrowRight } from 'lucide-react';
import { ARTICLES } from '@/articlesData';

interface ArticlesListPageProps {
  onArticleClick: (slug: string) => void;
}

const ArticlesListPage: React.FC<ArticlesListPageProps> = ({ onArticleClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todos', 'Seguridad', 'DevOps', 'Cloud'];

  const filteredArticles = ARTICLES.filter(article => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Seguridad': return <Shield className="w-5 h-5" />;
      case 'DevOps': return <Code className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Seguridad': return 'from-red-500 to-red-600';
      case 'DevOps': return 'from-blue-500 to-blue-600';
      case 'Cloud': return 'from-sky-500 to-sky-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Centro de Conocimiento
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Artículos <span className="text-sky-600">Técnicos</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Guías prácticas, tutoriales y documentación técnica para equipos de infraestructura y operaciones
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                category === selectedCategory
                  ? 'bg-sky-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-sky-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-slate-600 text-center">
            Mostrando <span className="font-bold text-slate-900">{filteredArticles.length}</span> artículo{filteredArticles.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onArticleClick(article.slug)}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Header Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${getCategoryColor(article.category)} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getCategoryIcon(article.category)}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-bold rounded-full">
                      {getCategoryIcon(article.category)}
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                    <span className="text-slate-400">{article.date}</span>
                  </div>

                  {/* Read More */}
                  <button className="flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-3 transition-all">
                    Leer artículo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No se encontraron artículos</h3>
            <p className="text-slate-600">Intenta con otros términos de búsqueda o categorías</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu infraestructura?</h3>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto text-lg">
              Nuestros especialistas pueden ayudarte a implementar estas soluciones en tu empresa.
            </p>
            <button className="px-8 py-4 bg-white text-sky-600 font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Agendar Consultoría Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesListPage;