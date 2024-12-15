// Initialiseer de kaart op het opgegeven adres
const map = L.map('map').setView([51.181927, 4.364613], 11); // Zoomniveau iets verder uitgezoomd

// Voeg de kaartlaag toe
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Voeg een grote rode cirkel toe rond het adres
L.circle([51.181927, 4.364613], {
  color: 'red', // Randkleur
  fillColor: '#f03', // Vulkleur
  fillOpacity: 0.4, // Doorzichtigheid
  radius: 1500 // Grote straal: 1.5 kilometer
}).addTo(map);

let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup("<b>AP-Hogeschool").openPopup();