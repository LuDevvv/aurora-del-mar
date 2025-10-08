import React from "react";
import { DeveloperInfo, type DeveloperConfig } from "./DeveloperInfo";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { cn } from "@lib/utils";

interface DeveloperSectionProps {
  config: DeveloperConfig;
  sectionTitle?: string;
  sectionSubtitle?: string;
  className?: string;
}

export function DeveloperSection({
  config,
  sectionTitle,
  sectionSubtitle,
  className,
}: DeveloperSectionProps) {
  return (
    <section
      id="developer"
      className={cn("py-16 md:py-20 relative overflow-hidden", className)}
    >
      {/* Optional Section Header */}
      {(sectionTitle || sectionSubtitle) && (
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="slideUp" duration={700}>
            <div className="text-center mb-8 md:mb-12">
              {sectionSubtitle && (
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm md:text-base uppercase tracking-wider">
                    {sectionSubtitle}
                  </span>
                </div>
              )}

              {sectionTitle && (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {sectionTitle}
                </h2>
              )}
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Developer Info Component */}
      <DeveloperInfo config={config} />
    </section>
  );
}
