import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./zonaDetalle.css";

export default function ZonaDetalle() {
  const { t } = useTranslation("zoneDetail");

  const images = [
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&h=500&fit=crop",
  ];

  const dgtLinks = [
    {
      label: t("dgtLinks.safety"),
      url: "https://www.dgt.es/muevete-con-seguridad/conviertete-en-un-buen-conductor/percepcion-riesgo/",
    },
    {
      label: t("dgtLinks.test"),
      url: "https://sedeapl.dgt.gob.es/WEB_EXAM_AUTO/service/TiposExamenesServlet",
    },
    {
      label: t("dgtLinks.qualification"),
      url: "https://sedeapl.dgt.gob.es:7443/WEB_NOTP_CONSULTA/consultaNota.faces",
    },
    {
      label: t("dgtLinks.points"),
      url: "https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/como-funciona-el-permiso-por-puntos/",
    },
    { label: t("dgtLinks.app"), url: "https://sede.dgt.gob.es/es/appmidgt/" },
  ];

  return (
    <div className="zona-detalle">
      <div className="zona-detalle__breadcrumb">
        <div className="container">
          <Link to="/">{t("breadcrumb.home")}</Link>
          <span className="separator">/</span>
          <Link to="/zonas">{t("breadcrumb.zones")}</Link>
          <span className="separator">/</span>
          <span>{t("breadcrumb.current")}</span>
        </div>
      </div>

      <div className="zona-detalle__content">
        <div className="container">
          <h1>{t("title")}</h1>

          <section className="zona-detalle__section">
            <h2>{t("departure.title")}</h2>
            <p className="zona-detalle__street">{t("departure.street")}</p>
            <p>{t("departure.description1")}</p>
            <p>{t("departure.description2")}</p>
          </section>

          <section className="zona-detalle__gallery">
            <div className="gallery-grid">
              {images.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt={`${t("title")} - ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>

          <aside className="zona-detalle__sidebar">
            <div className="dgt-links">
              <h3>{t("dgtLinks.title")}</h3>
              <ul>
                {dgtLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="zona-detalle__back">
            <Link to="/zonas" className="btn">
              {t("backButton")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
