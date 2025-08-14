'use client';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

// Coordenadas de las ciudades
const cities = [
  { name: 'Bogotá', lat: 4.7110, lng: -74.0721 },
  { name: 'Medellín', lat: 6.2476, lng: -75.5658 },
  { name: 'Cali', lat: 3.4516, lng: -76.5320 },
  { name: 'Cartagena', lat: 10.3910, lng: -75.4794 },
  { name: 'Barranquilla', lat: 10.9685, lng: -74.7813 },
  { name: 'Bucaramanga', lat: 7.1193, lng: -73.1227 },
  { name: 'Riohacha', lat: 11.5444, lng: -72.9072 },
  { name: 'Valledupar', lat: 10.4631, lng: -73.2532 },
  { name: 'Montería', lat: 8.7575, lng: -75.8900 },
  { name: 'Quibdó', lat: 5.6919, lng: -76.6583 },
  { name: 'Manizales', lat: 5.0703, lng: -75.5138 },
  { name: 'Popayán', lat: 2.4448, lng: -76.6147 },
  { name: 'Pasto', lat: 1.2136, lng: -77.2811 },
  { name: 'Florencia', lat: 1.6144, lng: -75.6062 },
  { name: 'Leticia', lat: -4.2153, lng: -69.9408 },
  { name: 'Mitú', lat: 1.2578, lng: -70.2334 },
  { name: 'Villavicencio', lat: 4.1420, lng: -73.6266 },
  { name: 'Santa Marta', lat: 11.2408, lng: -74.1990 },
  { name: 'San José del Guaviare', lat: 2.5701, lng: -72.6416 }
];

export default function ColombiaMap() {
  // Centro de Colombia y zoom inicial
  const center: [number, number] = [4.5709, -74.2973];
  const zoom = 6;

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker 
            key={city.name} 
            position={[city.lat, city.lng]} 
            icon={redIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600">Zona de impacto</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
