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
      className={cn("relative min-h-screen flex items-center", className)}
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

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center justify-center min-h-screen py-20 md:py-24">
            {/* Top Section - Headline */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <AnimatedSection animation="slideUp" duration={1000} delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 max-w-5xl mx-auto drop-shadow-2xl">
                  {headline}
                </h1>
              </AnimatedSection>

              {tagline && (
                <AnimatedSection
                  animation="slideUp"
                  duration={1000}
                  delay={400}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg">
                    {tagline}
                  </p>
                </AnimatedSection>
              )}
            </div>

            {/* Bottom Section - Info Card with CTA */}
            <AnimatedSection
              animation="slideUp"
              duration={1000}
              delay={600}
              className="w-full max-w-4xl"
            >
              <div
                className={cn(
                  "rounded-3xl md:rounded-[2rem] p-8 md:p-12 lg:p-14",
                  "shadow-2xl backdrop-blur-sm",
                  "border border-white/10"
                )}
                style={{
                  backgroundColor: cardBgColor,
                }}
              >
                {/* Card Title */}
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8"
                  style={{
                    color: cardTextColor,
                  }}
                >
                  {cardTitle}
                </h2>

                {/* Card Description */}
                <p
                  className="text-base md:text-lg lg:text-xl text-center mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto"
                  style={{
                    color: cardTextColor,
                    opacity: 0.95,
                  }}
                >
                  {cardDescription}
                </p>

                {/* CTA Buttons */}
                <div className="space-y-4 md:space-y-5">
                  {/* WhatsApp Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className={cn(
                      "w-full group relative overflow-hidden",
                      "px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6",
                      "bg-white/95 hover:bg-white",
                      "rounded-2xl md:rounded-3xl",
                      "transition-all duration-300",
                      "shadow-lg hover:shadow-xl",
                      "hover:scale-[1.02] active:scale-[0.98]",
                      "border-2 border-white/20"
                    )}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <MessageCircle
                        className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110"
                        style={{
                          color: cardBgColor,
                        }}
                        strokeWidth={2.5}
                      />
                      <span
                        className="text-base md:text-lg lg:text-xl font-bold"
                        style={{
                          color: cardBgColor,
                        }}
                      >
                        {ctaAboutText}
                      </span>
                    </div>

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>

                  {/* Schedule Button */}
                  <button
                    onClick={handleScheduleClick}
                    className={cn(
                      "w-full group relative overflow-hidden",
                      "px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6",
                      "bg-transparent hover:bg-white/10",
                      "rounded-2xl md:rounded-3xl",
                      "transition-all duration-300",
                      "hover:scale-[1.02] active:scale-[0.98]",
                      "border-2 border-white/40 hover:border-white/60"
                    )}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Calendar
                        className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform group-hover:scale-110"
                        strokeWidth={2.5}
                      />
                      <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                        {ctaProjectsText}
                      </span>
                    </div>

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
