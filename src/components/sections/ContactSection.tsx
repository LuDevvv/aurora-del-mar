"use client";

import React from "react";
import { ContactForm } from "@components/forms/ContactForm";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

export interface ContactSectionConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  showContactInfo?: boolean;
  contactInfo?: {
    phone?: string;
    phoneFormatted?: string;
    email?: string;
    address?: string;
  };
  backgroundColor?: string;
  formConfig?: {
    showPhone?: boolean;
    showDate?: boolean;
    showTime?: boolean;
    submitButtonText?: string;
    successMessage?: string;
    errorMessage?: string;
    placeholders?: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      date?: string;
    };
  };
}

interface ContactSectionProps {
  config?: ContactSectionConfig;
  className?: string;
}

export function ContactSection({ config, className }: ContactSectionProps) {
  const t = useTranslations("home.contact");

  const defaultConfig: ContactSectionConfig = {
    title: t("title"),
    subtitle: t("subtitle"),
    description: t("description"),
    showContactInfo: true,
    backgroundColor: "#ffffff",
    formConfig: {
      showPhone: true,
      showDate: true,
      showTime: true,
      submitButtonText: t("submit"),
      successMessage: t("success"),
      errorMessage: t("error"),
      placeholders: {
        name: t("name"),
        email: t("email"),
        phone: t("phone"),
        message: t("message"),
        date: t("selectDate"),
      },
    },
  };

  const finalConfig = { ...defaultConfig, ...config };

  return (
    <section
      id="contact"
      className={cn("py-16 md:py-24 relative overflow-hidden", className)}
      style={{ backgroundColor: finalConfig.backgroundColor }}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection animation="slideUp" duration={700}>
          <div className="text-center mb-12 md:mb-16">
            {finalConfig.subtitle && (
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm md:text-base uppercase tracking-wider">
                  {finalConfig.subtitle}
                </span>
              </div>
            )}
            {finalConfig.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {finalConfig.title}
              </h2>
            )}
            {finalConfig.description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {finalConfig.description}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Content - Single Column */}
        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="slideUp" duration={700} delay={200}>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />

              {/* Form Section */}
              <div className="relative z-10 mb-12">
                <ContactForm
                  config={{
                    showPhone: true,
                    showDate: false,
                    showTime: false,
                    showSubject: false,
                    showTextArea: false,
                    labelColor: true,
                    apiEndpoint: "/api/contact",
                  }}
                />
              </div>

              {/* Divider */}
              <div className="relative z-10 w-full h-px bg-white/20 mb-8" />

              {/* Contact Information */}
              <div className="relative z-10 text-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-6">
                  Sales and Information
                </h4>

                <div className="space-y-6">
                  {/* Phone */}
                  {finalConfig.contactInfo?.phone && (
                    <div className="flex flex-col items-center gap-2 group hover:scale-105 transition-transform">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Phone className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold">
                        {finalConfig.contactInfo.phoneFormatted}
                      </p>
                    </div>
                  )}

                  {/* Email */}
                  {finalConfig.contactInfo?.email && (
                    <div className="flex flex-col items-center gap-2 group hover:scale-105 transition-transform">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Mail className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <p className="text-xl md:text-2xl font-bold break-all">
                        {finalConfig.contactInfo.email}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
