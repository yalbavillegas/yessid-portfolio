export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
      talk: "Hablemos",
    },

    hero: {
      role: "Software Engineer · Systems Analyst",
      title: "Construyo software",
      titleAccent: "con propósito.",
      description:
        "Diseño y desarrollo aplicaciones modernas, productos digitales y soluciones de software enfocadas en funcionalidad, rendimiento y una experiencia de usuario cuidada.",
      projects: "Explorar proyectos",
      about: "Conocer más",
    },

    about: {
      eyebrow: "Sobre mí",
      title: "Software, tecnología y soluciones reales.",
      description:
        "Soy Software Engineer y Systems Analyst con experiencia en desarrollo de software, programación y análisis de sistemas. Me especializo en crear soluciones multiplataforma, combinar software con electrónica y desarrollar productos propios desde la idea hasta su implementación.",
      secondary:
        "Mi enfoque está en construir productos funcionales, escalables y bien diseñados, capaces de resolver problemas reales y adaptarse a distintos entornos y plataformas.",

      stats: {
        engineering: "10 años",
        engineeringLabel: "Software Engineering",
        programming: "8 años",
        programmingLabel: "Programación",
        analysis: "5 años",
        analysisLabel: "Análisis de sistemas",
      },

      specialties: {
        multiplatform: "Desarrollo multiplataforma",
        electronics: "Electrónica",
        products: "Productos propios",
      },
    },

    projects: {
      eyebrow: "Proyectos destacados",
      title: "Productos que estoy construyendo.",
      description:
        "Una selección de proyectos que combinan software, diseño de producto y desarrollo multiplataforma.",
      viewProject: "Ver proyecto",

      status: {
        active: "Activo",
        development: "En desarrollo",
        completed: "Completado",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
      talk: "Let's talk",
    },

    hero: {
      role: "Software Engineer · Systems Analyst",
      title: "I build software",
      titleAccent: "with purpose.",
      description:
        "I design and develop modern applications, digital products, and software solutions focused on functionality, performance, and thoughtful user experiences.",
      projects: "Explore projects",
      about: "Learn more",
    },

    about: {
      eyebrow: "About me",
      title: "Software, technology, and real solutions.",
      description:
        "I'm a Software Engineer and Systems Analyst with experience in software development, programming, and systems analysis. I specialize in building cross-platform solutions, combining software with electronics, and developing my own products from concept to implementation.",
      secondary:
        "My focus is on building functional, scalable, and well-designed products that solve real problems and adapt to different environments and platforms.",

      stats: {
        engineering: "10 years",
        engineeringLabel: "Software Engineering",
        programming: "8 years",
        programmingLabel: "Programming",
        analysis: "5 years",
        analysisLabel: "Systems Analysis",
      },

      specialties: {
        multiplatform: "Cross-platform development",
        electronics: "Electronics",
        products: "Own products",
      },
    },

    projects: {
      eyebrow: "Featured projects",
      title: "Products I'm building.",
      description:
        "A selection of projects combining software, product design, and cross-platform development.",
      viewProject: "View project",

      status: {
        active: "Active",
        development: "In development",
        completed: "Completed",
      },
    },
  },
} as const;
