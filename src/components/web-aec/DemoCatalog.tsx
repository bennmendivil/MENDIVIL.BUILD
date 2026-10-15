import { VERTICE_DEMO_URL } from '../../config/vertice';
import DemoCard from './DemoCard';
import type { DemoCardProps } from './DemoCard';
import styles from './DemoCard.module.css';

const standardDemos: DemoCardProps[] = [
  {
    id: 'catalog-vertexa', title: 'VERTEXA', category: 'Constructora',
    description: 'Una presencia digital sólida para mostrar capacidad técnica, proyectos y experiencia en obra.',
    image: { src: '/web-aec/demos/demo_vertexa_desktop.webp', alt: 'Vertexa Demo', width: 1600, height: 830 },
    href: '/web-aec/demos/vertexa', cta: 'VER EJEMPLO',
  },
  {
    id: 'catalog-stratum', title: 'STRATUM LABS', category: 'Laboratorio',
    description: 'Un sitio técnico y profesional para comunicar servicios geotécnicos, ensayes y experiencia de campo.',
    image: { src: '/web-aec/demos/demo_stratumlabs_desktop.webp', alt: 'Stratum Labs Demo', width: 1600, height: 859 },
    href: '/web-aec/demos/stratum-labs', cta: 'VER EJEMPLO',
  },
  {
    id: 'catalog-nexora', title: 'NEXORA ENGINEERING', category: 'Firma de Ingeniería',
    description: 'Una estructura clara para presentar especialidades, experiencia y proyectos relevantes.',
    image: { src: '/web-aec/demos/demo_nexora_desktop.webp', alt: 'Nexora Demo', width: 1600, height: 858 },
    href: '/web-aec/demos/nexora-engineering', cta: 'VER EJEMPLO',
  },
  {
    id: 'catalog-azura', title: 'AZURA', category: 'Desarrolladora',
    description: 'Una experiencia visual y comercial para presentar desarrollos, atraer prospectos y fortalecer la percepción de marca.',
    image: { src: '/web-aec/demos/demo_azura_desktop.webp', alt: 'Azura Demo', width: 1600, height: 862 },
    href: '/web-aec/demos/azura-developments', cta: 'VER EJEMPLO',
  },
];

export default function DemoCatalog() {
  return (
    <div>
      <DemoCard
        id="catalog-vertice"
        variant="featured"
        title="VÉRTICE"
        category="Arquitectura, ingeniería y desarrollo inmobiliario."
        description="Diseño inmersivo, animaciones cinematográficas e interacción avanzada para explorar una nueva perspectiva del sector AEC."
        image={{ src: '/web-aec/demos/demo_vertice_desktop.webp', alt: 'Captura real de la landing VÉRTICE: arquitectura contemporánea y presentación inmersiva de proyectos.', width: 1440, height: 1000 }}
        badge="EXPERIENCIA WEB PREMIUM"
        disclaimer="Demo conceptual · Empresa ficticia"
        href={VERTICE_DEMO_URL}
        cta="EXPLORAR DEMO"
        external
      />
      <div className={styles.catalogGrid}>
        {standardDemos.map((demo) => <DemoCard key={demo.id} {...demo} />)}
      </div>
    </div>
  );
}
