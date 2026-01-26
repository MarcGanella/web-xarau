import { safeGetEmbedUrl } from "../utils/mapsEmbed";

export default function MapEmbed({ address, height = 360, mode = "place" }) {
  const src = safeGetEmbedUrl(address, { mode });

  if (!src) {
    return <div className="map-placeholder">Mapa no disponible</div>;
  }

  return (
    <iframe
      src={src}
      title={`Mapa de ${address}`}
      width="100%"
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
