"use client";

import React, { useEffect, useRef, useState } from "react";
import { Building2, Calendar, Users, TrendingUp } from "lucide-react";
import { cn } from "@lib/utils";

export interface Stat {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
  icon?: "building" | "calendar" | "users" | "trending";
}

export interface StatsConfig {
  stats: Stat[];
  layout?: "1-column" | "2-columns";
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  animated?: boolean;
}

interface StatsProps {
  config: StatsConfig;
  className?: string;
}

const iconMap = {
  building: Building2,
  calendar: Calendar,
  users: Users,
  trending: TrendingUp,
};

export function Stats({ config, className }: StatsProps) {
  const {
    stats,
    layout = "1-column",
    backgroundColor = "#fef3f2",
    textColor = "#1f2937",
    accentColor = "#ea580c",
    animated = true,
  } = config;

  const firstColumn = stats.slice(
    0,
    layout === "2-columns" ? Math.ceil(stats.length / 2) : stats.length
  );

  const secondColumn =
    layout === "2-columns" && stats.length > Math.ceil(stats.length / 2)
      ? stats.slice(Math.ceil(stats.length / 2))
      : [];

  return (
    <div
      className={cn(
        "rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16",
        "shadow-sm",
        className
      )}
      style={{ backgroundColor }}
    >
      <div
        className={cn(
          "space-y-10 md:space-y-12",
          layout === "2-columns" &&
            "md:grid md:grid-cols-2 md:gap-4 lg:gap-6 md:space-y-0"
        )}
      >
        {/* First Column */}
        <div className="space-y-4 md:space-y-8">
          {firstColumn.map((stat, index) => (
            <StatItem
              key={index}
              stat={stat}
              textColor={textColor}
              accentColor={accentColor}
              animated={animated}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Second Column */}
        {secondColumn.length > 0 && (
          <div className="space-y-4 md:space-y-8">
            {secondColumn.map((stat, index) => (
              <StatItem
                key={index}
                stat={stat}
                textColor={textColor}
                accentColor={accentColor}
                animated={animated}
                delay={(firstColumn.length + index) * 150}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface StatItemProps {
  stat: Stat;
  textColor: string;
  accentColor: string;
  animated: boolean;
  delay: number;
}

function StatItem({
  stat,
  textColor,
  accentColor,
  animated,
  delay,
}: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const numericValue =
    typeof stat.value === "string"
      ? parseInt(stat.value.replace(/\D/g, ""))
      : stat.value;

  useEffect(() => {
    if (!animated) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animated, delay]);

  // Counter animation
  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  const Icon = stat.icon ? iconMap[stat.icon] : null;
  const displayValue =
    animated && !isNaN(numericValue) ? count.toLocaleString() : stat.value;

  return (
    <div
      ref={ref}
      className={cn(
        "text-center transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Icon */}
      {Icon && (
        <div
          className="flex justify-center mb-4"
          style={{
            transitionDelay: `${delay + 200}ms`,
          }}
        >
          <div
            className={cn(
              "inline-flex items-center justify-center",
              "w-14 h-14 md:w-16 md:h-16 rounded-2xl",
              "bg-white/60 backdrop-blur-sm",
              "transition-transform duration-300",
              isVisible && "scale-100",
              !isVisible && "scale-0"
            )}
          >
            <Icon
              className="transition-colors duration-300"
              size={28}
              style={{ color: stat.color || accentColor }}
              strokeWidth={2.5}
            />
          </div>
        </div>
      )}

      {/* Value */}
      <div
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4",
          "tracking-tight leading-none"
        )}
        style={{
          color: stat.color || accentColor,
          fontFamily: "inherit",
        }}
      >
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </div>

      {/* Label */}
      <p
        className={cn(
          "text-base md:text-lg lg:text-xl font-semibold",
          "leading-relaxed max-w-xs mx-auto"
        )}
        style={{
          color: textColor,
          opacity: 0.9,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}
