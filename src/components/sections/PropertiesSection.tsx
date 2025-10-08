"use client";

import React, { useState } from "react";
import { Bed, Bath, Maximize, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { FilterTabs } from "@components/ui/FilterTabs";
import LeadModal, { useLeadModal } from "@components/ui/LeadModal";

interface PropertyData {
  id: string;
  model: string;
  area: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  category: "all" | "1bed" | "2bed" | "duplex";
  image: string;
  limited?: boolean;
}

const properties: PropertyData[] = [
  {
    id: "modelo-a",
    model: "Modelo A",
    area: 125,
    sqft: 1345,
    bedrooms: 2,
    bathrooms: 3,
    features: ["2 Walking Closets", "Sala privada", "Desayunador", "Balcón"],
    category: "2bed",
    image:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906308/Planta_Tipo_A_4_11zon_ciwaby.jpg",
  },
  {
    id: "modelo-b",
    model: "Modelo B",
    area: 125,
    sqft: 1345,
    bedrooms: 2,
    bathrooms: 3,
    features: ["Sala privada", "Desayunador", "Balcón", "Área de Lavado"],
    category: "2bed",
    image:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906311/Planta_Tipo_B_5_11zon_xjpnie.jpg",
  },
  {
    id: "modelo-c",
    model: "Modelo C",
    area: 140,
    sqft: 1507,
    bedrooms: 2,
    bathrooms: 3,
    features: ["2 Walking Closets", "Sala privada", "Desayunador", "Balcón"],
    category: "2bed",
    image:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906309/Planta_Tipo_C_1_11zon_pla01q.jpg",
    limited: true,
  },
  {
    id: "modelo-d",
    model: "Modelo D",
    area: 92,
    sqft: 992,
    bedrooms: 1,
    bathrooms: 2,
    features: ["2 Niveles", "Walking Closet", "Duplex", "Balcón"],
    category: "duplex",
    image:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759964470/f56f9d6d-bb59-4325-b26d-d12d6b6c97e3.png",
  },
  {
    id: "modelo-e",
    model: "Modelo E",
    area: 82,
    sqft: 882,
    bedrooms: 1,
    bathrooms: 1.5,
    features: ["Walking Closet", "Área de Lavado", "Balcón", "Comedor"],
    category: "1bed",
    image:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906310/Planta_Tipo_E_2_11zon_sn5q1i.jpg",
  },
  {
    id: "modelo-f",
    model: "Modelo F",
    area: 95,
    sqft: 1022,
    bedrooms: 1,
    bathrooms: 2,
    features: [
      "Sala privada con baño",
      "Desayunador",
      "Balcón",
      "Área de Lavado",
    ],
    category: "1bed",
    image:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1759906848/planta_Tipo_F_3_11zon_vutn2e.jpg",
  },
];

const filterOptions = [
  { value: "all" as const, label: "Todos" },
  //   { value: "1bed" as const, label: "1 Habitación" },
  { value: "2bed" as const, label: "2 Habitaciones" },
  { value: "duplex" as const, label: "Duplex" },
];

export default function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "1bed" | "2bed" | "duplex"
  >("all");

  const { isOpen, openModal, closeModal } = useLeadModal();

  const filteredProperties =
    activeFilter === "all"
      ? properties
      : properties.filter((p) => p.category === activeFilter);

  return (
    <section id="properties" className="relative">
      <LeadModal isOpen={isOpen} onClose={closeModal} />

      {/* Header with Blue Background */}
      <div className="bg-gradient-to-b from-primary-dark to-primary py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="slideUp" duration={700}>
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-block mb-3">
                <span className="text-white/90 font-bold text-sm uppercase tracking-wider">
                  Tipos de Apartamentos
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Elige Tu Espacio Ideal
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-4xl mx-auto leading-relaxed">
                Descubre nuestra variedad de modelos diseñados para adaptarse a
                tu estilo de vida
              </p>
            </div>
          </AnimatedSection>

          {/* Filter Tabs */}
          <AnimatedSection animation="slideUp" duration={700} delay={200}>
            <div className="mb-0">
              <FilterTabs
                options={filterOptions}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                variant="primary"
                size="md"
                fullWidth={false}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Properties Grid - Overlapping */}
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

function PropertyCard({
  property,
  delay,
  openModal,
}: {
  property: PropertyData;
  delay: number;
  openModal: () => void;
}) {
  return (
    <AnimatedSection animation="slideUp" duration={700} delay={delay}>
      <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Background Image */}
        <div className="relative h-[300px] md:h-[350px]">
          <img
            src={property.image}
            alt={property.model}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Limited Badge */}
          {property.limited && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
              Pocas Unidades
            </div>
          )}
        </div>

        {/* Info Section with Dark Overlay */}
        <div className="bg-gradient-to-b from-primary-dark to-primary p-6">
          {/* Model Name */}
          <h3 className="text-3xl font-bold text-white mb-4">
            {property.model}
          </h3>

          {/* Two Column Grid: Stats + Features */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {/* Left Column - Stats */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bed size={18} className="text-white" />
                <span className="text-white text-sm">
                  {property.bedrooms} Habitaciones
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={18} className="text-white" />
                <span className="text-white text-sm">
                  {property.bathrooms} Baños
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={18} className="text-white" />
                <span className="text-white text-sm">{property.area}m²</span>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-2">
              {property.features.slice(0, 3).map((feature, idx) => (
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
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Reserva Ahora
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
