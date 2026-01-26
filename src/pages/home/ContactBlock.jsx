import { useTranslation } from "react-i18next";
import MapEmbed from "../../components/MapEmbed";

export default function ContactBlock() {
  const { t } = useTranslation("home");

  return (
    <section
      className="contact-block"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-block__content">
          <div className="contact-block__info">
            <h2 id="contact-title" className="contact-block__title">
              {t("contact.title")}
            </h2>
            <p className="contact-block__subtitle">{t("contact.p")}</p>

            <ul className="contact-block__list">
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Dirección:</strong>
                  <span>{t("contact.address")}</span>
                </div>
              </li>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <strong>{t("contact.phoneLabel")}:</strong>
                  <a href="tel:938315658">93 831 56 58</a>
                </div>
              </li>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <strong>{t("contact.emailLabel")}:</strong>
                  <a href="mailto:autoescolaxarau@gmail.com">
                    autoescolaxarau@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <strong>{t("contact.hoursLabel")}:</strong>
                  <span>09:30–13:30 · 17:00–20:30</span>
                </div>
              </li>
            </ul>

            <a href="tel:938315658" className="btn btn-primary btn-cta">
              {t("contact.callNow")}
            </a>
          </div>

          <div className="contact-block__map">
            <MapEmbed address={t("contact.address")} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
