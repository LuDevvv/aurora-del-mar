"use client";

import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, Phone, MessageSquare, Clock } from "lucide-react";
import {
  createTranslatableSchema,
  type ContactFormData,
} from "@lib/validations";
import { Input } from "@components/ui/forms/Input";
import { Textarea } from "@components/ui/forms/Textarea";
import { Select } from "@components/ui/forms/Select";
import { Button } from "@components/ui/forms/Button";
import { DatePicker } from "@components/ui/forms/DatePicker";
import { useTranslations } from "next-intl";

export interface ContactFormConfig {
  showPhone?: boolean;
  showDate?: boolean;
  showTime?: boolean;
  showTextArea?: boolean;
  showSubject?: boolean;
  labelColor?: boolean;
  apiEndpoint?: string;
  onSuccess?: (data: ContactFormData) => void;
  onError?: (error: any) => void;
}

interface ContactFormProps {
  config?: ContactFormConfig;
  className?: string;
}

export function ContactForm({ config, className }: ContactFormProps) {
  const t = useTranslations("home.contact");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const defaultConfig: ContactFormConfig = {
    showPhone: false,
    showDate: false,
    showTime: false,
    showTextArea: false,
    showSubject: true,
    labelColor: false,
    apiEndpoint: "/api/contact",
  };

  const finalConfig = { ...defaultConfig, ...config };

  // Create translatable schema
  const schema = useMemo(() => createTranslatableSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: t("defaultSubject"),
      message: t("defaultMessage"),
    },
  });

  const formatTimeForDisplay = (time: string) => {
    const [hour] = time.split(":");
    const hourNum = parseInt(hour);
    if (hourNum >= 13) return `${hourNum - 12}:00 PM`;
    if (hourNum === 12) return `${time} PM`;
    return `${time} AM`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const response = await fetch(finalConfig.apiEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        reset();
        setSelectedDate(undefined);
        finalConfig.onSuccess?.(data);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        finalConfig.onError?.(result.error);
        setTimeout(() => setStatus("idle"), 8000);
      }
    } catch (error) {
      setStatus("error");
      finalConfig.onError?.(error);
      console.error("Contact form error:", error);
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setValue("date", date.toISOString().split("T")[0]);
  };

  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Input
          {...register("name")}
          label={t("name")}
          placeholder={t("namePlaceholder")}
          icon={<User size={18} />}
          error={errors.name?.message}
          fullWidth
          isLabelWhite={finalConfig.labelColor}
        />

        <Input
          {...register("email")}
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          icon={<Mail size={18} />}
          error={errors.email?.message}
          fullWidth
          isLabelWhite={finalConfig.labelColor}
        />
      </div>

      {finalConfig.showPhone && (
        <div className="mb-4">
          <Input
            {...register("phone")}
            type="tel"
            label={t("phone")}
            placeholder={t("phonePlaceholder")}
            icon={<Phone size={18} />}
            error={errors.phone?.message}
            fullWidth
            isLabelWhite={finalConfig.labelColor}
          />
        </div>
      )}

      {(finalConfig.showDate || finalConfig.showTime) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {finalConfig.showDate && (
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              label={t("date")}
              placeholder={t("selectDate")}
              error={errors.date?.message}
              disablePast
              disableSundays
              fullWidth
            />
          )}

          {finalConfig.showTime && (
            <Select
              {...register("time")}
              label={t("time")}
              icon={<Clock size={18} />}
              error={errors.time?.message}
              options={timeSlots.map((time) => ({
                value: time,
                label: formatTimeForDisplay(time),
              }))}
              fullWidth
            />
          )}
        </div>
      )}

      {finalConfig.showSubject && (
        <div className="mb-4">
          <Input
            {...register("subject")}
            label={t("subject")}
            placeholder={t("subjectPlaceholder")}
            error={errors.subject?.message}
            fullWidth
            isLabelWhite={finalConfig.labelColor}
          />
        </div>
      )}

      {finalConfig.showTextArea && (
        <div className="mb-6">
          <Textarea
            {...register("message")}
            label={t("message")}
            placeholder={t("messagePlaceholder")}
            icon={<MessageSquare size={18} />}
            error={errors.message?.message}
            rows={5}
            fullWidth
          />
        </div>
      )}

      <div className="flex flex-col items-start gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={status === "loading"}
          loadingText={t("sending")}
          disabled={status === "loading"}
          fullWidth
        >
          {t("submit")}
        </Button>

        {status === "success" && (
          <div
            className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 p-4 rounded-lg shadow-sm animate-slide-up"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">{t("successTitle")}</p>
                <p className="text-sm text-green-600 mt-1">{t("success")}</p>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            className="w-full bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-800 p-4 rounded-lg shadow-sm animate-slide-up"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">{t("errorTitle")}</p>
                <p className="text-sm text-red-600 mt-1">{t("error")}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
