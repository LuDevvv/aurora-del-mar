"use client";

import React from "react";
import Image from "next/image";
import { Building2, Award, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@lib/utils";
import { AnimatedSection } from "@components/ui/AnimatedSection";

export interface DeveloperConfig {
  badge?: string;
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: string;
  tagline?: string;
  description?: string;
  highlightText?: string;
  projectInfo?: string;
  features?: Array<{
    icon: "building" | "award" | "sparkles" | "trending";
    text: string;
  }>;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  badgeColor?: string;
}

interface DeveloperInfoProps {
  config: DeveloperConfig;
  className?: string;
}

const iconMap = {
  building: Building2,
  award: Award,
  sparkles: Sparkles,
  trending: TrendingUp,
};

export function DeveloperInfo({ config, className }: DeveloperInfoProps) {
  const {
    badge = "DESARROLLADOR Y CONSTRUCTOR",
    logo,
    title,
    tagline,
    description,
    highlightText,
    projectInfo,
    features,
    backgroundColor = "#FFFFFF",
    textColor = "#1f2937",
    accentColor = "#F97316",
    badgeColor = "#1E3A5F",
  } = config;

  // Split description to highlight specific text
  const getFormattedDescription = () => {
    const textToFormat = tagline || description || "";
    if (!highlightText || !textToFormat) return textToFormat;

    const parts = textToFormat.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="font-semibold" style={{ color: accentColor }}>
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div
        className="rounded-3xl overflow-hidden shadow-xl"
        style={{ backgroundColor }}
      >
        {/* Badge Header */}
        <AnimatedSection animation="slideUp" duration={700}>
          <div
            className="py-6 md:py-8 px-6 text-center"
            style={{ backgroundColor: badgeColor }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              {badge}
            </h2>
          </div>
        </AnimatedSection>

        {/* Content Container */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Logo Section */}
          <AnimatedSection
            animation="scaleIn"
            duration={700}
            delay={200}
            className="flex justify-center mb-8 md:mb-10"
          >
            <div className="relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 280}
                height={logo.height || 100}
                className="object-contain max-w-[220px] md:max-w-[280px]"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Tagline with Highlight */}
          {(tagline || description) && (
            <AnimatedSection
              animation="slideUp"
              duration={700}
              delay={300}
              className="text-center mb-6 md:mb-8"
            >
              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
                style={{ color: textColor }}
              >
                {getFormattedDescription()}
              </p>
            </AnimatedSection>
          )}

          {/* Main Description */}
          {projectInfo && (
            <AnimatedSection
              animation="fadeIn"
              duration={700}
              delay={400}
              className="text-center mb-10 md:mb-12"
            >
              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
                style={{ color: textColor, opacity: 0.85 }}
              >
                {projectInfo}
              </p>
            </AnimatedSection>
          )}

          {/* Features Grid */}
          {/* {features && features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <AnimatedSection
                    key={index}
                    animation="slideUp"
                    duration={700}
                    delay={500 + index * 100}
                  >
                    <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-gray-50/80 hover:bg-gray-50 transition-colors">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${accentColor}15` }}
                      >
                        <Icon
                          size={24}
                          style={{ color: accentColor }}
                          strokeWidth={2}
                        />
                      </div>
                      <p
                        className="text-sm md:text-base leading-relaxed pt-1"
                        style={{ color: textColor }}
                      >
                        {feature.text}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          )} */}

          {/* Decorative Elements */}
          <div
            className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-5 blur-2xl"
            style={{ backgroundColor: accentColor }}
          />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: badgeColor }}
          />
        </div>
      </div>
    </div>
  );
}
