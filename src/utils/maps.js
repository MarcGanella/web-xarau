/**
 * Helper para generar URLs de Google Maps Static API
 * basadas en direcciones de texto.
 */

/**
 * Construye una URL de Google Maps Static API
 * @param {Object} params
 * @param {string} params.address - Dirección a mostrar en el mapa
 * @param {number} params.width - Ancho de la imagen en píxeles (default: 640)
 * @param {number} params.height - Alto de la imagen en píxeles (default: 360)
 * @param {number} params.zoom - Nivel de zoom del mapa (default: 15)
 * @returns {string|null} URL del mapa estático o null si falta API key
 */
export function buildGoogleStaticMapUrl({
  address,
  width = 640,
  height = 360,
  zoom = 15,
}) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.warn("VITE_GOOGLE_MAPS_API_KEY no está definida");
    return null;
  }

  if (!address) {
    return null;
  }

  const params = new URLSearchParams({
    center: address,
    zoom: zoom.toString(),
    size: `${width}x${height}`,
    scale: "2",
    maptype: "roadmap",
    markers: `color:red|${address}`,
    key: apiKey,
  });

  return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
}

/**
 * Genera una URL de mapa de forma segura con validaciones
 * @param {string} address - Dirección a mostrar
 * @param {Object} options - Opciones adicionales (width, height, zoom)
 * @returns {string|null} URL del mapa o null si no se puede generar
 */
export function safeGetMapUrl(address, options = {}) {
  if (!address || typeof address !== "string" || address.trim() === "") {
    return null;
  }

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return null;
  }

  return buildGoogleStaticMapUrl({
    address: address.trim(),
    ...options,
  });
}
