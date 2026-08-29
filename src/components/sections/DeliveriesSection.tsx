import Image from "next/image";
import deliveries from "../../../public/data/entregas.json";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Delivery = (typeof deliveries.items)[number];

const imageLayoutClasses = [
  "delivery-card-featured md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
];

function DeliveryCard({
  delivery,
  index,
}: {
  delivery: Delivery;
  index: number;
}) {
  return (
    <article className={`delivery-card ${imageLayoutClasses[index] ?? ""}`}>
      <div className="delivery-image-wrap">
        <Image
          src={delivery.image.src}
          alt={delivery.image.alt}
          fill
          sizes={
            index === 0
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className={`delivery-image delivery-image-${index + 1}`}
        />
        <span className="delivery-category">{delivery.category}</span>
      </div>
      <div className="delivery-content">
        <p className="delivery-location">
          {delivery.location} · Projeto entregue
        </p>
        <h3>{delivery.name}</h3>
        <p>{delivery.p}</p>
      </div>
    </article>
  );
}

export function DeliveriesSection() {
  return (
    <section
      className="deliveries-section"
      id="projetos"
      aria-labelledby="deliveries-title"
    >
      <Container>
        <div className="deliveries-heading-row">
          <SectionHeading
            eyebrow="Projetos que já ganharam forma"
            title="Veja o cuidado nos detalhes."
            description="Uma seleção de ambientes planejados para mostrar como boas escolhas transformam a rotina, do primeiro módulo ao último acabamento."
          />
          <Button href="#orcamento" variant="secondary">
            Planejar meu ambiente <span aria-hidden="true">↗</span>
          </Button>
        </div>

        <div className="delivery-grid">
          {deliveries.items.map((delivery, index) => (
            <DeliveryCard delivery={delivery} index={index} key={delivery.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
