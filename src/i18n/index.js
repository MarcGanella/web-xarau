import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import esCommon from "./resources/es/common.json";
import caCommon from "./resources/ca/common.json";
import esHome from "./resources/es/home.json";
import caHome from "./resources/ca/home.json";

const resources = {
  es: { common: esCommon, home: esHome },
  ca: { common: caCommon, home: caHome },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    lng: "es",
    ns: ["common", "home"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      // orden de detección: ?lang=ca | localStorage | navigator
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
  });

// Mantén <html lang="..."> actualizado:
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng || "es");
});

export default i18n;
