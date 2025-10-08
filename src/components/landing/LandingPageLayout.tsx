"use client";

import React from "react";
import { WhatsAppButton } from "@components/ui/WhatsAppButton";
import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { useScrollTo } from "@hooks/useScrollTo";
import {
  footerConfig,
  headerConfig,
  whatsappConfig,
} from "@config/site.config";

export default function LandingPageLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const scrollToSection = useScrollTo();

  return (
    <div className="min-h-screen bg-white">
      <Header config={headerConfig} />
      <main className="relative pt-14 md:pt-24">{children}</main>
      <Footer config={footerConfig} />
      <WhatsAppButton config={whatsappConfig} />
    </div>
  );
}
