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
    phone: "+18097779000",
    phoneFormatted: "+1 (809) 777-9000",
    email: "Franciaborrome@gmail.com",
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
    backgroundColor: "#2D8BCB",
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

export const amenitiesSliderConfig: AmenitiesSliderConfig = {
  amenities: [
    {
      id: "events",
      title: "", // Se obtiene de traducciones
      description: "",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895611/Patio_ADM_Final_11zon_nzjd6u.jpg",
      icon: "users",
    },
    {
      id: "golfParking",
      title: "",
      description: "",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759953844/golf-2571826_640_cldkcp.png",
      icon: "trophy",
    },
    {
      id: "solarium",
      title: "",
      description: "",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759952883/Artboard_7_w7qec7.png",
      icon: "sun",
    },
    {
      id: "jacuzzi",
      title: "",
      description: "",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759952863/Artboard_11_u0st6q.png",
      icon: "waves",
    },
    {
      id: "gym",
      title: "",
      description: "",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895612/Gym_ADM_Final_11zon_gitjlf.jpg",
      icon: "dumbbell",
    },
    {
      id: "padelCourt",
      title: "",
      description: "",
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759952809/Artboard_8_tbqsti.png",
      icon: "flag",
    },
  ],
  autoPlay: true,
  autoPlayInterval: 5000,
  overlayOpacity: 70,
  overlayColor: "#183C7C",
};

export const galleryConfig: GallerySectionConfig = {
  images: [
    // Exterior Images
    {
      id: "ext-1",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948474/Artboard_16_ok4xfi.png",
      alt: "Fachada principal del proyecto Aura del Mar",
      category: "exterior",
    },
    {
      id: "ext-2",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948472/Artboard_15_ff3tou.png",
      alt: "Vista panorámica del desarrollo residencial",
      category: "exterior",
    },
    {
      id: "ext-3",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948472/Artboard_11_c7gt4m.png",
      alt: "Áreas comunes exteriores con jardines",
      category: "exterior",
    },
    {
      id: "ext-4",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948468/Artboard_7_gg1k8d.png",
      alt: "Fachada principal del proyecto Aura del Mar",
      category: "exterior",
    },
    {
      id: "ext-5",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948465/Artboard_17_conjfa.png",
      alt: "Vista panorámica del desarrollo residencial",
      category: "exterior",
    },
    {
      id: "ext-6",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948464/Artboard_18_t61yxt.png",
      alt: "Áreas comunes exteriores con jardines",
      category: "exterior",
    },

    // Interior Images
    {
      id: "int-1",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948474/Artboard_14_ru4g3t.png",
      alt: "Sala de estar con diseño contemporáneo",
      category: "interior",
    },
    {
      id: "int-2",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948471/Artboard_2_yqidqs.png",
      alt: "Habitación principal con vista al mar",
      category: "interior",
    },
    {
      id: "int-3",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948471/Artboard_10_lsetgs.png",
      alt: "Cocina moderna totalmente equipada",
      category: "interior",
    },
    {
      id: "int-4",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948471/Artboard_3_b6wggg.png",
      alt: "Baño principal con acabados de lujo",
      category: "interior",
    },
    {
      id: "int-5",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948471/Artboard_12_qesscu.png",
      alt: "Baño principal con acabados de lujo",
      category: "interior",
    },
    {
      id: "int-6",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948469/Artboard_9_ef4u1v.png",
      alt: "Baño principal con acabados de lujo",
      category: "interior",
    },
    {
      id: "int-7",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948468/Artboard_6_dqfq4i.png",
      alt: "Baño principal con acabados de lujo",
      category: "interior",
    },
    {
      id: "int-8",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759948466/Artboard_5_mdj3xh.png",
      alt: "Baño principal con acabados de lujo",
      category: "interior",
    },

    // Amenities Images
    {
      id: "amen-1",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895611/Patio_ADM_Final_11zon_nzjd6u.jpg",
      alt: "Piscina infinity con vista espectacular",
      category: "amenities",
    },
    {
      id: "amen-2",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895613/Padel_V1_ADM_Final_11zon_l6ribn.jpg",
      alt: "Gimnasio equipado con tecnología de última generación",
      category: "amenities",
    },
    {
      id: "amen-3",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759952883/Artboard_7_w7qec7.png",
      alt: "Área social y salón de eventos",
      category: "amenities",
    },
    {
      id: "amen-4",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759952863/Artboard_11_u0st6q.png",
      alt: "Jardines y áreas verdes del proyecto",
      category: "amenities",
    },
    {
      id: "amen-5",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759895612/Gym_ADM_Final_11zon_gitjlf.jpg",
      alt: "Jardines y áreas verdes del proyecto",
      category: "amenities",
    },
    {
      id: "amen-6",
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759952809/Artboard_8_tbqsti.png",
      alt: "Jardines y áreas verdes del proyecto",
      category: "amenities",
    },
  ],
};

