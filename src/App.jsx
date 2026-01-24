// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";

// Páginas
import Home from "./pages/Home.jsx";

// import About from "./pages/About.jsx";
// import Precios from "./pages/Precios.jsx";
// import Zonas from "./pages/Zonas.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="header-content">
        <Header />
      </div>
      <div className="main-content">
        <ScrollToTop />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* cuando añadas el resto:
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/zonas" element={<Zonas />} />
          */}

            {/* 404 básico */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
