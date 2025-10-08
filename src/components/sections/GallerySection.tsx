"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FilterTabs, type FilterOption } from "@components/ui/FilterTabs";
import { AnimatedSection } from "@components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@lib/utils";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface GallerySectionConfig {
  title: string;
  subtitle?: string;
  disclaimer?: string;
  images: GalleryImage[];
  categories: FilterOption[];
}

interface GallerySectionProps {
  config: GallerySectionConfig;
  className?: string;
}

export function GallerySection({ config, className }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { title, subtitle, disclaimer, images, categories } = config;

  // Filter images based on active category
  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.category === activeFilter);

  // Check scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section id="gallery" className={cn("relative", className)}>
        {/* Header Section with Blue Background */}
        <div className="bg-gradient-to-b from-primary-dark to-primary py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <AnimatedSection animation="slideUp" duration={700}>
              <div className="text-center mb-8 md:mb-10">
                {subtitle && (
                  <div className="inline-block mb-3">
                    <span className="text-white/90 font-bold text-sm uppercase tracking-wider">
                      {subtitle}
                    </span>
                  </div>
                )}
                {title && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {title}
                  </h2>
                )}
                {disclaimer && (
                  <p className="text-sm md:text-base text-white/90 max-w-4xl mx-auto leading-relaxed">
                    {disclaimer}
                  </p>
                )}
              </div>
            </AnimatedSection>

            {/* Filter Tabs */}
            <AnimatedSection animation="slideUp" duration={700} delay={200}>
              <div className="mb-0">
                <FilterTabs
                  options={categories}
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                  variant="primary"
                  size="md"
                  fullWidth={false}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Horizontal Infinite Slider - Overlapping */}
        <div className="relative -mt-12 md:-mt-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <AnimatedSection animation="slideUp" duration={700} delay={300}>
              <div className="relative">
                {/* Scroll Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
                  style={{
                    scrollSnapType: "x mandatory",
                  }}
                >
                  {filteredImages.map((image, index) => (
                    <div
                      key={`${image.id}-${index}`}
                      className={cn(
                        "group relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer",
                        "bg-gray-100",
                        // First image larger
                        index === 0
                          ? "w-[85vw] md:w-[600px] h-[400px] md:h-[500px]"
                          : "w-[75vw] md:w-[450px] h-[350px] md:h-[450px]"
                      )}
                      style={{
                        scrollSnapAlign: "start",
                      }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes={
                          index === 0
                            ? "(max-width: 768px) 85vw, 600px"
                            : "(max-width: 768px) 75vw, 450px"
                        }
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">
                            {image.alt}
                          </p>
                        </div>
                      </div>

                      {/* Click indicator */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {canScrollLeft && (
                  <button
                    onClick={() => scroll("left")}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full items-center justify-center shadow-xl transition-all duration-200 group"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft
                      className="w-6 h-6 text-primary-dark group-hover:-translate-x-0.5 transition-transform"
                      strokeWidth={3}
                    />
                  </button>
                )}

                {canScrollRight && (
                  <button
                    onClick={() => scroll("right")}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full items-center justify-center shadow-xl transition-all duration-200 group"
                    aria-label="Scroll right"
                  >
                    <ChevronRight
                      className="w-6 h-6 text-primary-dark group-hover:translate-x-0.5 transition-transform"
                      strokeWidth={3}
                    />
                  </button>
                )}

                {/* No results */}
                {filteredImages.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">
                      No hay imágenes disponibles en esta categoría.
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 group z-10"
            aria-label="Close"
          >
            <X
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
              strokeWidth={2}
            />
          </button>

          <div
            className="relative w-full max-w-6xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-medium text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
