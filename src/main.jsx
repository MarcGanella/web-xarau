import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
//import { AuthProvider } from "./contexts/AuthContext.jsx";

import "./index.css";
import App from "./App.jsx";
import "./i18n";

const base = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
    {/* </AuthProvider> */}
  </StrictMode>
);
