import { useTranslation } from "react-i18next";
import heroDesktop from "../../assets/hero-desktop.jpg";
import heroTablet from "../../assets/hero-tablet.jpg";
import heroMobile from "../../assets/hero-mobile.jpg";

export default function Hero() {
  const { t } = useTranslation("home");

  const handleCtaClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <picture className="hero__bg">
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <source media="(min-width: 768px)" srcSet={heroTablet} />
        <img src={heroMobile} alt="" loading="eager" />
      </picture>
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="container">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
          <button onClick={handleCtaClick} className="btn btn-primary">
            {t("hero.cta")}
          </button>
        </div>
      </div>
      <div className="hero__wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,20 480,20 720,64 C960,108 1200,108 1440,64 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
