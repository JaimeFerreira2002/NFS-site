import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapIcon from "../assets/images/mapIcon.png";

const MapComponent = ({ mapCenter, mapZoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,

        TouchZoom: false,

        center: mapCenter,
        zoom: mapZoom
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: mapIcon,
        iconSize: [100, 100],
        iconAnchor: [45, 85],
        popupAnchor: [1, -50]
      });

      L.marker(mapCenter, { icon: customIcon })
        .addTo(map)
        .bindPopup('<div class="custom-popup"><a href="https://www.google.com/maps/?q=' + mapCenter[0] + ',' + mapCenter[1] + '" target="_blank">Open in Google Maps</a></div>')
    }
  }, [mapCenter, mapZoom]); // Dependencies array ensures effect runs only if these values change

  return <div id="map" ref={mapRef} style={{ height: '50vh' }}></div>;
};

export default MapComponent;
