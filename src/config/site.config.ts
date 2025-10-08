import type { HeaderConfig } from "@components/layout/Header";
import type { WhatsAppButtonConfig } from "@components/ui/WhatsAppButton";
import type { FooterConfig } from "@components/layout/Footer";
import type { ContactSectionConfig } from "@components/sections/ContactSection";
import type { HeroSectionConfig } from "@components/sections/HeroSection";
import { AmenitiesSliderConfig } from "@components/sections/AmenitiesSlider";
import { GallerySectionConfig } from "@components/sections/GallerySection";

export const siteConfig = {
  name: "Aura del Mar",
  description:
    "Residencias de lujo en Cap Cana con amenidades exclusivas y ubicación privilegiada",
  url: "https://auradelmar.mussebgroup.com",

  // Contact Information
  contact: {
    phone: "+18094200000",
    phoneFormatted: "+1 (809) 420-0000",
    email: "setterinvest@auradelmar.com",
    address: {
      line1: "Aura Del Mar",
      line2: "Cap Cana",
      full: "Cap Cana, Aura del Mar",
    },
    coordinates: {
      lat: 18.4686503,
      lng: -68.4119377,
      formatted: "18.4686503, -68.4119377",
    },
  },

  // Social Media
  social: {
    instagram: "https://www.instagram.com/belkisfabio.broker",
  },

  // Brand Colors
  colors: {
    primary: "#3C7269",
    primaryLight: "#4dbaa4",
    primaryDark: "#2d5650",
    accent: "#ea580c",
    whatsapp: "#25D366",
  },
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
  },
  coordinates: siteConfig.contact.coordinates.formatted,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2232.1641174514625!2d-68.4119377!3d18.4686503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea89b003efe8f35%3A0x5b8cd5defed28837!2sAURA%20DEL%20MAR%20cap%20cana!5e1!3m2!1ses-419!2sdo!4v1759890642903!5m2!1ses-419!2sdo",
  googleMapsUrl: `https://maps.app.goo.gl/zx3pkiL3VPe4zbbG7`,
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
    "Aura del Mar es un proyecto de BDREX, una empresa con más de 30 años de experiencia en el sector de la construcción y desarrollo inmobiliario en República Dominicana.",

  // Feature Cards (2 column grid)
  features: [
    {
      icon: "building" as const,
      text: "Más de 3,650 apartamentos entregados con los más altos estándares de calidad",
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

export const amenitiesSliderConfig: AmenitiesSliderConfig = {
  amenities: [
    {
      id: "location",
      title: "UBICACIÓN",
      description:
        "A solo 7 minutos del Aeropuerto Internacional de La Romana, con fácil acceso a las playas de Bayahibe, Isla Catalina e Isla Saona.",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759876184/Artboard_18_xhihql.png",
      icon: "map-pin",
    },
    {
      id: "events",
      title: "Salones Multiuso",
      description:
        "Celebra momentos especiales o reuniones privadas en nuestros espacios diseñados para tu comodidad.",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895611/Patio_ADM_Final_11zon_nzjd6u.jpg",
      icon: "users",
    },
    {
      id: "gym",
      title: "Gimnasio",
      description:
        "Mantén tu estilo de vida activo con nuestro gimnasio completamente equipado con lo último en tecnología fitness.",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895612/Gym_ADM_Final_11zon_gitjlf.jpg",
      icon: "dumbbell",
    },
    {
      id: "pool",
      title: "Piscina",
      description:
        "Disfruta de momentos de relajación en nuestra espectacular piscina con áreas de descanso.",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759876184/Artboard_18_xhihql.png",
      icon: "waves",
    },
    {
      id: "gardens",
      title: "Áreas Verdes",
      description:
        "Espacios naturales diseñados para tu bienestar y el de tu familia, perfectos para caminar y relajarse.",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759876184/Artboard_18_xhihql.png",
      icon: "trees",
    },
    {
      id: "playground",
      title: "Área Infantil",
      description:
        "Zona de juegos segura y moderna donde los más pequeños pueden divertirse y hacer amigos.",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895613/Padel_V1_ADM_Final_11zon_l6ribn.jpg",
      icon: "baby",
    },
  ],
  autoPlay: true,
  autoPlayInterval: 5000,
  overlayOpacity: 70,
  overlayColor: "#183C7C",
};

export const galleryConfig: GallerySectionConfig = {
  title: "Descubre la Belleza de Aura del Mar",
  subtitle: "Galería",
  disclaimer:
    "Las imágenes presentadas son representaciones conceptuales del proyecto. Podrían estar sujetas a modificaciones técnicas y/o estructurales durante el proceso de desarrollo.",

  categories: [
    { value: "all", label: "Todo" },
    { value: "exterior", label: "Exterior" },
    { value: "interior", label: "Interior" },
    { value: "amenities", label: "Amenidades" },
  ],

  images: [
    // Exterior Images
    {
      id: "ext-1",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Fachada principal del proyecto Aura del Mar",
      category: "exterior",
    },
    {
      id: "ext-2",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Vista panorámica del desarrollo residencial",
      category: "exterior",
    },
    {
      id: "ext-3",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Áreas comunes exteriores con jardines",
      category: "exterior",
    },

    // Interior Images
    {
      id: "int-1",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Sala de estar con diseño contemporáneo",
      category: "interior",
    },
    {
      id: "int-2",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Habitación principal con vista al mar",
      category: "interior",
    },
    {
      id: "int-3",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Cocina moderna totalmente equipada",
      category: "interior",
    },
    {
      id: "int-4",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Baño principal con acabados de lujo",
      category: "interior",
    },

    // Amenities Images
    {
      id: "amen-1",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Piscina infinity con vista espectacular",
      category: "amenities",
    },
    {
      id: "amen-2",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Gimnasio equipado con tecnología de última generación",
      category: "amenities",
    },
    {
      id: "amen-3",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Área social y salón de eventos",
      category: "amenities",
    },
    {
      id: "amen-4",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759896008/Terraza_Mar_Final_11zon_evd6no.jpg",
      alt: "Jardines y áreas verdes del proyecto",
      category: "amenities",
    },
  ],
};

export const contactConfig: ContactSectionConfig = {
  showContactInfo: true,
  contactInfo: {
    phone: siteConfig.contact.phone,
    phoneFormatted: siteConfig.contact.phoneFormatted,
    email: siteConfig.contact.email,
    address: siteConfig.contact.address.full,
  },
  formConfig: {
    showPhone: true,
    showDate: true,
    showTime: true,
  },
};

export const heroConfig: HeroSectionConfig = {
  video: {
    src: "https://res.cloudinary.com/dcuapqoii/video/upload/v1759888170/VideoPrincipal_tnpcng.mp4",
    poster:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759910029/Screenshot_2025-10-08_035326_qqz1kd.png",
    overlay: true,
    overlayOpacity: 65,
    overlayColor: "#0a1929",
  },
  card: {
    backgroundColor: "#f97316",
    textColor: "#ffffff",
  },
  cta: {
    whatsapp: {
      phoneNumber: siteConfig.contact.phone,
      message: `Hola, estoy interesado en ${siteConfig.name}`,
    },
    schedule: {
      href: "#contact",
    },
  },
  useTranslations: true,
};