export const propertiesConfig = {
  properties: [
    {
      id: "modelo-a",
      model: "Modelo A",
      area: 125,
      sqft: 1345,
      bedrooms: 2,
      bathrooms: 3,
      features: ["walkingClosets", "privateRoom", "breakfast", "balcony"],
      category: "2bed" as const,
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906308/Planta_Tipo_A_4_11zon_ciwaby.jpg",
    },
    {
      id: "modelo-b",
      model: "Modelo B",
      area: 125,
      sqft: 1345,
      bedrooms: 2,
      bathrooms: 3,
      features: ["privateRoom", "breakfast", "balcony", "laundryArea"],
      category: "2bed" as const,
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906311/Planta_Tipo_B_5_11zon_xjpnie.jpg",
    },
    {
      id: "modelo-c",
      model: "Modelo C",
      area: 140,
      sqft: 1507,
      bedrooms: 2,
      bathrooms: 3,
      features: ["walkingClosets", "privateRoom", "breakfast", "balcony"],
      category: "2bed" as const,
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906309/Planta_Tipo_C_1_11zon_pla01q.jpg",
      limited: true,
    },
    {
      id: "modelo-d",
      model: "Modelo D",
      area: 92,
      sqft: 992,
      bedrooms: 1,
      bathrooms: 2,
      features: ["twoLevels", "walkingCloset", "duplex", "balcony"],
      category: "duplex" as const,
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759964470/f56f9d6d-bb59-4325-b26d-d12d6b6c97e3.png",
    },
    {
      id: "modelo-e",
      model: "Modelo E",
      area: 82,
      sqft: 882,
      bedrooms: 1,
      bathrooms: 1.5,
      features: ["walkingCloset", "laundryArea", "balcony", "diningRoom"],
      category: "1bed" as const,
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906310/Planta_Tipo_E_2_11zon_sn5q1i.jpg",
    },
    {
      id: "modelo-f",
      model: "Modelo F",
      area: 95,
      sqft: 1022,
      bedrooms: 1,
      bathrooms: 2,
      features: ["privateRoomWithBath", "breakfast", "balcony", "laundryArea"],
      category: "1bed" as const,
      image:
        "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906848/planta_Tipo_F_3_11zon_vutn2e.jpg",
    },
  ],
};

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

export const developerConfig = {
  logo: {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759873868/BDREX-Logo-FC-300x142_sdkpbo.png",
    alt: "BDREX",
    width: 280,
    height: 100,
  },
  backgroundColor: "#FFFFFF",
  textColor: "#1f2937",
  accentColor: "#F97316",
  badgeColor: "#1E3A5F",
};

// export const statsConfig = {
//   stats: [
//     {
//       value: "3,650",
//       prefix: "+",
//       label: "Apartamentos entregados",
//       color: "#F97316",
//       icon: "building" as const,
//     },
//     {
//       value: "30",
//       prefix: "+",
//       label: "Años de experiencia",
//       color: "#F97316",
//       icon: "calendar" as const,
//     },
//     {
//       value: "1,650",
//       prefix: "+",
//       label: "Colaboradores",
//       color: "#F97316",
//       icon: "users" as const,
//     },
//     {
//       value: "2,000",
//       prefix: "+",
//       label: "Apartamentos en proyecto",
//       color: "#F97316",
//       icon: "trending" as const,
//     },
//   ],
//   layout: "2-columns" as const,
//   backgroundColor: "#FEF3F2",
//   textColor: "#1E3A5F",
//   accentColor: "#F97316",
//   animated: true,
// };

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

export const footerConfig: FooterConfig = {
  logo: {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1759944409/blanco2_b5ogt7.png",
    alt: siteConfig.name,
    width: 240,
    height: 70,
  },
  // description se obtiene de traducciones
  socialLinks: [
    { platform: "instagram" as const, url: siteConfig.social.instagram },
  ],
  contactInfo: {
    address: siteConfig.contact.address.full,
    phone: siteConfig.contact.phoneFormatted,
    email: siteConfig.contact.email,
  },
  // copyrightText se construye dinámicamente
  backgroundImage:
    "https://res.cloudinary.com/dcuapqoii/image/upload/v1759876184/Artboard_18_xhihql.png",
  overlayColor: "#1E3A5F",
  overlayOpacity: 0.92,
};

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
