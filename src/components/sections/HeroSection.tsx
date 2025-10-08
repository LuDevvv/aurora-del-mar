"use client";

import React from "react";
import { VideoBackground } from "@components/ui/VideoBackground";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { MessageCircle, Calendar } from "lucide-react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

export interface HeroSectionConfig {
  video: {
    src: string;
    poster: string;
    overlay?: boolean;
    overlayOpacity?: number;
    overlayColor?: string;
  };
  headline?: string;
  tagline?: string;
  card?: {
    title?: string;
    description?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  cta?: {
    whatsapp?: {
      phoneNumber: string;
      message?: string;
    };
    schedule?: {
      onClick?: () => void;
      href?: string;
    };
  };
  useTranslations?: boolean;
}

interface HeroSectionProps {
  config: HeroSectionConfig;
  className?: string;
}

export function HeroSection({ config, className }: HeroSectionProps) {
  const t = useTranslations("home.hero");

  // Use translations if enabled, otherwise use config values
  const headline = config.headline || t("headline");
  const tagline = config.tagline || t("tagline");
  const cardTitle = config.card?.title || t("card.title");
  const cardDescription = config.card?.description || t("card.description");
  const cardBgColor = config.card?.backgroundColor || "#f97316";
  const cardTextColor = config.card?.textColor || "#ffffff";
  const ctaAboutText = t("cta.aboutUs");
  const ctaProjectsText = t("cta.viewProjects");

  const handleWhatsAppClick = () => {
    if (!config.cta?.whatsapp?.phoneNumber) return;

    const cleanNumber = config.cta.whatsapp.phoneNumber.replace(/\D/g, "");
    if (!cleanNumber) return;

    const message = encodeURIComponent(
      config.cta.whatsapp.message ||
        "Hola, estoy interesado en conocer más información."
    );
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const handleScheduleClick = () => {
    if (config.cta?.schedule?.onClick) {
      config.cta.schedule.onClick();
    } else if (config.cta?.schedule?.href) {
      const element = document.querySelector(config.cta.schedule.href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className={cn("relative h-[65vh] md:h-[70vh] flex items-end", className)}
    >
      {/* Video Background with Overlay */}
      <VideoBackground
        config={{
          src: config.video.src,
          poster: config.video.poster,
          overlay: config.video.overlay ?? true,
          overlayOpacity: config.video.overlayOpacity ?? 65,
          overlayColor: config.video.overlayColor ?? "#0a1929",
          autoPlay: true,
          loop: true,
          muted: true,
        }}
        className="absolute inset-0"
      />

      {/* Content Container - Bottom Positioned */}
      <div className="relative z-10 w-full pb-4 md:pb-6">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Orange Card - Bottom Overlay */}
          <AnimatedSection
            animation="slideUp"
            duration={1000}
            delay={400}
            className="w-full max-w-4xl mx-auto"
          >
            <div
              className={cn(
                "rounded-3xl md:rounded-[2rem] p-8 md:p-10 lg:p-12",
                "shadow-2xl backdrop-blur-sm",
                "border border-white/10"
              )}
              style={{
                backgroundColor: cardBgColor,
              }}
            >
              {/* Card Title */}
              <h2
                className="text-1xl md:text-2xl font-bold text-center mb-4 md:mb-6"
                style={{
                  color: cardTextColor,
                }}
              >
                Con tres décadas de experiencia en el sector, BDREX Group se ha
                consolidado como un referente en la construcción y desarrollo
                inmobiliario en República Dominicana.
              </h2>

              {/* CTA Buttons */}
              <div className="space-y-3 md:space-y-4">
                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className={cn(
                    "w-full group relative overflow-hidden",
                    "px-6 py-3 md:px-8 md:py-4",
                    "bg-white/95 hover:bg-white",
                    "rounded-xl md:rounded-2xl",
                    "transition-all duration-300",
                    "shadow-lg hover:shadow-xl",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    "border-2 border-white/20"
                  )}
                >
                  <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    <MessageCircle
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                      style={{
                        color: cardBgColor,
                      }}
                      strokeWidth={2.5}
                    />
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{
                        color: cardBgColor,
                      }}
                    >
                      Contactar WhatsApp
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>

                {/* Schedule Button */}
                <button
                  onClick={handleScheduleClick}
                  className={cn(
                    "w-full group relative overflow-hidden",
                    "px-6 py-3 md:px-8 md:py-4",
                    "bg-transparent hover:bg-white/10",
                    "rounded-xl md:rounded-2xl",
                    "transition-all duration-300",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    "border-2 border-white/40 hover:border-white/60"
                  )}
                >
                  <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    <Calendar
                      className="w-5 h-5 text-white transition-transform group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                    <span className="text-base md:text-lg font-bold text-white">
                      Contactar Correo
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
