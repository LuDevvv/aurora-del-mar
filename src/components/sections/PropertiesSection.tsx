"use client";

import React, { useState } from "react";
import { Bed, Bath, Maximize } from "lucide-react";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { FilterTabs } from "@components/ui/FilterTabs";
import LeadModal, { useLeadModal } from "@components/ui/LeadModal";
import { useTranslations } from "next-intl";
import { propertiesConfig } from "@config/site.config";

export default function PropertiesSection() {
  const t = useTranslations("home.properties");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "1bed" | "2bed" | "duplex"
  >("all");
  const { isOpen, openModal, closeModal } = useLeadModal();

  const filterOptions = [
    { value: "all" as const, label: t("filters.all") },
    { value: "2bed" as const, label: t("filters.2bed") },
    { value: "duplex" as const, label: t("filters.duplex") },
  ];

  const filteredProperties =
    activeFilter === "all"
      ? propertiesConfig.properties
      : propertiesConfig.properties.filter((p) => p.category === activeFilter);

  return (
    <section id="properties" className="relative">
      <LeadModal isOpen={isOpen} onClose={closeModal} />

      <div className="bg-gradient-to-b from-primary-dark to-primary py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="slideUp" duration={700}>
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-block mb-3">
                <span className="text-white/90 font-bold text-sm uppercase tracking-wider">
                  {t("badge")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t("title")}
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-4xl mx-auto leading-relaxed">
                {t("description")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" duration={700} delay={200}>
            <FilterTabs
              options={filterOptions}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              variant="primary"
              size="md"
              fullWidth={false}
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="relative -mt-12 md:-mt-16 pb-16 md:pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="slideUp" duration={700} delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  delay={index * 100}
                  openModal={openModal}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property, delay, openModal }: any) {
  const t = useTranslations("home.properties");

  return (
    <AnimatedSection animation="slideUp" duration={700} delay={delay}>
      <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-[300px] md:h-[350px]">
          <img
            src={property.image}
            alt={property.model}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {property.limited && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
              {t("limitedBadge")}
            </div>
          )}
        </div>

        <div className="bg-gradient-to-b from-primary-dark to-primary p-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            {property.model}
          </h3>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bed size={18} className="text-white" />
                <span className="text-white text-sm">
                  {property.bedrooms} {t("bedrooms")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={18} className="text-white" />
                <span className="text-white text-sm">
                  {property.bathrooms} {t("bathrooms")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={18} className="text-white" />
                <span className="text-white text-sm">{property.area}m²</span>
              </div>
            </div>

            <div className="space-y-2">
              {property.features
                .slice(0, 3)
                .map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-white flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-sm">
                      {t(`features.${feature}`)}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={openModal}
            className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            {t("reserveNow")}
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
