"use client";

import React from "react";
import { VideoBackground } from "@components/ui/VideoBackground";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { MessageCircle, Phone } from "lucide-react";
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

  const cardBgColor = config.card?.backgroundColor || "#f97316";
  const cardTextColor = config.card?.textColor || "#ffffff";

  const handleWhatsAppClick = () => {
    if (!config.cta?.whatsapp?.phoneNumber) return;

    const cleanNumber = config.cta.whatsapp.phoneNumber.replace(/\D/g, "");
    if (!cleanNumber) return;

    const message = encodeURIComponent(
      config.cta.whatsapp.message || t("whatsappMessage")
    );
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const handleScheduleClick = () => {
    window.open(`https://calendly.com/auradelmar/30min`, "_blank");
  };

  return (
    <section
      id="hero"
      className={cn("relative flex flex-col mb-68", className)}
    >
      <div className="relative flex-1">
        <VideoBackground
          config={{
            src: config.video.src,
            poster: config.video.poster,
            overlay: false,
            autoPlay: true,
            loop: true,
            muted: true,
            height: "md",
          }}
          className="relative inset-0"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/50 to-transparent z-[5]" />
      </div>

      <div className="absolute z-20 bottom-[-160px] left-1/2 -translate-x-1/2 translate-y-1/3 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-center">
            <AnimatedSection
              animation="slideUp"
              duration={1000}
              delay={400}
              className="w-full max-w-2xl"
            >
              <div
                className={cn(
                  "rounded-3xl md:rounded-[2rem]",
                  "p-8 md:p-10 lg:p-12",
                  "shadow-2xl backdrop-blur-sm",
                  "border border-white/10",
                  "transform-gpu"
                )}
                style={{
                  backgroundColor: cardBgColor,
                }}
              >
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 leading-relaxed"
                  style={{
                    color: cardTextColor,
                  }}
                >
                  {t("title")}
                </h2>

                <div className="space-y-3 md:space-y-4">
                  <button
                    onClick={handleScheduleClick}
                    type="button"
                    aria-label={t("scheduleCallLabel")}
                    className={cn(
                      "w-full group relative overflow-hidden",
                      "px-6 py-3 md:px-8 md:py-4",
                      "bg-white/95 hover:bg-white",
                      "rounded-xl md:rounded-2xl",
                      "transition-all duration-300",
                      "shadow-lg hover:shadow-xl",
                      "hover:scale-[1.02] active:scale-[0.98]",
                      "border-2 border-white/20",
                      "focus:outline-none focus:ring-4 focus:ring-white/30"
                    )}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                      <Phone
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
                        {t("scheduleCall")}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    type="button"
                    aria-label={t("whatsappLabel")}
                    className={cn(
                      "w-full group relative overflow-hidden",
                      "px-6 py-3 md:px-8 md:py-4",
                      "bg-transparent hover:bg-white/10",
                      "rounded-xl md:rounded-2xl",
                      "transition-all duration-300",
                      "hover:scale-[1.02] active:scale-[0.98]",
                      "border-2 border-white/40 hover:border-white/60",
                      "focus:outline-none focus:ring-4 focus:ring-white/30"
                    )}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                      <MessageCircle
                        className="w-5 h-5 text-white transition-transform group-hover:scale-110"
                        strokeWidth={2.5}
                      />
                      <span className="text-base md:text-lg font-bold text-white">
                        {t("whatsappButton")}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
