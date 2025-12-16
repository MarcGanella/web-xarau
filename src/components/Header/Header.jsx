import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5"; // icono de idioma
import logo from "../../assets/xarau-logo.svg";
import menuIcon from "../../assets/menu.png";
import "./header.css";
const LANG_ICON_SRC = `${import.meta.env.BASE_URL}tierra.png`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation("common");

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");
  const close = () => setOpen(false);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  const lang = i18n.resolvedLanguage || "es";

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={close}>
            <img src={logo} alt={t("brand")} />
          </Link>
        </div>

        {/* Selector de idioma para DESKTOP (a la derecha del menú) */}
        <div className="lang-switch lang-desktop">
          <img
            src={LANG_ICON_SRC}
            alt=""
            aria-hidden="true"
            className="lang-icon"
          />
          <button
            type="button"
            className={`lang ${lang === "es" ? "active" : ""}`}
            onClick={() => changeLang("es")}
            aria-pressed={lang === "es"}
          >
            {t("lang.es")}
          </button>
          <span className="sep">|</span>
          <button
            type="button"
            className={`lang ${lang === "ca" ? "active" : ""}`}
            onClick={() => changeLang("ca")}
            aria-pressed={lang === "ca"}
          >
            {t("lang.ca")}
          </button>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <img
            src={menuIcon}
            alt=""
            className="nav-toggle__img"
            aria-hidden="true"
          />
        </button>

        <nav id="site-nav" className={`nav ${open ? "open" : ""}`}>
          <div className="container">
            <Link
              to="/quienes-somos"
              className={isActive("/quienes-somos") ? "active" : ""}
              onClick={close}
            >
              {t("menu.about")}
            </Link>
            <Link
              to="/precios"
              className={isActive("/precios") ? "active" : ""}
              onClick={close}
            >
              {t("menu.prices")}
            </Link>
            <Link
              to="/zonas"
              className={isActive("/zonas") ? "active" : ""}
              onClick={close}
            >
              {t("menu.zones")}
            </Link>

            {/* Selector de idioma para MÓVIL (dentro del panel, al final) */}
            <div className="lang-switch lang-mobile">
              <img
                src={LANG_ICON_SRC}
                alt=""
                aria-hidden="true"
                className="lang-icon"
              />
              <div className="lang-buttons">
                <button
                  type="button"
                  className={`lang ${lang === "es" ? "active" : ""}`}
                  onClick={() => {
                    changeLang("es");
                    close();
                  }}
                  aria-pressed={lang === "es"}
                >
                  {t("lang.es")}
                </button>
                <span className="sep">|</span>
                <button
                  type="button"
                  className={`lang ${lang === "ca" ? "active" : ""}`}
                  onClick={() => {
                    changeLang("ca");
                    close();
                  }}
                  aria-pressed={lang === "ca"}
                >
                  {t("lang.ca")}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
