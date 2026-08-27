import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

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
          <div className="room-scene">
            <div className="room-wall" />
            <div className="room-window">
              <span />
            </div>
            <div className="room-shelf shelf-top" />
            <div className="room-shelf shelf-bottom" />
            <div className="room-cabinet">
              <span />
              <span />
              <span />
            </div>
            <div className="room-table" />
            <div className="room-chair" />
            <div className="room-plant">
              <i />
              <b />
              <b />
              <b />
            </div>
          </div>
          <span className="visual-caption">Prévia de composição</span>
        </div>
      </Container>
    </section>
  );
}
