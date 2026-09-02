export type Project = {
  slug: string;
  name: string;
  category: string;
  platform: string;
  technologies: string[];
  status: "active" | "development" | "completed";
  featured: boolean;

  description: {
    es: string;
    en: string;
  };
};

export const projects: Project[] = [
  {
    slug: "orbit-escape",
    name: "Orbit Escape",
    category: "Game Development",
    platform: "iOS",
    technologies: ["Swift", "SpriteKit", "Xcode"],
    status: "development",
    featured: true,
    description: {
      es: "Juego arcade espacial desarrollado para iPhone, centrado en movimiento orbital, precisión y mecánicas de supervivencia.",
      en: "Space arcade game developed for iPhone, focused on orbital movement, precision, and survival mechanics.",
    },
  },

  {
    slug: "billetera",
    name: "Billetera",
    category: "Personal Finance",
    platform: "Android",
    technologies: ["Kotlin", "Android", "Material Design"],
    status: "development",
    featured: true,
    description: {
      es: "Sistema de finanzas personales diseñado para administrar cuentas, presupuestos, movimientos, transferencias y análisis financiero.",
      en: "Personal finance system designed to manage accounts, budgets, transactions, transfers, and financial analysis.",
    },
  },

  {
    slug: "hifi-player",
    name: "HiFiPlayer",
    category: "Audio",
    platform: "iOS & macOS",
    technologies: ["Swift", "SwiftUI", "AVFoundation"],
    status: "development",
    featured: true,
    description: {
      es: "Reproductor de audio de alta fidelidad orientado a una reproducción precisa, una interfaz limpia y herramientas avanzadas de audio.",
      en: "High-fidelity audio player focused on accurate playback, a clean interface, and advanced audio tools.",
    },
  },

  {
    slug: "mole",
    name: "Mole",
    category: "System Utility",
    platform: "macOS",
    technologies: ["Swift", "SwiftUI", "Combine"],
    status: "development",
    featured: true,
    description: {
      es: "Utilidad para macOS orientada al análisis del sistema, almacenamiento y limpieza segura de archivos innecesarios.",
      en: "macOS utility focused on system analysis, storage management, and safe cleanup of unnecessary files.",
    },
  },
];
