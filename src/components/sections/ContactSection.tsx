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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Information - Left Side */}
          {finalConfig.showContactInfo && (
            <AnimatedSection
              animation="slideInLeft"
              duration={700}
              delay={200}
              className="lg:col-span-5"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white h-full shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  {t("contactTitle") || "Sales and Information"}
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  {finalConfig.contactInfo?.phone && (
                    <a
                      href={`tel:${finalConfig.contactInfo.phone.replace(/\D/g, "")}`}
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Phone className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">
                          {t("phone") || "Phone"}
                        </p>
                        <p className="text-lg font-semibold">
                          {finalConfig.contactInfo.phone}
                        </p>
                      </div>
                    </a>
                  )}

                  {/* Email */}
                  {finalConfig.contactInfo?.email && (
                    <a
                      href={`mailto:${finalConfig.contactInfo.email}`}
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Mail className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">
                          {t("email") || "Email"}
                        </p>
                        <p className="text-lg font-semibold break-all">
                          {finalConfig.contactInfo.email}
                        </p>
                      </div>
                    </a>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute top-8 right-16 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
          )}

          {/* Contact Form - Right Side */}
          <AnimatedSection
            animation="slideUp"
            duration={700}
            delay={300}
            className={cn(
              finalConfig.showContactInfo ? "lg:col-span-7" : "lg:col-span-12"
            )}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("formTitle") || "Send us a message"}
              </h3>

              <ContactForm
                config={{
                  showPhone: true,
                  showDate: false,
                  showTime: false,
                  showSubject: false,
                  showTextArea: false,
                  submitButtonText: t("submit"),
                  successMessage: t("success"),
                  errorMessage: t("error"),
                  placeholders: {
                    name: t("name"),
                    email: t("email"),
                    phone: t("phone"),
                    message: t("message"),
                  },
                  apiEndpoint: "/api/contact",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
