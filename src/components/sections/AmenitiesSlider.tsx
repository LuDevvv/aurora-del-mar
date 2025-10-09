"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Dumbbell,
  Waves,
  Trees,
  Baby,
  Car,
  Shield,
  Wifi,
  ShoppingBag,
  Sun,
  Flag,
  type LucideIcon,
  Trophy,
} from "lucide-react";
import { cn } from "@lib/utils";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { useTranslations } from "next-intl";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  users: Users,
  dumbbell: Dumbbell,
  waves: Waves,
  trees: Trees,
  baby: Baby,
  car: Car,
  shield: Shield,
  wifi: Wifi,
  "shopping-bag": ShoppingBag,
  sun: Sun,
  flag: Flag,
  trophy: Trophy,
};

export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface AmenitiesSliderConfig {
  amenities: Amenity[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  overlayOpacity?: number;
  overlayColor?: string;
}

interface AmenitiesSliderProps {
  config: AmenitiesSliderConfig;
  className?: string;
}

export function AmenitiesSlider({ config, className }: AmenitiesSliderProps) {
  const {
    amenities,
    autoPlay = true,
    autoPlayInterval = 5000,
    overlayOpacity = 70,
    overlayColor = "#183C7C",
  } = config;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const t = useTranslations("home.amenitiesSlider");

  const minSwipeDistance = 50;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? amenities.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, amenities.length, goToSlide]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === amenities.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, amenities.length, goToSlide]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Get current amenity with translations
  const currentAmenity = amenities[currentIndex];
  const translatedTitle = t(`amenities.${currentAmenity.id}.title`);
  const translatedDescription = t(`amenities.${currentAmenity.id}.description`);

  return (
    <section id="amenities-slider" className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection animation="slideUp" duration={700}>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider">
                {t("subtitle")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              {t("title")}
            </h2>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="scaleIn" duration={700} delay={200}>
        <div
          className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0">
            <Image
              src={currentAmenity.image}
              alt={translatedTitle}
              fill
              className={cn(
                "object-cover transition-opacity duration-500",
                isTransitioning ? "opacity-50" : "opacity-100"
              )}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark/90" />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-12 text-center">
            <div
              className={cn(
                "max-w-4xl transition-all duration-500",
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              )}
            >
              {currentAmenity.icon &&
                (() => {
                  const IconComponent = iconMap[currentAmenity.icon];
                  return IconComponent ? (
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/25">
                        <IconComponent
                          size={32}
                          strokeWidth={2}
                          className="text-white md:w-10 md:h-10"
                        />
                      </div>
                    </div>
                  ) : null;
                })()}

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl uppercase tracking-wide break-words leading-tight">
                {translatedTitle}
              </h3>

              <p className="text-sm md:text-base lg:text-lg text-white/95 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                {translatedDescription}
              </p>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className={cn(
              "absolute left-1 md:left-6 top-1/2 -translate-y-1/2 z-20",
              "w-6 h-6 md:w-14 md:h-14",
              "bg-white/25 hover:bg-white/35 backdrop-blur-lg",
              "rounded-xl flex items-center justify-center",
              "transition-all duration-200",
              "border-2 border-white/40",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "group hover:scale-105 active:scale-95",
              "shadow-xl hover:shadow-2xl"
            )}
            aria-label={t("previousAmenity")}
          >
            <ChevronLeft
              className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:-translate-x-1"
              strokeWidth={3}
            />
          </button>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className={cn(
              "absolute right-1 md:right-6 top-1/2 -translate-y-1/2 z-20",
              "w-6 h-6 md:w-14 md:h-14",
              "bg-white/25 hover:bg-white/35 backdrop-blur-lg",
              "rounded-xl flex items-center justify-center",
              "transition-all duration-200",
              "border-2 border-white/40",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "group hover:scale-105 active:scale-95",
              "shadow-xl hover:shadow-2xl"
            )}
            aria-label={t("nextAmenity")}
          >
            <ChevronRight
              className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:translate-x-1"
              strokeWidth={3}
            />
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
}
