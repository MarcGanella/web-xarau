import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { zonasExamenMock } from "./mockData";
import "./zonasExamen.css";

export default function ZonasExamen() {
  const { t } = useTranslation("zones");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredZones = zonasExamenMock.filter((zona) =>
    zona.ciudad.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="zonas-examen">
      <div className="zonas-examen__header">
        <div className="container">
          <h1>{t("title")}</h1>
          <p className="zonas-examen__description">{t("description")}</p>

          <div className="zonas-examen__search">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="zonas-examen__content">
        <div className="container">
          {filteredZones.length > 0 ? (
            <div className="zones-grid">
              {filteredZones.map((zona) => (
                <div key={zona.id} className="zone-card">
                  <div className="zone-card__image">
                    <img src={zona.mapaThumbnail} alt={zona.nombre} />
                  </div>
                  <div className="zone-card__content">
                    <h3 className="zone-card__title">{zona.nombre}</h3>
                    <p className="zone-card__description">{zona.descripcion}</p>
                    <Link to="/zonas/detalle" className="btn btn-detail">
                      {t("viewDetail")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>{t("noResults")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
