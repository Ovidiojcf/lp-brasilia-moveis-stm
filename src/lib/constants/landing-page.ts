export type Solution = {
  index: string;
  title: string;
  description: string;
};

export const mapLocation = {
  latitude: -15.8914871,
  longitude: -48.1431923,
  mapsUrl:
    "https://www.google.com/maps/place/15%C2%B053'29.4%22S+48%C2%B008'35.5%22W/@-15.8914871,-48.1457672,763m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-15.8914871!4d-48.1431923?hl=pt-BR&entry=ttu",
};

export const whatsappMessage =
  "Olá! Quero transformar meu espaço com móveis planejados sob medida. Gostaria de conversar sobre meu projeto e receber um orçamento.";

export const whatsappContacts = [
  { label: "Atendimento 1", number: "+55 61 9337-3141", digits: "556193373141" },
  { label: "Atendimento 2", number: "+55 61 8149-5812", digits: "556181495812" },
  { label: "Atendimento 3", number: "+55 61 9945-8106", digits: "556199458106" },
];

export const solutions: Solution[] = [
  {
    index: "01",
    title: "Apartamentos",
    description: "Mais fluidez para salas, cozinhas e ambientes integrados.",
  },
  {
    index: "02",
    title: "Quartos",
    description: "Organização e aconchego em uma composição só sua.",
  },
  {
    index: "03",
    title: "Escritórios",
    description: "Um espaço de trabalho que acompanha o seu ritmo e estilo.",
  },
  {
    index: "04",
    title: "Empresas",
    description: "Moveis idealizados para receber pessoas e familiares.",
  },
];
