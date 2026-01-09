
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
  type: 'article' | 'video' | 'github';
  link: string;
}

export type Page = 'home' | 'services' | 'support' | 'resources' | 'about' | 'contact';
