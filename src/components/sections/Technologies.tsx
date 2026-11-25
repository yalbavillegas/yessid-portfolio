"use client";

import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { useLanguage } from "@/i18n/LanguageContext";

type CapabilityDomain = {
  id: string;
  code: string;
  title: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
  technologies: string[];
  projects: {
    name: string;
    slug?: string;
    href?: string;
  }[];
};

const CAPABILITY_DOMAINS: CapabilityDomain[] = [
  {
    id: "software-architecture",
    code: "01",
    title: {
      es: "Software Architecture",
      en: "Software Architecture",
    },
    summary: {
      es: "Diseño de sistemas modulares orientados al dominio (DDD), arquitecturas limpias en capas gobernadas por ADRs, máquinas de estados deterministas y aislamiento multimódulo.",
      en: "Domain-Driven Design (DDD), ADR-governed layered clean architectures, deterministic state machines, and strict multi-module boundary isolation.",
    },
    technologies: [
      "Clean Architecture",
      "Domain-Driven Design",
      "ADR Governance",
      "Multi-Module Systems",
      "MVC & Service Facades",
    ],
    projects: [
      { name: "SQLite Desktop Manager", slug: "sqlite-desktop-manager" },
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "Billetera", slug: "billetera" },
      { name: "MREL 0.2", slug: "mrel" },
    ],
  },
  {
    id: "rust-development",
    code: "02",
    title: {
      es: "Rust Development",
      en: "Rust Development",
    },
    summary: {
      es: "Ingeniería de sistemas nativos en Rust (Edition 2024) con interfaces aceleradas por hardware (egui/eframe), motores monetarios de punto fijo Money(i64), concurrencia Tokio y síntesis procedural a 60 Hz.",
      en: "Native systems engineering in Rust (Edition 2024) featuring hardware-accelerated egui/eframe interfaces, fixed-point Money(i64) monetary engines, Tokio concurrency, and 60Hz procedural simulation.",
    },
    technologies: [
      "Rust (Edition 2024)",
      "egui / eframe",
      "SQLx",
      "Tokio",
      "Argon2id & CSPRNG",
      "Macroquad / OpenGL",
    ],
    projects: [
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "Astro Warrior", slug: "astro-warrior" },
    ],
  },
  {
    id: "python-pyqt-pyside",
    code: "03",
    title: {
      es: "Python / PyQt6 / PySide6",
      en: "Python / PyQt6 / PySide6",
    },
    summary: {
      es: "Desarrollo de estaciones de trabajo de escritorio profesionales en Python 3.11–3.14 con PyQt6 y PySide6, ejecución asíncrona QThread/TaskRunner, iconografía vectorial SVG dinámica y generación documental PDF.",
      en: "Professional desktop workbenches in Python 3.11–3.14 using PyQt6 and PySide6, non-blocking QThread/TaskRunner execution, dynamic SVG vector tinting, and native PDF generation.",
    },
    technologies: [
      "Python 3.11–3.14",
      "PyQt6 & QtSvg",
      "PySide6",
      "ReportLab PDF",
      "OpenPyXL",
      "PyInstaller",
    ],
    projects: [
      { name: "MREL 0.2", slug: "mrel" },
      { name: "SQLite Desktop Manager", slug: "sqlite-desktop-manager" },
      { name: "MediPlus 3.0", slug: "mediplus" },
      { name: "AudioSphere Pro 2.0", slug: "audiosphere-pro" },
      { name: "Vitalscan", slug: "vitalscan" },
      { name: "Gestor de Ventas", slug: "gestor-de-ventas" },
    ],
  },
  {
    id: "swift-swiftui",
    code: "04",
    title: {
      es: "Swift / SwiftUI",
      en: "Swift / SwiftUI",
    },
    summary: {
      es: "Aplicaciones nativas para macOS, iOS e iPadOS con Swift 6, SwiftUI, persistencia SwiftData, visualización vectorial Swift Charts, motores 2D SpriteKit e integración con Keychain y Touch ID / Face ID.",
      en: "Native macOS, iOS, and iPadOS applications built with Swift 6, SwiftUI, SwiftData persistence, vector Swift Charts, SpriteKit 2D physics, and Keychain / biometric integration.",
    },
    technologies: [
      "Swift 6",
      "SwiftUI",
      "SwiftData",
      "Swift Charts",
      "SpriteKit",
      "AppKit & PDFKit",
      "XCTest & XCUITest",
    ],
    projects: [
      { name: "FinanceFlow Pro", slug: "financeflow-pro" },
      { name: "PersonalFlow", slug: "personalflow" },
      { name: "Arcade Library", slug: "arcade-library" },
      { name: "Folder Studio", slug: "folder-studio" },
      { name: "AsistFinance", slug: "asist-finance" },
      { name: "OrbitScape", slug: "orbitscape" },
      { name: "CityFlier", slug: "city-flier" },
    ],
  },
  {
    id: "kotlin-android",
    code: "05",
    title: {
      es: "Kotlin / Android",
      en: "Kotlin / Android",
    },
    summary: {
      es: "Ingeniería Android moderna con Kotlin, Jetpack Compose y Material 3: arquitectura multimódulo, flujos reactivos Coroutines/Flow, biometría Android Keystore y contenedores de respaldo cifrados AES-256-GCM.",
      en: "Modern Android engineering with Kotlin, Jetpack Compose, and Material 3: multi-module Gradle architecture, reactive Coroutines/Flow, Android Keystore biometrics, and AES-256-GCM encrypted backups.",
    },
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Room SQLite",
      "Coroutines & Flow",
      "Android Keystore",
      "AES-256-GCM",
    ],
    projects: [{ name: "Billetera", slug: "billetera" }],
  },
  {
    id: "typescript-nextjs",
    code: "06",
    title: {
      es: "TypeScript / Next.js",
      en: "TypeScript / Next.js",
    },
    summary: {
      es: "Arquitectura web moderna sobre Next.js App Router, React 19, TypeScript estricto y Tailwind CSS v4 con generación estática SSG, sistemas de tokens semánticos, internacionalización y datos estructurados JSON-LD.",
      en: "Modern web architecture on Next.js App Router, React 19, strict TypeScript, and Tailwind CSS v4 featuring SSG prerendering, semantic design tokens, bilingual i18n, and JSON-LD structured data.",
    },
    technologies: [
      "TypeScript 5",
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "SSG / Server Components",
      "Technical SEO & JSON-LD",
    ],
    projects: [{ name: "Yessid Alba Labs Web", href: "/#inicio" }],
  },
  {
    id: "flutter-dart",
    code: "07",
    title: {
      es: "Flutter / Dart",
      en: "Flutter / Dart",
    },
    summary: {
      es: "Desarrollo de aplicaciones multiplataforma a partir de una base de código modular en Dart y Flutter, integrando gestión de estado con Provider, almacenamiento local y notificaciones nativas.",
      en: "Cross-platform application development from a single modular Dart and Flutter codebase, integrating Provider state management, local persistence, and native notifications.",
    },
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Material Design",
      "Local Notifications",
    ],
    projects: [{ name: "Horario de Clases", slug: "horario-de-clases" }],
  },
  {
    id: "database-engineering",
    code: "08",
    title: {
      es: "Database Engineering",
      en: "Database Engineering",
    },
    summary: {
      es: "Diseño y optimización de motores relacionales SQLite 3 (modo WAL ACID), paginación Keyset O(log N), análisis léxico de seguridad SQL, respaldos atómicos en caliente (VACUUM INTO) y migraciones deterministas.",
      en: "Relational database architecture and optimization on SQLite 3 (WAL ACID mode), O(log N) keyset pagination, lexical SQL safety analysis, hot atomic backups (VACUUM INTO), and deterministic schema migrations.",
    },
    technologies: [
      "SQLite 3 (WAL ACID)",
      "Keyset Pagination O(log N)",
      "SqlAuthorizer & Safety Analysis",
      "SQLx (Rust)",
      "Room (Android)",
      "SwiftData",
    ],
    projects: [
      { name: "SQLite Desktop Manager", slug: "sqlite-desktop-manager" },
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "Billetera", slug: "billetera" },
      { name: "MediPlus 3.0", slug: "mediplus" },
    ],
  },
  {
    id: "reverse-engineering",
    code: "09",
    title: {
      es: "Reverse Engineering & Binary Analysis",
      en: "Reverse Engineering & Binary Analysis",
    },
    summary: {
      es: "Inspección estática de binarios Mach-O y bundles .app en macOS, verificación de firmas criptográficas, cadenas de custodia SHA-256, correlación de telemetría dinámica y síntesis arquitectónica clean-room.",
      en: "Static Mach-O binary and macOS .app bundle inspection, code-signature verification, SHA-256 evidence provenance chains, dynamic telemetry correlation, and clean-room architectural synthesis.",
    },
    technologies: [
      "Mach-O Analysis",
      "otool / nm / codesign",
      "Ghidra Headless",
      "SHA-256 Hash-Chain",
      "Component Graph Modeling",
      "Clean-Room Synthesis",
    ],
    projects: [
      { name: "MREL 0.2", slug: "mrel" },
      {
        name: "MREL Reconstruction Initiative",
        slug: "mrel-reconstruction-initiative",
      },
    ],
  },
  {
    id: "cross-platform-development",
    code: "10",
    title: {
      es: "Cross-platform & Multimedia Systems",
      en: "Cross-platform & Multimedia Systems",
    },
    summary: {
      es: "Ingeniería de sistemas que operan de forma consistente en macOS (Apple Silicon & Intel), Windows, iOS y Android, incluyendo integración C-API con libmpv, FFmpeg LGPL, OpenGL 4.1 Core Profile y CoreAudio.",
      en: "Systems engineered to run seamlessly across macOS (Apple Silicon & Intel), Windows, iOS, and Android, including C-API integration with libmpv, FFmpeg LGPL, OpenGL 4.1 Core Profile, and CoreAudio.",
    },
    technologies: [
      "macOS (ARM64 & x86_64)",
      "Windows 10/11 (64-bit)",
      "iOS & Android",
      "libmpv & FFmpeg DSP",
      "OpenGL 4.1 Core",
      "CoreAudio",
    ],
    projects: [
      { name: "AudioSphere Pro 2.0", slug: "audiosphere-pro" },
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "MediPlus 3.0", slug: "mediplus" },
      { name: "Horario de Clases", slug: "horario-de-clases" },
    ],
  },
  {
    id: "product-engineering",
    code: "11",
    title: {
      es: "Product Engineering & Cryptographic Licensing",
      en: "Product Engineering & Cryptographic Licensing",
    },
    summary: {
      es: "Ejecución integral de producto: diseño de interfaz, iconografía vectorial, licenciamiento comercial offline con firmas digitales asimétricas Ed25519 vinculadas a hardware, firmado de código y distribución DMG/EXE/MSI.",
      en: "End-to-end product execution: UI/UX design systems, custom vector iconography, hardware-bound offline commercial licensing using asymmetric Ed25519 digital signatures, code signing, and DMG/EXE/MSI packaging.",
    },
    technologies: [
      "Ed25519 Asymmetric Licensing",
      "Hardware Fingerprinting",
      "Custom Vector Design Systems",
      "macOS DMG & Codesign",
      "Windows Inno Setup & WiX MSI",
    ],
    projects: [
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "MediPlus 3.0", slug: "mediplus" },
      { name: "Gestor de Ventas", slug: "gestor-de-ventas" },
      { name: "SQLite Desktop Manager", slug: "sqlite-desktop-manager" },
    ],
  },
];

