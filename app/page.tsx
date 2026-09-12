import {
  ArrowUpRight,
  ArrowDown,
  BedDouble,
  MapPin,
  Phone,
  Landmark,
  Bike,
  Wine,
} from 'lucide-react';
import Image from 'next/image';

const phone = 'tel:+48506046200';
const maps =
  'https://www.google.com/maps/search/?api=1&query=Go%C5%9Bciniec+w+Ratuszu+Plac+Pi%C5%82sudskiego+17+Ogrodzieniec';

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>
      <div className="demo-bar">
        Koncepcja nowej strony <span>— lokalny podgląd demonstracyjny</span>
      </div>
      <header className="site-header" id="top">
        <a
          href="#top"
          className="brand"
          aria-label="Gościniec w Ratuszu — strona główna"
        >
          <Landmark strokeWidth={1.2} aria-hidden="true" />
          <span>
            Gościniec <em>w Ratuszu</em>
          </span>
        </a>
        <nav aria-label="Menu główne">
          <a href="#miejsce">Nasze miejsce</a>
          <a href="#pokoje">Pokoje</a>
          <a href="#przyjecia">Przyjęcia</a>
          <a href="#okolica">Odkryj Jurę</a>
        </nav>
        <a className="header-contact" href="#kontakt">
          Zaplanuj pobyt <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-rule" />
              OGRODZIENIEC · JURA KRAKOWSKO-CZĘSTOCHOWSKA
            </p>
            <h1 id="hero-title">
              Gościnność
              <br />z historią
              <br />
              <em>w tle.</em>
            </h1>
            <p className="hero-description">
              Zatrzymaj się w dawnym ratuszu.
              <br />
              Odpocznij, spotkaj się z bliskimi i odkryj Jurę —
              <br className="desktop-break" /> we własnym tempie.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#pokoje">
                Poznaj nasze pokoje{' '}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a className="text-link" href="#przyjecia">
                Wyjątkowe okazje <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <a className="hero-scroll" href="#miejsce">
              <ArrowDown size={17} aria-hidden="true" /> Miejsce, do którego
              chce się wracać
            </a>
          </div>
          <div className="hero-photo">
            <Image
              src="/images/budynek.jpg"
              alt="Oświetlona wieczorem fasada Gościńca w Ratuszu w Ogrodzieńcu"
              width={1346}
              height={897}
              unoptimized
              priority
            />
            <div className="photo-caption">
              <span>DAWNY RATUSZ. NOWE WSPOMNIENIA.</span>
              <span>PLAC PIŁSUDSKIEGO 17</span>
            </div>
          </div>
        </section>

        <div className="highlights" aria-label="Poznaj Gościniec">
          <div>
            <BedDouble aria-hidden="true" />
            <span>
              <strong>11 pokoi gościnnych</strong>Przestrzeń na odpoczynek
            </span>
          </div>
          <div>
            <Landmark aria-hidden="true" />
            <span>
              <strong>W historycznym ratuszu</strong>Przy rynku w Ogrodzieńcu
            </span>
          </div>
          <div>
            <Wine aria-hidden="true" />
            <span>
              <strong>Przyjęcia i spotkania</strong>W gronie najbliższych
            </span>
          </div>
        </div>

        <section id="miejsce" className="intro section-wrap">
          <p className="eyebrow dark-eyebrow">01 / NASZE MIEJSCE</p>
          <div>
            <h2>
              Niektóre miejsca
              <br />
              mają <em>własną opowieść.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                W samym sercu Ogrodzieńca, przy Placu Piłsudskiego, dawny ratusz
                otwiera drzwi dla gości. Historyczny budynek, wnętrza w stylu
                ludwikowskim i polska kuchnia tworzą tło dla spokojnego pobytu i
                rodzinnych spotkań.
              </p>
              <a
                href="#kontakt"
                className="round-link"
                aria-label="Poznaj lokalizację Gościńca"
              >
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="pokoje" className="stay section-wrap">
          <div className="room-photo">
            <Image
              src="/images/pokoj.jpg"
              width={1262}
              height={1900}
              unoptimized
              alt="Pokój gościnny w Gościńcu w Ratuszu"
              loading="lazy"
            />
            <span className="image-label">TWÓJ PRZYSTANEK NA JURZE</span>
          </div>
          <div className="section-copy">
            <p className="eyebrow dark-eyebrow">02 / POKOJE GOŚCINNE</p>
            <h2>
              Po dniu pełnym
              <br />
              wrażeń.
              <br />
              <em>Po prostu odpocznij.</em>
            </h2>
            <p>
              Na weekend we dwoje, rodzinny wyjazd czy dłuższe odkrywanie
              okolicy. W Gościńcu czeka 11 pokoi o różnej konfiguracji. Opowiedz
              nam o swoim wyjeździe — pomożemy dobrać odpowiedni pokój.
            </p>
            <div className="detail-row">
              <BedDouble size={20} aria-hidden="true" />
              <span>11 pokoi · konfigurację ustalimy przy rezerwacji</span>
            </div>
            <a className="button button-dark" href={phone}>
              Zapytaj o wolny pokój{' '}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <span className="button-note">
              Dostępność i cenę potwierdzamy telefonicznie.
            </span>
          </div>
        </section>

        <section id="przyjecia" className="events">
          <div className="section-wrap event-inner">
            <div className="section-copy">
              <p className="eyebrow">03 / PRZYJĘCIA OKOLICZNOŚCIOWE</p>
              <h2>
                Ważne chwile.
                <br />
                <em>Dobre towarzystwo.</em>
              </h2>
              <p>
                Rodzinne uroczystości i spotkania przy wspólnym stole. Dwie sale
                o historycznym charakterze i polska kuchnia — przestrzeń, w
                której najważniejsi są Twoi goście.
              </p>
              <a className="button button-outline" href={phone}>
                Porozmawiajmy o przyjęciu{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="event-image">
              <Image
                src="/images/sala.jpg"
                width={1900}
                height={700}
                unoptimized
                alt="Sala przygotowana na spotkanie w Gościńcu"
                loading="lazy"
              />
              <span>Przy wspólnym stole jest miejsce na więcej wspomnień.</span>
            </div>
          </div>
        </section>

        <section id="okolica" className="explore section-wrap">
          <div>
            <p className="eyebrow dark-eyebrow">
              04 / BLISKO NATURY I HISTORII
            </p>
            <h2>
              Rano kawa.
              <br />
              <em>Potem Jura.</em>
            </h2>
          </div>
          <div className="explore-options">
            <a href={maps} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <div>
                <h3>Zacznij od Ogrodzieńca</h3>
                <p>
                  Rynek, jurajskie krajobrazy i wyprawa w stronę zamku w
                  Podzamczu.
                </p>
                <span>Zobacz naszą lokalizację</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://roweryogrodzieniec.pl"
              target="_blank"
              rel="noreferrer"
            >
              <Bike aria-hidden="true" />
              <div>
                <h3>Przesiądź się na rower</h3>
                <p>
                  Wyrusz na szlaki Jury z lokalną wypożyczalnią rowerów
                  elektrycznych.
                </p>
                <span>Poznaj wypożyczalnię</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow dark-eyebrow">DO ZOBACZENIA W GOŚCIŃCU</p>
              <h2>
                Dobry pobyt zaczyna się
                <br />
                <em>od jednej rozmowy.</em>
              </h2>
            </div>
            <div className="contact-details">
              <a href={phone} className="phone-number">
                <Phone size={22} aria-hidden="true" />
                506 046 200
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <p>
                Gościniec w Ratuszu
                <br />
                Plac Piłsudskiego 17
                <br />
                42-440 Ogrodzieniec
              </p>
              <a
                href={maps}
                target="_blank"
                rel="noreferrer"
                className="underlined-link"
              >
                Wyznacz trasę <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href="#top" className="brand">
          <Landmark strokeWidth={1.2} aria-hidden="true" />
          <span>
            Gościniec <em>w Ratuszu</em>
          </span>
        </a>
        <p>Ogrodzieniec · W sercu Jury</p>
        <p className="demo-note">
          Projekt demonstracyjny — nieoficjalna propozycja nowej strony.
          <br />
          Zdjęcia i informacje: obecna witryna Gościńca. Bez rezerwacji online.
        </p>
      </footer>
    </>
  );
}
