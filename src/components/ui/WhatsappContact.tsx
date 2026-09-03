import {
  whatsappContacts,
  whatsappMessage,
} from "@/lib/constants/landing-page";

export function WhatsappContact() {
  return (
    <details className="whatsapp-contact">
      <summary className="button button-whatsapp">Falar pelo WhatsApp</summary>
      <div
        className="whatsapp-options"
        aria-label="Escolha um número de WhatsApp"
      >
        <p>Escolha um contato para começar:</p>
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
    </details>
  );
}
