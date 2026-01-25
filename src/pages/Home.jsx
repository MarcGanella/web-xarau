import { useTranslation } from "react-i18next";
import "./home.css";

import heroMobile from "../assets/hero-mobile.jpg";
import heroTablet from "../assets/hero-tablet.jpg";
import heroDesktop from "../assets/hero-desktop.jpg";
export default function Home() {
  const { t } = useTranslation("home");

  const benefits = t("benefits.items", { returnObjects: true });
  const examWhat = t("exams.what.items", { returnObjects: true });
  const examWhere = t("exams.where.items", { returnObjects: true });
  const aboutBullets = t("about.bullets", { returnObjects: true });

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <picture>
          <source media="(min-width:1200px)" srcSet={heroDesktop} />
          <source media="(min-width:768px)" srcSet={heroTablet} />
          <img src={heroMobile} alt={t("hero.title")} loading="eager" />
        </picture>

        <div className="container hero__content">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
          <a className="btn btn-primary" href="#contacto">
            {t("hero.cta")}
          </a>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="section">
        <div className="container">
          <h2>{t("benefits.title")}</h2>
          <ul className="benefits">
            {benefits.map((b, i) => (
              <li key={i}>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXÁMENES */}
      <section className="section section--alt" id="examenes">
        <div className="container">
          <h2>{t("exams.title")}</h2>

          <div className="exam-grid">
            <div className="card">
              <h3>{t("exams.what.h")}</h3>
              <ul className="list">
                {examWhat.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>{t("exams.where.h")}</h3>
              <ul className="list">
                {examWhere.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="section section--muted">
        <div className="container">
          <h2>{t("about.title")}</h2>
          <p>{t("about.p1")}</p>
          <ul className="list">
            {aboutBullets.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section" id="contacto">
        <div className="container contact">
          <div>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.p")}</p>
            <ul className="contact__list">
              <li>
                <strong>Dirección:</strong> {t("contact.address")}
              </li>
              <li>
                <strong>{t("contact.phoneLabel")}:</strong>{" "}
                <a href="tel:938315658">93 831 56 58</a>
              </li>
              <li>
                <strong>{t("contact.emailLabel")}:</strong>{" "}
                <a href="mailto:autoescolaxarau@gmail.com">
                  autoescolaxarau@gmail.com
                </a>
              </li>
              <li>
                <strong>{t("contact.hoursLabel")}:</strong> 09:30–13:30 ·
                17:00–20:30
              </li>
            </ul>
            <a className="btn" href="tel:938315658">
              {t("contact.callNow")}
            </a>
          </div>
          <div className="contact__map">
            <div className="map-placeholder">Mapa / Imagen</div>
          </div>
        </div>
      </section>
    </>
  );
}
