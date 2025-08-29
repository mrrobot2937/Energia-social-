'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import L, { Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { countries, getMajorCities, getDepartmentsByCountry, getCitiesByDepartment, type City, type Country, type Department } from '@/data/placesOrganized';

// Solucionar el problema de los iconos de Leaflet en Next.js
const iconDefault = L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: string };
delete iconDefault._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Crear iconos personalizados
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [20, 33],
  iconAnchor: [10, 33],
  popupAnchor: [1, -28],
  shadowSize: [33, 33]
});

type ResolvedPlace = { 
  label: string; 
  lat: number; 
  lng: number; 
  isMajor?: boolean;
  country?: string;
  department?: string;
};

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
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set());
  const [expandedDepartments, setExpandedDepartments] = useState<Set<string>>(new Set());
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Obtener solo ciudades principales inicialmente
  const citiesToShow = useMemo(() => {
    const cities: City[] = [];
    
    // Primero agregamos las ciudades principales
    cities.push(...getMajorCities());
    
    // Luego agregamos las ciudades de los departamentos expandidos
    countries.forEach(country => {
      if (expandedCountries.has(country.name)) {
        country.departments.forEach(dept => {
          const deptKey = `${country.name}-${dept.name}`;
          if (expandedDepartments.has(deptKey)) {
            // Agregar todas las ciudades del departamento que no sean principales
            dept.cities.forEach(city => {
              if (!city.isMajorCity) {
                cities.push(city);
              }
            });
          }
        });
      }
    });
    
    return cities;
  }, [expandedCountries, expandedDepartments]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    async function resolveAll() {
      const resolved: ResolvedPlace[] = [];

      for (let i = 0; i < citiesToShow.length; i++) {
        const city = citiesToShow[i];
        const cacheKey = getCacheKey(city.query);
        let coords: { lat: number; lng: number } | null = null;

        try {
          const cached = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;
          if (cached) {
            coords = JSON.parse(cached);
          }
        } catch {}

        if (!coords) {
          coords = await geocode(city.query);
          if (coords) {
            try {
              localStorage.setItem(cacheKey, JSON.stringify(coords));
            } catch {}
          }
          // pequeña espera entre requests
          await new Promise((r) => setTimeout(r, 150));
        }

        if (coords && !cancelled) {
          resolved.push({ 
            label: city.name, 
            ...coords,
            isMajor: city.isMajorCity
          });
          
          setMarkers((prev) => {
            const next = [...prev.filter(m => m.label !== city.name), { 
              label: city.name, 
              ...coords,
              isMajor: city.isMajorCity
            }];
            return next;
          });
        }
      }
      
      setLoading(false);
      return resolved;
    }

    resolveAll();
    return () => {
      cancelled = true;
    };
  }, [citiesToShow]);

  const toggleCountry = (countryName: string) => {
    setExpandedCountries(prev => {
      const next = new Set(prev);
      if (next.has(countryName)) {
        next.delete(countryName);
        // También colapsar todos los departamentos de este país
        countries.find(c => c.name === countryName)?.departments.forEach(dept => {
          setExpandedDepartments(prev2 => {
            const next2 = new Set(prev2);
            next2.delete(`${countryName}-${dept.name}`);
            return next2;
          });
        });
      } else {
        next.add(countryName);
      }
      return next;
    });
    setSelectedCountry(countryName);
  };

  const toggleDepartment = (countryName: string, deptName: string) => {
    const key = `${countryName}-${deptName}`;
    setExpandedDepartments(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Presencia en Latinoamérica</h3>
        <p className="text-sm text-gray-600 mb-3">
          El mapa muestra las ciudades principales. Haz clic en un país para ver sus departamentos y municipios.
        </p>
        
        {/* Lista de países */}
        <div className="flex flex-wrap gap-2 mb-3">
          {countries.map(country => (
            <button
              key={country.name}
              onClick={() => toggleCountry(country.name)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                expandedCountries.has(country.name) 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {country.name} {expandedCountries.has(country.name) ? '−' : '+'}
            </button>
          ))}
        </div>
        
        {/* Lista de departamentos del país seleccionado */}
        {selectedCountry && expandedCountries.has(selectedCountry) && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-medium mb-2">{selectedCountry} - Departamentos:</h4>
            <div className="flex flex-wrap gap-2">
              {getDepartmentsByCountry(selectedCountry).map(dept => {
                const key = `${selectedCountry}-${dept.name}`;
                const cityCount = dept.cities.filter(c => !c.isMajorCity).length;
                if (cityCount === 0) return null;
                
                return (
                  <button
                    key={dept.name}
                    onClick={() => toggleDepartment(selectedCountry, dept.name)}
                    className={`px-2 py-1 rounded text-xs transition-colors ${
                      expandedDepartments.has(key)
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'
                    }`}
                  >
                    {dept.name} ({cityCount}) {expandedDepartments.has(key) ? '−' : '+'}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        
        {loading && (
          <div className="text-sm text-gray-500 mt-2">
            Cargando ubicaciones...
          </div>
        )}
      </div>
      
      <div className="h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
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
              icon={city.isMajor ? redIcon : blueIcon}
            >
              <Popup>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">{city.label}</h3>
                  <p className="text-sm text-gray-600">
                    {city.isMajor ? 'Ciudad principal' : 'Municipio con proyectos'}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
