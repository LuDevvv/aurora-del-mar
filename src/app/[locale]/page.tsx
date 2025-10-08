import React from "react";
import LandingPageLayout from "@components/landing/LandingPageLayout";
import { LocationMap } from "@components/sections/LocationMap";
import { StatsSection } from "@components/sections/StatsSection";
import {
  amenitiesSliderConfig,
  contactConfig,
  developerConfig,
  galleryConfig,
  heroConfig,
  locationConfig,
  siteConfig,
  statsConfig,
} from "@config/site.config";
import { DeveloperSection } from "@components/sections/DeveloperSection";
import { ContactSection } from "@components/sections/ContactSection";
import { HeroSection } from "@components/sections/HeroSection";
import { AmenitiesSlider } from "@components/sections/AmenitiesSlider";
import { GallerySection } from "@components/sections/GallerySection";

export default function Home() {
  return (
    <LandingPageLayout>
      <HeroSection config={heroConfig} />
      <AmenitiesSlider
        config={amenitiesSliderConfig}
        title={"Amenidades de Clase Mundial"}
        subtitle={"Comodidades Premium"}
      />

      <GallerySection config={galleryConfig} />

      <LocationMap
        title="Ubicación privilegiada"
        badge="Encuéntranos"
        config={locationConfig}
        mapHeight={{
          mobile: "400px",
          desktop: "550px",
        }}
      />
      <DeveloperSection
        config={developerConfig}
        sectionTitle="Nuestro Desarrollador"
        sectionSubtitle="Experiencia y Compromiso"
      />
      <StatsSection
        title={`${siteConfig.name} en Números`}
        subtitle="Excelencia en cada detalle"
        config={statsConfig}
      />
      <ContactSection config={contactConfig} />
    </LandingPageLayout>
  );
}
