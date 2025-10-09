import React from "react";
import { DeveloperInfo, type DeveloperConfig } from "./DeveloperInfo";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

interface DeveloperSectionProps {
  config: DeveloperConfig;
  sectionTitle?: string;
  sectionSubtitle?: string;
  className?: string;
}

export function DeveloperSection({ config, className }: DeveloperSectionProps) {
  const t = useTranslations("home.developer");

  return (
    <section
      id="developer"
      className={cn("py-16 md:py-20 relative overflow-hidden", className)}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection animation="slideUp" duration={700}>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm md:text-base uppercase tracking-wider">
                {t("sectionSubtitle")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("sectionTitle")}
            </h2>
          </div>
        </AnimatedSection>
      </div>
      <DeveloperInfo config={config} />
    </section>
  );
}
