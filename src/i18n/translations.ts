export type Language = "es" | "en";

export const translations = {
  es: {
    meta: {
      title:
        "Yessid Alba | Software Engineer & Technology Innovator · Yessid Alba Labs",
      description:
        "Portfolio oficial de Yessid Alba, Software Engineer & Systems Analyst. Arquitectura de software, ingeniería de productos multiplataforma e investigación bajo Yessid Alba Labs.",
    },

    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      technologies: "Especialidades",
      research: "Investigación",
      contact: "Contacto",
      talk: "Hablemos",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      languageLabel: "Idioma",
      skipToContent: "Saltar al contenido principal",
    },

    theme: {
      label: "Tema",
      dark: "Oscuro",
      light: "Claro",
      system: "Sistema",
    },

    hero: {
      role: "Software Engineer & Technology Innovator",
      statement:
        "Ingeniería de soluciones inteligentes. Construyendo software con propósito.",
      title: "Construyo software",
      titleAccent: "con propósito.",
      description:
        "Diseño y desarrollo aplicaciones nativas, sistemas de escritorio, motores de análisis y productos digitales enfocados en arquitectura limpia, rendimiento y una experiencia de usuario refinada.",
      projects: "Explorar proyectos",
      about: "Conocer trayectoria",
      companyRole: "Fundador & Principal Software Engineer en",
      company: "YESSID ALBA LABS",
      pillarsLabel: "Ecosistema de ingeniería",
    },

    about: {
      eyebrow: "Perfil Profesional & Trayectoria",
      title: "Ingeniería de software, análisis de sistemas y desarrollo de productos propios.",
      lead:
        "Soy Yessid Alba, Software Engineer y Systems Analyst con más de una década de trayectoria en el diseño, arquitectura e implementación de sistemas informáticos y productos tecnológicos.",
      description:
        "Mi trabajo abarca el ciclo completo de ingeniería: desde el análisis de requerimientos, modelado de bases de datos transaccionales y diseño de arquitectura en capas, hasta la construcción de interfaces nativas de alto rendimiento, sistemas de licenciamiento criptográfico e integración entre software y electrónica.",
      secondary:
        "Como fundador de Yessid Alba Labs (YALBA LABS), desarrollo productos de software propios para macOS, Windows, iOS, Android y Web—priorizando la soberanía de datos local-first, la precisión técnica y una experiencia visual cuidada en cada detalle.",

      stats: {
        engineering: "10+ años",
        engineeringLabel: "Software Engineering",
        programming: "8+ años",
        programmingLabel: "Programación & Arquitectura",
        analysis: "5+ años",
        analysisLabel: "Análisis de Sistemas",
        products: "18",
        productsLabel: "Productos & Sistemas en Catálogo",
      },

      philosophyHeading: "Filosofía de Ingeniería y Visión Técnica",
      philosophy: [
        {
          code: "01",
          title: "Arquitectura Limpia y Dominio Desacoplado",
          description:
            "Separación estricta entre reglas de negocio, motores de persistencia e interfaz gráfica (DDD, Clean Architecture y ADRs verificables), permitiendo evolucionar y probar cada sistema sin acoplamiento frágil.",
        },
        {
          code: "02",
          title: "Soberanía de Datos y Operación Local-First",
          description:
            "Diseño de aplicaciones capaces de operar 100% en local con respuesta inmediata, privacidad por defecto y bases de datos transaccionales que pertenecen íntegramente al usuario o institución.",
        },
        {
          code: "03",
          title: "Rigor Transaccional y Seguridad Criptográfica",
          description:
            "Aritmética monetaria exacta sin deriva de coma flotante (Money(i64) y Decimal), integridad SQLite WAL ACID, autenticación Argon2id/PBKDF2 y licenciamiento offline firmado con Ed25519.",
        },
        {
          code: "04",
          title: "Ejecución Multiplataforma y Diseño de Producto",
          description:
            "Selección pragmática del stack ideal para cada plataforma (Rust, Python PyQt6/PySide6, Swift 6/SwiftUI, Kotlin Compose, Flutter y Next.js) acompañada de iconografía vectorial y sistemas de temas propios.",
        },
      ],

      specialties: {
        multiplatform: "Ingeniería multiplataforma",
        architecture: "Arquitectura de software",
        systemsAnalysis: "Análisis de sistemas",
        databaseEngineering: "Ingeniería de bases de datos",
        reverseEngineering: "Ingeniería inversa & binarios",
        electronics: "Electrónica & Sistemas",
        products: "Desarrollo de productos propios",
      },
    },

    projects: {
      eyebrow: "Plataforma de Productos & Proyectos",
      title: "Ingeniería, sistemas y software propio.",
      description:
        "Catálogo verificado de aplicaciones comerciales, plataformas de ingeniería, herramientas de escritorio, soluciones móviles e iniciativas de investigación desarrolladas bajo Yessid Alba Labs.",
      viewProject: "Explorar arquitectura y detalles",
      featuredHeading: "Productos Destacados",
      featuredSubheading:
        "Sistemas principales que representan la arquitectura, madurez técnica y visión de producto de Yessid Alba Labs.",
      catalogHeading: "Catálogo Completo de Ingeniería",
      catalogSubheading:
        "Explora todos los productos públicos filtrando por área tecnológica, nivel de madurez o tipo de presentación.",
      showingCount: "Mostrando",
      ofCount: "de",
      projectsUnit: "proyectos verificados",
      resetFilters: "Restablecer filtros",
      emptyFilterTitle: "Sin coincidencias para los filtros seleccionados.",
      emptyFilterDescription:
        "Ajusta la categoría, madurez o presentación para explorar otros productos del catálogo.",

      filters: {
        categoryLabel: "Categoría",
        maturityLabel: "Madurez",
        presentationLabel: "Presentación",
        allCategories: "Todas las áreas",
        allMaturities: "Toda madurez",
        allPresentations: "Todos",
      },

      categories: {
        "security-reverse-engineering": "Seguridad & Ingeniería Inversa",
        "database-systems": "Bases de Datos",
        "multimedia-audio": "Multimedia & Audio DSP",
        "enterprise-healthcare": "Sistemas Clínicos & ERP",
        "personal-finance": "Finanzas & Fintech",
        "desktop-productivity": "Utilidades & Productividad",
        "games-simulation": "Videojuegos & Simulación",
      },

      status: {
        active: "Activo",
        development: "En desarrollo",
        completed: "Completado",
      },

      maturity: {
        production: "Producción",
        beta: "Beta",
        alpha: "Alpha",
        prototype: "Prototipo",
      },

      presentation: {
        featured: "Destacado",
        standard: "Producto",
        research: "Investigación",
      },
    },

    projectDetail: {
      back: "Volver al catálogo de proyectos",
      project: "Visión general del sistema",
      problemAndPurpose: "Problema y propósito de ingeniería",
      features: "Capacidades y funcionalidades principales",
      architecture: "Arquitectura técnica e implementación",
      gallery: "Galería de interfaz y capturas reales",
      specifications: "Ficha técnica del producto",
      platform: "Plataforma objetivo",
      technologies: "Stack tecnológico",
      status: "Madurez y estado",
      version: "Versión verificada",
      presentation: "Clasificación",
      development: "Ingeniería y autoría",
      repository: "Repositorio público",
      viewRepository: "Ver código en GitHub",
      relatedProjects: "Otros productos del catálogo",
      studioBadge: "A YESSID ALBA LABS PRODUCT",
      lightbox: {
        previous: "Imagen anterior",
        next: "Imagen siguiente",
        close: "Cerrar vista previa",
      },
    },

    technologies: {
      eyebrow: "Expertise & Capacidades de Ingeniería",
      title: "Matriz técnica respaldada por productos reales.",
      description:
        "Cada área de especialización está sustentada por sistemas reales diseñados, implementados, probados y empaquetados dentro del ecosistema de Yessid Alba Labs.",
      relatedLabel: "Proyectos verificados:",
    },

    research: {
      eyebrow: "Investigación & Innovación Tecnológica",
      title: "Exploración técnica, procedencia binaria y síntesis procedural.",
      description:
        "Línea de investigación aplicada y desarrollo experimental de Yessid Alba Labs enfocada en ingeniería inversa verificable, metodologías clean-room, procesamiento digital de señales (DSP) y motores deterministas.",
      distinctionTitle: "Taxonomía y Distinción de Madurez",
      distinctionSubtitle:
        "En Yessid Alba Labs distinguimos con rigor entre iniciativas de investigación experimental y productos comerciales en producción:",
      tiers: [
        {
          badge: "Investigación Aplicada",
          title: "Metodologías & Laboratorios de Análisis",
          description:
            "Frameworks de auditoría estática/dinámica, cadenas de evidencia criptográfica SHA-256 y síntesis de especificaciones clean-room sin exposición de código propietario.",
        },
        {
          badge: "Prototipos & Motores",
          title: "Sistemas Experimentales & Síntesis",
          description:
            "Motores de simulación a 60 Hz 100% procedurales en Rust y pipelines híbridos de audio/vídeo (libmpv + FFmpeg + OpenGL) en fase de evolución técnica activa.",
        },
        {
          badge: "Productos Comerciales",
          title: "Software Terminado en Producción",
          description:
            "Sistemas empresariales, clínicos y financieros cerrados, probados y empaquetados con instaladores nativos (DMG / EXE) y licenciamiento Ed25519 para uso real.",
        },
      ],
      exploreResearch: "Explorar ficha de investigación",
      highlightsLabel: "Foco de investigación",
    },

    contact: {
      eyebrow: "Contacto Profesional",
      title: "Construyamos algo extraordinario.",
      description:
        "¿Tienes un desafío de arquitectura de software, una iniciativa de producto o una oportunidad de colaboración técnica? Estoy disponible para conversar sobre desarrollo de sistemas, aplicaciones multiplataforma y nuevas soluciones tecnológicas.",
      email: "Correo oficial",
      github: "GitHub",
      domain: "Dominio principal",
      mirror: "Despliegue Vercel",
      locationLabel: "Ubicación & Estudio",
      locationValue: "Yessid Alba Labs · Bolivia",
      sendEmail: "Iniciar conversación",
      exploreGithub: "Explorar GitHub",
      availability: "Disponible para proyectos, arquitectura y colaboraciones",
      areasTitle: "Áreas de Colaboración",
      areas: [
        "Arquitectura de Software & Sistemas Críticos",
        "Aplicaciones Nativas Desktop (macOS & Windows)",
        "Desarrollo Móvil (iOS SwiftUI & Android Compose / Flutter)",
        "Ingeniería de Bases de Datos & Herramientas Técnicas",
      ],
      company: "YESSID ALBA LABS",
      tagline: "Software Engineering · Product Innovation · Architecture",
      rights: "Todos los derechos reservados.",
    },

    notFound: {
      code: "Error 404",
      title: "Página no encontrada.",
      description:
        "El recurso o la ruta que estás buscando no existe o fue trasladada.",
      back: "Volver al inicio",
    },
  },

  en: {
    meta: {
      title:
        "Yessid Alba | Software Engineer & Technology Innovator · Yessid Alba Labs",
      description:
        "Official portfolio of Yessid Alba, Software Engineer & Systems Analyst. Software architecture, cross-platform product engineering, and technology research at Yessid Alba Labs.",
    },

    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      technologies: "Expertise",
      research: "Research",
      contact: "Contact",
      talk: "Let's talk",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      languageLabel: "Language",
      skipToContent: "Skip to main content",
    },

    theme: {
      label: "Theme",
      dark: "Dark",
      light: "Light",
      system: "System",
    },

    hero: {
      role: "Software Engineer & Technology Innovator",
      statement:
        "Engineering intelligent solutions. Building software that matters.",
      title: "I build software",
      titleAccent: "with purpose.",
      description:
        "I design and engineer native applications, desktop systems, analysis engines, and digital products focused on clean architecture, high performance, and refined user experience.",
      projects: "Explore projects",
      about: "Professional profile",
      companyRole: "Founder & Principal Software Engineer at",
      company: "YESSID ALBA LABS",
      pillarsLabel: "Engineering ecosystem",
    },

    about: {
      eyebrow: "Professional Profile & Trajectory",
      title: "Software engineering, systems analysis, and proprietary product development.",
      lead:
        "I am Yessid Alba, a Software Engineer and Systems Analyst with over a decade of experience designing, architecting, and implementing software systems and technological products.",
      description:
        "My work spans the complete engineering lifecycle: from systems analysis, transactional database modeling, and layered software architecture to high-performance native user interfaces, cryptographic licensing systems, and software-electronics integration.",
      secondary:
        "As founder of Yessid Alba Labs (YALBA LABS), I engineer proprietary software products across macOS, Windows, iOS, Android, and the Web—prioritizing local-first data sovereignty, technical precision, and refined visual craftsmanship.",

      stats: {
        engineering: "10+ years",
        engineeringLabel: "Software Engineering",
        programming: "8+ years",
        programmingLabel: "Programming & Architecture",
        analysis: "5+ years",
        analysisLabel: "Systems Analysis",
        products: "18",
        productsLabel: "Verified Catalog Products & Systems",
      },

      philosophyHeading: "Engineering Philosophy & Technical Vision",
      philosophy: [
        {
          code: "01",
          title: "Clean Architecture & Domain Isolation",
          description:
            "Strict separation between domain rules, persistence engines, and graphical interfaces (DDD, Clean Architecture, and documented ADRs), enabling systems to scale and be tested without fragile coupling.",
        },
        {
          code: "02",
          title: "Data Sovereignty & Local-First Reliability",
          description:
            "Engineering applications capable of operating 100% locally with instant responsiveness, privacy by default, and transactional databases owned entirely by the user or institution.",
        },
        {
          code: "03",
          title: "Transactional Rigor & Cryptographic Security",
          description:
            "Exact monetary arithmetic free of floating-point drift (Money(i64) and Decimal), SQLite WAL ACID integrity, Argon2id/PBKDF2 authentication, and Ed25519 hardware-bound offline licensing.",
        },
        {
          code: "04",
          title: "Cross-Platform Execution & Product Craftsmanship",
          description:
            "Pragmatic selection of the optimal stack per platform (Rust, Python PyQt6/PySide6, Swift 6/SwiftUI, Kotlin Compose, Flutter, and Next.js) paired with bespoke vector iconography and theme systems.",
        },
      ],

      specialties: {
        multiplatform: "Cross-platform engineering",
        architecture: "Software architecture",
        systemsAnalysis: "Systems analysis",
        databaseEngineering: "Database engineering",
        reverseEngineering: "Reverse engineering & binary analysis",
        electronics: "Electronics & Systems",
        products: "Proprietary product development",
      },
    },

    projects: {
      eyebrow: "Product & Engineering Platform",
      title: "Engineering, systems, and proprietary software.",
      description:
        "Verified catalog of commercial applications, engineering workbenches, desktop systems, mobile solutions, and research initiatives built under Yessid Alba Labs.",
      viewProject: "Explore architecture & details",
      featuredHeading: "Featured Products",
      featuredSubheading:
        "Flagship systems representing the software architecture, technical maturity, and product vision of Yessid Alba Labs.",
      catalogHeading: "Complete Engineering Catalog",
      catalogSubheading:
        "Explore all public products by filtering across technology domains, maturity levels, or presentation tiers.",
      showingCount: "Showing",
      ofCount: "of",
      projectsUnit: "verified projects",
      resetFilters: "Reset filters",
      emptyFilterTitle: "No projects match the selected filters.",
      emptyFilterDescription:
        "Adjust the category, maturity, or presentation filter to explore other products in the catalog.",

      filters: {
        categoryLabel: "Category",
        maturityLabel: "Maturity",
        presentationLabel: "Presentation",
        allCategories: "All domains",
        allMaturities: "All maturities",
        allPresentations: "All",
      },

      categories: {
        "security-reverse-engineering": "Security & Reverse Engineering",
        "database-systems": "Database Engineering",
        "multimedia-audio": "Multimedia & Audio DSP",
        "enterprise-healthcare": "Clinical & Enterprise ERP",
        "personal-finance": "Personal Finance & Fintech",
        "desktop-productivity": "Utilities & Productivity",
        "games-simulation": "Games & Simulation",
      },

      status: {
        active: "Active",
        development: "In development",
        completed: "Completed",
      },

      maturity: {
        production: "Production",
        beta: "Beta",
        alpha: "Alpha",
        prototype: "Prototype",
      },

      presentation: {
        featured: "Featured",
        standard: "Product",
        research: "Research",
      },
    },

    projectDetail: {
      back: "Back to project catalog",
      project: "System overview",
      problemAndPurpose: "Engineering problem & purpose",
      features: "Core capabilities & features",
      architecture: "Technical architecture & implementation",
      gallery: "Interface gallery & authentic screenshots",
      specifications: "Technical specifications",
      platform: "Target platform",
      technologies: "Technology stack",
      status: "Maturity & status",
      version: "Verified version",
      presentation: "Classification",
      development: "Engineering & authorship",
      repository: "Public repository",
      viewRepository: "View source on GitHub",
      relatedProjects: "Explore more products",
      studioBadge: "A YESSID ALBA LABS PRODUCT",
      lightbox: {
        previous: "Previous image",
        next: "Next image",
        close: "Close preview",
      },
    },

    technologies: {
      eyebrow: "Expertise & Engineering Capabilities",
      title: "Technical matrix backed by real products.",
      description:
        "Every area of specialization is substantiated by real software systems designed, implemented, tested, and packaged within the Yessid Alba Labs ecosystem.",
      relatedLabel: "Verified projects:",
    },

    research: {
      eyebrow: "Research & Technological Innovation",
      title: "Technical exploration, binary provenance, and procedural synthesis.",
      description:
        "Applied research and experimental engineering at Yessid Alba Labs focused on verifiable reverse engineering, clean-room reconstruction methodologies, digital signal processing (DSP), and deterministic engines.",
      distinctionTitle: "Maturity Taxonomy & Product Distinction",
      distinctionSubtitle:
        "At Yessid Alba Labs we maintain a clear architectural boundary between experimental research prototypes and commercial production software:",
      tiers: [
        {
          badge: "Applied Research",
          title: "Methodologies & Analysis Workbenches",
          description:
            "Static and dynamic auditing frameworks, SHA-256 cryptographic evidence chains, and clean-room specification synthesis without exposing proprietary code.",
        },
        {
          badge: "Prototypes & Engines",
          title: "Experimental Systems & Synthesis",
          description:
            "100% runtime-procedural 60Hz Rust simulation engines and hybrid audio/video pipelines (libmpv + FFmpeg + OpenGL) under active technical evolution.",
        },
        {
          badge: "Commercial Products",
          title: "Production-Ready Software",
          description:
            "Hardened enterprise, clinical, and financial applications tested and packaged with native installers (DMG / EXE) and Ed25519 offline licensing for real-world deployment.",
        },
      ],
      exploreResearch: "Explore research specification",
      highlightsLabel: "Research focus",
    },

    contact: {
      eyebrow: "Professional Contact",
      title: "Let's build something extraordinary.",
      description:
        "Have a software architecture challenge, a product initiative, or a technical collaboration opportunity? I'm available to discuss systems engineering, cross-platform applications, and new technological solutions.",
      email: "Official email",
      github: "GitHub",
      domain: "Primary domain",
      mirror: "Vercel deployment",
      locationLabel: "Location & Studio",
      locationValue: "Yessid Alba Labs · Bolivia",
      sendEmail: "Start a conversation",
      exploreGithub: "Explore GitHub",
      availability: "Available for projects, architecture, and collaborations",
      areasTitle: "Collaboration Focus",
      areas: [
        "Software Architecture & Mission-Critical Systems",
        "Native Desktop Applications (macOS & Windows)",
        "Mobile Engineering (iOS SwiftUI & Android Compose / Flutter)",
        "Database Engineering & Technical Developer Tooling",
      ],
      company: "YESSID ALBA LABS",
      tagline: "Software Engineering · Product Innovation · Architecture",
      rights: "All rights reserved.",
    },

    notFound: {
      code: "Error 404",
      title: "Page not found.",
      description:
        "The resource or route you are looking for does not exist or has been moved.",
      back: "Back to home",
    },
  },
} as const;
