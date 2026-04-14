/*
Design reminder for Home.tsx:
Mediterranean editorial warmth. Use asymmetry, warm mineral tones, elegant serif display typography, framed photography, thin dividers, and restrained motion. Avoid generic centered SaaS layouts, purple gradients, uniform rounded corners, and Inter.
*/
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bath,
  CalendarRange,
  Car,
  Coffee,
  Leaf,
  MonitorSmartphone,
  Shield,
  Star,
  Tv,
  WashingMachine,
  Wifi,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { property, reviews, rooms, services } from "@/lib/siteData";

type BookingForm = {
  checkIn: string;
  checkOut: string;
  room: string;
  email: string;
  message: string;
};

const serviceIcons = [
  Wifi,
  Wifi,
  Shield,
  Leaf,
  Car,
  Coffee,
  Wind,
  Tv,
  WashingMachine,
  MonitorSmartphone,
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const [activeRoomId, setActiveRoomId] = useState(rooms[0].id);
  const [activeImage, setActiveImage] = useState(rooms[0].featuredImage);
  const [form, setForm] = useState<BookingForm>({
    checkIn: "",
    checkOut: "",
    room: rooms[0].name,
    email: "",
    message: "",
  });

  const activeRoom = useMemo(
    () => rooms.find((room) => room.id === activeRoomId) ?? rooms[0],
    [activeRoomId],
  );

  useEffect(() => {
    setActiveImage(activeRoom.featuredImage);
    setForm((current) => ({ ...current, room: activeRoom.name }));
  }, [activeRoom]);

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Richiesta disponibilità — ${form.room}`);
    const body = encodeURIComponent(
      [
        `Camera: ${form.room}`,
        `Check-in: ${form.checkIn || "Da definire"}`,
        `Check-out: ${form.checkOut || "Da definire"}`,
        `Email: ${form.email || "Non indicata"}`,
        "",
        "Messaggio:",
        form.message || "Nessuna richiesta aggiuntiva.",
      ].join("\n"),
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[var(--shell)] text-foreground">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container pt-4">
          <div className="site-nav flex items-center justify-between gap-6 px-4 py-3 md:px-6">
            <a href="#top" className="brand-mark text-xl text-white">
              Ca' Bastian
            </a>

            <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.28em] text-white/88 md:flex">
              <a href="#galleria" className="nav-link">
                Galleria
              </a>
              <a href="#prenota" className="nav-link">
                Prenota
              </a>
              <a href="#recensioni" className="nav-link">
                Recensioni
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-shell relative min-h-screen overflow-hidden">
          <div
            className="hero-photo"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(30, 22, 15, 0.18) 0%, rgba(22, 17, 12, 0.58) 72%, rgba(22, 17, 12, 0.82) 100%), url(${activeRoom.featuredImage})`,
            }}
          />
          <div className="hero-grain" />

          <div className="container relative z-10 flex min-h-screen items-end pb-18 pt-28 md:pb-24">
            <motion.div
              className="hero-copy max-w-3xl text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="eyebrow text-white/78">{property.eyebrow}</p>
              <h1 className="hero-title mt-4 text-balance">{property.name}</h1>
              <h2 className="hero-subtitle mt-3 max-w-2xl text-balance text-white/94">
                {property.heroTitle}
              </h2>
              <p className="hero-description mt-6 max-w-xl text-white/80">
                {property.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="cta-primary rounded-none px-7 py-6 text-[0.75rem] uppercase tracking-[0.28em]">
                  <a href="#prenota">Prenota ora</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="cta-secondary rounded-none border-white/70 px-7 py-6 text-[0.75rem] uppercase tracking-[0.28em] text-white hover:bg-white/10"
                >
                  <a href="#galleria">Scopri di più</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="relative z-10 -mt-24 px-0 pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
        >
          <div className="container">
            <div className="overview-panel grid gap-10 px-6 py-8 md:grid-cols-[1.25fr_0.9fr] md:px-10 md:py-12" style={{paddingTop: '15px', paddingRight: '0px', paddingBottom: '15px', paddingLeft: '10px', marginTop: '96px'}}>
              <div>
                <p className="section-label">Le nostre camere</p>
                <h3 className="section-title mt-4 max-w-2xl">
                  Quattro spazi diversi, un'unica atmosfera di ospitalità raccolta.
                </h3>
                <p className="section-copy mt-5 max-w-2xl">
                  Il sito riprende il formato della struttura originale: camere doppie con bagno privato e una suite più ampia,
                  presentate con un linguaggio visivo semplice, caldo e immediato.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3" style={{marginRight: '10px'}}>
                {property.stats.map((stat) => (
                  <div key={stat.label} className="stat-block" style={{paddingLeft: '10px', marginLeft: '10px'}}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="galleria"
          className="section-spacing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
        >
          <div className="container">
            <div className="section-intro-grid" style={{paddingBottom: '0px', marginTop: '-65px', marginBottom: '-30px'}}>
              <div>
                <p className="section-label">I nostri spazi</p>
                <h3 className="section-title mt-4"></h3>
              </div>
              <p className="section-copy max-w-xl justify-self-end">
                Ogni pulsante aggiorna la galleria principale senza dipendere da servizi esterni. Il contenuto resta semplice da gestire
                perché immagini e testi sono raccolti in un unico file dati.
              </p>
            </div>

            <div className="room-switcher mt-10 flex flex-wrap gap-3">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setActiveRoomId(room.id)}
                  className={room.id === activeRoom.id ? "room-chip is-active" : "room-chip"}
                >
                  {room.name}
                </button>
              ))}
            </div>

            <div className="room-stage mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
              <div className="room-photo-frame">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={activeRoom.name}
                    className="room-featured-image"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.45 }}
                  />
                </AnimatePresence>
              </div>

              <div className="room-copy-panel">
                <p className="section-label">{activeRoom.badge}</p>
                <h4 className="room-title mt-4">{activeRoom.label}</h4>
                <p className="section-copy mt-4">{activeRoom.summary}</p>
                <p className="room-detail mt-4">{activeRoom.details}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activeRoom.highlights.map((highlight) => (
                    <span key={highlight} className="detail-pill">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="thumb-grid mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {activeRoom.images.map((image, index) => (
                    <button
                      key={`${activeRoom.id}-${image}`}
                      type="button"
                      className={image === activeImage ? "thumb-card is-active" : "thumb-card"}
                      onClick={() => setActiveImage(image)}
                      aria-label={`Apri foto ${index + 1} di ${activeRoom.name}`}
                    >
                      <img src={image} alt={`${activeRoom.name} anteprima ${index + 1}`} className="thumb-image" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section-spacing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
        >
          <div className="container">
            <div className="section-intro-grid">
              <div>
                <p className="section-label">Servizi e comfort</p>
                <h3 className="section-title mt-4">Cosa Offre Ca' Bastian</h3>
              </div>
              <div className="section-copy max-w-xl justify-self-end">
                {property.minimumStay} · {property.location}
              </div>
            </div>

            <div className="services-grid mt-10">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Star;

                return (
                  <div key={service} className="service-card">
                    <div className="service-icon-wrap">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="service-name">{service}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="recensioni"
          className="section-spacing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
        >
          <div className="container">
            <div className="reviews-shell grid gap-10 px-6 py-8 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-10">
              <div>
                <p className="section-label text-white/72">Cosa dicono i nostri ospiti</p>
                <h3 className="section-title mt-4 text-white">Recensioni e impressioni raccolte con lo stesso impianto narrativo del sito originale.</h3>
                <div className="mt-6 flex items-center gap-3 text-white/88">
                  <div className="flex items-center gap-1 text-[var(--accent-warm)]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm uppercase tracking-[0.22em]">5.0 · 48 recensioni</span>
                </div>
              </div>

              <div className="grid gap-4">
                {reviews.map((review) => (
                  <article key={`${review.author}-${review.date}`} className="review-card">
                    <p className="review-quote">“{review.quote}”</p>
                    <div className="review-meta mt-5">
                      <span>{review.author}</span>
                      <span>{review.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="prenota"
          className="section-spacing pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
        >
          <div className="container">
            <div className="booking-shell flex flex-col items-center px-6 py-8 md:px-10 md:py-10">
              <form onSubmit={handleBookingSubmit} className="booking-form grid gap-6 md:grid-cols-2 w-full max-w-2xl">
                <label className="field-group">
                  <span className="field-label">Check-in</span>
                  <input
                    type="date"
                    value={form.checkIn}
                    onChange={(event) => setForm((current) => ({ ...current, checkIn: event.target.value }))}
                    className="field-input-dashed"
                    placeholder="mm/dd/yyyy"
                    required
                  />
                </label>

                <label className="field-group">
                  <span className="field-label">Check-out</span>
                  <input
                    type="date"
                    value={form.checkOut}
                    onChange={(event) => setForm((current) => ({ ...current, checkOut: event.target.value }))}
                    className="field-input-dashed"
                    placeholder="mm/dd/yyyy"
                    required
                  />
                </label>

                <label className="field-group md:col-span-2">
                  <span className="field-label">Camera</span>
                  <select
                    value={form.room}
                    onChange={(event) => setForm((current) => ({ ...current, room: event.target.value }))}
                    className="field-input-dashed"
                  >
                    {rooms.map((room) => (
                      <option key={room.name} value={room.name}>
                        {room.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field-group md:col-span-2">
                  <span className="field-label">Email</span>
                  <input
                    type="email"
                    placeholder="la-tua@email.com"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="field-input-dashed"
                    required
                  />
                </label>

                <label className="field-group md:col-span-2">
                  <span className="field-label">Messaggio (opzionale)</span>
                  <textarea
                    placeholder="Richieste speciali, domande..."
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    className="field-textarea-dashed"
                    rows={5}
                  />
                </label>

                <div className="md:col-span-2 flex items-center justify-center pt-4">
                  <Button type="submit" className="cta-primary rounded-none px-8 py-3 text-[0.75rem] uppercase tracking-[0.28em]">
                    Richiedi disponibilità
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="section-spacing bg-secondary/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal} style={{paddingTop: '15px', marginTop: '-80px', marginBottom: '5px'}}
        >
          <div className="container">
            <div className="mb-8">
              <p className="section-label">Dove siamo</p>
              <h3 className="section-title mt-4">Visita Ca' Bastian a Moruzzo</h3>
            </div>
            <div className="w-full h-96 rounded-sm overflow-hidden border border-black/10 shadow-sm">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.3456789!2d13.2!3d46.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a1b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sVia%20Coranzano%2048%2C%2033040%20Moruzzo%2C%20UD!5e0!3m2!1sit!2sit!4v1234567890"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-black/8 py-8" style={{paddingTop: '20px', paddingBottom: '15px'}}>
        <div className="container grid gap-8 text-sm text-[var(--muted-ink)] md:grid-cols-3">
          <div>
            <span className="block font-medium text-[var(--ink-deep)] mb-3">Ca' Bastian</span>
            <p className="text-xs leading-relaxed">Ospitalita autentica a comfort moderni. 3 camere con bagno privato e un appartamento con suite.</p>
          </div>
          <div>
            <span className="block font-medium text-[var(--ink-deep)] mb-3 uppercase tracking-[0.22em]">Contatti</span>
            <div className="space-y-2 text-xs">
              <p>Via Coranzano 48, Moruzzo (UD), Friuli Venezia Giulia</p>
              <a href="tel:+393501107912" className="footer-link block">
                +39 350 1107912
              </a>
              <a href="mailto:infocabastian.fvg@gmail.com" className="footer-link block">
                infocabastian.fvg@gmail.com
              </a>
            </div>
          </div>
          <div>
            <span className="block font-medium text-[var(--ink-deep)] mb-3 uppercase tracking-[0.22em]">Link Rapidi</span>
            <div className="flex flex-col gap-2">
              <a href="#galleria" className="footer-link text-xs">
                Galleria
              </a>
              <a href="#prenota" className="footer-link text-xs">
                Prenota
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
