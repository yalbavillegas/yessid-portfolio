import type { Project } from "@/types/project";

export type {
  Project,
  ProjectCategoryId,
  ProjectGalleryItem,
  ProjectLegacyStatus,
  ProjectLocalizedDetail,
  ProjectMaturity,
  ProjectPresentation,
  ProjectVisibility,
} from "@/types/project";

export const projects: Project[] = [
  // =========================================================================
  // 1. MREL 0.2 — MAC REVERSE ENGINEERING LAB (FEATURED)
  // =========================================================================
  {
    id: "mrel-02",
    slug: "mrel",
    name: "MREL 0.2 — Mac Reverse Engineering Lab",
    version: "0.2.0",
    releaseDate: "2026-11",
    categoryId: "security-reverse-engineering",
    category: "Security & Reverse Engineering",
    platform: "macOS (Apple Silicon ARM64)",
    viewportType: "desktop",
    technologies: [
      "Python 3.14",
      "PyQt6",
      "SQLite v4 (WAL)",
      "Mach-O Analysis",
      "Codesign",
      "SHA-256 Provenance",
      "Ghidra Headless",
    ],
    status: "active",
    featured: true,
    visibility: "public",
    maturity: "beta",
    presentation: "featured",

    images: {
      primary: "/projects/mrel/dashboard.png",
      secondary: "/projects/mrel/explorer.png",
    },

    gallery: [
      {
        src: "/projects/mrel/dashboard.png",
        caption: {
          es: "Investigation Dashboard — métricas derivadas de descubrimiento estático, integridad de artefactos y cobertura de analizadores.",
          en: "Investigation Dashboard — static discovery metrics, artifact integrity verification, and analyzer coverage.",
        },
      },
      {
        src: "/projects/mrel/explorer.png",
        caption: {
          es: "Component & Evidence Explorer — trazabilidad de evidencias con verificación criptográfica SHA-256 en modo solo lectura.",
          en: "Component & Evidence Explorer — read-only evidence provenance with cryptographic SHA-256 verification.",
        },
      },
      {
        src: "/projects/mrel-reconstruction-initiative/evidence-graph.png",
        caption: {
          es: "Grafo de Componentes — visualización interactiva de ejecutables, módulos y dependencias dinámicas respaldadas por evidencia.",
          en: "Component Graph — interactive visualization of executables, modules, and dynamic dependencies backed by evidence.",
        },
      },
      {
        src: "/projects/mrel/reports.png",
        caption: {
          es: "Report Viewer — generación determinista de informes técnicos en Markdown, JSON y HTML.",
          en: "Report Viewer — deterministic technical report generation in Markdown, JSON, and HTML.",
        },
      },
    ],

    description: {
      es: "Plataforma modular de ingeniería inversa estática y telemetría controlada para aplicaciones macOS (Mach-O / .app), con cadena de custodia SHA-256 verificable, separación epistemológica entre hechos e inferencias y workbench visual en PyQt6.",
      en: "Modular static reverse-engineering and controlled runtime telemetry workbench for macOS applications (Mach-O / .app), featuring a verifiable SHA-256 evidence hash-chain, strict fact-vs-inference separation, and a 4-view PyQt6 GUI.",
    },

    details: {
      es: {
        headline: "Ingeniería inversa trazable y verificación de binarios en macOS.",
        problemAndPurpose:
          "El análisis técnico de paquetes .app y binarios Mach-O suele fragmentarse en scripts ad-hoc sin control de ejecución ni garantías de integridad sobre la evidencia recolectada. MREL 0.2 resuelve este problema proporcionando un laboratorio aislado de solo lectura sobre los binarios objetivo, donde cada ejecución de herramienta queda registrada, encadenada con hashes SHA-256 y clasificada según su nivel de certeza.",
        overview: [
          "MREL (Mac Reverse Engineering Lab) es una plataforma de auditoría e investigación de software para macOS Apple Silicon desarrollada bajo Yessid Alba Labs.",
          "Combina una interfaz gráfica de escritorio en PyQt6 (Dark Navy Workbench) y una interfaz CLI completa para auditar entornos, inspeccionar estructuras de paquetes .app, analizar cabeceras y símbolos Mach-O, verificar firmas criptográficas, correlacionar telemetría de ejecución autorizada y emitir reportes reproducibles.",
        ],
        features: [
          "Política estricta de solo lectura sobre binarios y paquetes .app objetivo",
          "Cadena de custodia de evidencias con hashes encadenados SHA-256 (prev_record_sha256 -> record_sha256)",
          "Separación estructural e invariantes SQLite entre hechos confirmados e inferencias",
          "Ejecución segura mediante SafeCommandRunner (shell=False, allowlist cerrada de herramientas y límites de captura)",
          "Grafo interactivo de componentes (ComponentGraphManager) para ejecutables, frameworks y dylibs",
          "Monitor de ejecución dinámica bajo autorización explícita (RuntimeMonitor & BehavioralAnalysisReport)",
          "Contratos JSON Schema recursivos para 7 roles de agentes de análisis e integración opcional con Ghidra Headless",
          "Motor de reportes técnicos deterministas en formatos Markdown, JSON y HTML verificados",
        ],
        architecture: [
          "Núcleo en Python 3.12+ sin dependencias obligatorias en tiempo de ejecución para el motor CLI y persistencia relacional en SQLite (esquema v4 con migraciones controladas y respaldos automáticos pre-actualización).",
          "Capa de seguridad (ToolExecutionPolicy & SafeCommandRunner) que encapsula 12 adaptadores nativos (file, otool, nm, plutil, codesign, swift-demangle, ghidra, lldb, entre otros) impidiendo inyección de comandos o modificaciones fuera del workspace aislado.",
          "Interfaz gráfica desacoplada en PyQt6 mediante InvestigationServiceFacade y workers asíncronos QThread, estructurada en 4 vistas especializadas: Investigation Dashboard, Component & Evidence Explorer, Runtime Timeline y Report Viewer.",
        ],
      },
      en: {
        headline: "Verifiable reverse engineering and binary analysis on macOS.",
        problemAndPurpose:
          "Technical analysis of macOS .app bundles and Mach-O binaries often relies on fragmented scripts without execution governance or cryptographic provenance over collected artifacts. MREL 0.2 addresses this by providing an isolated, strictly read-only investigation workbench where every tool execution is governed, linked to a SHA-256 hash-chain, and epistemically separated into confirmed facts versus inferences.",
        overview: [
          "MREL (Mac Reverse Engineering Lab) is a modular macOS Apple Silicon binary auditing and software investigation platform engineered by Yessid Alba Labs.",
          "It pairs a 4-view Dark Navy PyQt6 desktop workbench with a deterministic CLI to audit host environments, inspect .app bundle hierarchies, parse Mach-O load commands and symbols, verify cryptographic code signatures, correlate opt-in runtime telemetry, and generate reproducible technical reports.",
        ],
        features: [
          "Strictly read-only target policy preserving original .app bundles and Mach-O binaries untouched",
          "Tamper-evident SHA-256 hash-chain evidence registry (prev_record_sha256 -> record_sha256)",
          "Database-enforced separation between confirmed tool observations and analytical inferences",
          "Hardened tool execution via SafeCommandRunner (shell=False, closed flag allowlists, and output bounds)",
          "Interactive component dependency graph (ComponentGraphManager) across executables, frameworks, and dylibs",
          "Opt-in authorized runtime monitoring and behavioral analysis timeline",
          "Recursive JSON Schema contracts for 7 specialized AI analysis agent roles plus optional headless Ghidra integration",
          "Deterministic multi-format report engine exporting verified Markdown, JSON, and HTML artifacts",
        ],
        architecture: [
          "Zero-mandatory-dependency Python 3.12+ core engine backed by a transactional SQLite v4 schema with automated pre-upgrade backup and schema verification routines.",
          "Security governance layer (ToolExecutionPolicy & SafeCommandRunner) wrapping 12 native and external adapters (file, otool, nm, plutil, codesign, swift-demangle, ghidra, lldb) with strict path and environment sanitization.",
          "Decoupled PyQt6 desktop GUI driven by InvestigationServiceFacade and non-blocking QThread workers across four views: Investigation Dashboard, Component & Evidence Explorer, Runtime Timeline, and Report Viewer.",
        ],
      },
    },
  },

  // =========================================================================
  // 2. SQLITE DESKTOP MANAGER — PROFESSIONAL EDITION (FEATURED)
  // =========================================================================
  {
    id: "sqlite-desktop-manager-2",
    slug: "sqlite-desktop-manager",
    name: "SQLite Desktop Manager — Professional Edition",
    version: "2.0.0",
    releaseDate: "2026-11",
    categoryId: "database-systems",
    category: "Database Engineering",
    platform: "macOS & Windows",
    viewportType: "desktop",
    technologies: [
      "Python 3.14",
      "PySide6",
      "SQLite 3",
      "Clean Architecture",
      "Keyset Pagination",
      "OpenPyXL",
      "PyInstaller",
    ],
    status: "completed",
    featured: true,
    visibility: "public",
    maturity: "production",
    presentation: "featured",

    images: {
      primary: "/projects/sqlite-desktop-manager/explorer.png",
      secondary: "/projects/sqlite-desktop-manager/workbench.png",
    },

    gallery: [
      {
        src: "/projects/sqlite-desktop-manager/explorer.png",
        caption: {
          es: "Espacio de trabajo de 3 paneles en tema Dark Navy: Explorador de Esquema, Explorador de Datos paginado e Inspector de Propiedades.",
          en: "3-panel Dark Navy workspace: Schema Explorer, paginated Data Explorer, and Database Properties Inspector.",
        },
      },
      {
        src: "/projects/sqlite-desktop-manager/workbench.png",
        caption: {
          es: "SQL Workbench multi-pestaña con resaltado léxico, numeración de líneas, EXPLAIN QUERY PLAN y analizador de seguridad SQL.",
          en: "Multi-tab SQL Workbench featuring syntax highlighting, line numbers, EXPLAIN QUERY PLAN, and SQL safety analysis.",
        },
      },
      {
        src: "/projects/sqlite-desktop-manager/light-theme.png",
        caption: {
          es: "Motor de temas dinámico con soporte Dark Navy, Claro y Sistema cumpliendo contraste WCAG 2.1 AA.",
          en: "Dynamic theme engine supporting Dark Navy, Light, and System modes with WCAG 2.1 AA contrast compliance.",
        },
      },
    ],

    description: {
      es: "Aplicación de escritorio profesional para administración, consulta, auditoría, mantenimiento y respaldo verificado de bases de datos SQLite 3, con arquitectura limpia en capas, paginación O(log N) y analizador de seguridad SQL de 6 pasos.",
      en: "Professional desktop workbench for administering, querying, auditing, maintaining, and backing up SQLite 3 databases, engineered with a strict layered architecture, O(log N) keyset pagination, and a 6-step SQL safety analyzer.",
    },

    details: {
      es: {
        headline: "Ingeniería y administración profesional de bases de datos SQLite.",
        problemAndPurpose:
          "Las herramientas genéricas de administración SQLite suelen bloquear la interfaz con tablas grandes, confundir valores NULL con cadenas vacías o ejecutar sentencias destructivas sin advertir sobre claves foráneas en cascada. SQLite Desktop Manager 2.0 fue diseñado para ofrecer control transaccional preciso, seguridad contra corrupción y rendimiento determinista en bases de datos de producción.",
        overview: [
          "SQLite Desktop Manager — Professional Edition (v2.0.0) es una plataforma de escritorio desarrollada en Python y PySide6 bajo estándares de arquitectura limpia (ADR-001 a ADR-006).",
          "Su interfaz de 3 paneles integra exploración de esquema en tiempo real, edición CRUD con distinción estricta de tipos, un SQL Workbench multi-pestaña con cancelación asíncrona y herramientas de mantenimiento y respaldo verificado.",
        ],
        features: [
          "Interfaz de 3 paneles con temas Dark Navy, Light y Sistema (contraste WCAG 2.1 AA)",
          "Paginación determinista LIMIT/OFFSET y soporte Keyset O(log N) verificado con 100,000+ filas",
          "CRUD completo con soporte para PK simple/compuesta, rowid, tablas WITHOUT ROWID y vistas en solo lectura",
          "Distinción estricta entre valores NULL, cadenas vacías (\"\") y celdas binarias BLOB",
          "SQL Workbench multi-pestaña con resaltado de sintaxis, EXPLAIN QUERY PLAN e interrupción vía conn.interrupt()",
          "Analizador de seguridad SQL de 6 pasos (SqlSafetyAnalyzer) con detección de impacto por ON DELETE CASCADE",
          "Importación CSV transaccional con neutralización de fórmulas y exportación a CSV, Excel (.xlsx), JSON y volcado SQL",
          "Copias de seguridad verificadas con integrity_check y restauración atómica de 24 pasos con respaldo pre_restore",
        ],
        architecture: [
          "Arquitectura en 3 capas estrictamente desacopladas (ADR-001): core/db como propietario exclusivo de sqlite3, core/services en Python puro sin dependencias de UI, y capa ui en PySide6 comunicada mediante TaskRunner asíncrono.",
          "Gestión de conexiones efímeras por worker con isolation_level=None, PRAGMA foreign_keys=ON, transacciones BEGIN IMMEDIATE, bloqueo cooperativo .sdm.lock y modo solo lectura real respaldado por SqlAuthorizer nativo.",
          "Parser léxico propio (SqlScriptSplitter) capaz de dividir scripts complejos respetando comentarios, literales y bloques de triggers BEGIN...END sin falsos positivos.",
        ],
      },
      en: {
        headline: "Professional-grade SQLite database administration and query engineering.",
        problemAndPurpose:
          "Conventional SQLite utilities frequently freeze on large datasets, conflate NULL values with empty strings, or execute destructive statements without warning about cascading foreign keys. SQLite Desktop Manager 2.0 was engineered to deliver deterministic performance, transactional safety, and corruption-proof maintenance on production databases.",
        overview: [
          "SQLite Desktop Manager — Professional Edition (v2.0.0) is a cross-platform desktop workbench built with Python and PySide6 following documented Architecture Decision Records (ADR-001 through ADR-006).",
          "Its 3-panel layout unifies real-time schema inspection, type-accurate CRUD data exploration, an asynchronous multi-tab SQL Workbench, and verified backup and maintenance workflows.",
        ],
        features: [
          "3-panel workbench with dynamic Dark Navy, Light, and System themes (WCAG 2.1 AA compliant)",
          "Deterministic LIMIT/OFFSET and O(log N) Keyset pagination benchmarked on 100,000+ rows",
          "Full CRUD supporting single/composite PKs, rowid, WITHOUT ROWID tables, and read-only views",
          "Strict visual and transactional distinction between NULL, empty strings (\"\"), and read-only BLOB payloads",
          "Multi-tab SQL Workbench with syntax highlighting, EXPLAIN QUERY PLAN, and live query cancellation via conn.interrupt()",
          "6-step SqlSafetyAnalyzer detecting destructive impact and incoming ON DELETE CASCADE foreign keys before commit",
          "Transactional CSV import with formula-injection neutralization plus exports to CSV, Excel (.xlsx), JSON, and SQL dumps",
          "Verified native backups with integrity_check and a 24-step atomic restore pipeline with automatic pre_restore safety snapshots",
        ],
        architecture: [
          "Clean 3-layer architecture (ADR-001): core/db as the sole owner of sqlite3 primitives, pure-Python core/services with zero UI or driver coupling, and a PySide6 presentation layer orchestrated via an asynchronous QtCore TaskRunner.",
          "Ephemeral worker connections enforcing isolation_level=None, PRAGMA foreign_keys=ON, BEGIN IMMEDIATE transactions, cooperative .sdm.lock files, and true read-only mode enforced by a native SqlAuthorizer.",
          "Custom lexical SqlScriptSplitter accurately tokenizing comments, string literals, and multi-statement BEGIN...END trigger definitions.",
        ],
      },
    },
  },

  // =========================================================================
  // 3. SANTA CLARA — INTEGRATED PHARMACY MANAGEMENT SYSTEM (FEATURED)
  // =========================================================================
  {
    id: "santa-clara-erp",
    slug: "santa-clara",
    name: "Santa Clara — Pharmacy Management System",
    version: "1.0.0",
    releaseDate: "2026-11",
    categoryId: "enterprise-healthcare",
    category: "Clinical & Enterprise ERP",
    platform: "macOS & Windows",
    viewportType: "desktop",
    technologies: [
      "Rust (Edition 2024)",
      "egui / eframe",
      "SQLite WAL (SQLx)",
      "Tokio",
      "Argon2id & CSPRNG",
      "Ed25519 Licensing",
      "ESC/POS & PDF",
    ],
    status: "completed",
    featured: true,
    visibility: "public",
    maturity: "production",
    presentation: "featured",

    images: {
      primary: "/projects/santa-clara/dashboard.png",
      secondary: "/projects/santa-clara/finanzas.png",
    },

    gallery: [
      {
        src: "/projects/santa-clara/dashboard.png",
        caption: {
          es: "Panel Principal en Rust (egui/eframe) — KPIs en tiempo real, estado de caja, alertas sanitarias FEFO y evolución de ventas.",
          en: "Main Dashboard in Rust (egui/eframe) — real-time KPIs, cash register status, FEFO sanitary alerts, and sales trends.",
        },
      },
      {
        src: "/projects/santa-clara/finanzas.png",
        caption: {
          es: "Finanzas y Resultados — estado de rendimiento mensual consolidado con aritmética monetaria exacta en centavos Money(i64).",
          en: "Financial Performance — consolidated monthly income statement powered by exact fixed-point Money(i64) arithmetic.",
        },
      },
      {
        src: "/projects/santa-clara/login.png",
        caption: {
          es: "Acceso y Seguridad — autenticación protegida con Argon2id (PHC v19) y recuperación administrativa CSPRNG.",
          en: "Authentication & Security — login protected by Argon2id (PHC v19) and CSPRNG administrative recovery keys.",
        },
      },
      {
        src: "/projects/santa-clara/about.png",
        caption: {
          es: "Identidad del Sistema — arquitectura 100% local, offline-first y licenciamiento Ed25519 vinculado a hardware.",
          en: "System Identity — 100% local, offline-first architecture with hardware-bound Ed25519 cryptographic licensing.",
        },
      },
    ],

    description: {
      es: "Sistema integral de escritorio desarrollado en Rust para la gestión operativa, sanitaria (lotes FEFO), comercial (POS) y financiera de farmacias, con motor gráfico acelerado por hardware, seguridad Argon2id y licenciamiento offline Ed25519.",
      en: "High-performance desktop ERP engineered in Rust for pharmaceutical operations, sanitary FEFO batch control, point-of-sale (POS), and financial accounting, featuring hardware-accelerated egui rendering, Argon2id security, and offline Ed25519 licensing.",
    },

    details: {
      es: {
        headline: "Ingeniería en Rust para operación farmacéutica crítica y soberanía de datos.",
        problemAndPurpose:
          "Los establecimientos farmacéuticos requieren velocidad inmediata en mostrador, control estricto de fechas de caducidad para evitar dispensar medicamentos vencidos y precisión contable absoluta sin depender de la estabilidad de una conexión a internet. Santa Clara resuelve estos desafíos mediante un binario nativo en Rust 100% local y offline-first con tiempos de respuesta sub-milisegundo.",
        overview: [
          "Santa Clara (v1.0.0) es un sistema empresarial de escritorio compilado de forma nativa para macOS (Apple Silicon & Intel) y Windows (64-bit), desarrollado en Rust (Edición 2024) con interfaz acelerada por hardware mediante egui/eframe y persistencia asíncrona SQLite WAL con SQLx y Tokio.",
          "Abarca 14 módulos integrados que cubren desde la recepción de compras de droguerías y control sanitario por lotes hasta punto de venta, arqueos ciegos de caja, estados financieros y emisión documental térmica y PDF.",
        ],
        features: [
          "Control sanitario FEFO (First Expired, First Out) con bloqueo automático de lotes vencidos o en cuarentena",
          "Punto de Venta (POS) transaccional con descuento atómico de stock por lote y arqueo ciego de turnos de caja",
          "Motor monetario de punto fijo en centavos Money(i64) que elimina errores de redondeo de coma flotante IEEE-754",
          "Seguridad administrativa con Argon2id (PHC v19), credenciales temporales CSPRNG y rotación atómica de claves de recuperación",
          "Control de acceso basado en roles (RBAC) validado en capa de aplicación antes de cada mutación SQL",
          "Impresión térmica ESC/POS (58 mm y 80 mm), generación de comprobantes PDF vectoriales y reportes nativos en Excel (.xlsx)",
          "Copias de seguridad consistentes en caliente mediante VACUUM INTO sin detener la atención en mostrador",
          "Licenciamiento comercial offline vinculado a hardware (IOPlatformUUID / SMBIOS UUID) firmado con criptografía asimétrica Ed25519",
        ],
        architecture: [
          "Arquitectura Domain-Driven Design (DDD) en 5 capas: core (primitivas Money, AppPaths, errores), domain (lotes FEFO, POS, caja, licencias, usuarios), application (servicios transaccionales), infrastructure (SQLite WAL, exportadores PDF/Excel, huella de hardware) y presentation (egui/eframe con sistema centralizado ThemeTokens Claro/Oscuro).",
          "Aislamiento estricto entre entornos de desarrollo (Debug) y producción comercial (Release) en los directorios nativos del sistema operativo, garantizando preservación incondicional de la base de datos ante actualizaciones o expiración de licencias.",
          "Respaldado por una suite automatizada de 79 pruebas unitarias, de integración y de aceptación visual.",
        ],
      },
      en: {
        headline: "Rust systems engineering for mission-critical pharmacy operations and data sovereignty.",
        problemAndPurpose:
          "Pharmacies demand instant counter responsiveness, strict expiration-date governance to prevent dispensing expired medication, and exact financial accounting without relying on cloud connectivity. Santa Clara solves this through a 100% local, offline-first native Rust binary delivering sub-millisecond UI and transactional performance.",
        overview: [
          "Santa Clara (v1.0.0) is a native desktop ERP compiled for macOS (Apple Silicon & Intel) and Windows (64-bit), written in Rust (Edition 2024) using hardware-accelerated egui/eframe rendering and asynchronous SQLite WAL persistence via SQLx and Tokio.",
          "It unifies 14 operational modules spanning wholesale purchase reception, sanitary batch tracking, point of sale, blind cash-drawer reconciliation, financial statements, and thermal/PDF receipt generation.",
        ],
        features: [
          "Automated FEFO (First Expired, First Out) batch deduction with preventive blocking of expired or quarantined stock",
          "Atomic Point of Sale (POS) with per-batch stock verification and blind cash-shift reconciliation",
          "Exact fixed-point Monetary Engine Money(i64) eliminating IEEE-754 floating-point rounding drift",
          "Hardened authentication using Argon2id (PHC v19), 28-char CSPRNG bootstrap credentials, and atomic recovery-key rotation",
          "Granular Role-Based Access Control (RBAC) enforced at the application service boundary",
          "ESC/POS thermal printing (58 mm & 80 mm), vector PDF receipts, and native binary Microsoft Excel (.xlsx) accounting exports",
          "Hot atomic database backups via SQLite VACUUM INTO without interrupting counter operations",
          "Hardware-bound offline commercial licensing (IOPlatformUUID / SMBIOS UUID) verified via Ed25519 digital signatures",
        ],
        architecture: [
          "5-layer Domain-Driven Design (DDD) architecture: core (Money, AppPaths, error primitives), domain (FEFO inventory, POS, cash shifts, licensing, auth), application (orchestrating services), infrastructure (SQLx WAL pool, PDF/XLSX generators, hardware fingerprinting), and presentation (egui/eframe with centralized Dark/Light ThemeTokens).",
          "Strict filesystem isolation between Debug and Production data directories, ensuring customer SQLite databases are never altered or destroyed by upgrades or license validation errors.",
          "Verified by 79 automated unit, security, transactional, and responsive UI acceptance tests.",
        ],
      },
    },
  },

  // =========================================================================
  // 4. MEDIPLUS 3.0 — CLINICAL MANAGEMENT SYSTEM (FEATURED)
  // =========================================================================
  {
    id: "mediplus-30",
    slug: "mediplus",
    name: "MediPlus 3.0 — Clinical & Medical Practice Suite",
    version: "3.0.0",
    releaseDate: "2026-11",
    categoryId: "enterprise-healthcare",
    category: "Clinical & Enterprise ERP",
    platform: "macOS & Windows",
    viewportType: "desktop",
    technologies: [
      "Python 3.11+",
      "PyQt6 & QtSvg",
      "SQLite 3 (WAL)",
      "ReportLab PDF",
      "Ed25519 Licensing",
      "PBKDF2 Security",
      "PyInstaller",
    ],
    status: "completed",
    featured: true,
    visibility: "public",
    maturity: "production",
    presentation: "featured",

    images: {
      primary: "/projects/mediplus/dashboard.png",
      secondary: "/projects/mediplus/finances.png",
    },

    gallery: [
      {
        src: "/projects/mediplus/dashboard.png",
        caption: {
          es: "Panel de Control Clínico en tema oscuro — KPIs médicos, agenda del día, balance financiero y accesos rápidos con iconografía SVG propia.",
          en: "Clinical Control Dashboard in dark theme — medical KPIs, daily schedule, financial balance, and custom vector SVG iconography.",
        },
      },
      {
        src: "/projects/mediplus/agenda.png",
        caption: {
          es: "Agenda Médica Multi-Vista — programación diaria, semanal y mensual con prevención automática de solapamiento de horarios.",
          en: "Multi-View Medical Agenda — daily, weekly, and monthly scheduling with automated time-slot collision prevention.",
        },
      },
      {
        src: "/projects/mediplus/finances.png",
        caption: {
          es: "Caja y Finanzas en tema claro clínico — flujo de ingresos y egresos, gráfico vectorial nativo y emisión de comprobantes PDF.",
          en: "Clinic Finances in clinical light theme — income/expense ledger, native vector bar chart, and PDF receipt generation.",
        },
      },
    ],

    description: {
      es: "Sistema integral de escritorio para consultorios médicos y policlínicas que unifica expediente clínico electrónico, somatometría, recetas en PDF, agenda multi-vista, finanzas y licenciamiento criptográfico Ed25519 con 56 iconos vectoriales SVG diseñados a medida.",
      en: "Comprehensive desktop suite for medical practices and clinics unifying electronic health records (EHR), vital signs, PDF prescriptions, multi-view scheduling, clinic accounting, and Ed25519 cryptographic licensing with 56 custom-designed SVG icons.",
    },

    details: {
      es: {
        headline: "Gestión clínica integral con diseño vectorial nativo y seguridad criptográfica.",
        problemAndPurpose:
          "Los consultorios médicos independientes requieren organizar historias clínicas, signos vitales, recetas membretadas, turnos y finanzas en un entorno rápido, privado y libre de cuotas mensuales en la nube. MediPlus 3.0 ofrece una estación clínica todo-en-uno con almacenamiento local blindado y generación documental inmediata.",
        overview: [
          "MediPlus 3.0 es una aplicación comercial multiplataforma para macOS (.app / .dmg) y Windows (.exe) desarrollada en Python con PyQt6, SQLite 3 en modo WAL y motor documental ReportLab.",
          "La versión 3.0 introduce un sistema de diseño clínico con 56 iconos vectoriales SVG originales renderizados dinámicamente en pantallas Retina/4K, motor de temas Claro / Oscuro / Sistema en tiempo real y licenciamiento offline basado en firmas Ed25519.",
        ],
        features: [
          "Expediente clínico electrónico (EHR) con anamnesis, diagnóstico CIE-10, somatometría (IMC automático) y alertas visuales de alergias",
          "Emisión de recetas médicas oficiales, certificados de reposo y comprobantes de caja en PDF vectorial con membrete institucional",
          "Agenda médica en vistas Diaria, Semanal (7 días) y Mensual con detección de colisiones horarias",
          "Módulo económico con KPIs financieros, gráfico vectorial nativo (AnalyticBarChart) y balance neto mensual",
          "Sistema de 56 iconos vectoriales SVG exclusivos con tintado dinámico por tema mediante QPainter",
          "Control de acceso por roles (Médico Administrador vs. Secretaría/Recepción) con hashing PBKDF2-HMAC-SHA256 (120,000 iteraciones) y bitácora de auditoría",
          "Licenciamiento criptográfico offline Ed25519 con huella de hardware y modo de evaluación de 15 días no destructivo",
          "Respaldos atómicos en caliente (conn.backup) y aislamiento de datos en ~/Library/Application Support/MediPlus y %APPDATA%\\MediPlus",
        ],
        architecture: [
          "Arquitectura MVC + Servicios desacoplados: modelos de dominio, controladores reactivos (Dashboard, Patient, Appointment, Finance) y capa de servicios especializados (AuthService, PatientService, AppointmentService, FinanceService, PdfService, BackupService, IconService, ThemeManager).",
          "Subsistema de licenciamiento autónomo (CryptoEngine Ed25519, HardwareFingerprint y LicenseStorage) con clave pública embebida y degradación elegante que preserva intactas las historias clínicas.",
          "Pipeline de compilación automatizado para macOS (PyInstaller, codesign, notarytool y hdiutil DMG) y Windows (PowerShell + Inno Setup 6).",
        ],
      },
      en: {
        headline: "End-to-end clinical practice management with custom vector UI and cryptographic security.",
        problemAndPurpose:
          "Independent medical practices and clinics need to manage electronic health records, vital signs, branded prescriptions, appointments, and accounting in a fast, private environment without recurring cloud subscriptions. MediPlus 3.0 delivers an all-in-one clinical workstation with isolated local storage and instant PDF document generation.",
        overview: [
          "MediPlus 3.0 is a commercial desktop suite for macOS (.app / .dmg) and Windows (.exe) engineered in Python with PyQt6, SQLite 3 (WAL mode), and ReportLab PDF.",
          "Version 3.0 introduces a custom clinical design system featuring 56 bespoke SVG icons with Retina/4K dynamic tinting, live Light / Dark / System theme switching, and Ed25519 hardware-bound offline licensing.",
        ],
        features: [
          "Electronic Health Record (EHR) with anamnesis, ICD-10 diagnosis, vital signs (automated BMI), and highlighted allergy alerts",
          "Instant vector PDF generation for medical prescriptions, medical leave certificates, and payment receipts",
          "Multi-view Medical Agenda (Daily, 7-day Weekly, and Monthly) with automatic schedule-conflict prevention",
          "Clinic finance ledger featuring real-time KPIs, a custom vector AnalyticBarChart, and monthly net balance tracking",
          "Bespoke 56-icon SVG iconography engine with live theme-aware QPainter chromatic tinting",
          "Role-Based Access Control (Physician Admin vs. Receptionist) backed by PBKDF2-HMAC-SHA256 (120,000 iterations) and an immutable audit log",
          "Ed25519 asymmetric offline licensing supporting 15-day trials, perpetual, subscription, and institutional tiers without ever risking patient data",
          "Hot atomic SQLite backups (conn.backup) and OS-native data directory isolation across macOS and Windows",
        ],
        architecture: [
          "Decoupled MVC + Service layer architecture separating domain models, UI controllers, and specialized services (AuthService, PatientService, AppointmentService, FinanceService, PdfService, BackupService, IconService, ThemeManager).",
          "Self-contained cryptographic licensing subsystem (CryptoEngine Ed25519, HardwareFingerprint, LicenseStorage) verifying signatures offline against an embedded public key.",
          "Automated cross-platform release pipeline producing signed macOS .app/.dmg bundles and Windows Inno Setup installers.",
        ],
      },
    },
  },

  // =========================================================================
  // 5. AUDIOSPHERE PRO 2.0 (FEATURED)
  // =========================================================================
  {
    id: "audiosphere-pro-2",
    slug: "audiosphere-pro",
    name: "AudioSphere Pro 2.0",
    version: "2.0.0-alpha.1",
    releaseDate: "2026-11",
    categoryId: "multimedia-audio",
    category: "Multimedia & Audio DSP",
    platform: "macOS",
    viewportType: "desktop",
    technologies: [
      "Python 3.14",
      "PySide6",
      "libmpv 0.39 (LGPL)",
      "FFmpeg 7.1 (LGPL)",
      "OpenGL 4.1 Core",
      "CoreAudio",
      "FFT Spectrum & DSP",
    ],
    status: "development",
    featured: true,
    visibility: "public",
    maturity: "alpha",
    presentation: "featured",

    images: {
      primary: "/projects/audiosphere-pro/equalizer.png",
      secondary: "/projects/audiosphere-pro/library.png",
    },

    gallery: [
      {
        src: "/projects/audiosphere-pro/equalizer.png",
        caption: {
          es: "Modo Reproducción & DSP — ecualizador paramétrico de 10 bandas sobre FFmpeg libavfilter y analizador de espectro FFT de 32 bandas en tiempo real.",
          en: "Playback & DSP Studio — 10-band equalizer over FFmpeg libavfilter and real-time 32-band PCM FFT spectrum analyzer.",
        },
      },
      {
        src: "/projects/audiosphere-pro/library.png",
        caption: {
          es: "Biblioteca de Álbumes — agrupación automática por metadatos, carátulas embebidas e inspección de formato de muestreo.",
          en: "Album Library — automated metadata grouping, embedded artwork extraction, and sample-rate format inspection.",
        },
      },
      {
        src: "/projects/audiosphere-pro/video-chapters.png",
        caption: {
          es: "Motor de Vídeo OpenGL 4.1 — reproducción acelerada por hardware con selector de capítulos, pistas de audio múltiples y subtítulos ASS/SRT.",
          en: "OpenGL 4.1 Video Engine — hardware-accelerated playback with chapter navigation, multi-track audio drawer, and ASS/SRT subtitles.",
        },
      },
      {
        src: "/projects/audiosphere-pro/music-intelligence.png",
        caption: {
          es: "Music Intelligence — auditoría y normalización asistida de metadatos musicales con revisión comparativa antes de escritura.",
          en: "Music Intelligence — assisted music metadata auditing and normalization with side-by-side diff review before writing.",
        },
      },
    ],

    description: {
      es: "Reproductor y estación multimedia de alta fidelidad para macOS con motor híbrido libmpv + FFmpeg LGPL, renderizado de vídeo OpenGL 4.1 Core Profile, ecualizador DSP de 10 bandas, espectro FFT en tiempo real, ReplayGain, auditoría asistida de metadatos y validación offline de subtítulos.",
      en: "High-fidelity macOS media workstation powered by a hybrid libmpv + FFmpeg LGPL engine, OpenGL 4.1 Core Profile video rendering, a 10-band DSP equalizer, real-time 32-band FFT spectrum analysis, ReplayGain, assisted metadata auditing, and offline subtitle validation.",
    },

    details: {
      es: {
        headline: "Ingeniería multimedia de alta fidelidad, DSP en tiempo real y vídeo OpenGL en macOS.",
        problemAndPurpose:
          "Los reproductores multimedia de escritorio suelen elegir entre una reproducción de vídeo básica o una gestión musical pesada, careciendo de procesamiento DSP transparente, integración nativa con CoreAudio / MediaCenter de macOS y herramientas seguras para auditar metadatos y subtítulos sin sobrescribir archivos originales.",
        overview: [
          "AudioSphere Pro 2.0 (v2.0.0-alpha.1 · Phase C) es una estación multimedia nativa para macOS empaquetada como bundle autónomo AudioSphere Pro.app con frameworks LGPL integrados (libmpv 0.39.0 + FFmpeg 7.1.1) e interfaz en PySide6.",
          "Unifica reproducción de audio sin pérdidas (FLAC, ALAC, WAV, AAC, MP3, OGG) con análisis espectral FFT en vivo, reproducción de vídeo acelerada por GPU mediante OpenGL 4.1 Core Profile y subsistemas inteligentes de organización de bibliotecas.",
        ],
        features: [
          "Ecualizador DSP de 10 bandas en tiempo real (FFmpeg libavfilter equalizer Q=1.41) con presets y ajuste en caliente",
          "Analizador de espectro FFT de 32 bandas alimentado directamente por flujo PCM decodificado",
          "Superficie de vídeo OpenGL 4.1 Core Profile con doble buffer, pantalla completa cinemática, capítulos y múltiples pistas de audio/subtítulos",
          "Soporte de ReplayGain (Track / Album, preamplificación y prevención de clipping) y selección directa de dispositivos CoreAudio",
          "Integración nativa con macOS: MPNowPlayingInfoCenter, MPRemoteCommandCenter (controles multimedia del sistema) y apertura de archivos desde Finder/Dock",
          "Biblioteca reactiva con carpetas vigiladas (Watched Folders), listas de reproducción, cola persistente y continuidad de sesión",
          "Music Intelligence (auditoría asistida con MusicBrainz / Cover Art Archive y revisión comparativa en BD local) y Subtitle Intelligence offline (validación estructural SRT/ASS/VTT y hashing determinista)",
          "Auto-test en vivo integrado dentro del bundle (--bundle-self-test) para certificar OpenGL, CoreAudio, libmpv y subtítulos",
        ],
        architecture: [
          "Arquitectura desacoplada por adaptadores: núcleo de dominio multimedia (PlaybackState, ReplayGainConfig, AudioOutputPort) conectado a libmpv mediante ctypes/C-API y superficie QOpenGLWidget dedicada.",
          "Integración con el sistema operativo macOS mediante puente nativo (MacOSSystemMediaService) para sincronizar metadatos de reproducción y comandos remotos de hardware.",
          "Empaquetado autónomo con resolución dinámica de @executable_path/../Frameworks para operar sin dependencias externas instaladas por el usuario.",
        ],
      },
      en: {
        headline: "High-fidelity multimedia engineering, real-time DSP, and OpenGL video on macOS.",
        problemAndPurpose:
          "Desktop media players frequently force a trade-off between lightweight video playback and bloated music library managers, lacking transparent DSP equalization, native macOS CoreAudio/NowPlaying integration, and safe tools to audit metadata and subtitles without altering original media files.",
        overview: [
          "AudioSphere Pro 2.0 (v2.0.0-alpha.1 · Phase C) is a native macOS multimedia workstation packaged as a self-contained AudioSphere Pro.app bundle embedding LGPL frameworks (libmpv 0.39.0 + FFmpeg 7.1.1) with a PySide6 studio interface.",
          "It combines lossless and high-resolution audio playback with live 32-band FFT spectrum visualization, GPU-accelerated OpenGL 4.1 Core Profile video rendering, and automated library intelligence.",
        ],
        features: [
          "Real-time 10-band DSP equalizer powered by FFmpeg libavfilter (Q=1.41) with instant preset switching",
          "Live 32-band FFT audio spectrum visualizer driven by decoded PCM audio frames",
          "OpenGL 4.1 Core Profile double-buffered video surface with cinematic fullscreen, chapter drawer, and multi-track ASS/SRT/VTT rendering",
          "ReplayGain processing (Track / Album modes with preamp and clipping protection) and direct CoreAudio output device routing",
          "Deep macOS integration: MPNowPlayingInfoCenter, MPRemoteCommandCenter hardware media keys, and Finder/Dock QFileOpenEvent handling",
          "Watched Folders library engine with persistent playback queues, album artwork extraction, and session continuity",
          "Music Intelligence (assisted MusicBrainz / Cover Art Archive metadata auditing with reversible local-DB diff review) and offline Subtitle Intelligence (structural validation, hashing, and styling)",
          "Built-in in-bundle self-test harness certifying OpenGL context creation, CoreAudio devices, libmpv resolution, and clean teardown",
        ],
        architecture: [
          "Adapter-driven multimedia architecture decoupling core playback services from the libmpv C API, FFmpeg filter graphs, and the custom QOpenGLWidget render context.",
          "Native macOS system media bridge (MacOSSystemMediaService) publishing real-time playback telemetry and handling remote transport commands.",
          "Relocatable macOS .app bundle architecture resolving embedded dynamic libraries inside Contents/Frameworks with zero external user setup.",
        ],
      },
    },
  },

  // =========================================================================
  // 6. BILLETERA — ANDROID PERSONAL FINANCE (FEATURED)
  // =========================================================================
  {
    id: "billetera-android",
    slug: "billetera",
    name: "Billetera",
    version: "0.20.0",
    releaseDate: "2026-09",
    categoryId: "personal-finance",
    category: "Personal Finance & Fintech",
    platform: "Android",
    viewportType: "mobile",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room (SQLite)",
      "Material 3",
      "Coroutines & Flow",
      "Android Keystore",
      "AES-256-GCM",
    ],
    status: "development",
    featured: true,
    visibility: "public",
    maturity: "beta",
    presentation: "featured",

    images: {
      primary: "/projects/billetera/analysis.png",
      secondary: "/projects/billetera/movements.png",
    },

    gallery: [
      {
        src: "/projects/billetera/analysis.png",
        caption: {
          es: "Módulo de Análisis Financiero — flujo de efectivo, tasa de ahorro y distribución por categorías con aislamiento multimoneda.",
          en: "Financial Analytics Module — cash flow, savings rate, and category distribution with strict multi-currency isolation.",
        },
      },
      {
        src: "/projects/billetera/movements.png",
        caption: {
          es: "Libro de Movimientos — historial paginado de ingresos, gastos y transferencias de doble asiento.",
          en: "Transactions Ledger — paginated history of income, expenses, and atomic double-entry transfers.",
        },
      },
      {
        src: "/projects/billetera/home-dark.png",
        caption: {
          es: "Dashboard Financiero en tema oscuro — patrimonio neto, liquidez disponible, presupuestos y metas activas.",
          en: "Financial Dashboard in dark theme — net worth, liquid balance, active budgets, and savings goals.",
        },
      },
      {
        src: "/projects/billetera/home-light.png",
        caption: {
          es: "Dashboard Financiero en tema claro Material 3 — jerarquía visual adaptativa y modo privacidad para importes.",
          en: "Financial Dashboard in Material 3 light theme — adaptive visual hierarchy and one-tap privacy mode.",
        },
      },
    ],

    description: {
      es: "Plataforma Android de finanzas personales local-first y orientada a privacidad, construida con Kotlin, Jetpack Compose y Room a lo largo de 20 fases de ingeniería: contabilidad en enteros, transferencias de doble asiento, multimoneda, biometría Keystore y respaldos cifrados AES-256-GCM.",
      en: "Local-first, privacy-focused Android personal finance platform built with Kotlin, Jetpack Compose, and Room across 20 engineering phases: integer minor-unit accounting, double-entry transfers, multi-currency isolation, Keystore biometrics, and AES-256-GCM encrypted backups.",
    },

    details: {
      es: {
        headline: "Ingeniería financiera local-first y privacidad criptográfica en Android.",
        problemAndPurpose:
          "Muchas aplicaciones móviles de finanzas exigen sincronización en la nube, mezclan monedas distintas en sumas inválidas o utilizan números de coma flotante que degradan los saldos con el tiempo. Billetera ofrece soberanía total de datos en el dispositivo con precisión contable entera y cifrado de grado industrial.",
        overview: [
          "Billetera (v0.20.0 · Compilación 20) es un sistema integral de finanzas personales para Android desarrollado en Kotlin con Jetpack Compose, Material 3 y arquitectura multimódulo.",
          "Reúne gestión de cuentas activas/pasivas, movimientos, transferencias multimoneda de doble asiento, presupuestos reactivos, metas de ahorro, deudas con desglose de capital/interés, pagos recurrentes con día ancla, calendario financiero, bloqueo biométrico y copias cifradas.",
        ],
        features: [
          "Importes almacenados exclusivamente como Long en unidades menores (cero Float/Double) y saldos derivados de una única fuente de verdad",
          "Transferencias atómicas de doble asiento con soporte multimoneda sin distorsionar estadísticas de ingresos o gastos",
          "Presupuestos por categoría jerárquica, cuenta o alcance global con proyección de gasto al cierre del periodo",
          "Módulos de Metas de Ahorro, Deudas y Créditos (separación capital vs. interés) y Pagos Recurrentes con día ancla de fin de mes",
          "Calendario financiero mensual reactivo que proyecta vencimientos reales y previstos sin duplicar registros",
          "Seguridad con PIN firmado mediante HMAC-SHA256 en Android Keystore no exportable, BiometricPrompt y modo privacidad instantáneo",
          "Contenedor de respaldo .billetera cifrado con AES-256-GCM + PBKDF2-HMAC-SHA256 y restauración transaccional todo-o-nada",
          "Optimización e índices compuestos Room (esquema v1 a v6) verificados con benchmarks deterministas de 100,000 movimientos",
        ],
        architecture: [
          "Arquitectura multimódulo limpia dividida en app, core:model, core:domain, core:database, core:data, core:designsystem, core:testing y módulos feature independientes (home, transactions, planning, analytics, recurring, calendar, security, backup, more).",
          "Base de datos Room con 6 migraciones incrementales verificadas, borrado lógico auditable, Paging 3 / carga por bloques y ejecución de agregaciones fuera del hilo principal.",
          "Candidato release endurecido con R8, reducción de recursos, tráfico HTTP en claro deshabilitado y suite de pruebas unitarias, instrumentadas SQLite y de navegación semántica en Compose.",
        ],
      },
      en: {
        headline: "Local-first financial engineering and cryptographic privacy on Android.",
        problemAndPurpose:
          "Many mobile finance apps force cloud synchronization, sum incompatible currencies together, or use floating-point numbers that introduce rounding drift. Billetera gives users complete on-device data sovereignty backed by integer minor-unit accounting and hardware-backed security.",
        overview: [
          "Billetera (v0.20.0 · Build 20) is a comprehensive Android personal finance platform engineered in Kotlin with Jetpack Compose, Material 3, and a clean multi-module architecture.",
          "It integrates asset/liability accounts, transactions, double-entry multi-currency transfers, hierarchical budgets, savings goals, principal-vs-interest debt tracking, anchor-day recurring payments, a financial calendar, biometric locking, and encrypted backups.",
        ],
        features: [
          "Monetary amounts stored strictly as Long minor units (zero Float/Double) with balances derived from an immutable ledger source of truth",
          "Atomic double-entry transfers supporting cross-currency exchange rates without polluting income or expense analytics",
          "Reactive budgets across global, account, or hierarchical category scopes with end-of-period spend projections",
          "Dedicated modules for Savings Goals, Debts & Credits (principal vs. interest breakdown), and anchor-day Recurring Subscriptions",
          "Read-only monthly Financial Calendar projecting actual transactions, debt maturities, and upcoming recurring commitments via Kotlin Flow",
          "Security lock using a non-exportable Android Keystore HMAC-SHA256 PIN verifier, strong BiometricPrompt, and one-tap amount privacy mode",
          "Versioned .billetera backup container encrypted with AES-256-GCM (PBKDF2-HMAC-SHA256) and all-or-nothing transactional Room restoration",
          "Compound Room indices (migrations v1 -> v6) and off-main-thread aggregations benchmarked against 100,000 transactions",
        ],
        architecture: [
          "Multi-module Gradle architecture isolating app, core:model, core:domain, core:database, core:data, core:designsystem, core:testing, and feature modules (home, transactions, planning, analytics, recurring, calendar, security, backup, more).",
          "Room persistence layer with 6 tested schema migrations, soft-delete audit trails, and bounded time-window queries.",
          "Production-hardened release configuration with R8 obfuscation, cleartext traffic disabled, and automated unit, Room instrumented, and Compose UI test suites.",
        ],
      },
    },
  },

  // =========================================================================
  // 7. FINANCEFLOW PROFESSIONAL (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "financeflow-pro-macos",
    slug: "financeflow-pro",
    name: "FinanceFlow Professional",
    version: "1.0.0",
    releaseDate: "2026-10",
    categoryId: "personal-finance",
    category: "Personal Finance & Fintech",
    platform: "macOS",
    viewportType: "desktop",
    technologies: [
      "Swift 6.0",
      "SwiftUI",
      "SwiftData",
      "Swift Charts",
      "PDFKit",
      "macOS Keychain",
      "LocalAuthentication",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/financeflow-pro/dashboard.png",
      secondary: "/projects/financeflow-pro/reports.png",
    },

    gallery: [
      {
        src: "/projects/financeflow-pro/dashboard.png",
        caption: {
          es: "Dashboard Financiero nativo en macOS — patrimonio neto, flujo mensual comparativo y distribución de gastos con Swift Charts.",
          en: "Native macOS Financial Dashboard — net worth, monthly comparative cash flow, and expense distribution powered by Swift Charts.",
        },
      },
      {
        src: "/projects/financeflow-pro/reports.png",
        caption: {
          es: "Informes y Analítica — generación de reportes financieros con exportación a CSV y documentos ejecutivos PDFKit.",
          en: "Reports & Analytics — financial reporting with CSV export and executive PDFKit document generation.",
        },
      },
    ],

    description: {
      es: "Aplicación financiera nativa para macOS 14+ construida con Swift 6, SwiftUI y SwiftData, con aritmética Decimal estricta, gestión multicuenta, gráficos vectoriales Swift Charts, exportación PDFKit y seguridad mediante Keychain y Touch ID.",
      en: "Native macOS 14+ financial suite built with Swift 6, SwiftUI, and SwiftData, featuring strict Decimal arithmetic, multi-account management, vector Swift Charts, executive PDFKit exports, and macOS Keychain + Touch ID security.",
    },

    details: {
      es: {
        headline: "Precisión financiera Decimal y diseño nativo Apple HIG en macOS.",
        problemAndPurpose:
          "Evolución profesional nativa para macOS de la línea FinanceFlow, diseñada para eliminar errores de redondeo de punto flotante mediante tipos Decimal puros y ofrecer una experiencia de escritorio rápida, privada y alineada con las Human Interface Guidelines de Apple.",
        overview: [
          "FinanceFlow Professional es una suite financiera de escritorio para macOS Sonoma (14.0+) y Apple Silicon, desarrollada íntegramente en Swift 6 con SwiftUI y persistencia local SwiftData.",
          "Permite administrar cuentas corrientes, ahorros, tarjetas de crédito (pasivos), efectivo e inversiones, junto con transferencias intercuentas, presupuestos inteligentes, metas de ahorro y herramientas de migración asistida.",
        ],
        features: [
          "Cálculos y balances basados estrictamente en Decimal, evitando imprecisiones de Double/Float",
          "Gestión multicuenta completa incluyendo activos líquidos, inversiones y pasivos (tarjetas de crédito)",
          "Transferencias intercuentas sincronizadas que preservan el balance global de ingresos y gastos",
          "Presupuestos mensuales y anuales por categoría con alertas visuales de consumo",
          "Visualizaciones vectoriales interactivas de flujo de caja mediante Swift Charts nativos",
          "Exportación de informes financieros en CSV y documentos ejecutivos en PDF con PDFKit",
          "Asistente de migración validada para importar bases de datos históricas de versiones previas",
          "Integración con el Llavero de macOS (Keychain) y desbloqueo biométrico opcional con Touch ID",
        ],
        architecture: [
          "Construida sobre Swift 6 con concurrencia estricta, interfaz declarativa SwiftUI y modelo relacional persistido localmente con SwiftData.",
          "Capa de servicios financieros desacoplada para conciliación de saldos, generación de reportes PDFKit y validación de importación de esquemas legados.",
        ],
      },
      en: {
        headline: "Strict Decimal financial precision and native Apple HIG design on macOS.",
        problemAndPurpose:
          "Engineered as the professional native macOS evolution of the FinanceFlow suite, eliminating floating-point rounding errors through pure Decimal arithmetic while delivering an Apple HIG-compliant desktop experience.",
        overview: [
          "FinanceFlow Professional is a native macOS 14+ desktop financial application written in Swift 6 using SwiftUI and local SwiftData persistence.",
          "It manages checking, savings, credit card liabilities, cash, and investment accounts alongside inter-account transfers, smart budgets, savings goals, and assisted legacy data migration.",
        ],
        features: [
          "Inflexible financial precision using pure Decimal arithmetic across all ledgers and aggregations",
          "Multi-account architecture supporting liquid assets, investments, and credit liabilities",
          "Synchronized inter-account transfers that update balances without distorting income/expense metrics",
          "Monthly and annual category budgets with dynamic progress bars and threshold alerts",
          "Native vector cash-flow and category breakdown visualizations powered by Swift Charts",
          "Executive financial report generation exporting to CSV and vector PDF via PDFKit",
          "Assisted data migration engine importing and validating records from legacy FinanceFlow/Verdent installations",
          "Local privacy secured via macOS Keychain integration and optional Touch ID authentication",
        ],
        architecture: [
          "Engineered with Swift 6 strict concurrency, declarative SwiftUI navigation, and local SwiftData persistence.",
          "Dedicated domain services handling Decimal ledger reconciliation, PDFKit document rendering, and validated schema migration.",
        ],
      },
    },
  },

  // =========================================================================
  // 8. PERSONALFLOW (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "personalflow-ios",
    slug: "personalflow",
    name: "PersonalFlow",
    version: "1.0.0",
    releaseDate: "2026-09",
    categoryId: "personal-finance",
    category: "Personal Finance & Fintech",
    platform: "iOS 17+",
    viewportType: "mobile",
    technologies: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "Swift Charts",
      "LocalAuthentication",
      "XCTest",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/personalflow/inicio.png",
      secondary: "/projects/personalflow/estadisticas.png",
    },

    gallery: [
      {
        src: "/projects/personalflow/inicio.png",
        caption: {
          es: "Vista de Inicio en iPhone — resumen de patrimonio, ingresos, gastos del mes y accesos rápidos.",
          en: "iPhone Home View — net worth overview, monthly income and expenses, and quick actions.",
        },
      },
      {
        src: "/projects/personalflow/estadisticas.png",
        caption: {
          es: "Estadísticas con Swift Charts — distribución de gastos por categoría y flujo de caja mensual.",
          en: "Swift Charts Analytics — expense distribution by category and monthly cash flow.",
        },
      },
      {
        src: "/projects/personalflow/cuentas.png",
        caption: {
          es: "Cuentas y Billeteras — saldos por divisa (BOB, USD, EUR, etc.), conciliación y transferencias.",
          en: "Accounts & Wallets — multi-currency balances (BOB, USD, EUR, etc.), reconciliation, and transfers.",
        },
      },
      {
        src: "/projects/personalflow/presupuestos.png",
        caption: {
          es: "Presupuestos Mensuales — control de límites de gasto por categoría y moneda.",
          en: "Monthly Budgets — spending limit tracking by category and currency.",
        },
      },
    ],

    description: {
      es: "Aplicación nativa para iPhone (iOS 17+) orientada al control de finanzas personales, cuentas multimoneda, presupuestos y metas de ahorro, desarrollada con SwiftUI, SwiftData, Swift Charts y bloqueo biométrico Face ID.",
      en: "Native iPhone personal finance app (iOS 17+) for managing multi-currency accounts, budgets, and savings goals, built with SwiftUI, SwiftData, Swift Charts, and Face ID protection.",
    },

    details: {
      es: {
        headline: "Tus cuentas, tus gastos y tus metas en una experiencia nativa para iPhone.",
        problemAndPurpose:
          "Diseñada para usuarios de iOS que buscan gestionar su economía personal con rapidez desde el iPhone, manteniendo sus datos 100% en el almacenamiento local del dispositivo sin rastreadores, publicidad ni suscripciones externas.",
        overview: [
          "PersonalFlow es una aplicación nativa para iOS 17+ construida con SwiftUI, SwiftData y Swift Charts.",
          "Su interfaz oscura con acentos esmeralda y cian organiza cuentas en 7 divisas (BOB, USD, EUR, COP, MXN, GBP, BRL), movimientos con reversión automática de saldo, transferencias, límites presupuestarios y objetivos de ahorro.",
        ],
        features: [
          "Gestión de cuentas de activo y tarjetas de crédito (deuda) en 7 monedas con filtrado consistente por divisa principal",
          "Registro, edición y eliminación de ingresos, gastos y transferencias con recálculo y reversión atómica de saldos",
          "Presupuestos mensuales por categoría y moneda con indicadores visuales de consumo",
          "Seguimiento de metas de ahorro con fecha objetivo e importe acumulado",
          "Gráficos nativos en Swift Charts para distribución de gastos y flujo mensual",
          "Modo privacidad para ocultar importes, bloqueo con Face ID / Touch ID y escudo visual al pasar a segundo plano",
          "Exportación de movimientos a archivo CSV estándar",
        ],
        architecture: [
          "Núcleo financiero desacoplado en el paquete PersonalFlowCore (13/13 pruebas unitarias aprobadas), compartido con la capa de vistas declarativas en SwiftUI y persistencia en SwiftData.",
          "Integración con LocalAuthentication para protección biométrica y privacidad de pantalla en multitarea de iOS.",
        ],
      },
      en: {
        headline: "Accounts, expenses, and savings goals in a native iPhone experience.",
        problemAndPurpose:
          "Built for iOS users who want fast daily financial tracking on iPhone while keeping 100% of their financial records stored locally on the device—with zero ads, trackers, or mandatory cloud accounts.",
        overview: [
          "PersonalFlow is a native iOS 17+ application engineered with SwiftUI, SwiftData, and Swift Charts.",
          "Its dark interface with emerald and cyan accents organizes accounts across 7 currencies (BOB, USD, EUR, COP, MXN, GBP, BRL), transactions with automatic balance reversal, transfers, monthly budgets, and savings goals.",
        ],
        features: [
          "Asset accounts and credit card liability tracking across 7 currencies with currency-isolated summaries",
          "Income, expense, and transfer ledger with automatic balance reconciliation upon edit or deletion",
          "Category and currency-scoped monthly budgets with real-time consumption progress",
          "Savings goals tracking target amounts, deadlines, and accumulated progress",
          "Native Swift Charts visualizations for category breakdowns and monthly cash flow",
          "Privacy mode masking monetary amounts, Face ID / device authentication, and app-switcher privacy shield",
          "Standard CSV transaction export via the native iOS share sheet",
        ],
        architecture: [
          "Core financial rules isolated inside the testable PersonalFlowCore Swift package (13/13 unit tests passing), backing SwiftUI views and SwiftData persistence.",
          "Native LocalAuthentication integration securing session access and background app-switcher snapshots.",
        ],
      },
    },
  },

  // =========================================================================
  // 9. VITALSCAN (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "vitalscan-clinic",
    slug: "vitalscan",
    name: "Vitalscan",
    version: "2.0.0",
    releaseDate: "2026-08",
    categoryId: "enterprise-healthcare",
    category: "Clinical & Enterprise ERP",
    platform: "Windows",
    viewportType: "desktop",
    technologies: ["Python", "PyQt6", "SQLite", "OpenPyXL", "PyInstaller"],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/vitalscan/dashboard.png",
      secondary: "/projects/vitalscan/studies.png",
    },

    gallery: [
      {
        src: "/projects/vitalscan/dashboard.png",
        caption: {
          es: "Dashboard operativo de Vitalscan — métricas del centro ecográfico, agenda del día y accesos a módulos clínicos.",
          en: "Vitalscan operational dashboard — ultrasound clinic metrics, daily appointments, and clinical module shortcuts.",
        },
      },
      {
        src: "/projects/vitalscan/studies.png",
        caption: {
          es: "Gestión de Estudios Ecográficos — registro de estudios vinculados a pacientes, médicos y facturación.",
          en: "Ultrasound Study Management — study records linked to patients, referring physicians, and billing.",
        },
      },
    ],

    description: {
      es: "Sistema de gestión para centros de ecografía que integra pacientes, citas, estudios ecográficos, aranceles, facturación, finanzas y reportes exportables a Excel en una aplicación de escritorio modular.",
      en: "Desktop management system for ultrasound clinics integrating patients, appointments, ultrasound studies, service tariffs, billing, finances, and Excel reporting into a modular application.",
    },

    details: {
      es: {
        headline: "Gestión clínica especializada para centros de diagnóstico ecográfico.",
        problemAndPurpose:
          "Los centros de ecografía necesitan coordinar la recepción de pacientes, la agenda diaria por gabinete, la vinculación de carpetas de imágenes de estudios y el cobro de aranceles sin depender de múltiples hojas de cálculo desconectadas.",
        overview: [
          "Vitalscan fue diseñado como una solución de escritorio para centralizar la operación diaria de un centro de ecografía en una sola aplicación.",
          "El sistema combina padrón de pacientes, agenda con detección de conflictos, administración de estudios ecográficos, facturación rápida, finanzas, exportación a Excel y licenciamiento vinculado a hardware (HWID).",
        ],
        features: [
          "Gestión de pacientes con cálculo automático de edad e historial de atenciones",
          "Agenda y control de citas en vista lista y vista diaria con detección de conflictos horarios",
          "Administración de estudios ecográficos con acceso directo a carpetas locales de imágenes",
          "Catálogo de médicos referentes y lista configurable de aranceles por tipo de estudio",
          "Facturación, registro de pagos rápidos y balance financiero automático",
          "Reportes de ingresos, citas y pacientes con exportación nativa a Microsoft Excel (.xlsx)",
          "Control de usuarios y sistema de activación por licencia vinculada a HWID",
        ],
        architecture: [
          "Aplicación modular en Python y PyQt6 sobre base de datos relacional SQLite 3 autocontenida (usuarios, medicos, pacientes, citas, estudios, aranceles, facturas).",
          "Empaquetada mediante PyInstaller e Inno Setup para despliegue directo en estaciones de trabajo Windows 10/11.",
        ],
      },
      en: {
        headline: "Specialized clinical management for ultrasound diagnostic centers.",
        problemAndPurpose:
          "Ultrasound clinics must coordinate patient intake, daily appointment scheduling, study image folder linking, and tariff billing without relying on disconnected spreadsheets. Vitalscan centralizes the entire clinical workflow.",
        overview: [
          "Vitalscan was engineered as a desktop solution to unify the daily operation of an ultrasound clinic inside a single application.",
          "The system combines patient records, conflict-aware scheduling, ultrasound study tracking, billing, financial reporting with Excel export, and hardware-bound (HWID) licensing.",
        ],
        features: [
          "Patient registry with automated age calculation and study history",
          "Appointment scheduling in list and daily views with time-conflict detection",
          "Ultrasound study management with direct folder access for diagnostic imagery",
          "Referring physician directory and configurable service tariff catalog",
          "Billing, quick payment recording, and automated balance tracking",
          "Revenue, appointment, and patient reports with native Excel (.xlsx) export",
          "User authentication and HWID-bound offline license activation",
        ],
        architecture: [
          "Modular Python and PyQt6 desktop architecture backed by an embedded SQLite 3 relational database.",
          "Packaged via PyInstaller and Inno Setup for standalone deployment on Windows 10/11 workstations.",
        ],
      },
    },
  },

  // =========================================================================
  // 10. ASISTFINANCE (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "asist-finance-macos",
    slug: "asist-finance",
    name: "AsistFinance",
    version: "1.0.0",
    releaseDate: "2026-08",
    categoryId: "personal-finance",
    category: "Personal Finance & Fintech",
    platform: "macOS",
    viewportType: "desktop",
    technologies: ["Swift", "SwiftUI", "macOS"],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/asist-finance/dashboard.png",
      secondary: "/projects/asist-finance/analytics.png",
    },

    gallery: [
      {
        src: "/projects/asist-finance/dashboard.png",
        caption: {
          es: "Panel principal de AsistFinance en macOS — resumen de cuentas, balance disponible y transacciones recientes.",
          en: "AsistFinance main dashboard on macOS — account overview, available balance, and recent transactions.",
        },
      },
      {
        src: "/projects/asist-finance/analytics.png",
        caption: {
          es: "Analítica Financiera — seguimiento visual de ingresos, gastos, presupuestos y flujo de efectivo.",
          en: "Financial Analytics — visual tracking of income, expenses, budgets, and cash flow.",
        },
      },
    ],

    description: {
      es: "Aplicación nativa para macOS orientada a la gestión integral de finanzas personales, con cuentas, transacciones, presupuestos, análisis financiero y seguimiento del flujo de efectivo.",
      en: "Native macOS application for comprehensive personal finance management, including accounts, transactions, budgets, financial analytics, and cash-flow tracking.",
    },

    details: {
      es: {
        headline: "Finanzas personales en el escritorio de macOS.",
        problemAndPurpose:
          "Diseñada para concentrar la administración de cuentas personales, presupuestos y flujo de efectivo en una interfaz nativa de escritorio macOS rápida y clara.",
        overview: [
          "AsistFinance es una aplicación nativa para macOS diseñada para concentrar la gestión financiera personal en una experiencia de escritorio moderna.",
          "Integra cuentas, transacciones, presupuestos, flujo de efectivo y analítica financiera en una interfaz optimizada para macOS.",
        ],
        features: [
          "Resumen financiero ejecutivo en tiempo real",
          "Administración de cuentas y monederos",
          "Registro y categorización de transacciones",
          "Control y seguimiento de presupuestos",
          "Analítica financiera visual",
          "Seguimiento de flujo de efectivo",
        ],
        architecture: [
          "Desarrollada en Swift y SwiftUI como paquete y bundle nativo (.app) para macOS con navegación lateral y paneles analíticos reactivos.",
        ],
      },
      en: {
        headline: "Personal finance on the macOS desktop.",
        problemAndPurpose:
          "Designed to bring personal account management, budgeting, and cash-flow analysis together inside a fast, native macOS desktop interface.",
        overview: [
          "AsistFinance is a native macOS application designed to bring personal financial management together in a modern desktop experience.",
          "It combines accounts, transactions, budgets, cash flow, and financial analytics in an interface designed for macOS.",
        ],
        features: [
          "Real-time executive financial dashboard",
          "Accounts and wallets management",
          "Transaction recording and categorization",
          "Budget control and monitoring",
          "Visual financial analytics",
          "Cash-flow tracking",
        ],
        architecture: [
          "Engineered in Swift and SwiftUI as a native macOS application bundle (.app) with sidebar navigation and reactive analytical views.",
        ],
      },
    },
  },

  // =========================================================================
  // 11. GESTOR DE VENTAS (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "gestor-de-ventas-pos",
    slug: "gestor-de-ventas",
    name: "Gestor de Ventas — POS & Inventory",
    version: "1.0.1",
    releaseDate: "2026-11",
    categoryId: "enterprise-healthcare",
    category: "Clinical & Enterprise ERP",
    platform: "Windows & Desktop",
    viewportType: "desktop",
    technologies: [
      "Python 3.13",
      "PySide6",
      "SQLite 3",
      "Ed25519 Licensing",
      "HMAC Security",
      "PyInstaller",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/gestor-de-ventas/dashboard.png",
      secondary: "/projects/gestor-de-ventas/pos.png",
    },

    gallery: [
      {
        src: "/projects/gestor-de-ventas/dashboard.png",
        caption: {
          es: "Dashboard Comercial — resumen de ventas diarias y mensuales, alertas de stock crítico y evolución de 14 días.",
          en: "Commercial Dashboard — daily and monthly sales metrics, low-stock alerts, and 14-day revenue trend.",
        },
      },
      {
        src: "/projects/gestor-de-ventas/pos.png",
        caption: {
          es: "Terminal de Punto de Venta (POS) — búsqueda instantánea, carrito con descuento, cálculo de cambio y atajo rápido F12.",
          en: "Point of Sale (POS) Terminal — instant search, discount-aware cart, change calculation, and F12 quick checkout.",
        },
      },
    ],

    description: {
      es: "Sistema comercial de Punto de Venta (POS), inventario y control de caja de escritorio desarrollado en Python, PySide6 y SQLite con transacciones atómicas BEGIN IMMEDIATE, control de acceso por roles y licenciamiento Ed25519.",
      en: "Desktop Point of Sale (POS), inventory, and cash-drawer management system built with Python, PySide6, and SQLite featuring atomic BEGIN IMMEDIATE transactions, role-based access control, and Ed25519 licensing.",
    },

    details: {
      es: {
        headline: "Punto de venta ágil, control de inventario y arqueo de caja para comercios.",
        problemAndPurpose:
          "Pequeños y medianos comercios necesitan un sistema de facturación en mostrador y control de stock rápido, confiable y sin costos recurrentes. Gestor de Ventas ofrece una estación POS completa con integridad transaccional y operación 100% local.",
        overview: [
          "Gestor de Ventas (v1.0.1) es una aplicación comercial de escritorio desarrollada con Python, PySide6 y SQLite.",
          "Integra panel diario de métricas, terminal POS con cálculo de cambio y atajo F12, apertura y cierre de turnos de caja, inventario con alertas de stock mínimo, directorio de clientes y proveedores, reportes exportables a CSV y respaldos de base de datos.",
        ],
        features: [
          "Terminal de Punto de Venta (POS) con carrito de cantidades decimales, descuentos, cálculo de vuelto y cobro rápido (F12)",
          "Transacciones SQLite atómicas (BEGIN IMMEDIATE) con restricciones CHECK(stock_actual >= 0) que impiden ventas sin stock",
          "Apertura, cierre y arqueo de caja con separación entre ventas en efectivo, otros métodos de pago y movimientos manuales",
          "Control de acceso por roles (Administrador vs. Vendedor con vista de inventario en solo lectura) y verificación HMAC en tiempo constante",
          "Emisión, reimpresión y anulación controlada de notas de venta con logotipo y moneda configurables",
          "Reportes por rango de fechas, método de pago y ranking de productos más vendidos con exportación CSV",
          "Activación comercial offline mediante firma criptográfica asimétrica Ed25519 por Machine ID",
        ],
        architecture: [
          "Arquitectura en capas separando core (base de datos con migraciones PRAGMA user_version v2, seguridad, licencias y logging rotativo), services (ventas, inventario, caja, clientes, proveedores, reportes) y ui (PySide6 con barra lateral colapsable y soporte de temas).",
        ],
      },
      en: {
        headline: "Fast point-of-sale checkout, inventory control, and cash management for retail.",
        problemAndPurpose:
          "Retail businesses need a dependable counter checkout and stock control system without recurring cloud fees. Gestor de Ventas provides a complete local POS workstation with strict transactional stock integrity.",
        overview: [
          "Gestor de Ventas (v1.0.1) is a commercial desktop application engineered with Python, PySide6, and SQLite.",
          "It combines a daily KPI dashboard, an F12-accelerated POS terminal, cash-drawer shift reconciliation, low-stock inventory alerts, client and supplier directories, CSV reporting, and database backup tools.",
        ],
        features: [
          "Point of Sale (POS) terminal supporting decimal quantities, discounts, automatic change calculation, and F12 checkout",
          "Atomic SQLite BEGIN IMMEDIATE sales transactions with CHECK(stock_actual >= 0) constraints preventing negative stock",
          "Cash-register shift lifecycle separating cash sales, alternative payment methods, and manual drawer movements",
          "Role-Based Access Control (Administrator vs. Cashier with read-only inventory enforcement) and constant-time HMAC password verification",
          "Customizable sales receipts with business logo, currency formatting, re-printing, and controlled sale voiding",
          "Sales analytics by date range, payment method, and top-selling products with CSV export",
          "Machine-ID offline commercial licensing validated via Ed25519 asymmetric signatures",
        ],
        architecture: [
          "Layered architecture decoupling core (SQLite v2 schema migrations, HMAC security, Ed25519 licensing, rotating logs), services (sales, inventory, cash, clients, suppliers, reports), and PySide6 UI views.",
        ],
      },
    },
  },

  // =========================================================================
  // 12. HORARIO DE CLASES (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "horario-de-clases-flutter",
    slug: "horario-de-clases",
    name: "Horario de Clases",
    version: "1.0.0",
    releaseDate: "2026-09",
    categoryId: "desktop-productivity",
    category: "Utilities & Productivity",
    platform: "Multiplatform (Flutter)",
    viewportType: "mobile",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Material Design",
      "Local Notifications",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",
    repositoryUrl:
      "https://github.com/yalbavillegas/Horario-de-Clases--Antigravity-",

    images: {
      primary: "/projects/horario-de-clases/home.png",
      secondary: "/projects/horario-de-clases/weekly-schedule.png",
    },

    gallery: [
      {
        src: "/projects/horario-de-clases/home.png",
        caption: {
          es: "Pantalla de Inicio — consulta rápida de las sesiones académicas asignadas a cada día.",
          en: "Home Screen — quick daily view of assigned academic classes and sessions.",
        },
      },
      {
        src: "/projects/horario-de-clases/weekly-schedule.png",
        caption: {
          es: "Horario Semanal — resumen visual de la carga académica y distribución semanal.",
          en: "Weekly Schedule — visual overview of academic workload and weekly distribution.",
        },
      },
      {
        src: "/projects/horario-de-clases/class-details.png",
        caption: {
          es: "Detalle de Clase — horario, aula, alumnos, recordatorios y notas pendientes por sesión.",
          en: "Class Detail — schedule, classroom, students, reminders, and pending session notes.",
        },
      },
      {
        src: "/projects/horario-de-clases/settings.png",
        caption: {
          es: "Configuración — personalización de apariencia, notificaciones locales y administración de datos.",
          en: "Settings — appearance customization, local notifications, and data management.",
        },
      },
    ],

    description: {
      es: "Aplicación multiplataforma desarrollada con Flutter y Dart para organizar horarios académicos, carga semanal, notas por sesión y recordatorios locales con arquitectura modular.",
      en: "Cross-platform application built with Flutter and Dart to organize academic schedules, weekly workloads, session notes, and local notifications within a modular architecture.",
    },

    details: {
      es: {
        headline: "Organización académica visual y multiplataforma con Flutter.",
        problemAndPurpose:
          "Docentes y estudiantes necesitan consultar rápidamente su distribución de clases diaria y semanal, registrar notas pendientes por aula y recibir recordatorios oportunos desde cualquier dispositivo.",
        overview: [
          "Horario de Clases es una aplicación multiplataforma desarrollada con Flutter y Dart, diseñada bajo principios de Material Design y gestión de estado reactiva con Provider.",
          "Su estructura soporta compilación para Android, iOS, macOS, Windows, Linux y Web manteniendo una única base de código modular.",
        ],
        features: [
          "Vista diaria de inicio con acceso rápido a las clases de cada jornada",
          " Cuadrícula de horario semanal para visualizar la distribución y carga académica",
          "Ficha detallada de cada clase con aula, horario, alumnos, notas y tareas pendientes",
          "Editor completo para creación y actualización de materias y bloques horarios",
          "Sistema de notificaciones y recordatorios locales configurables",
          "Persistencia local y panel de ajustes de apariencia",
        ],
        architecture: [
          "Organización modular en lib/ separando core (servicios de almacenamiento, notificaciones y temas), models (entidades académicas), providers (estado reactivo) y views (home, weekly, class_detail, editor, settings).",
        ],
      },
      en: {
        headline: "Visual, cross-platform academic schedule management with Flutter.",
        problemAndPurpose:
          "Teachers and students need an intuitive way to track daily and weekly class schedules, record per-session classroom notes, and receive timely local reminders across devices.",
        overview: [
          "Horario de Clases is a cross-platform application engineered with Flutter and Dart, combining Material Design with reactive Provider state management.",
          "Its project structure targets Android, iOS, macOS, Windows, Linux, and Web from a clean, single codebase.",
        ],
        features: [
          "Daily home overview highlighting scheduled classes for each day",
          "Weekly schedule grid visualizing overall academic workload distribution",
          "Detailed class view tracking classroom location, time slot, student count, and pending notes",
          "Full class editor for creating and updating sessions",
          "Configurable local notifications and class reminders",
          "Local data persistence and appearance settings",
        ],
        architecture: [
          "Modular lib/ architecture separating core services (storage, notifications, theme), domain models, reactive Provider state, and feature views (home, weekly, class_detail, editor, settings).",
        ],
      },
    },
  },

  // =========================================================================
  // 13. ARCADE LIBRARY (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "arcade-library-macos",
    slug: "arcade-library",
    name: "Arcade Library",
    version: "1.0.0",
    releaseDate: "2026-10",
    categoryId: "desktop-productivity",
    category: "Utilities & Productivity",
    platform: "macOS (Apple Silicon ARM64)",
    viewportType: "desktop",
    technologies: [
      "Swift 6",
      "SwiftUI",
      "AppKit",
      "SQLite3 (C-API)",
      "MAME CLI Integration",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/arcade-library/library-grid.png",
      secondary: "/projects/arcade-library/game-detail.png",
    },

    gallery: [
      {
        src: "/projects/arcade-library/library-grid.png",
        caption: {
          es: "Vista de Cuadrícula en macOS — biblioteca visual con filtrado por fabricante, año, favoritos y estado de verificación de ROMs.",
          en: "macOS Grid View — visual library with filtering by manufacturer, release year, favorites, and ROM verification status.",
        },
      },
      {
        src: "/projects/arcade-library/game-detail.png",
        caption: {
          es: "Ficha Técnica de Juego — metadatos extraídos de MAME XML, estado de integridad, relaciones parent/clone y lanzamiento directo.",
          en: "Technical Game Sheet — MAME XML metadata, ROM integrity status, parent/clone relationships, and one-click launch.",
        },
      },
    ],

    description: {
      es: "Frontend nativo en Swift 6 y SwiftUI para MAME en macOS Apple Silicon (~30 MB RAM), con motor relacional SQLite3 nativo, verificación de integridad de ROMs, importación drag-and-drop no destructiva y ejecución segura de procesos.",
      en: "Native Swift 6 and SwiftUI frontend for MAME on macOS Apple Silicon (~30 MB RAM footprint), featuring native SQLite3 persistence, ROM integrity verification, non-destructive drag-and-drop import, and safe process execution.",
    },

    details: {
      es: {
        headline: "Frontend nativo de alto rendimiento para MAME en macOS Apple Silicon.",
        problemAndPurpose:
          "Los frontends de emulación basados en Electron o navegadores consumen más de 400 MB de RAM y carecen de integración fluida con macOS. Arcade Library ofrece una experiencia 100% nativa en Swift 6 que consume ~30 MB de memoria e interactúa directamente con MAME sin tocar ni mover los archivos ROM originales.",
        overview: [
          "Arcade Library (v1.0.0) es una aplicación de escritorio nativa para macOS 14+ (ARM64) construida con Swift 6, SwiftUI, AppKit y la biblioteca del sistema libsqlite3.",
          "Detecta automáticamente instalaciones locales de MAME, consulta metadatos técnicos mediante mame -listxml, verifica la integridad de los conjuntos de ROM con mame -verifyroms y gestiona carátulas, favoritos, tiempos de juego y respaldos JSON.",
        ],
        features: [
          "Consumo ultrabajo de recursos (~30 MB RAM) gracias a compilación nativa ARM64 en Swift 6",
          "Importación no destructiva mediante Drag & Drop desde Finder o NSOpenPanel sin mover ni alterar las ROMs originales",
          "Integración real con MAME: consulta asíncrona de metadatos XML (-listxml) y auditoría de integridad (-verifyroms)",
          "Ejecución segura mediante Foundation.Process sin invocar shells intermedios ni permitir inyección de argumentos",
          "Persistencia relacional indexada en SQLite3 nativo con exportación y restauración completa en JSON",
          "Ficha técnica detallada con relaciones parent/clone (romof, cloneof, sampleof) y detección de requerimiento de imágenes CHD",
        ],
        architecture: [
          "Arquitectura de servicios en Swift 6 (DatabaseService sobre libsqlite3.dylib, MAMEIntegrationService, ImportService, ArtworkService y DiagnosticService) desacoplada de las vistas SwiftUI.",
          "Validada mediante una suite de 15 pruebas automatizadas (15/15 PASS) que cubren desde prevención de inyección y detección de duplicados hasta lanzamiento controlado y respaldos.",
        ],
      },
      en: {
        headline: "High-performance native Swift 6 frontend for MAME on macOS Apple Silicon.",
        problemAndPurpose:
          "Browser-wrapped emulation frontends often consume 400+ MB of RAM and feel alien on macOS. Arcade Library delivers a 100% native Swift 6 experience with a ~30 MB memory footprint that integrates directly with MAME while never moving or modifying user ROM files.",
        overview: [
          "Arcade Library (v1.0.0) is a native macOS 14+ (ARM64) desktop application built with Swift 6, SwiftUI, AppKit, and macOS system libsqlite3.",
          "It auto-detects local MAME installations, extracts hardware metadata via mame -listxml, audits ROM set integrity via mame -verifyroms, and tracks cover artwork, favorites, play counts, and JSON backups.",
        ],
        features: [
          "Ultra-low ~30 MB RAM footprint compiled natively for Apple Silicon ARM64 with Swift 6",
          "Non-destructive Drag & Drop and NSOpenPanel ROM importing that leaves original files untouched on disk",
          "Direct MAME CLI integration for asynchronous XML metadata extraction (-listxml) and ROM verification (-verifyroms)",
          "Safe subprocess execution via Foundation.Process with zero shell interpolation or command-injection risk",
          "Indexed native SQLite3 persistence with instant search and full JSON backup/restore",
          "Detailed technical inspector displaying parent/clone hierarchy (romof, cloneof, sampleof) and CHD requirements",
        ],
        architecture: [
          "Modular Swift 6 service layer (DatabaseService over libsqlite3.dylib, MAMEIntegrationService, ImportService, ArtworkService, DiagnosticService) driving a Graphite dark-themed SwiftUI split-view interface.",
          "Verified by 15 automated validation tests (15/15 PASS) covering input sanitization, duplicate detection, SQLite persistence, and subprocess error handling.",
        ],
      },
    },
  },

  // =========================================================================
  // 14. FOLDER STUDIO (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "folder-studio-macos",
    slug: "folder-studio",
    name: "Folder Studio",
    version: "1.0.0",
    releaseDate: "2026-10",
    categoryId: "desktop-productivity",
    category: "Utilities & Productivity",
    platform: "macOS",
    viewportType: "desktop",
    technologies: ["Swift", "SwiftUI", "AppKit", "CoreGraphics", "macOS"],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/folder-studio/editor.png",
    },

    gallery: [
      {
        src: "/projects/folder-studio/editor.png",
        caption: {
          es: "Lienzo e Inspector de Folder Studio en macOS — edición por capas, materiales, geometría e iluminación para iconos de carpetas y apps.",
          en: "Folder Studio Canvas & Inspector on macOS — layer-based editing, materials, geometry, and lighting for folder and app icons.",
        },
      },
    ],

    description: {
      es: "Editor vectorial y por capas nativo para macOS que permite diseñar iconos personalizados de carpetas y conjuntos AppIcon.appiconset para Xcode, exportarlos hasta 4096 px y aplicarlos directamente en el Finder con copia de respaldo recuperable.",
      en: "Native layer-based macOS icon design studio for crafting custom Finder folder icons and full Xcode AppIcon.appiconset catalogs, supporting up to 4096 px PNG exports and reversible Finder application.",
    },

    details: {
      es: {
        headline: "Diseño por capas para iconos de carpetas del Finder y catálogos AppIcon de Xcode.",
        problemAndPurpose:
          "Personalizar carpetas de proyectos en macOS o generar los 10 tamaños requeridos por un catálogo AppIcon.appiconset de Xcode suele requerir herramientas de diseño generalistas y recortes manuales. Folder Studio automatiza la composición, previsualización y exportación nativa en macOS.",
        overview: [
          "Folder Studio es un estudio de diseño nativo para macOS 14+ desarrollado en Swift y SwiftUI.",
          "Ofrece un lienzo interactivo con capas editables para cuerpo y pestaña de carpeta, símbolos SF Symbols, tipografía e imágenes PNG/SVG/ICNS, con controles de materiales, degradados, sombras, bisel, iluminación y perspectiva.",
        ],
        features: [
          "Composición por capas editables: geometría de carpeta, SF Symbols, texto y recursos PNG, SVG e ICNS",
          "Controles paramétricos de materiales, degradados, opacidad, rotación, sombras, contorno, bisel, iluminación y perspectiva",
          "Exportación en PNG transparente desde 64 px hasta 4096 px con márgenes configurables",
          "Generador automático de directorios AppIcon.appiconset con los 10 tamaños oficiales de macOS para Xcode",
          "Aplicación directa de iconos a carpetas reales del Finder conservando una copia recuperable del icono anterior",
          "Formato de documento propio versionado (.folderstudio) con historial completo de deshacer/rehacer y plantillas integradas",
        ],
        architecture: [
          "Motor de renderizado y serialización JSON versionado compatible con versiones previas de documentos .folderstudio, respaldado por pruebas automatizadas en Swift Package Manager.",
        ],
      },
      en: {
        headline: "Layer-based design studio for Finder folder icons and Xcode AppIcon catalogs.",
        problemAndPurpose:
          "Customizing macOS workspace folders or exporting all 10 resolutions required for an Xcode AppIcon.appiconset typically involves manual slicing in heavyweight graphics tools. Folder Studio streamlines composition, previewing, and native Finder/Xcode export.",
        overview: [
          "Folder Studio is a native macOS 14+ icon design application engineered with Swift and SwiftUI.",
          "It provides an interactive zoomable canvas with editable layers for folder body/tab geometry, SF Symbols, typography, and PNG/SVG/ICNS artwork, complete with material, gradient, shadow, bevel, lighting, and perspective controls.",
        ],
        features: [
          "Editable multi-layer composition combining folder geometry, SF Symbols, text, and PNG/SVG/ICNS assets",
          "Parametric inspector for materials, gradients, opacity, rotation, drop shadows, strokes, bevels, lighting, and perspective",
          "Transparent PNG export scaling from 64 px up to 4096 px",
          "One-click Xcode AppIcon.appiconset generator producing all 10 required macOS icon resolutions",
          "Direct Finder folder icon application with automatic backup and restoration of previous folder icons",
          "Versioned .folderstudio project file format with full undo/redo stack and built-in starter templates",
        ],
        architecture: [
          "Declarative SwiftUI editor paired with a backward-compatible versioned JSON document model and CoreGraphics/AppKit rendering pipeline tested via Swift Package Manager.",
        ],
      },
    },
  },

  // =========================================================================
  // 15. ORBITSCAPE (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "orbitscape-ios",
    slug: "orbitscape",
    name: "OrbitScape",
    version: "1.0.0",
    releaseDate: "2026-09",
    categoryId: "games-simulation",
    category: "Games & Simulation",
    platform: "iOS & iPadOS",
    viewportType: "mobile",
    technologies: [
      "Swift",
      "SwiftUI",
      "SpriteKit",
      "XCTest & XCUITest",
      "CoreHaptics",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "standard",

    images: {
      primary: "/projects/orbitscape/inicio.png",
      secondary: "/projects/orbitscape/partida.png",
    },

    gallery: [
      {
        src: "/projects/orbitscape/inicio.png",
        caption: {
          es: "Menú Principal de OrbitScape en iPhone — identidad espacial, récord local y acceso a instrucciones.",
          en: "OrbitScape Main Menu on iPhone — space arcade identity, local high score, and instructions access.",
        },
      },
      {
        src: "/projects/orbitscape/partida.png",
        caption: {
          es: "Gameplay Orbital en SpriteKit — navegación tangencial entre planetas, guía de trayectoria, puntuación y multiplicador de rachas.",
          en: "SpriteKit Orbital Gameplay — tangential planet-to-planet launch mechanics, trajectory guide, scoring, and streak multiplier.",
        },
      },
    ],

    description: {
      es: "Juego arcade espacial nativo para iPhone y iPad desarrollado con Swift, SwiftUI y SpriteKit, centrado en física orbital tangencial, generación dinámica de planetas, sistema de rachas ×5 y dificultad progresiva.",
      en: "Native iPhone and iPad space arcade game built with Swift, SwiftUI, and SpriteKit, centered on tangential orbital physics, procedural planet generation, a ×5 precision streak system, and progressive difficulty.",
    },

    details: {
      es: {
        headline: "Domina la mecánica orbital y salta de planeta en planeta en iOS.",
        problemAndPurpose:
          "Diseñado como una experiencia arcade táctil de alta precisión donde el jugador debe calcular el instante exacto de lanzamiento tangencial para escapar de una órbita e ingresar en el campo gravitatorio del siguiente planeta.",
        overview: [
          "OrbitScape (identificador técnico OrbitEscape) es un juego arcade nativo para iOS 17+ (iPhone y iPad) construido con Swift, SwiftUI y SpriteKit.",
          "Funciona 100% de forma local sin anuncios, cuentas ni rastreadores, e incluye pruebas unitarias de física y trayectoria (XCTest) y pruebas automatizadas de interfaz (XCUITest).",
        ],
        features: [
          "Mecánica orbital basada en lanzamiento tangencial con un solo toque y guía visual de captura",
          "Generación procedural dinámica de planetas con reducción progresiva de radio y aumento de velocidad orbital",
          "Sistema de precisión: capturas cercanas al núcleo otorgan 250 puntos e incrementan la racha hasta ×5",
          "Hitos visuales cada 5 planetas alcanzados, efectos de sonido originales y feedback háptico",
          "Sistema completo de pausa, reanudación, instrucciones interactivas y récord persistente en el dispositivo",
          "Interfaz adaptativa para áreas seguras de iPhone y iPad",
        ],
        architecture: [
          "Integración limpia entre SwiftUI (ContentView: menús, HUD, pausa, instrucciones y resultados) y SpriteKit (GameScene, PlanetNode y PlanetGenerator) con cobertura de pruebas en OrbitEscapeTests y OrbitEscapeUITests.",
        ],
      },
      en: {
        headline: "Master tangential orbital mechanics across procedural planets on iOS.",
        problemAndPurpose:
          "Crafted as a precision one-touch arcade experience challenging players to time tangential launches to break orbit and enter the capture field of the next planet.",
        overview: [
          "OrbitScape (technical bundle OrbitEscape) is a native iOS 17+ arcade game for iPhone and iPad engineered with Swift, SwiftUI, and SpriteKit.",
          "It operates 100% offline with zero ads or tracking, backed by automated unit tests (XCTest) for trajectory math and UI tests (XCUITest) for navigation flows.",
        ],
        features: [
          "Tangential orbital launch mechanics with real-time trajectory capture guidance",
          "Procedural planet generation scaling orbital velocity and planet radii progressively",
          "Precision scoring system: near-center captures award 250 points and build a streak multiplier up to ×5",
          "Milestone celebrations every 5 planets, custom audio effects, and tactile haptic feedback",
          "Pause/resume lifecycle, interactive how-to-play guide, and persistent local high scores",
          "Responsive layout tailored to iPhone and iPad safe areas",
        ],
        architecture: [
          "Hybrid SwiftUI + SpriteKit architecture pairing declarative HUD/menu overlays (ContentView) with a deterministic 2D orbital scene graph (GameScene, PlanetNode, PlanetGenerator) verified via XCTest and XCUITest.",
        ],
      },
    },
  },

  // =========================================================================
  // 16. CITYFLIER (STANDARD PUBLIC)
  // =========================================================================
  {
    id: "city-flier-ios",
    slug: "city-flier",
    name: "CityFlier",
    version: "1.0.0",
    releaseDate: "2026-08",
    categoryId: "games-simulation",
    category: "Games & Simulation",
    platform: "iOS",
    viewportType: "mobile",
    technologies: ["Swift", "SpriteKit", "Xcode"],
    status: "development",
    featured: false,
    visibility: "public",
    maturity: "beta",
    presentation: "standard",

    images: {
      primary: "/projects/city-flier/home.png",
      secondary: "/projects/city-flier/gameplay.png",
    },

    gallery: [
      {
        src: "/projects/city-flier/home.png",
        caption: {
          es: "Pantalla principal de CityFlier en iPhone — selección de partida, récord y configuración de audio.",
          en: "CityFlier home screen on iPhone — game launch, high score, and audio configuration.",
        },
      },
      {
        src: "/projects/city-flier/gameplay.png",
        caption: {
          es: "Gameplay Arcade — navegación aérea entre edificios y obstáculos urbanos dinámicos.",
          en: "Arcade Gameplay — aerial navigation across buildings and dynamic urban obstacles.",
        },
      },
    ],

    description: {
      es: "Juego arcade para iPhone centrado en navegación aérea, reflejos y progresión a través de un entorno urbano dinámico construido con Swift y SpriteKit.",
      en: "Arcade game for iPhone focused on aerial navigation, reflexes, and progression through a dynamic urban environment built with Swift and SpriteKit.",
    },

    details: {
      es: {
        headline: "Arcade móvil entre edificios y nubes.",
        problemAndPurpose:
          "Proyecto de videojuego móvil enfocado en física 2D fluida, respuesta táctil inmediata y generación continua de obstáculos en un escenario urbano para iPhone.",
        overview: [
          "CityFlier es un juego arcade desarrollado para iPhone, centrado en controlar una pequeña nave a través de un entorno urbano.",
          "El proyecto combina físicas, generación de obstáculos, puntuación, efectos visuales y una interfaz diseñada específicamente para dispositivos móviles.",
        ],
        features: [
          "Gameplay arcade con respuesta táctil inmediata",
          "Física 2D y detección de colisiones en SpriteKit",
          "Sistema de puntuación y registro local de récord de partidas",
          "Generación dinámica de obstáculos urbanos",
          "Efectos de sonido y música configurables",
          "Interfaz optimizada para pantallas de iPhone",
        ],
        architecture: [
          "Desarrollado nativamente en Swift utilizando el motor de escenas 2D SpriteKit de Apple en Xcode.",
        ],
      },
      en: {
        headline: "Mobile arcade above the city.",
        problemAndPurpose:
          "Mobile game project focused on responsive 2D flight physics, immediate touch feedback, and continuous obstacle generation in an urban iPhone setting.",
        overview: [
          "CityFlier is an arcade game developed for iPhone, centered around navigating a small craft through an urban environment.",
          "The project combines physics, obstacle generation, scoring, visual effects, and an interface designed specifically for mobile devices.",
        ],
        features: [
          "Arcade gameplay with immediate touch controls",
          "2D physics and collision detection powered by SpriteKit",
          "Scoring system and persistent high scores",
          "Dynamic urban obstacle generation",
          "Configurable sound effects and background music",
          "iPhone-optimized interface",
        ],
        architecture: [
          "Engineered natively in Swift using Apple's SpriteKit 2D scene engine in Xcode.",
        ],
      },
    },
  },

  // =========================================================================
  // 17. MREL RECONSTRUCTION INITIATIVE (RESEARCH & INNOVATION)
  // =========================================================================
  {
    id: "mrel-reconstruction-initiative",
    slug: "mrel-reconstruction-initiative",
    name: "MREL Reconstruction Initiative",
    version: "0.2-R",
    releaseDate: "2026-11",
    categoryId: "security-reverse-engineering",
    category: "Security & Reverse Engineering",
    platform: "macOS (Clean-Room Pipeline)",
    viewportType: "desktop",
    technologies: [
      "MREL 0.2 Pipeline",
      "Clean-Room Architecture",
      "SHA-256 Provenance",
      "Multi-Agent Contracts",
      "JSON Schema Validation",
    ],
    status: "active",
    featured: false,
    visibility: "public",
    maturity: "prototype",
    presentation: "research",

    images: {
      primary: "/projects/mrel-reconstruction-initiative/evidence-graph.png",
      secondary: "/projects/mrel-reconstruction-initiative/architecture.png",
    },

    gallery: [
      {
        src: "/projects/mrel-reconstruction-initiative/evidence-graph.png",
        caption: {
          es: "Grafo de Componentes y Relaciones Respaldadas por Evidencia — correlación estructural de módulos, ejecutables y librerías dinámicas.",
          en: "Evidence-Backed Component Graph — structural correlation of modules, executables, and dynamic libraries.",
        },
      },
      {
        src: "/projects/mrel-reconstruction-initiative/architecture.png",
        caption: {
          es: "Especificación Técnica Generada — síntesis documental verificada lista para reconstrucción clean-room.",
          en: "Generated Technical Specification — verified documentary synthesis ready for clean-room architectural reconstruction.",
        },
      },
    ],

    description: {
      es: "Iniciativa de investigación aplicada sobre reconstrucción arquitectónica clean-room asistida por evidencia: transforma hallazgos estáticos y de comportamiento verificados con SHA-256 en especificaciones funcionales y de arquitectura sin exponer ni reutilizar código propietario.",
      en: "Applied research initiative on evidence-backed clean-room software reconstruction: transforms SHA-256 verified static and behavioral observations into formal functional and architectural specifications without exposing or reusing proprietary code.",
    },

    details: {
      es: {
        headline: "Metodología clean-room y síntesis arquitectónica respaldada por evidencia verificable.",
        problemAndPurpose:
          "La modernización o reingeniería de sistemas heredados suele fallar cuando las especificaciones se redactan a partir de suposiciones no verificadas. La Iniciativa de Reconstrucción MREL investiga cómo encadenar el descubrimiento estático de binarios con contratos formales de especificación para producir arquitecturas nuevas, limpias y verificables.",
        overview: [
          "La MREL Reconstruction Initiative es una línea de investigación y desarrollo dentro de Yessid Alba Labs construida sobre el motor de procedencia de MREL 0.2.",
          "Establece un flujo disciplinado de sala limpia (clean-room): la fase de observación extrae únicamente metadatos estructurales, grafos de componentes y patrones de comportamiento verificados con hashes SHA-256, a partir de los cuales se sintetizan especificaciones funcionales y decisiones de arquitectura (ADRs) para construir implementaciones 100% originales.",
        ],
        features: [
          "Separación estricta entre la fase de reconocimiento de evidencia y la fase de diseño e implementación original",
          "Modelado formal de dependencias en grafos dirigidos (NODOS: Bundle, Executable, Framework, Dylib, Resource; ARISTAS respaldadas por evidence_id)",
          "Pipeline secuencial de 7 contratos de agentes validados por JSON Schema recursivo (ReverseEngineeringAnalyst -> UIUXAnalyst -> FunctionalAnalyst -> SoftwareArchitect -> QualityAuditor -> FidelityAuditor)",
          "Política de verificación factual que rechaza cualquier afirmación arquitectónica cuyo evidence_ref no exista en la base de datos",
          "Generación de especificaciones técnicas reproducibles para guiar reconstrucciones modernas en Rust, Swift o Python",
        ],
        architecture: [
          "Orquestada sobre MRELCoordinator, ComponentGraphManager, InvestigationEvidenceCorrelator y AIProviderPort (agnóstico del proveedor y funcional 100% offline mediante NullOfflineProvider).",
          "Garantiza que ningún fragmento de código propietario, credencial ni recurso confidencial cruce la frontera entre la auditoría de evidencia y el nuevo repositorio de ingeniería.",
        ],
      },
      en: {
        headline: "Clean-room methodology and architectural synthesis backed by cryptographic evidence.",
        problemAndPurpose:
          "Legacy system modernization and software re-engineering frequently fail when specifications rely on unverified assumptions. The MREL Reconstruction Initiative researches how to bridge cryptographic binary provenance with formal specification contracts to guide clean-room software architectures.",
        overview: [
          "The MREL Reconstruction Initiative is an applied R&D program at Yessid Alba Labs built atop the MREL 0.2 provenance engine.",
          "It enforces a strict clean-room workflow: the observation stage extracts only structural metadata, component dependency graphs, and SHA-256 verified behavioral patterns, which are then synthesized into formal functional specifications and Architecture Decision Records (ADRs) to guide 100% original implementations.",
        ],
        features: [
          "Strict clean-room boundary separating evidence reconnaissance from original architectural design and coding",
          "Directed component dependency graphing (Bundle, Executable, Framework, Dylib, Resource nodes backed by verified evidence IDs)",
          "Sequential 7-agent contract pipeline validated via recursive JSON Schemas (ReverseEngineeringAnalyst -> UIUXAnalyst -> FunctionalAnalyst -> SoftwareArchitect -> QualityAuditor -> FidelityAuditor)",
          "Factual citation verification rejecting any architectural claim lacking a confirmed database evidence_ref",
          "Reproducible specification synthesis guiding modern clean-room builds in Rust, Swift, or Python",
        ],
        architecture: [
          "Orchestrated across MRELCoordinator, ComponentGraphManager, InvestigationEvidenceCorrelator, and the provider-agnostic AIProviderPort (fully operational offline via NullOfflineProvider).",
          "Ensures zero proprietary source code, private credentials, or confidential target data ever cross into clean-room implementation repositories.",
        ],
      },
    },
  },

  // =========================================================================
  // 18. ASTRO WARRIOR — DEFINITIVE EDITION (RESEARCH & INNOVATION)
  // =========================================================================
  {
    id: "astro-warrior-rust",
    slug: "astro-warrior",
    name: "Astro Warrior — Definitive Edition",
    version: "1.0.0",
    releaseDate: "2026-11",
    categoryId: "games-simulation",
    category: "Games & Simulation",
    platform: "macOS & Windows",
    viewportType: "desktop",
    technologies: [
      "Rust",
      "Macroquad / OpenGL",
      "Procedural Pixel-Art",
      "Real-Time PCM/FM Synth",
      "60Hz Fixed-Step Sim",
      "Gilrs Gamepad",
    ],
    status: "completed",
    featured: false,
    visibility: "public",
    maturity: "production",
    presentation: "research",

    images: {
      primary: "/projects/astro-warrior/gameplay.png",
      secondary: "/projects/astro-warrior/menu.png",
    },

    gallery: [
      {
        src: "/projects/astro-warrior/gameplay.png",
        caption: {
          es: "Simulación a 60 Hz en Rust — Galaxy Zone (Sector 01) con sprites, fortalezas y proyectiles generados 100% de forma procedural.",
          en: "60Hz Rust Simulation — Galaxy Zone (Sector 01) featuring 100% procedurally generated pixel-art sprites, fortresses, and projectiles.",
        },
      },
      {
        src: "/projects/astro-warrior/menu.png",
        caption: {
          es: "Menú Principal Bilingüe (ES/EN) — fuente bitmap pixel-art generada en memoria y modo attract animado en segundo plano.",
          en: "Bilingual Main Menu (ES/EN) — in-memory procedural bitmap pixel font and animated background attract mode.",
        },
      },
    ],

    description: {
      es: "Motor arcade experimental y reinterpretación clean-room en Rust con simulación determinista a 60 Hz, generación 100% procedural de gráficos pixel-art y fuentes bitmap en tiempo de ejecución, sintetizador de audio chiptune/FM PCM y verificador headless con piloto automático.",
      en: "Experimental clean-room arcade engine written in Rust featuring a deterministic 60Hz fixed-timestep simulation, 100% runtime-procedural pixel-art graphics and bitmap fonts, a real-time PCM/FM chiptune audio synthesizer, and an automated headless playthrough verifier.",
    },

    details: {
      es: {
        headline: "Síntesis procedural en tiempo real de gráficos, fuentes y audio FM en Rust.",
        problemAndPurpose:
          "Proyecto de investigación en ingeniería de motores de juegos y reconstrucción clean-room: demuestra cómo recrear la experiencia completa de un shooter vertical clásico de 1986 en Rust sin incluir un solo archivo gráfico, fuente, pista de audio ni ROM externa.",
        overview: [
          "Astro Warrior — Definitive Edition (v1.0.0) es un motor y videojuego arcade desarrollado íntegramente en Rust para macOS (.app / .dmg) y Windows (.exe).",
          "Todos los sprites de las 18 clases de enemigos, los 3 jefes biomecánicos, las fortalezas terrestres, la fuente bitmap bilingüe (ES/EN con tildes), los 5 temas musicales y los 16 efectos de sonido se sintetizan matemáticamente en memoria al iniciar el binario.",
        ],
        features: [
          "Cero activos externos: 100% de los sprites, mosaicos, fuentes bitmap y ondas de audio PCM WAV se generan proceduralmente en código Rust",
          "Simulación determinista de paso fijo a 60 Hz desacoplada del framerate del monitor sobre un lienzo lógico de 960×540",
          "3 zonas espaciales (Galaxy, Asteroid y Nebula Zone), 18 patrones geométricos de enemigos, torretas terrestres y progresión infinita por bucles (Loop 2+)",
          "Sistema clásico de cápsulas de mejora (Speed, Triple, Laser perforante y drones Assistor)",
          "Sintetizador de audio chiptune/FM en tiempo real que genera 5 composiciones musicales y 16 efectos SFX en buffers PCM",
          "Simulador headless con IA de piloto automático (cargo run --bin simulate) que juega y certifica los 3 niveles de dificultad sin abrir ventana",
          "Soporte simultáneo de teclado reconfigurable y mando Gamepad (gilrs) más internacionalización completa Español / Inglés",
        ],
        architecture: [
          "Núcleo separado en módulos puros de simulación (sim.rs y content.rs, libres de dependencias de ventana), sintetizador PCM (audio.rs), motor de sprites procedurales (render.rs), fuente bitmap en memoria (font.rs), interfaz (ui.rs) y persistencia tolerante a fallos (save.rs).",
          "Verificado mediante 18 pruebas unitarias deterministas y el binario de simulación headless automatizada.",
        ],
      },
      en: {
        headline: "Real-time procedural synthesis of pixel-art, bitmap fonts, and FM audio in Rust.",
        problemAndPurpose:
          "An applied game-engine and clean-room engineering study demonstrating how to recreate the complete feel of a 1986 vertical space shooter in Rust without bundling a single external sprite image, font file, audio track, or ROM.",
        overview: [
          "Astro Warrior — Definitive Edition (v1.0.0) is a clean-room arcade engine and game written entirely in Rust for macOS (.app / .dmg) and Windows (.exe).",
          "Every sprite across 18 enemy classes, 3 boss encounters, ground fortresses, the bilingual ES/EN accented bitmap font, 5 musical themes, and 16 sound effects are mathematically synthesized in memory at startup.",
        ],
        features: [
          "Zero external media assets: 100% of pixel-art sprites, tiles, bitmap glyphs, and PCM WAV audio buffers are procedurally generated in Rust",
          "Deterministic 60Hz fixed-timestep simulation decoupled from display refresh rate on a 960×540 logical canvas",
          "3 space sectors (Galaxy, Asteroid, and Nebula Zones), 18 enemy movement/bullet patterns, destructible turrets, and infinite Loop 2+ scaling",
          "Classic power-up capsule rotation (Speed, Triple spread, piercing Laser, and orbiting Assistor drones)",
          "Real-time PCM/FM chiptune synthesizer generating 5 multi-channel music tracks and 16 arcade SFX",
          "Headless autopilot verification binary (cargo run --bin simulate) that plays through and certifies all 3 difficulty levels without a window",
          "Simultaneous reconfigurable keyboard and Gilrs gamepad input plus complete Spanish / English localization",
        ],
        architecture: [
          "Clean separation between headless deterministic simulation (sim.rs, content.rs), procedural texture & sprite synthesis (render.rs, font.rs), PCM audio generation (audio.rs), menu state machine (ui.rs), and fault-tolerant INI persistence (save.rs).",
          "Backed by 18 automated unit tests and headless full-campaign simulation checks.",
        ],
      },
    },
  },
];

/**
 * Returns only projects explicitly designated for public presentation.
 * Private projects are strictly excluded from all public views, routes, and sitemaps.
 */
export function getPublicProjects(): Project[] {
  return projects.filter((project) => project.visibility === "public");
}

/**
 * Returns public projects designated as featured flagships.
 */
export function getFeaturedProjects(): Project[] {
  return getPublicProjects().filter(
    (project) => project.featured || project.presentation === "featured"
  );
}

/**
 * Resolves a single public project by slug. Returns undefined if not found or if private.
 */
export function getPublicProjectBySlug(slug: string): Project | undefined {
  return getPublicProjects().find((project) => project.slug === slug);
}
