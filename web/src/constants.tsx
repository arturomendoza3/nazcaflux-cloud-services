
//import React from 'react';
import {
  //Shield, 
  Cloud, 
  Settings, 
  //ShieldCheck, 
  //BarChart, 
  //Users, 
  Github, 
  Video, 
  FileText,
  Terminal,
  //Server,
  //Network,
  Eye,
  Lock,
  GraduationCap
} from 'lucide-react';

export const COLORS = {
  primary: '#0ea5e9', // Sky blue
  secondary: '#0f172a', // Slate 900
  accent: '#38bdf8',
};

export const SERVICES = [
  {
    title: 'Consultoría DevOps',
    description: 'Optimizamos su ciclo de vida de desarrollo con prácticas modernas de integración y despliegue continuo.',
    icon: <Settings className="w-8 h-8 text-sky-500" />,
  },
  {
    title: 'Automatización Infraestructura',
    description: 'Implementación de Jenkins, Ansible y Bash scripts para una gestión de servidores eficiente y escalable.',
    icon: <Terminal className="w-8 h-8 text-sky-500" />,
  },
  {
    title: 'Observabilidad Open-Source',
    description: 'Visibilidad completa de su stack tecnológico con herramientas líderes del mercado abierto.',
    icon: <Eye className="w-8 h-8 text-sky-500" />,
  },
  {
    title: 'Migration Assessment',
    description: 'Análisis detallado para mover sus cargas de trabajo locales a la nube con el menor riesgo.',
    icon: <Cloud className="w-8 h-8 text-sky-500" />,
  },
  {
    title: 'Consultoría y Seguridad Perimetral',
    description: 'Protección integral de sus activos digitales frente a amenazas externas e internas.',
    icon: <Lock className="w-8 h-8 text-sky-500" />,
  },
  {
    title: 'Training Especializado',
    description: 'Capacitación técnica para su equipo en las últimas tecnologías cloud y devops.',
    icon: <GraduationCap className="w-8 h-8 text-sky-500" />,
  },
];

export const SUPPORT_CATEGORIES = [
  {
    name: 'Cargas de Trabajo',
    items: ['Kubernetes', 'VMs', 'Serverless', 'Containers'],
  },
  {
    name: 'Networking',
    items: ['VPNs', 'Load Balancer', 'Applications Gateway', 'DNS', 'API Manager'],
  },
  {
    name: 'Monitoreo Open Source',
    items: ['Zabbix', 'Prometheus', 'Grafana', 'OpenSearch', 'Jaeger'],
  },
  {
    name: 'Seguridad',
    items: ['WAF (Web App Firewall)', 'FW (Firewalls)', 'SG (Security Groups)'],
  },
];

export const RESOURCES = [
  { title: 'Optimización de Kubernetes en AWS', type: 'article', link: '#', icon: <FileText className="w-5 h-5" /> },
  { title: 'Webinar: Automatización con Ansible', type: 'video', link: '#', icon: <Video className="w-5 h-5" /> },
  { title: 'Templates de Infraestructura como Código', type: 'github', link: 'https://github.com/nazcaflux', icon: <Github className="w-5 h-5" /> },
];
