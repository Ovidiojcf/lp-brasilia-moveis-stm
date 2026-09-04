import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsappContact } from "@/components/ui/WhatsappContact";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow motion-reveal motion-delay-1">
            Brasília Móveis Planejados
          </p>
          <h1 id="hero-title" className="motion-reveal motion-delay-2">
            Ambientes que <em>cabem</em> na sua vida.
          </h1>
          <p className="hero-description motion-reveal motion-delay-3">
            Móveis planejados sob medida para transformar casas, quartos,
            escritórios e empresas com mais intenção e aproveitamento.
          </p>
          <div className="hero-actions motion-reveal motion-delay-4">
            <WhatsappContact
              label="Solicitar orçamento gratuito"
              color="brown"
            />
            <Button href="#projetos" variant="secondary">
              Conhecer soluções
            </Button>
          </div>
          <div
            className="stat-bar motion-reveal motion-delay-5"
            aria-label="Destaques do atendimento"
          >
            <div>
              <strong>01</strong>
              <span>projeto sob medida</span>
            </div>
            <div>
              <strong>04</strong>
              <span>possibilidades de ambiente</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>feito para você</span>
            </div>
          </div>
        </div>
        <div
          className="hero-visual motion-visual"
          aria-label="Prévia de um ambiente planejado"
        >
          <div className="hero-photo-frame">
            <Image
              src="/images/cozinha-planejada-armario-cinza.jpg"
              alt="Cozinha planejada cinza com ilha, bancada escura e painel ripado iluminado"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
              className="hero-photo object-cover object-center"
            />
            <div className="hero-photo-note">
              <span>Projeto em destaque</span>
              <strong>Cozinha cinza com ilha e painel ripado</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
