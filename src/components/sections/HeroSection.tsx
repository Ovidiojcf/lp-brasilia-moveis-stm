import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Brasília Móveis Planejados</p>
          <h1 id="hero-title">
            Ambientes que <em>cabem</em> na sua vida.
          </h1>
          <p className="hero-description">
            Móveis planejados sob medida para transformar casas, quartos,
            escritórios e empresas com mais intenção e aproveitamento.
          </p>
          <div className="hero-actions">
            <Button href="#orcamento">Solicitar orçamento gratuito</Button>
            <Button href="#solucoes" variant="secondary">
              Conhecer soluções
            </Button>
          </div>
          <div className="stat-bar" aria-label="Destaques do atendimento">
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
          className="hero-visual"
          aria-label="Prévia de um ambiente planejado"
        >
          <div className="hero-photo-frame">
            <Image
              src="/images/cozinha-planejada-armarios.jpg"
              alt="Cozinha planejada branca e amadeirada com bancada escura e iluminação embutida"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
              className="hero-photo object-cover object-center"
            />
            <div className="hero-photo-note">
              <span>Entrega real</span>
              <strong>Cozinha em L</strong>
            </div>
          </div>
          <span className="visual-caption">Prévia de composição</span>
        </div>
      </Container>
    </section>
  );
}
