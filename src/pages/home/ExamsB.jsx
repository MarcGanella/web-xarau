import { useTranslation } from "react-i18next";

export default function ExamsB() {
  const { t } = useTranslation("home");
  const whatItems = t("exams.what.items", { returnObjects: true });
  const whereItems = t("exams.where.items", { returnObjects: true });

  return (
    <section className="exams-b" aria-labelledby="exams-title">
      <div className="container">
        <h2 id="exams-title" className="exams-b__title">
          {t("exams.title")}
        </h2>

        <div className="exams-b__grid">
          <article className="exam-card">
            <h3 className="exam-card__title">{t("exams.what.h")}</h3>
            <ul className="exam-card__list">
              {whatItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="exam-card">
            <h3 className="exam-card__title">{t("exams.where.h")}</h3>
            <ul className="exam-card__list">
              {whereItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="exams-b__road-divider" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="roadDash"
                x="0"
                y="0"
                width="40"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="16"
                  y="0"
                  width="8"
                  height="20"
                  fill="#fff"
                  opacity="0.8"
                />
                <rect
                  x="16"
                  y="30"
                  width="8"
                  height="20"
                  fill="#fff"
                  opacity="0.8"
                />
                <rect
                  x="16"
                  y="60"
                  width="8"
                  height="20"
                  fill="#fff"
                  opacity="0.8"
                />
              </pattern>
            </defs>
            <path
              d="M0,10 Q300,40 600,10 T1200,10 L1200,70 Q900,40 600,70 T0,70 Z"
              fill="currentColor"
              opacity="0.15"
            />
            <rect x="0" y="30" width="1200" height="20" fill="url(#roadDash)" />
          </svg>
          <div className="mini-car" role="presentation">
            <svg width="60" height="32" viewBox="0 0 60 32" fill="none">
              <path
                d="M10 20 L15 12 L25 12 L30 8 L40 8 L45 12 L50 20 L48 24 L12 24 Z"
                fill="currentColor"
                opacity="0.7"
              />
              <circle cx="18" cy="24" r="4" fill="currentColor" />
              <circle cx="42" cy="24" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
