"use client";

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { cn } from "@lib/utils";

export interface SocialLink {
  platform: "facebook" | "instagram";
  url: string;
}

export interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
}

export interface FooterConfig {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  description?: string;
  socialLinks?: SocialLink[];
  contactInfo?: ContactInfo;
  copyrightText?: string;
  backgroundImage?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

interface FooterProps {
  config?: FooterConfig;
  className?: string;
}

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
};

export function Footer({ config, className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const defaultConfig: FooterConfig = {
    copyrightText: `© ${currentYear} Your Company. All rights reserved.`,
    overlayColor: "#1E3A5F",
    overlayOpacity: 0.92,
  };

  const finalConfig = { ...defaultConfig, ...config };

  return (
    <footer className={cn("relative text-white overflow-hidden", className)}>
      {/* Background Image with Overlay */}
      {finalConfig.backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={finalConfig.backgroundImage}
              alt="Footer background"
              fill
              className="object-cover object-center"
              priority={false}
              quality={85}
            />
          </div>
          {/* Gradient Overlay for better text contrast */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(135deg, ${finalConfig.overlayColor} 0%, ${finalConfig.overlayColor}dd 100%)`,
              opacity: finalConfig.overlayOpacity,
            }}
          />
        </>
      )}

      {/* Solid Background Fallback */}
      {!finalConfig.backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, #1E3A5F 0%, #2d5650 100%)`,
          }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            {finalConfig.logo && (
              <div className="mb-6">
                <Image
                  src={finalConfig.logo.src}
                  alt={finalConfig.logo.alt}
                  width={finalConfig.logo.width || 240}
                  height={finalConfig.logo.height || 70}
                  className="h-auto max-w-[200px] md:max-w-[240px]"
                />
              </div>
            )}

            {finalConfig.description && (
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                {finalConfig.description}
              </p>
            )}

            {/* Social Media Links */}
            {finalConfig.socialLinks && finalConfig.socialLinks.length > 0 && (
              <div className="flex gap-3">
                {finalConfig.socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group relative w-11 h-11 rounded-xl",
                        "bg-white/10 backdrop-blur-sm",
                        "hover:bg-white/20",
                        "flex items-center justify-center",
                        "transition-all duration-300",
                        "hover:scale-110 hover:shadow-lg"
                      )}
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <Icon
                        className="h-5 w-5 text-white transition-transform group-hover:scale-110"
                        strokeWidth={2}
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Information */}
          {finalConfig.contactInfo && (
            <div className="lg:col-span-2">
              <h3 className="text-lg md:text-xl font-bold mb-6 text-white">
                Contáctanos
              </h3>
              <div className="space-y-5">
                {finalConfig.contactInfo.address && (
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <MapPin className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {finalConfig.contactInfo.address}
                      </p>
                    </div>
                  </div>
                )}

                {finalConfig.contactInfo.phone && (
                  <a
                    href={`tel:${finalConfig.contactInfo.phone.replace(/\D/g, "")}`}
                    className="flex items-start group hover:translate-x-1 transition-transform"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Phone className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-white/90 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                        {finalConfig.contactInfo.phone}
                      </p>
                    </div>
                  </a>
                )}

                {finalConfig.contactInfo.email && (
                  <a
                    href={`mailto:${finalConfig.contactInfo.email}`}
                    className="flex items-start group hover:translate-x-1 transition-transform"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Mail className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-white/90 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                        {finalConfig.contactInfo.email}
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 md:mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              {finalConfig.copyrightText}
            </p>
            <a
              href="https://casalinainmobiliaria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group"
            >
              <span>Powered by Casalina Inmobiliaria</span>
              <ExternalLink
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl" />
    </footer>
  );
}
