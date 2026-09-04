export type Project = {
  slug: string;
  name: string;
  category: string;
  platform: string;
  technologies: string[];
  status: "active" | "development" | "completed";
  featured: boolean;

  images?: {
    primary: string;
    secondary?: string;
  };

  description: {
    es: string;
    en: string;
  };

  details: {
    es: {
      headline: string;
      overview: string[];
      features: string[];
    };
    en: {
      headline: string;
      overview: string[];
      features: string[];
    };
  };
};

export const projects: Project[] = [
  {
    slug: "city-flier",
    name: "CityFlier",
    category: "Game Development",
    platform: "iOS",
    technologies: ["Swift", "SpriteKit", "Xcode"],
    status: "development",
    featured: true,

    images: {
      primary: "/projects/city-flier/home.png",
      secondary: "/projects/city-flier/gameplay.png",
    },

    description: {
      es: "Juego arcade para iPhone centrado en navegación, reflejos y progresión a través de un entorno urbano dinámico.",
      en: "Arcade game for iPhone focused on navigation, reflexes, and progression through a dynamic urban environment.",
    },

    details: {
      es: {
        headline: "Arcade móvil entre edificios y nubes.",
        overview: [
          "CityFlier es un juego arcade desarrollado para iPhone, centrado en controlar una pequeña nave a través de un entorno urbano.",
          "El proyecto combina físicas, generación de obstáculos, puntuación, efectos visuales y una interfaz diseñada específicamente para dispositivos móviles.",
        ],
        features: [
          "Gameplay arcade",
          "Control táctil",
          "Sistema de puntuación",
          "Récord de partidas",
          "Obstáculos dinámicos",
          "Sonido configurable",
          "Interfaz adaptada a iPhone",
        ],
      },

      en: {
        headline: "Mobile arcade above the city.",
        overview: [
          "CityFlier is an arcade game developed for iPhone, centered around navigating a small craft through an urban environment.",
          "The project combines physics, obstacle generation, scoring, visual effects, and an interface designed specifically for mobile devices.",
        ],
        features: [
          "Arcade gameplay",
          "Touch controls",
          "Scoring system",
          "High scores",
          "Dynamic obstacles",
          "Configurable sound",
          "iPhone-optimized interface",
        ],
      },
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

    images: {
      primary: "/projects/billetera/analysis.png",
      secondary: "/projects/billetera/movements.png",
    },

    description: {
      es: "Sistema de finanzas personales diseñado para administrar cuentas, presupuestos, movimientos, transferencias y análisis financiero.",
      en: "Personal finance system designed to manage accounts, budgets, transactions, transfers, and financial analysis.",
    },

    details: {
      es: {
        headline: "Control financiero desde Android.",
        overview: [
          "Billetera es una aplicación de finanzas personales diseñada para ofrecer una visión clara de cuentas, movimientos y planificación financiera.",
          "Su estructura permite administrar ingresos, gastos, transferencias, presupuestos y análisis desde una experiencia móvil.",
        ],
        features: [
          "Gestión de cuentas",
          "Ingresos y gastos",
          "Transferencias",
          "Presupuestos",
          "Análisis financiero",
          "Categorías personalizables",
          "Pagos recurrentes",
        ],
      },

      en: {
        headline: "Financial control from Android.",
        overview: [
          "Billetera is a personal finance application designed to provide a clear view of accounts, transactions, and financial planning.",
          "Its structure supports income, expenses, transfers, budgets, and analytics through a mobile-first experience.",
        ],
        features: [
          "Account management",
          "Income and expenses",
          "Transfers",
          "Budgets",
          "Financial analytics",
          "Custom categories",
          "Recurring payments",
        ],
      },
    },
  },

  {
    slug: "asist-finance",
    name: "AsistFinance",
    category: "Personal Finance",
    platform: "macOS",
    technologies: ["Swift", "SwiftUI", "macOS"],
    status: "completed",
    featured: true,

    images: {
      primary: "/projects/asist-finance/dashboard.png",
      secondary: "/projects/asist-finance/analytics.png",
    },

    description: {
      es: "Aplicación nativa para macOS orientada a la gestión integral de finanzas personales, con cuentas, transacciones, presupuestos, análisis financiero y seguimiento del flujo de efectivo.",
      en: "Native macOS application for comprehensive personal finance management, including accounts, transactions, budgets, financial analytics, and cash-flow tracking.",
    },

    details: {
      es: {
        headline: "Finanzas personales en el escritorio.",
        overview: [
          "AsistFinance es una aplicación nativa para macOS diseñada para concentrar la gestión financiera personal en una experiencia de escritorio moderna.",
          "Integra cuentas, transacciones, presupuestos, flujo de efectivo y analítica financiera en una interfaz optimizada para macOS.",
        ],
        features: [
          "Resumen financiero",
          "Cuentas y monederos",
          "Registro de transacciones",
          "Control de presupuestos",
          "Analítica financiera",
          "Seguimiento de flujo de efectivo",
        ],
      },

      en: {
        headline: "Personal finance on the desktop.",
        overview: [
          "AsistFinance is a native macOS application designed to bring personal financial management together in a modern desktop experience.",
          "It combines accounts, transactions, budgets, cash flow, and financial analytics in an interface designed for macOS.",
        ],
        features: [
          "Financial dashboard",
          "Accounts and wallets",
          "Transaction management",
          "Budget control",
          "Financial analytics",
          "Cash-flow tracking",
        ],
      },
    },
  },

  {
    slug: "vitalscan",
    name: "Vitalscan",
    category: "Healthcare Software",
    platform: "Windows",
    technologies: ["Python", "PyQt6", "SQLite"],
    status: "completed",
    featured: true,

    images: {
      primary: "/projects/vitalscan/dashboard.png",
      secondary: "/projects/vitalscan/studies.png",
    },

    description: {
      es: "Sistema de gestión para centros de ecografía que integra pacientes, citas, estudios, facturación, finanzas y reportes en una aplicación de escritorio modular.",
      en: "Desktop management system for ultrasound clinics, integrating patients, appointments, studies, billing, finances, and reporting into a modular application.",
    },

    details: {
      es: {
        headline: "Gestión clínica especializada.",
        overview: [
          "Vitalscan fue diseñado como una solución de escritorio para centralizar la operación de un centro de ecografía en una sola aplicación.",
          "El sistema combina gestión de pacientes, agenda de citas, estudios, facturación, finanzas, reportes y configuración, manteniendo una estructura modular orientada al trabajo diario.",
        ],
        features: [
          "Gestión de pacientes",
          "Agenda y control de citas",
          "Administración de estudios ecográficos",
          "Facturación y pagos",
          "Finanzas y movimientos",
          "Reportes y exportación",
          "Gestión de usuarios",
          "Sistema de licenciamiento",
        ],
      },

      en: {
        headline: "Specialized clinical management.",
        overview: [
          "Vitalscan was designed as a desktop solution to centralize the operation of an ultrasound clinic in a single application.",
          "The system combines patient management, appointments, studies, billing, finances, reporting, and configuration through a modular workflow designed for daily use.",
        ],
        features: [
          "Patient management",
          "Appointment scheduling and control",
          "Ultrasound study management",
          "Billing and payments",
          "Finances and transactions",
          "Reporting and export",
          "User management",
          "Licensing system",
        ],
      },
    },
  },
];
