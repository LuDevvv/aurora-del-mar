import React from "react";
import LandingPageLayout from "@components/landing/LandingPageLayout";
import { LocationMap } from "@components/sections/LocationMap";
import {
  amenitiesSliderConfig,
  contactConfig,
  developerConfig,
  galleryConfig,
  heroConfig,
  locationConfig,
} from "@config/site.config";
import { DeveloperSection } from "@components/sections/DeveloperSection";
import { ContactSection } from "@components/sections/ContactSection";
import { HeroSection } from "@components/sections/HeroSection";
import { AmenitiesSlider } from "@components/sections/AmenitiesSlider";
import { GallerySection } from "@components/sections/GallerySection";
import PropertiesSection from "@components/sections/PropertiesSection";

export default function Home() {
  return (
    <LandingPageLayout>
      <HeroSection config={heroConfig} />
      <AmenitiesSlider config={amenitiesSliderConfig} />
      <GallerySection config={galleryConfig} />
      <PropertiesSection />
      <LocationMap
        config={locationConfig}
        mapHeight={{ mobile: "400px", desktop: "550px" }}
      />
      <DeveloperSection
        config={developerConfig}
        sectionTitle="Nuestro Desarrollador"
        sectionSubtitle="Experiencia y Compromiso"
      />
      <ContactSection config={contactConfig} />
    </LandingPageLayout>
  );
}
