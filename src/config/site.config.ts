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

// Stats Configuration
export const statsConfig = {
  stats: [
    {
      value: siteConfig.stats.units,
      label: "Unidades Residenciales",
      color: siteConfig.colors.primary,
    },
    {
      value: siteConfig.stats.amenities,
      label: "Amenidades Premium",
      color: siteConfig.colors.primary,
    },
    {
      value: siteConfig.stats.greenAreas,
      label: "m² de Áreas Verdes",
      color: siteConfig.colors.primary,
    },
    {
      value: siteConfig.stats.security,
      label: "Seguridad",
      color: siteConfig.colors.primary,
    },
  ],
  layout: "2-columns" as const,
  backgroundColor: "#f0f9f7",
  textColor: "#1f2937",
  accentColor: siteConfig.colors.primary,
  animated: true,
};

// Developer Configuration
export const developerConfigs = [
  {
    badge: "Desarrollado por",
    logo: {
      src: siteConfig.developer.logo,
      alt: siteConfig.developer.name,
      width: 220,
      height: 80,
    },
    title: siteConfig.developer.name,
    description: siteConfig.developer.description,
    highlightText: "líder en desarrollo",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: siteConfig.colors.primary,
  },
];
