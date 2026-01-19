import {
  Settings,
  Terminal,
  Eye,
  Cloud,
  Lock,
  GraduationCap
} from 'lucide-react';
import type { ServiceDetail } from '../types';

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    id: '1',
    slug: 'consultoria-devops',
    title: 'Consultoría DevOps',
    shortDescription: 'Transformamos su ciclo de desarrollo con prácticas modernas de CI/CD',
    icon: Settings,
    objective: 'Optimizar el ciclo de vida del desarrollo de software mediante la implementación de prácticas DevOps que aceleren la entrega, mejoren la calidad y aumenten la colaboración entre equipos de desarrollo y operaciones.',
    differentiators: [
      'Experiencia comprobada en implementaciones DevOps para empresas Fortune 500',
      'Enfoque pragmático: adaptamos las herramientas a tu proceso, no al revés',
      'Acompañamiento continuo: no solo implementamos, capacitamos a tu equipo',
      'Automatización end-to-end: desde el commit hasta producción',
      'Métricas claras: medimos el impacto real en tiempo de entrega y calidad'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment Inicial',
        description: 'Evaluamos su estado actual: pipelines, herramientas, procesos y cultura organizacional. Identificamos cuellos de botella y oportunidades de mejora.'
      },
      {
        step: 2,
        title: 'Diseño de Solución',
        description: 'Creamos una hoja de ruta personalizada con quick wins y objetivos a largo plazo. Definimos arquitectura de CI/CD, estrategia de branching y métricas de éxito.'
      },
      {
        step: 3,
        title: 'Implementación Incremental',
        description: 'Desplegamos cambios de forma gradual, minimizando disrupciones. Automatizamos builds, tests, deployments y configuramos ambientes reproducibles.'
      },
      {
        step: 4,
        title: 'Capacitación y Transferencia',
        description: 'Entrenamos a su equipo en las nuevas herramientas y prácticas. Documentamos procesos y establecemos runbooks para operación autónoma.'
      },
      {
        step: 5,
        title: 'Mejora Continua',
        description: 'Monitoreamos métricas DORA (deployment frequency, lead time, MTTR, change failure rate) y optimizamos continuamente el proceso.'
      }
    ],
    benefits: [
      'Reducción de 70% en tiempo de despliegue a producción',
      'Disminución de 50% en incidentes post-deployment',
      'Mayor frecuencia de releases (de mensual a semanal o diario)',
      'Feedback más rápido para desarrolladores',
      'Ambientes consistentes entre dev, staging y producción'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD', 'Terraform', 'Ansible', 'Docker', 'Kubernetes']
  },
  {
    id: '2',
    slug: 'automatizacion-infraestructura',
    title: 'Automatización de Infraestructura',
    shortDescription: 'Infrastructure as Code para gestión eficiente y escalable',
    icon: Terminal,
    objective: 'Eliminar tareas manuales repetitivas y propensas a errores mediante la automatización completa de la infraestructura, logrando despliegues consistentes, reproducibles y auditables.',
    differentiators: [
      'Especialistas en Terraform, Ansible y scripting avanzado',
      'Infraestructura versionada y auditable en Git',
      'Idempotencia garantizada: ejecuta 100 veces, mismo resultado',
      'Módulos reutilizables entre proyectos',
      'Rollback automático ante fallos'
    ],
    process: [
      {
        step: 1,
        title: 'Inventario de Infraestructura',
        description: 'Documentamos toda la infraestructura actual: servidores, redes, seguridad, configuraciones. Identificamos configuraciones snowflake (únicas) que necesitan estandarización.'
      },
      {
        step: 2,
        title: 'Codificación IaC',
        description: 'Convertimos la infraestructura a código usando Terraform para recursos cloud y Ansible para configuración de servidores. Creamos módulos reutilizables y testeables.'
      },
      {
        step: 3,
        title: 'Testing y Validación',
        description: 'Implementamos tests automatizados para validar la infraestructura. Usamos ambientes de staging para probar cambios antes de producción.'
      },
      {
        step: 4,
        title: 'Pipeline de Despliegue',
        description: 'Integramos IaC en pipelines CI/CD. Plan → Review → Apply. Todo cambio pasa por revisión y aprobación antes de ejecutarse.'
      },
      {
        step: 5,
        title: 'Documentación y Handover',
        description: 'Entregamos documentación completa, runbooks y capacitación para que su equipo opere la infraestructura como código de forma autónoma.'
      }
    ],
    benefits: [
      'Aprovisionamiento de infraestructura en minutos vs días',
      'Cero drift de configuración entre ambientes',
      'Disaster recovery simplificado: redeploy con un comando',
      'Historial completo de cambios en infraestructura',
      'Reducción de 80% en errores de configuración manual'
    ],
    technologies: ['Terraform', 'Ansible', 'Bash', 'Python', 'CloudFormation', 'ARM Templates', 'Puppet', 'Chef']
  },
  {
    id: '3',
    slug: 'observabilidad-open-source',
    title: 'Observabilidad Open-Source',
    shortDescription: 'Visibilidad completa de su stack con herramientas enterprise-grade',
    icon: Eye,
    objective: 'Proporcionar visibilidad end-to-end de aplicaciones e infraestructura mediante herramientas open-source de nivel empresarial, permitiendo detección proactiva de problemas y troubleshooting eficiente.',
    differentiators: [
      'Stack completo de observabilidad: métricas, logs, traces y alertas',
      'Herramientas open-source sin vendor lock-in',
      'Dashboards personalizados para cada rol (dev, ops, management)',
      'Alerting inteligente: menos ruido, más señal',
      'Integración con sistemas existentes'
    ],
    process: [
      {
        step: 1,
        title: 'Evaluación de Necesidades',
        description: 'Identificamos qué necesita ser monitoreado: aplicaciones, infraestructura, logs de negocio. Definimos SLIs, SLOs y SLAs relevantes para su operación.'
      },
      {
        step: 2,
        title: 'Diseño de Arquitectura',
        description: 'Diseñamos la stack de observabilidad: Prometheus + Grafana para métricas, OpenSearch para logs, Jaeger para tracing. Consideramos volumen de datos, retención y alta disponibilidad.'
      },
      {
        step: 3,
        title: 'Implementación y Integración',
        description: 'Desplegamos la plataforma de observabilidad. Instrumentamos aplicaciones con exporters y SDKs. Configuramos recolección automática de métricas de infraestructura.'
      },
      {
        step: 4,
        title: 'Dashboards y Alertas',
        description: 'Creamos dashboards relevantes para diferentes audiencias. Configuramos alertas basadas en umbrales, anomalías y predicciones. Integramos con Slack, PagerDuty, etc.'
      },
      {
        step: 5,
        title: 'Capacitación en Troubleshooting',
        description: 'Entrenamos al equipo en uso de las herramientas para troubleshooting efectivo. Establecemos runbooks para incidentes comunes.'
      }
    ],
    benefits: [
      'Detección de problemas antes de que afecten usuarios',
      'MTTR (Mean Time To Recovery) reducido en 60%',
      'Visibilidad de dependencias entre servicios',
      'Análisis de tendencias para capacity planning',
      'Costos reducidos vs soluciones SaaS propietarias'
    ],
    technologies: ['Prometheus', 'Grafana', 'OpenSearch', 'Jaeger', 'Zabbix', 'Telegraf', 'Loki', 'Tempo']
  },
  {
    id: '4',
    slug: 'migration-assessment',
    title: 'Migration Assessment',
    shortDescription: 'Análisis detallado para migración cloud segura y eficiente',
    icon: Cloud,
    objective: 'Planificar y ejecutar migraciones a la nube minimizando riesgos, optimizando costos y asegurando continuidad del negocio mediante un assessment exhaustivo y una estrategia de migración personalizada.',
    differentiators: [
      'Metodología probada en 50+ migraciones cloud',
      'Assessment en 2 semanas con roadmap ejecutable',
      'Análisis TCO real: no solo compute, incluye licencias, soporte, training',
      'Estrategia multi-cloud o hybrid según necesidad',
      'Plan de rollback detallado para cada fase'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Inventariamos aplicaciones, dependencias, bases de datos, integraciones. Identificamos workloads críticos y restricciones (compliance, latencia, datos sensibles).'
      },
      {
        step: 2,
        title: 'Assessment',
        description: 'Evaluamos cada workload: 6Rs (Rehost, Replatform, Refactor, Repurchase, Retire, Retain). Analizamos complejidad técnica, dependencies y business criticality.'
      },
      {
        step: 3,
        title: 'TCO y Business Case',
        description: 'Calculamos costos actuales vs proyectados en cloud (3 años). Incluimos migración, operación, licencias, training. Presentamos business case con ROI esperado.'
      },
      {
        step: 4,
        title: 'Roadmap de Migración',
        description: 'Creamos plan de migración por olas: quick wins primero, sistemas críticos con más preparación. Definimos timelines, recursos necesarios y milestones.'
      },
      {
        step: 5,
        title: 'Execution Support',
        description: 'Acompañamos la ejecución: migración piloto, validación, cutover planning, hypercare post-migración. Ajustamos plan según aprendizajes.'
      }
    ],
    benefits: [
      'Reducción de riesgos de migración mediante planning detallado',
      'Ahorro promedio de 30% en costos operativos (bien optimizado)',
      'Visibilidad clara de esfuerzo, tiempo y costo',
      'Priorización basada en valor de negocio',
      'Plan de contingencia para cada fase crítica'
    ],
    technologies: ['AWS Migration Hub', 'Azure Migrate', 'CloudEndure', 'Movere', 'CloudHealth', 'Terraform']
  },
  {
    id: '5',
    slug: 'seguridad-perimetral',
    title: 'Consultoría y Seguridad Perimetral',
    shortDescription: 'Protección integral contra amenazas externas e internas',
    icon: Lock,
    objective: 'Fortalecer la seguridad perimetral de la infraestructura mediante implementación de controles de seguridad en múltiples capas (defense in depth), protegiendo activos críticos y cumpliendo con normativas de seguridad.',
    differentiators: [
      'Enfoque Zero Trust: verificar siempre, nunca confiar',
      'Defensa en profundidad: múltiples capas de seguridad',
      'Automatización de respuesta a incidentes',
      'Compliance-ready: cumplimiento de ISO 27001, PCI-DSS, etc.',
      'Security as Code: políticas versionadas y testeables'
    ],
    process: [
      {
        step: 1,
        title: 'Security Assessment',
        description: 'Evaluamos postura de seguridad actual: firewalls, WAF, DDoS protection, segmentación de red, gestión de identidades. Identificamos vulnerabilidades y gaps de cumplimiento.'
      },
      {
        step: 2,
        title: 'Threat Modeling',
        description: 'Modelamos amenazas específicas para su negocio. Priorizamos controles según impacto y probabilidad. Definimos estrategia de defense in depth.'
      },
      {
        step: 3,
        title: 'Implementación de Controles',
        description: 'Desplegamos firewalls, WAF, IDS/IPS, VPNs. Configuramos security groups, NACLs, políticas de IAM. Implementamos encriptación en tránsito y reposo.'
      },
      {
        step: 4,
        title: 'Monitoring y Alerting',
        description: 'Configuramos SIEM para correlación de eventos. Establecemos alertas para actividad sospechosa. Integramos con SOC si existe.'
      },
      {
        step: 5,
        title: 'Incident Response Plan',
        description: 'Creamos playbooks para respuesta a incidentes. Entrenamos al equipo en procedimientos. Realizamos simulacros de ataques (tabletop exercises).'
      }
    ],
    benefits: [
      'Reducción de superficie de ataque',
      'Detección y respuesta más rápida ante incidentes',
      'Cumplimiento de regulaciones y estándares',
      'Protección contra ataques DDoS y web exploits',
      'Visibilidad de tráfico y actividad sospechosa'
    ],
    technologies: ['AWS WAF', 'Azure Firewall', 'Palo Alto', 'FortiGate', 'Snort', 'Suricata', 'Vault', 'OSSEC']
  },
  {
    id: '6',
    slug: 'training-especializado',
    title: 'Training Especializado',
    shortDescription: 'Capacitación técnica en cloud, DevOps y seguridad',
    icon: GraduationCap,
    objective: 'Desarrollar capacidades internas del equipo mediante training hands-on en tecnologías cloud, DevOps, seguridad y mejores prácticas, reduciendo dependencia de consultores externos y acelerando adopción de nuevas tecnologías.',
    differentiators: [
      'Trainings 100% hands-on: 80% práctica, 20% teoría',
      'Contenido personalizado según stack tecnológico de cliente',
      'Instructores con experiencia real en producción',
      'Certificaciones oficiales incluidas cuando aplica',
      'Material y labs disponibles post-training'
    ],
    process: [
      {
        step: 1,
        title: 'Skills Assessment',
        description: 'Evaluamos nivel actual del equipo y gaps de conocimiento. Identificamos roles y necesidades específicas (devs, ops, security, management).'
      },
      {
        step: 2,
        title: 'Diseño de Curriculum',
        description: 'Creamos programa de training personalizado. Priorizamos temas según roadmap tecnológico. Definimos duración, formato (presencial/remoto) y objetivos de aprendizaje.'
      },
      {
        step: 3,
        title: 'Preparación de Labs',
        description: 'Construimos laboratorios hands-on en ambientes reales o similares a producción. Preparamos ejercicios progresivos: desde básico hasta escenarios complejos.'
      },
      {
        step: 4,
        title: 'Ejecución del Training',
        description: 'Impartimos el training con foco en práctica. Resolvemos dudas específicas del contexto del cliente. Compartimos casos reales y best practices.'
      },
      {
        step: 5,
        title: 'Follow-up y Soporte',
        description: 'Brindamos soporte post-training para dudas. Evaluamos retención de conocimiento. Ajustamos contenido según feedback para futuras iteraciones.'
      }
    ],
    benefits: [
      'Equipo técnico capacitado en tecnologías modernas',
      'Reducción de dependencia de consultores externos',
      'Adopción más rápida de nuevas herramientas',
      'Mejora en calidad de implementaciones',
      'ROI alto: conocimiento queda en la organización'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Python', 'Ansible']
  }
];

// Función para obtener un servicio por slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return SERVICES_DETAIL.find(service => service.slug === slug);
};

// Función para obtener todos los servicios
export const getAllServices = (): ServiceDetail[] => {
  return SERVICES_DETAIL;
};