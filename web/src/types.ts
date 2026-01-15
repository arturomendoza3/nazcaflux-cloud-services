// Fix: Import React to ensure React.ReactNode type is available in this module.
import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SupportCategory {
  name: string;
  items: string[];
}

export interface ResourceItem {
  title: string;
  type: string;
  link: string;
  icon: React.ReactNode;
}

// Agregar tipo para artículos
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author?: string;
}

// Actualizar tipo Page con las nuevas rutas
export type Page = 
  | 'home' 
  | 'services' 
  | 'support' 
  | 'resources' 
  | 'articles-list'
  | 'videos-list'
  | 'about' 
  | 'contact';

// Tipo para recursos en dropdown
export type ResourceType = 'articulos' | 'videos' | 'github';
