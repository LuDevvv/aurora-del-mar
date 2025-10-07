import type { HeaderConfig } from "@components/layout/Header";
import type { WhatsAppButtonConfig } from "@components/ui/WhatsAppButton";
import type { FooterConfig } from "@components/layout/Footer";

export const siteConfig = {
  name: "Aurora del Mar",
  description:
    "Residencias de lujo en Santo Domingo Este con amenidades premium y ubicación privilegiada",
  url: "https://aurora.casalinainmobiliaria.com",

  // Contact Information
  contact: {
    phone: "+18092995767",
    phoneFormatted: "+1 (809) 299-5767",
    email: "info@casalinainmobiliaria.com",
    address: {
      line1: "Santo Domingo Este",
      line2: "República Dominicana",
      full: "Santo Domingo Este, República Dominicana",
    },
    coordinates: {
      lat: 18.4861,
      lng: -69.8597,
      formatted: "18.4861, -69.8597",
    },
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/casalinainmobiliaria",
    instagram: "https://www.instagram.com/casalinasrl/",
    twitter: "@casalinasrl",
  },

  // Event Information
  event: {
    show: true,
    name: "Feria Inmobiliaria",
    dates: "6-8 de Junio, 2025",
    hours: "10:00 AM - 5:00 PM",
  },

  // Brand Colors
  colors: {
    primary: "#3C7269",
    primaryLight: "#4dbaa4",
    primaryDark: "#2d5650",
    accent: "#ea580c",
    whatsapp: "#25D366",
  },

  // Developer Information
  developer: {
    name: "Casalina Inmobiliaria SRL",
    description:
      "Con más de una década de experiencia en el mercado inmobiliario dominicano, Casalina Inmobiliaria se ha consolidado como líder en desarrollo de proyectos residenciales de alta calidad.",
    logo: "/casalina-logo.png",
  },

  // Project Stats
  stats: {
    units: "150+",
    amenities: "15+",
    greenAreas: "5000+",
    security: "24/7",
  },

  // Navigation
  navigation: [
    { label: "Descripción", href: "overview" },
    { label: "Amenidades", href: "amenities" },
    { label: "Unidades", href: "units" },
    { label: "Galería", href: "gallery" },
    { label: "Ubicación", href: "location" },
    { label: "Contacto", href: "contact" },
  ],
};

// Header Configuration - Simplified
export const headerConfig: HeaderConfig = {
  logo: {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759871646/aurora-del-mar_otgefi.png",
    alt: siteConfig.name,
    width: 280,
    height: 80,
    href: "/",
  },
  whatsappNumber: siteConfig.contact.phone,
  ctaButton: {
    label: "Solicitar más información",
    href: "#contact",
    onClick: (e) => {
      e.preventDefault();
      // scrollToSection("contact");
    },
  },
  maxWidth: "1400px",
};

// WhatsApp Floating Button Configuration
export const whatsappConfig: WhatsAppButtonConfig = {
  phoneNumber: siteConfig.contact.phone,
  message: `Hola, estoy interesado en conocer más sobre ${siteConfig.name}`,
  position: "bottom-right",
  showOnScroll: true,
  scrollThreshold: 300,
  showAfterDelay: 3000,
  size: "md",
  color: siteConfig.colors.whatsapp,
  hoverColor: "#22c55e",
  pulseAnimation: true,
  icon: "default",
  ariaLabel: "Contáctanos por WhatsApp",
};

// Footer Configuration
export const footerConfig = {
  logo: {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759871646/aurora-del-mar_otgefi.png",
    alt: siteConfig.name,
    width: 240,
    height: 70,
  },
  description: siteConfig.description,
  socialLinks: [
    { platform: "facebook" as const, url: siteConfig.social.facebook },
    { platform: "instagram" as const, url: siteConfig.social.instagram },
  ],
  contactInfo: {
    address: siteConfig.contact.address.full,
    phone: siteConfig.contact.phoneFormatted,
    email: siteConfig.contact.email,
  },
  copyrightText: `© ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`,

  // Background Image - Dominican Republic beach/landscape
  backgroundImage:
    "https://res.cloudinary.com/dcuapqoii/image/upload/v1759876184/Artboard_18_xhihql.png",

  overlayColor: "#1E3A5F", // Navy blue from your branding
  overlayOpacity: 0.92, // Strong overlay for text contrast
};

// Location Configuration
export const locationConfig = {
  propertyName: siteConfig.name,
  address: {
    line1: siteConfig.contact.address.line1,
    line2: siteConfig.contact.address.line2,
    reference: `Ubicación privilegiada en ${siteConfig.contact.address.line1}`,
  },
  coordinates: siteConfig.contact.coordinates.formatted,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5!2d-69.8597!3d18.4861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEwLjAiTiA2OcKwNTEnMzUuMCJX!5e0!3m2!1sen!2sdo!4v1234567890",
  googleMapsUrl: `https://maps.google.com/?q=${siteConfig.contact.coordinates.lat},${siteConfig.contact.coordinates.lng}`,
  cardPosition: "top-left" as const,
};

export const statsConfig = {
  stats: [
    {
      value: "3,650",
      prefix: "+",
      label: "Apartamentos entregados",
      color: "#F97316",
      icon: "building" as const,
    },
    {
      value: "30",
      prefix: "+",
      label: "Años de experiencia",
      color: "#F97316",
      icon: "calendar" as const,
    },
    {
      value: "1,650",
      prefix: "+",
      label: "Colaboradores",
      color: "#F97316",
      icon: "users" as const,
    },
    {
      value: "2,000",
      prefix: "+",
      label: "Apartamentos en proyecto",
      color: "#F97316",
      icon: "trending" as const,
    },
  ],
  layout: "2-columns" as const,
  backgroundColor: "#FEF3F2",
  textColor: "#1E3A5F",
  accentColor: "#F97316",
  animated: true,
};

export const developerConfig = {
  // Header Badge
  badge: "DESARROLLADOR Y CONSTRUCTOR",

  // Logo Configuration
  logo: {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759873868/BDREX-Logo-FC-300x142_sdkpbo.png", // Update with your actual logo path
    alt: "BDREX - Desarrollador y Constructor",
    width: 280,
    height: 100,
  },

  // Main Tagline (appears first, larger text)
  tagline:
    "Nuestra pasión por la calidad y la innovación nos impulsa a crear espacios que",

  // Text to highlight in the tagline (will be colored with accentColor)
  highlightText: "superan las expectativas de nuestros clientes.",

  // Secondary Description (appears below tagline, smaller text)
  projectInfo:
    "Aurora del Mar es un proyecto de BDREX, una empresa con más de 30 años de experiencia en el sector de la construcción y desarrollo inmobiliario en República Dominicana.",

  // Feature Cards (2 column grid)
  features: [
    {
      icon: "building" as const,
      text: "Más de 3,650 apartamentos entregados con los más altos estándares de calidad",
    },
    {
      icon: "award" as const,
      text: "30+ años construyendo comunidades y transformando espacios en hogares",
    },
    {
      icon: "sparkles" as const,
      text: "Innovación constante en diseño arquitectónico y tecnología de construcción",
    },
    {
      icon: "trending" as const,
      text: "2,000+ apartamentos en desarrollo, expandiendo nuestra visión de calidad",
    },
  ],

  // Visual Theme Colors
  backgroundColor: "#FFFFFF", // Card background
  textColor: "#1f2937", // Main text color
  accentColor: "#F97316", // Orange - highlights and icons
  badgeColor: "#1E3A5F", // Navy blue - header badge
};
