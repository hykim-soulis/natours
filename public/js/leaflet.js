/* eslint-disable */
export const displayMap = (locations) => {
  const map = L.map('map', { zoomControl: false });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: '/img/pin.png',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [-1, -50], // point from which the popup should open relative to the iconAnchor
  });

  const points = [];

  locations.forEach((loc) => {
    // Create points
    points.push([loc.coordinates[1], loc.coordinates[0]]);

    // Create Popup
    const popup = L.popup()
      .setLatLng([loc.coordinates[1], loc.coordinates[0]])
      .setContent(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .openOn(map);

    // Add marker(LatLng)
    L.marker([loc.coordinates[1], loc.coordinates[0]], { icon: myIcon })
      .addTo(map)
      .bindPopup(popup, {
        autoClose: false,
        className: 'mapPopup',
      })
      .openPopup();
  });

  // Extend map bounds to include current location
  const bounds = L.latLngBounds(points).pad(0.5);
  map.fitBounds(bounds);

  // Disable scroll on map
  map.scrollWheelZoom.disable();
};
