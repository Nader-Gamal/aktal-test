// Initialize the map centered on Saudi Arabia
var map = L.map("map").setView([24.7136, 46.6753], 6);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Define a blue icon for markers
var blueIcon = L.icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Example blue marker icon URL
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Create marker cluster groups
var group1 = L.markerClusterGroup();
var group2 = L.markerClusterGroup();
var group3 = L.markerClusterGroup();

// Add markers to group1
group1.addLayer(
  L.marker([24.7136, 46.6753], { icon: blueIcon }).bindPopup(
    "Group 1, Marker 1"
  )
);
group1.addLayer(
  L.marker([24.7236, 46.6853], { icon: blueIcon }).bindPopup(
    "Group 1, Marker 2"
  )
);
group1.addLayer(
  L.marker([24.7336, 46.6953], { icon: blueIcon }).bindPopup(
    "Group 1, Marker 3"
  )
);
group1.addLayer(
  L.marker([24.7436, 46.6553], { icon: blueIcon }).bindPopup(
    "Group 1, Marker 4"
  )
);
// Add markers to group2
group2.addLayer(
  L.marker([24.8436, 47.7053], { icon: blueIcon }).bindPopup(
    "Group 2, Marker 1"
  )
);
group2.addLayer(
  L.marker([24.8536, 47.7153], { icon: blueIcon }).bindPopup(
    "Group 2, Marker 2"
  )
);
group2.addLayer(
  L.marker([24.8636, 47.7253], { icon: blueIcon }).bindPopup(
    "Group 2, Marker 3"
  )
);

// Add markers to group3
group3.addLayer(
  L.marker([23.7736, 49.7353], { icon: blueIcon }).bindPopup(
    "Group 3, Marker 1"
  )
);
group3.addLayer(
  L.marker([23.7836, 49.7453], { icon: blueIcon }).bindPopup(
    "Group 3, Marker 2"
  )
);
group3.addLayer(
  L.marker([23.7936, 49.7553], { icon: blueIcon }).bindPopup(
    "Group 3, Marker 3"
  )
);
group3.addLayer(
  L.marker([23.8936, 49.7553], { icon: blueIcon }).bindPopup(
    "Group 3, Marker 3"
  )
);
group3.addLayer(
  L.marker([23.9936, 49.7553], { icon: blueIcon }).bindPopup(
    "Group 3, Marker 3"
  )
);

// Add the cluster groups to the map
map.addLayer(group1);
map.addLayer(group2);
map.addLayer(group3);
