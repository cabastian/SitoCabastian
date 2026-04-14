export type Room = {
  id: string;
  name: string;
  label: string;
  badge: string;
  summary: string;
  details: string;
  featuredImage: string;
  images: string[];
  highlights: string[];
};

// Vite replaces import.meta.env.BASE_URL with the configured base path at build time.
// This ensures image paths work correctly both locally (/) and on GitHub Pages (/SitoCabastian/).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const property = {
  name: "Ca' Bastian",
  eyebrow: "Guest House",
  location: "Moruzzo, Friuli Venezia Giulia",
  heroTitle: "Ospitalità autentica tra camere curate e comfort quotidiano.",
  heroDescription:
    "Un soggiorno raccolto, caldo e pratico, con camere accoglienti, bagno privato e una suite pensata per vivere il ritmo lento del Friuli.",
  bookingNote: "A partire da €170 / notte · minimo 2 notti",
  minimumStay: "Minimo 2 notti",
  stats: [
    { value: "4", label: "camere e suite" },
    { value: "10", label: "comfort inclusi" },
    { value: "5.0", label: "valutazione ospiti" },
  ],
};

export const rooms: Room[] = [
  {
    id: "camera-5",
    name: "Camera 5",
    label: "Doppia + bagno",
    badge: "Camera 5",
    summary: "Un ambiente caldo con dettagli in legno e atmosfera domestica.",
    details:
      "Ideale per un soggiorno raccolto, con materiali tradizionali, luce morbida e finiture che richiamano il carattere della casa.",
    featuredImage: `${base}/camera5/37c2fb9c-1c49-4631-9fd1-f504c688ed48.webp`,
    images: [
      `${base}/camera5/37c2fb9c-1c49-4631-9fd1-f504c688ed48.webp`,
      `${base}/camera5/10413d06-ba9e-47e0-9c07-929b1876ab48.webp`,
      `${base}/camera5/16a34adf-5a28-4ecb-b8f8-da2ff775022a.webp`,
      `${base}/camera5/28d6b5da-b948-4f7f-9f95-25ef44980e7b.webp`,
      `${base}/camera5/48dc1edb-bb76-4983-a9df-18c22c0b99a6.webp`,
      `${base}/camera5/60b67644-ac27-4484-b72d-8616f02d96f2.webp`,
      `${base}/camera5/ca814af7-627d-4057-8c9a-6c17feefe588.webp`,
    ],
    highlights: ["Bagno privato", "Atmosfera tradizionale", "Dettagli in legno"],
  },
  {
    id: "camera-22",
    name: "Camera 22",
    label: "Doppia + bagno",
    badge: "Camera 22",
    summary: "Una camera essenziale e luminosa, pensata per soggiorni semplici e rilassati.",
    details:
      "La composizione pulita degli arredi e la luminosità naturale la rendono adatta a coppie o ospiti in cerca di comfort immediato.",
    featuredImage: `${base}/camera22/e03c47cf-9ac8-454a-9080-766d515817da.webp`,
    images: [
      `${base}/camera22/e03c47cf-9ac8-454a-9080-766d515817da.webp`,
      `${base}/camera22/3860f13b-945f-4f3d-b289-596f5d634ef1.webp`,
      `${base}/camera22/7d566862-92cc-4e88-8f60-e3b95434686a.webp`,
      `${base}/camera22/c80e5d18-64b5-4a34-b3a5-d2e50e1ea965.webp`,
    ],
    highlights: ["Bagno privato", "Luce naturale", "Soggiorno confortevole"],
  },
  {
    id: "camera-124",
    name: "Camera 124",
    label: "Doppia + bagno",
    badge: "Camera 124",
    summary: "Una soluzione equilibrata fra praticità, privacy e continuità stilistica.",
    details:
      "Perfetta per chi desidera una sistemazione lineare ma curata, con finiture coerenti e ambienti ben organizzati.",
    featuredImage: `${base}/camera124/e8fd9b96-c2f4-4588-8779-23692942a2ac.webp`,
    images: [
      `${base}/camera124/e8fd9b96-c2f4-4588-8779-23692942a2ac.webp`,
      `${base}/camera124/1baefeda-71a4-4b27-9e7f-b65f8bf48697.webp`,
      `${base}/camera124/d7b0dfaf-9164-4886-b3ea-b35981859dbe.webp`,
      `${base}/camera124/db5b6243-e06e-4648-b42e-8d75a4978284.webp`,
      `${base}/camera124/f21402b4-491e-4b2b-9aa1-e47550479c25.webp`,
    ],
    highlights: ["Bagno privato", "Distribuzione ordinata", "Ambiente versatile"],
  },
  {
    id: "suite-19",
    name: "Suite 19",
    label: "Appartamento + bagno",
    badge: "Suite 19",
    summary: "La soluzione più completa, pensata per un soggiorno con più autonomia.",
    details:
      "Offre una presenza più ampia e un carattere contemporaneo, mantenendo la stessa accoglienza calda della struttura.",
    featuredImage: `${base}/camera19/657424d9-eaa1-4a45-a519-816cd5031058.webp`,
    images: [
      `${base}/camera19/657424d9-eaa1-4a45-a519-816cd5031058.webp`,
      `${base}/camera19/0b3c6041-e32c-4d14-9140-4c3a89f3e1c4.webp`,
      `${base}/camera19/19dc6185-9a76-424c-b44f-b22b3b06503f.webp`,
      `${base}/camera19/459647e7-2489-4409-a0b0-42dfea48d22f.webp`,
      `${base}/camera19/7e299350-4682-40e3-9f7f-70c2468042a4.webp`,
      `${base}/camera19/9f0547c1-0375-4298-890b-821ce4ea95e0.webp`,
      `${base}/camera19/bbe9236c-776a-45bc-8302-c122cf98fc5a.webp`,
      `${base}/camera19/ec6b3ef9-c62d-4481-b30d-d5f1e64568cb.webp`,
    ],
    highlights: ["Appartamento + bagno", "Più autonomia", "Finiture contemporanee"],
  },
];

export const services = [
  "Wi‑Fi dedicato interno",
  "Wi‑Fi dedicato esterno",
  "Videocamere di sicurezza",
  "Piccolo giardino",
  "Parcheggio",
  "Cucina attrezzata",
  "Aria condizionata",
  "Smart TV",
  "Lavatrice",
  "Macchina del caffè",
];

export const reviews = [
  {
    quote: "I titolari... Super.",
    author: "sabi",
    date: "2 months ago",
  },
  {
    quote: "Location bellissima, arredato con gusto, titolari super, accoglienza eccezionale, luoghi incantevoli.......che vuoi di più!!",
    author: "Cinzia Trelancia",
    date: "2 weeks ago",
  },
  {
    quote: "Ospitalità eccezionale e location bellissima.",
    author: "L BB",
    date: "a month ago",
  },
];
