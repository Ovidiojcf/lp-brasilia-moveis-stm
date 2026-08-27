import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaSection() {
  return (
    <section className="cta-section" id="orcamento" aria-labelledby="cta-title">
      <Container className="cta-content">
        <p className="eyebrow">Seu próximo ambiente começa aqui</p>
        <h2 id="cta-title">Vamos desenhar algo que faça sentido para você?</h2>
        <Button href="mailto:contato@brasiliamoveis.com.br" variant="gold">
          Falar com um especialista
        </Button>
      </Container>
    </section>
  );
}
