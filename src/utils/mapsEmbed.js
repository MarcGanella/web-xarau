/**
 * Helper para generar URLs de Google Maps Embed API (iframes)
 */

/**
 * Construye una URL de Google Maps Embed API para usar en iframes
 * @param {Object} params
 * @param {string} params.address - Dirección a mostrar en el mapa
 * @param {string} params.mode - Modo del mapa: "place" o "search" (default: "place")
 * @returns {string|null} URL del mapa embed o null si falta API key
 */
export function buildGoogleEmbedMapUrl({ address, mode = "place" } = {}) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.warn("VITE_GOOGLE_MAPS_API_KEY no está definida");
    return null;
  }

  if (!address || typeof address !== "string" || address.trim() === "") {
    return null;
  }

  const q = encodeURIComponent(address.trim());

  const endpoint =
    mode === "search"
      ? "https://www.google.com/maps/embed/v1/search"
      : "https://www.google.com/maps/embed/v1/place";

  return `${endpoint}?key=${apiKey}&q=${q}`;
}

/**
 * Genera una URL de mapa embed de forma segura con validaciones
 * @param {string} address - Dirección a mostrar
 * @param {Object} options - Opciones adicionales (mode)
 * @returns {string|null} URL del mapa o null si no se puede generar
 */
export function safeGetEmbedUrl(address, options = {}) {
  return buildGoogleEmbedMapUrl({ address, ...options });
}
