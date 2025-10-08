"use client";

import React, { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";
import { ContactForm } from "@components/forms/ContactForm";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  price?: string;
  whatsappNumber?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  propertyName = "Aura del Mar",
  price = "US$997,000",
  whatsappNumber = "+18092995767",
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en ${propertyName}. ¿Podrían darme más información?`
    );
    window.open(
      `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${message}`,
      "_blank"
    );
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    onClose();

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 group"
        >
          <X
            size={20}
            className="text-gray-700 group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 md:p-10">
          {/* Limited Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
            <Sparkles size={16} />
            <span>¡Pocas Unidades!</span>
          </div>

          {/* Content */}
          <div className="mt-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Descubre Tu Nuevo Hogar
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              {propertyName}
            </p>

            {/* Price Banner */}
            <div className="inline-block bg-white text-primary-dark px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm font-semibold mb-1 text-gray-600">
                Precio Especial
              </p>
              <p className="text-4xl md:text-5xl font-bold">{price}</p>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="p-6 md:p-8">
          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsApp}
            className="w-full mb-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <MessageCircle
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
            <span>Contactar por WhatsApp</span>
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500 font-medium">
                o envía tus datos
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm
            config={{
              showPhone: true,
              showDate: false,
              showTime: false,
              showSubject: false,
              submitButtonText: "Enviar Información",
              successMessage: "¡Gracias! Te contactaremos pronto.",
              errorMessage: "Error al enviar. Intenta de nuevo.",
              placeholders: {
                name: "Nombre completo",
                email: "Correo electrónico",
                phone: "Teléfono",
              },
              apiEndpoint: "/api/contact",
              onSuccess: () => {
                onClose();
              },
            }}
          />

          {/* Trust Badge */}
          <p className="text-center text-xs text-gray-500 mt-4">
            🔒 Tus datos están seguros. No compartimos tu información.
          </p>
        </div>
      </div>
    </div>
  );
}

// Hook para usar el modal
export function useLeadModal() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  };
}
