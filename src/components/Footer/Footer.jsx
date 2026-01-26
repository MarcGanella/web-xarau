import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import zonasDeExamenImg from "../../assets/zonasdeexamen.png";
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__links">
            <Link to="/privacidad" className="footer__link">
              {t("footer.privacy")}
            </Link>
            <Link to="/nota-legal" className="footer__link">
              {t("footer.legal")}
            </Link>
            <Link to="/cookies" className="footer__link">
              {t("footer.cookies")}
            </Link>
            <Link to="/devoluciones" className="footer__link">
              {t("footer.returns")}
            </Link>
          </div>

          <div className="footer__partner">
            <a
              href="https://zonasdeexamen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__partner-link"
            >
              <img
                src={zonasDeExamenImg}
                alt="Zonas de examen"
                className="footer__partner-img"
              />
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          <p>© {new Date().getFullYear()} Autoescuela XARAU</p>
        </div>
      </div>
    </footer>
  );
}
