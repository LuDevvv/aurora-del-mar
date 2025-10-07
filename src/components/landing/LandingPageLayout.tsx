"use client";

import React from "react";
import { WhatsAppButton } from "@components/ui/WhatsAppButton";
import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { useScrollTo } from "@hooks/useScrollTo";
import { siteConfig } from "@config/site.config";
import type { HeaderConfig } from "@components/layout/Header";
import type { WhatsAppButtonConfig } from "@components/ui/WhatsAppButton";
import type { FooterConfig } from "@components/layout/Footer";

export default function LandingPageLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const scrollToSection = useScrollTo();

  // Header Configuration - Simplified
  const headerConfig: HeaderConfig = {
    logo: {
      src: "/logo.png",
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
        scrollToSection("contact");
      },
    },
    maxWidth: "1400px",
  };

  // WhatsApp Floating Button Configuration
  const whatsappConfig: WhatsAppButtonConfig = {
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
  const footerConfig: FooterConfig = {
    logo: {
      src: "/logo-white.png",
      alt: siteConfig.name,
      width: 200,
      height: 60,
    },
    description: siteConfig.description,
    sections: [
      {
        title: "Enlaces Rápidos",
        links: [
          { label: "Descripción", href: "#overview" },
          { label: "Amenidades", href: "#amenities" },
          { label: "Unidades", href: "#units" },
          { label: "Galería", href: "#gallery" },
        ],
      },
      {
        title: "Información",
        links: [
          { label: "Sobre Nosotros", href: "#about" },
          { label: "Preguntas Frecuentes", href: "#faq" },
          { label: "Términos y Condiciones", href: "/terms" },
          { label: "Política de Privacidad", href: "/privacy" },
        ],
      },
    ],
    socialLinks: [
      { platform: "facebook", url: siteConfig.social.facebook },
      { platform: "instagram", url: siteConfig.social.instagram },
    ],
    contactInfo: {
      address: siteConfig.contact.address.full,
      phone: siteConfig.contact.phoneFormatted,
      email: siteConfig.contact.email,
    },
    eventBanner: siteConfig.event,
    copyrightText: `© ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`,
    showLegalLinks: true,
    backgroundColor: "#1f2937",
    overlay: "rgba(31, 41, 55, 0.95)",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header config={headerConfig} />
      {/* Add padding-top to account for fixed header */}
      <main className="relative pt-20 md:pt-24">{children}</main>
      <Footer config={footerConfig} />
      <WhatsAppButton config={whatsappConfig} />
    </div>
  );
}
