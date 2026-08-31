import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/lib/constants/landing-page";

export function SolutionsSection() {
  return (
    <section
      className="solutions-section"
      id="solucoes"
      aria-labelledby="solutions-title"
    >
      <Container>
        <SectionHeading
          eyebrow="Onde a sua rotina acontece"
          title="Soluções pensadas para cada espaço."
          description="Do primeiro desenho à escolha dos acabamentos, cada detalhe parte do seu ambiente e do jeito que você vive ou trabalha."
        />
        <div className="solution-grid">
          {solutions.map((solution, item) => (
            <article
              className={`solution-card${item === 0 ? " solution-card-featured" : ""}`}
              key={solution.index}
            >
              <span className="card-index">{solution.index}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <Button
                href="#orcamento"
                variant={item === 0 ? "gold" : "secondary"}
              >
                Explorar ambiente <span aria-hidden="true"></span>
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
