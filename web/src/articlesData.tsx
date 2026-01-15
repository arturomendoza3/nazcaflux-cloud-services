import type { Article } from './types';

// Base de datos de artículos
export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'importacion-certificados-ssl-tls',
    title: 'Importación correcta de certificados SSL/TLS',
    excerpt: 'Guía completa para validar, ordenar e importar certificados SSL/TLS cuando la plataforma no acepta bundles, evitando errores comunes en sistemas como OVOC.',
    category: 'Seguridad',
    readTime: '8 min',
    date: '12 Enero 2026',
    author: 'Equipo Nazcaflux'
  },
  {
    id: '2',
    slug: 'mejores-practicas-devops-2026',
    title: 'Mejores prácticas en DevOps 2026',
    excerpt: 'Descubre las estrategias más efectivas para implementar CI/CD y automatización de infraestructura en tu organización.',
    category: 'DevOps',
    readTime: '10 min',
    date: '8 Enero 2026',
    author: 'Equipo Nazcaflux'
  },
  {
    id: '3',
    slug: 'guia-migracion-kubernetes',
    title: 'Guía de migración a Kubernetes',
    excerpt: 'Paso a paso para migrar aplicaciones legacy a contenedores y orquestarlas con Kubernetes de manera segura y eficiente.',
    category: 'Cloud',
    readTime: '12 min',
    date: '5 Enero 2026',
    author: 'Equipo Nazcaflux'
  }
];

// Función para obtener un artículo por slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return ARTICLES.find(article => article.slug === slug);
};

// Función para obtener artículos por categoría
export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'Todos') return ARTICLES;
  return ARTICLES.filter(article => article.category === category);
};