"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FilterTabs, type FilterOption } from "@components/ui/FilterTabs";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface GallerySectionConfig {
  images: GalleryImage[];
}

interface GallerySectionProps {
  config: GallerySectionConfig;
  className?: string;
}

export function GallerySection({ config, className }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { images } = config;

  const t = useTranslations("home.gallery");

  const categories = [
    { value: "all", label: t("categories.all") },
    { value: "exterior", label: t("categories.exterior") },
    { value: "interior", label: t("categories.interior") },
    { value: "amenities", label: t("categories.amenities") },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.category === activeFilter);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, [filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // Infinite scroll: clone first items when near end
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 100
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }, 500);
        }
      }
    }
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;

    if (direction === "prev") {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? filteredImages.length - 1
          : selectedImageIndex - 1
      );
    } else {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1
          ? 0
          : selectedImageIndex + 1
      );
    }
  };

  return (
    <>
      <section id="gallery" className={cn("relative", className)}>
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-dark via-primary to-primary py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" />
          <div className="container mx-auto px-4 max-w-7xl relative">
            <AnimatedSection animation="slideUp" duration={700}>
              <div className="text-center mb-8 md:mb-10">
                {t("subtitle") && (
                  <div className="inline-block mb-3">
                    <span className="text-white/90 font-semibold text-sm uppercase tracking-wide px-4 py-2 bg-white/15 rounded-full backdrop-blur-md border border-white/20">
                      {t("subtitle")}
                    </span>
                  </div>
                )}
                {t("title") && (
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    {t("title")}
                  </h2>
                )}
                {t("disclaimer") && (
                  <p className="text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
                    {t("disclaimer")}
                  </p>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" duration={700} delay={200}>
              <FilterTabs
                options={categories}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                variant="primary"
                size="md"
                fullWidth={false}
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative -mt-12 md:-mt-16 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <AnimatedSection animation="slideUp" duration={700} delay={300}>
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-2"
                  style={{ scrollSnapType: "x proximity" }}
                >
                  {filteredImages.map((image, index) => (
                    <div
                      key={`${image.id}-${index}`}
                      className="group relative flex-shrink-0 overflow-hidden cursor-pointer transition-all duration-500 w-[85vw] md:w-[480px] h-[420px] md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                      style={{ scrollSnapAlign: "center" }}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 85vw, 480px"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                          <p className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                            {image.alt}
                          </p>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                {canScrollLeft && (
                  <button
                    onClick={() => scroll("left")}
                    className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-14 h-14 bg-white hover:bg-gray-50 rounded-full items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-100"
                    aria-label={t("navigationPrevious")}
                  >
                    <ChevronLeft
                      className="w-7 h-7 text-primary-dark"
                      strokeWidth={2.5}
                    />
                  </button>
                )}

                {canScrollRight && (
                  <button
                    onClick={() => scroll("right")}
                    className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-14 h-14 bg-white hover:bg-gray-50 rounded-full items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-100"
                    aria-label={t("navigationNext")}
                  >
                    <ChevronRight
                      className="w-7 h-7 text-primary-dark"
                      strokeWidth={2.5}
                    />
                  </button>
                )}

                {/* Empty State */}
                {filteredImages.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-3xl shadow-xl">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg font-medium">
                      {t("emptyState")}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modal with Navigation */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300 group z-20"
            aria-label={t("close")}
          >
            <X
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
              strokeWidth={2}
            />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            aria-label={t("navigationPrevious")}
          >
            <ChevronLeft
              className="w-6 h-6 md:w-7 md:h-7 text-white"
              strokeWidth={2.5}
            />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            aria-label={t("navigationNext")}
          >
            <ChevronRight
              className="w-6 h-6 md:w-7 md:h-7 text-white"
              strokeWidth={2.5}
            />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain"
                priority
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                <p className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-lg">
                  {filteredImages[selectedImageIndex].alt}
                </p>
                <p className="text-white/70 text-sm text-center mt-2">
                  {selectedImageIndex + 1} {t("imageCounter")}{" "}
                  {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
