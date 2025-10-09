"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, Award, Sparkles, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { useTranslations } from "next-intl";

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

// Component for animated counter
function AnimatedNumber({
  value,
  accentColor,
}: {
  value: number;
  accentColor: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span
      ref={ref}
      className="font-bold text-xl"
      style={{ color: accentColor }}
    >
      {count.toLocaleString()}
    </span>
  );
}

// Function to parse text and highlight numbers
function HighlightedText({
  text,
  accentColor,
}: {
  text: string;
  accentColor: string;
}) {
  const parts = text.split(/(\d{1,3}(?:,\d{3})*(?:\+)?)/g);

  return (
    <>
      {parts.map((part, index) => {
        // Check if it's a number
        const numberMatch = part.match(/^(\d{1,3}(?:,\d{3})*)(\+)?$/);
        if (numberMatch) {
          const numericValue = parseInt(numberMatch[1].replace(/,/g, ""));
          const suffix = numberMatch[2] || "";

          return (
            <span key={index}>
              <AnimatedNumber value={numericValue} accentColor={accentColor} />
              {suffix && (
                <span
                  className="font-bold text-xl"
                  style={{ color: accentColor }}
                >
                  {suffix}
                </span>
              )}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function DeveloperInfo({ config, className }: DeveloperInfoProps) {
  const t = useTranslations("home.developer");
  const {
    logo,
    backgroundColor = "#FFFFFF",
    textColor = "#1f2937",
    accentColor = "#F97316",
    badgeColor = "#1E3A5F",
  } = config;
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div
        className="rounded-3xl overflow-hidden shadow-xl"
        style={{ backgroundColor }}
      >
        <AnimatedSection animation="slideUp" duration={700}>
          <div
            className="py-6 md:py-8 px-6 text-center"
            style={{ backgroundColor: badgeColor }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              {t("badge")}
            </h2>
          </div>
        </AnimatedSection>

        <div className="p-6 md:p-10 lg:p-14">
          <AnimatedSection animation="scaleIn" duration={700} delay={200}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 280}
              height={logo.height || 100}
            />
          </AnimatedSection>

          <AnimatedSection animation="slideUp" duration={700} delay={300}>
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: textColor }}
            >
              {t("tagline")}
              <span className="font-semibold" style={{ color: accentColor }}>
                {t("highlightText")}
              </span>
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" duration={700} delay={400}>
            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: textColor, opacity: 0.85 }}
            >
              {t("projectInfo")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {["delivered", "development"].map((key, index) => {
              const Icon = iconMap[index === 0 ? "building" : "trending"];
              return (
                <AnimatedSection
                  key={key}
                  animation="slideUp"
                  duration={700}
                  delay={500 + index * 100}
                >
                  <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-gray-50/80 hover:bg-gray-50">
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
                      <HighlightedText
                        text={t(`features.${key}`)}
                        accentColor={accentColor}
                      />
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
