import { Container } from "@/components/ui/Container";
import { mapLocation } from "@/lib/constants/landing-page";

export function LocationSection() {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation.query)}&output=embed`;

  return (
    <section
      className="location-section"
      id="localizacao"
      aria-labelledby="location-title"
    >
      <Container>
        <div className="location-layout">
          <div className="location-copy">
            <p className="eyebrow">Santarém, Pará</p>
            <h2 id="location-title">Seu projeto começa em Santarém, Pará.</h2>
            <p>
              Encontre a Brasília Móveis no mapa e fale com a equipe para
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
              title="Localização da Brasília Móveis Planejados em Santarém, Pará, no Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