export default function Technologies() {
  const { language, t } = useLanguage();

  return (
    <section
      id="tecnologias"
      className="border-t border-border-subtle bg-surface px-6 py-24 text-fg-primary sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.technologies.eyebrow}
          title={t.technologies.title}
          description={t.technologies.description}
        />

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITY_DOMAINS.map((domain) => (
            <article
              key={domain.id}
              className="group flex flex-col justify-between rounded-3xl border border-border-subtle bg-card p-6 transition duration-300 hover:border-border-gold/60 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-gold bg-gold-muted font-mono text-xs font-semibold text-gold">
                    {domain.code}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-border-subtle transition-colors group-hover:bg-border-gold/40"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg-primary transition-colors group-hover:text-gold">
                  {domain.title[language]}
                </h3>

                <p className="mt-3 text-sm leading-7 text-fg-muted">
                  {domain.summary[language]}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {domain.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>

              {/* VERIFIED CATALOG PROJECT LINKS */}
              <div className="mt-6 border-t border-border-subtle pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                  {t.technologies.relatedLabel}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-2">
                  {domain.projects.map((proj) => {
                    const targetHref = proj.href ?? `/projects/${proj.slug}`;
                    return (
                      <Link
                        key={targetHref + proj.name}
                        href={targetHref}
                        className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-pill px-2.5 py-1 font-mono text-[11px] font-medium text-fg-secondary transition hover:border-border-gold hover:text-gold"
                      >
                        <span>{proj.name}</span>
                        <span aria-hidden="true" className="text-gold">
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
