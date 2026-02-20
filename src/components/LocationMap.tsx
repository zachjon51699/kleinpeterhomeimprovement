/**
 * Embeds an OpenStreetMap view for a given location (no API key required).
 * bbox = west, south, east, north
 */
const LOCATION_MAPS: Record<string, { bbox: string; marker: string; query: string }> = {
  'baton-rouge': {
    bbox: '-91.29,30.36,-91.09,30.54',
    marker: '30.4515,-91.1871',
    query: 'Baton Rouge, LA',
  },
  'new-orleans': {
    bbox: '-90.22,29.85,-89.92,30.05',
    marker: '29.9511,-90.0715',
    query: 'New Orleans, LA',
  },
  covington: {
    bbox: '-90.15,30.41,-90.05,30.54',
    marker: '30.4755,-90.1004',
    query: 'Covington, LA',
  },
  gonzales: {
    bbox: '-90.97,30.18,-90.87,30.30',
    marker: '30.2385,-90.9201',
    query: 'Gonzales, LA',
  },
  hammond: {
    bbox: '-90.51,30.44,-90.41,30.57',
    marker: '30.5044,-90.4612',
    query: 'Hammond, LA',
  },
  mandeville: {
    bbox: '-90.12,30.30,-90.01,30.42',
    marker: '30.3582,-90.0659',
    query: 'Mandeville, LA',
  },
  prairieville: {
    bbox: '-91.02,30.24,-90.92,30.37',
    marker: '30.3030,-90.9721',
    query: 'Prairieville, LA',
  },
  slidell: {
    bbox: '-89.83,30.21,-89.73,30.34',
    marker: '30.2752,-89.7812',
    query: 'Slidell, LA',
  },
};

/** CSS filter presets to tint the map (applied to the iframe container) */
export const MAP_STYLES = {
  default: '',
  grayscale: 'grayscale(1)',
  muted: 'saturate(0.75) brightness(1.05)',
  warm: 'sepia(0.2) saturate(0.9)',
  cool: 'hue-rotate(190deg) saturate(0.85)',
} as const;

type LocationMapProps = {
  locationKey: string;
  title?: string;
  className?: string;
  /** Preset: default | grayscale | muted | warm | cool. Or any CSS filter string. */
  mapStyle?: keyof typeof MAP_STYLES | string;
};

export default function LocationMap({ locationKey, title, className = '', mapStyle = 'muted' }: LocationMapProps) {
  const map = LOCATION_MAPS[locationKey];
  if (!map) return null;

  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(map.bbox)}&layer=mapnik&marker=${map.marker}`;
  const filter = mapStyle in MAP_STYLES ? MAP_STYLES[mapStyle as keyof typeof MAP_STYLES] : mapStyle;

  return (
    <div className={`rounded-2xl overflow-hidden h-96 bg-gray-200 ${className}`}>
      <div className="w-full h-full" style={filter ? { filter } : undefined}>
        <iframe
          title={title || `${map.query} service area map`}
          src={embedUrl}
          className="w-full h-full border-0 block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {title && (
        <div className="px-3 py-2 bg-white/90 text-center text-sm font-semibold text-gray-800 border-t">
          {title} Service Area
        </div>
      )}
    </div>
  );
}

export { LOCATION_MAPS };
