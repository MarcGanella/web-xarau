import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LegalNotice() {
  const { t } = useTranslation("common");

  return (
    <div
      className="container"
      style={{ padding: "40px 16px", minHeight: "60vh" }}
    >
      <h1>{t("footer.legal")}</h1>
      <p style={{ marginTop: "16px", color: "var(--muted-500)" }}>
        Contenido pendiente
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "24px",
          color: "var(--brand-600)",
        }}
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}
