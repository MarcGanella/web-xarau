import { useTranslation } from "react-i18next";
import miniCar from "../../assets/mini-car.png";

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
            viewBox="0 0 1200 140"
            preserveAspectRatio="xMidYMid meet"
            className="road-svg"
          >
            <defs>
              <path
                id="roadPath"
                d="M1200,70 C900,30 750,110 600,70 C450,30 300,110 0,70"
              />
            </defs>

            <path
              d="M1200,70 C900,30 750,110 600,70 C450,30 300,110 0,70"
              stroke="currentColor"
              strokeWidth="50"
              strokeLinecap="round"
              fill="none"
              opacity="0.15"
            />

            <path
              d="M1200,70 C900,30 750,110 600,70 C450,30 300,110 0,70"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
              strokeDasharray="20 16"
              strokeLinecap="round"
              opacity="0.85"
            ></path>

            <g transform="translate(-32,-18)" aria-hidden="true">
              <image href={miniCar} width="64" height="36">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  keySplines="0.42 0 0.58 1"
                  calcMode="spline"
                >
                  <mpath href="#roadPath" />
                </animateMotion>
              </image>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
