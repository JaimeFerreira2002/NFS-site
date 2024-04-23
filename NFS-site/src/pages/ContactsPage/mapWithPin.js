import React, { useEffect } from 'react';

const MapWithPin = () => {
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    // Add a marker
    const marker = new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map,
      title: 'Click to view on Google Maps',
    });

    // Marker click event
    marker.addListener('click', () => {
      window.open('https://www.google.com/maps/search/?api=1&query=-34.397,150.644', '_blank');
    });
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapWithPin;
