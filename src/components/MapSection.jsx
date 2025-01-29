import React, { useEffect } from 'react';
import L from 'leaflet';

const MapSection = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13); // Lat, Lon, Zoom level

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('Hello! This is a Leaflet Map.')
      .openPopup();

    return () => {
      map.remove(); // Cleanup map on unmount
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapSection;
