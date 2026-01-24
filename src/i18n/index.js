import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import esCommon from "./resources/es/common.json";
import caCommon from "./resources/ca/common.json";
import esHome from "./resources/es/home.json";
import caHome from "./resources/ca/home.json";
import esZones from "./resources/es/zones.json";
import caZones from "./resources/ca/zones.json";
import esZoneDetail from "./resources/es/zoneDetail.json";
import caZoneDetail from "./resources/ca/zoneDetail.json";

const resources = {
  es: {
    common: esCommon,
    home: esHome,
    zones: esZones,
    zoneDetail: esZoneDetail,
  },
  ca: {
    common: caCommon,
    home: caHome,
    zones: caZones,
    zoneDetail: caZoneDetail,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    lng: "es",
    ns: ["common", "home", "zones", "zoneDetail"],
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
