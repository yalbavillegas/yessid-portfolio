export type ProjectVisibility = "public" | "private";

export type ProjectMaturity = "production" | "beta" | "alpha" | "prototype";

export type ProjectPresentation = "featured" | "standard" | "research";

export type ProjectLegacyStatus = "active" | "development" | "completed";

export type ProjectCategoryId =
  | "security-reverse-engineering"
  | "database-systems"
  | "multimedia-audio"
  | "enterprise-healthcare"
  | "personal-finance"
  | "desktop-productivity"
  | "games-simulation";

export type ProjectGalleryItem = {
  src: string;
  caption: {
    es: string;
    en: string;
  };
};

export type ProjectLocalizedDetail = {
  headline: string;
  problemAndPurpose: string;
  overview: string[];
  features: string[];
  architecture: string[];
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  version?: string;
  releaseDate?: string;
  categoryId: ProjectCategoryId;
  category: string;
  platform: string;
  viewportType?: "desktop" | "mobile";
  technologies: string[];
  status: ProjectLegacyStatus;
  featured: boolean;

  /**
   * Conceptual catalog separation:
   * - visibility: public | private
   * - maturity: production | beta | alpha | prototype
   * - presentation: featured | standard | research
   */
  visibility: ProjectVisibility;
  maturity: ProjectMaturity;
  presentation: ProjectPresentation;

  images?: {
    primary: string;
    secondary?: string;
  };

  gallery?: ProjectGalleryItem[];

  repositoryUrl?: string;
  demoUrl?: string;

  description: {
    es: string;
    en: string;
  };

  details: {
    es: ProjectLocalizedDetail;
    en: ProjectLocalizedDetail;
  };
};
