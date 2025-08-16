'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import L, { Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Place } from '@/data/places';
import { places } from '@/data/places';

// Solucionar el problema de los iconos de Leaflet en Next.js
const iconDefault = L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: string };
delete iconDefault._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Crear icono personalizado rojo
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type ResolvedPlace = { label: string; lat: number; lng: number };

function getCacheKey(query: string): string {
  return `geocode:${query}`;
}

async function geocode(query: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&addressdetails=0&namedetails=0`;
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) return null;
    const data: Array<{ lat: string; lon: string } > = await res.json();
    if (!data || data.length === 0) return null;
    const first = data[0];
    const lat = parseFloat(first.lat);
    const lng = parseFloat(first.lon);
    if (Number.isFinite(lat) && Number.isFinite(lng)) return { lat, lng };
    return null;
  } catch {
    return null;
  }
}

export default function ColombiaMap() {
  // Centro aproximado de Latinoamérica y zoom inicial amplio
  const center: [number, number] = [4.5709, -74.2973];
  const zoom = 4;

  const mapRef = useRef<LeafletMap | null>(null);
  const [markers, setMarkers] = useState<ResolvedPlace[]>([]);

  // Para evitar duplicados por etiquetas similares
  const uniquePlaces: Place[] = useMemo(() => {
    const seen = new Set<string>();
    const list: Place[] = [];
    for (const p of places) {
      const key = p.label.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      list.push(p);
    }
    return list;
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function resolveAll() {
      const resolved: ResolvedPlace[] = [];

      for (let i = 0; i < uniquePlaces.length; i++) {
        const place = uniquePlaces[i];
        const cacheKey = getCacheKey(place.query);
        let coords: { lat: number; lng: number } | null = null;

        try {
          const cached = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;
          if (cached) {
            coords = JSON.parse(cached);
          }
        } catch {}

        if (!coords) {
          // espaciar peticiones para ser amables con el servicio
          coords = await geocode(place.query);
          if (coords) {
            try {
              localStorage.setItem(cacheKey, JSON.stringify(coords));
            } catch {}
          }
          // pequeña espera entre requests
          await new Promise((r) => setTimeout(r, 150));
        }

        if (coords && !cancelled) {
          resolved.push({ label: place.label, ...coords });
          // actualizar incrementalmente para mostrar puntos a medida que cargan
          setMarkers((prev) => {
            const next = [...prev, { label: place.label, ...coords }];
            // ajustar bounds cuando hay suficientes puntos
            if (mapRef.current && next.length >= 2) {
              const bounds = L.latLngBounds(next.map((m) => [m.lat, m.lng] as [number, number]));
              mapRef.current.fitBounds(bounds, { padding: [24, 24] });
            }
            return next;
          });
        }
      }
      return resolved;
    }

    resolveAll();
    return () => {
      cancelled = true;
    };
  }, [uniquePlaces]);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((city) => (
          <Marker 
            key={`${city.label}-${city.lat}-${city.lng}`} 
            position={[city.lat, city.lng]}
            icon={redIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{city.label}</h3>
                <p className="text-sm text-gray-600">Zona de impacto</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
