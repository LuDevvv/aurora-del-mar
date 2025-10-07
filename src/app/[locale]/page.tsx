import React from "react";
import LandingPageLayout from "@components/landing/LandingPageLayout";
import { LocationMap } from "@components/sections/LocationMap";
import { StatsSection } from "@components/sections/StatsSection";
import { DeveloperSection } from "@components/sections/DeveloperSection";
import {
  developerConfigs,
  locationConfig,
  siteConfig,
  statsConfig,
} from "@config/site.config";

export default function Home() {
  return (
    <LandingPageLayout>
      <LocationMap
        title="Ubicación Estratégica"
        badge="Encuéntranos"
        config={locationConfig}
        mapHeight={{
          mobile: "400px",
          desktop: "550px",
        }}
      />

      <StatsSection
        title={`${siteConfig.name} en Números`}
        subtitle="Excelencia en cada detalle"
        config={statsConfig}
        className="bg-white"
      />

      <DeveloperSection
        configs={developerConfigs}
        layout="1-column"
        sectionTitle="Nuestro Desarrollador"
        sectionSubtitle="Experiencia y Compromiso"
        className="bg-gray-50"
      />
    </LandingPageLayout>
  );
}
