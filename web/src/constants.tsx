
import {
  Cloud, 
  Settings, 
  Github, 
  Video, 
  FileText,
  Terminal,
  Eye,
  Lock,
  GraduationCap
} from 'lucide-react';

export const COLORS = {
  primary: '#0ea5e9',
  secondary: '#0f172a',
  accent: '#38bdf8',
};

// IMPORTANTE: Los iconos ahora son COMPONENTES, no JSX
export const SERVICES = [
  {
    title: 'Consultoría DevOps',
    description: 'Optimizamos su ciclo de vida de desarrollo con prácticas modernas de integración y despliegue continuo.',
    icon: Settings, // <- Sin <> ni className
  },
  {
    title: 'Automatización Infraestructura',
    description: 'Implementación de Jenkins, Ansible y Bash scripts para una gestión de servidores eficiente y escalable.',
    icon: Terminal,
  },
  {
    title: 'Observabilidad Open-Source',
    description: 'Visibilidad completa de su stack tecnológico con herramientas líderes del mercado abierto.',
    icon: Eye,
  },
  {
    title: 'Migration Assessment',
    description: 'Análisis detallado para mover sus cargas de trabajo locales a la nube con el menor riesgo.',
    icon: Cloud,
  },
  {
    title: 'Consultoría y Seguridad Perimetral',
    description: 'Protección integral de sus activos digitales frente a amenazas externas e internas.',
    icon: Lock,
  },
  {
    title: 'Training Especializado',
    description: 'Capacitación técnica para su equipo en las últimas tecnologías cloud y devops.',
    icon: GraduationCap,
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

// Los recursos sí mantienen JSX porque se renderizan directamente
export const RESOURCES = [
  { 
    title: 'Optimización de Kubernetes en AWS', 
    type: 'Artículo', 
    link: 'importacion-certificados-ssl-tls', 
    icon: <FileText className="w-5 h-5" /> 
  },
  { 
    title: 'Webinar: Automatización con Ansible', 
    type: 'Video', 
    link: '#', 
    icon: <Video className="w-5 h-5" /> 
  },
   
  { 
    title: 'Templates de Infraestructura como Código', 
    type: 'GitHub', 
    link: 'https://github.com/nazcaflux', 
    icon: <Github className="w-5 h-5" /> 
  },
  
];