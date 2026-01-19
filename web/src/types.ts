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

// Tipo para artículos
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

// NUEVO: Tipo para servicios detallados
export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: any;
  objective: string;
  differentiators: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  technologies?: string[];
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

// Actualizar tipo Page con las nuevas rutas
export type Page = 
  | 'home' 
  | 'services' 
  | 'services-list'
  | 'support' 
  | 'resources' 
  | 'articles-list'
  | 'videos-list'
  | 'about' 
  | 'contact';

// Tipo para recursos en dropdown
export type ResourceType = 'articulos' | 'videos' | 'github';