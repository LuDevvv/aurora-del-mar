import React from "react";
import LandingPageLayout from "@components/landing/LandingPageLayout";
import { LocationMap } from "@components/sections/LocationMap";
import { StatsSection } from "@components/sections/StatsSection";
import {
  developerConfig,
  locationConfig,
  siteConfig,
  statsConfig,
} from "@config/site.config";
import { DeveloperSection } from "@components/sections/DeveloperSection";

export default function Home() {
  return (
    <LandingPageLayout>
      {/* <LocationMap
        title="Ubicación Estratégica"
        badge="Encuéntranos"
        config={locationConfig}
        mapHeight={{
          mobile: "400px",
          desktop: "550px",
        }}
      /> */}

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
    </LandingPageLayout>
  );
}
