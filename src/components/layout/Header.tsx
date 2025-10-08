"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronRight } from "lucide-react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@components/ui/LanguageSwitcher";
import LeadModal, { useLeadModal } from "@components/ui/LeadModal";

export interface HeaderConfig {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    href?: string;
  };
  whatsappNumber: string;
  ctaButton?: {
    label: string;
    href: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  };
  maxWidth?: string;
}

interface HeaderProps {
  config: HeaderConfig;
  className?: string;
}

export function Header({ config, className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("common");
  const { isOpen, openModal, closeModal } = useLeadModal();

  const { logo, whatsappNumber, ctaButton, maxWidth = "1400px" } = config;

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    const message = encodeURIComponent(t("whatsapp.defaultMessage"));
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ctaButton?.onClick) {
      ctaButton.onClick(e);
      openModal();
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "shadow-sm",
        className
      )}
    >
      <LeadModal isOpen={isOpen} onClose={closeModal} />

      <div className="py-3 md:py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth }}>
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Logo */}
            <Link
              href={logo.href || "/"}
              className="flex items-center flex-shrink-0 transition-opacity hover:opacity-80"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 280}
                height={logo.height || 80}
                className="object-contain h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                priority
              />
            </Link>

            {/* Right side buttons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {ctaButton && (
                <button
                  onClick={handleCtaClick}
                  className={cn(
                    "flex items-center gap-2 rounded-lg transition-all",
                    "bg-gradient-to-r from-primary to-primary-dark text-white",
                    "font-semibold shadow-primary-md hover:shadow-primary-lg",
                    "hover:opacity-90 active:scale-98",
                    "px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base"
                  )}
                >
                  <span className="whitespace-nowrap">
                    <span className="sm:hidden">Más info</span>
                    <span className="hidden sm:inline">
                      Solicitar más información
                    </span>
                  </span>
                  <ChevronRight size={18} className="flex-shrink-0" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
