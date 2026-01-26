/**
 * Helper para construir URLs de assets considerando BASE_URL de Vite
 * (necesario para GitHub Pages con subruta /web-xarau/)
 */
export const url = (path) => {
  const base = import.meta.env.BASE_URL || "/";
  // Asegurar que base termina con / y path no empieza con /
  const cleanBase = base.endsWith("/") ? base : base + "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return cleanBase + cleanPath;
};
