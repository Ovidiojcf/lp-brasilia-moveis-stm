import { Container } from "@/components/ui/Container";
import { mapLocation } from "@/lib/constants/landing-page";

export function LocationSection() {
  const embedUrl = `https://www.google.com/maps?q=${mapLocation.latitude},${mapLocation.longitude}&z=17&output=embed`;

  return (
    <section
      className="location-section"
      id="localizacao"
      aria-labelledby="location-title"
    >
      <Container>
        <div className="location-layout">
          <div className="location-copy">
            <p className="eyebrow">Visite a Brasília Móveis</p>
            <h2 id="location-title">
              Vamos começar seu projeto de onde você estiver.
            </h2>
            <p>
              Encontre nossa localização no mapa e fale com a equipe para
              transformar suas ideias em móveis planejados sob medida.
            </p>
            <a
              className="button button-secondary location-link"
              href={mapLocation.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="map-frame">
            <iframe
              src={embedUrl}
              title="Localização da Brasília Móveis Planejados no Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
