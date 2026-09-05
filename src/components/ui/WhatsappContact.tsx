"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  whatsappContacts,
  whatsappMessage,
} from "@/lib/constants/landing-page";

export function WhatsappContact({
  label = "Falar pelo WhatsApp",
  color = "green",
}: {
  label?: string;
  color?: "green" | "brown";
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modal = isOpen ? (
    <div
      className="whatsapp-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="whatsapp-options"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-dialog-title"
      >
        <button
          type="button"
          className="whatsapp-close"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar contatos do WhatsApp"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <p id="whatsapp-dialog-title">Escolha um contato para começar:</p>
        {whatsappContacts.map((contact) => (
          <a
            className="whatsapp-option"
            href={`https://wa.me/${contact.digits}?text=${encodeURIComponent(whatsappMessage)}`}
            key={contact.digits}
            target="_blank"
            rel="noreferrer"
          >
            <span>{contact.label}</span>
            <strong>{contact.number}</strong>
          </a>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div className="whatsapp-contact">
      <button
        type="button"
        className={`button button-whatsapp button-whatsapp-${color}`}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {label}
      </button>
      {typeof document !== "undefined" && modal
        ? createPortal(modal, document.body)
        : null}
    </div>
  );
}
