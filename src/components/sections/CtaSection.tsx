import { Container } from "@/components/ui/Container";
import { WhatsappContact } from "@/components/ui/WhatsappContact";

export function CtaSection() {
  return (
    <section className="cta-section" id="orcamento" aria-labelledby="cta-title">
      <Container className="cta-content">
        <p className="eyebrow">Seu próximo ambiente começa aqui</p>
        <h2 id="cta-title">Vamos desenhar algo que faça sentido para você?</h2>
        <WhatsappContact />
      </Container>
    </section>
  );
}
