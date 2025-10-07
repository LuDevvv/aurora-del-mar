"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Globe } from "lucide-react";
import { cn } from "@lib/utils";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@i18n/navigation";

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
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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
    const message = encodeURIComponent(
      "Hola, estoy interesado en conocer más sobre Aurora del Mar"
    );
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const handleLanguageToggle = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    router.replace(pathname, { locale: newLocale });
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ctaButton?.onClick) {
      ctaButton.onClick(e);
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
      <div className="py-4">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth }}>
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href={logo.href || "/"}
              className="flex items-center flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 280}
                height={logo.height || 80}
                className="object-contain h-12 md:h-16 w-auto"
                priority
              />
            </Link>

            {/* Right side buttons */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Language Toggle */}
              <button
                onClick={handleLanguageToggle}
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Cambiar idioma"
              >
                <Globe size={20} className="text-gray-700" />
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#25D366] hover:bg-[#22c55e] transition-colors shadow-md hover:shadow-lg"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle size={20} className="text-white" />
              </button>

              {/* CTA Button */}
              {ctaButton && (
                <button
                  onClick={handleCtaClick}
                  className="hidden sm:flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-all shadow-primary-md hover:shadow-primary-lg"
                >
                  <span>{ctaButton.label}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="hidden md:block"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}

              {/* Mobile CTA Button - Simplified */}
              {ctaButton && (
                <button
                  onClick={handleCtaClick}
                  className="sm:hidden flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-primary-md"
                >
                  {ctaButton.label}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
