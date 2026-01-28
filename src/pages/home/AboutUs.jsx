import { useTranslation } from "react-i18next";
import xarauCars from "../../assets/xarauCars.jpg";

export default function AboutUs() {
  const { t } = useTranslation("home");
  const bullets = t("about.bullets", { returnObjects: true });

  return (
    <section
      className="about-us"
      id="quienes-somos"
      aria-labelledby="about-title"
    >
      <div className="about-us__wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,0 L0,0 Z"
            fill="currentColor"
            opacity="0.1"
          />
          <path
            d="M0,80 C240,112 480,112 720,80 C960,48 1200,48 1440,80 L1440,0 L0,0 Z"
            fill="currentColor"
            opacity="0.15"
          />
        </svg>
      </div>
      <div className="container">
        <div className="about-us__content">
          <div className="about-us__text">
            <h2 id="about-title" className="about-us__title">
              {t("about.title")}
            </h2>
            <p className="about-us__intro">{t("about.p1")}</p>
            <ul className="about-us__list">
              {bullets.map((bullet, i) => (
                <li key={i}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-us__media">
            <img
              src={xarauCars}
              alt="Autoescola XARAU"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
