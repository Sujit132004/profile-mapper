// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

// Default marker icon fix for React-Leaflet
import 'leaflet/dist/leaflet.css'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'

// Custom marker
const customIcon = new Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const MapView = ({ coordinates, name }) => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow">
      <MapContainer 
         key={coordinates.join(",")} 
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates} icon={customIcon}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapView
