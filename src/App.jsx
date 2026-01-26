// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Páginas
import Home from "./pages/Home.jsx";
import ZonasExamen from "./components/ZonasExamen/ZonasExamen.jsx";
import ZonaDetalle from "./components/ZonasExamen/ZonaDetalle.jsx";

// Páginas legales
import Privacy from "./pages/legal/Privacy.jsx";
import LegalNotice from "./pages/legal/LegalNotice.jsx";
import Cookies from "./pages/legal/Cookies.jsx";
import Returns from "./pages/legal/Returns.jsx";

// import About from "./pages/About.jsx";
// import Precios from "./pages/Precios.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="app-layout">
      <div className="header-content">
        <Header />
      </div>
      <div className="main-content">
        <ScrollToTop />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zonas" element={<ZonasExamen />} />
            <Route path="/zonas/:slug" element={<ZonaDetalle />} />

            {/* Rutas legales */}
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/nota-legal" element={<LegalNotice />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/devoluciones" element={<Returns />} />

            {/* cuando añadas el resto:
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/precios" element={<Precios />} />
          */}

            {/* 404 básico */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
