var map = L.map("map").setView([24.7136, 46.6753], 6);

// Add a Carto Voyager tile layer
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
  }
).addTo(map);

// Define a blue icon for markers
var blueIcon = L.icon({
  iconUrl: "./assets/images/pinPoint.png",
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
    "Group 3, Marker 4"
  )
);
group3.addLayer(
  L.marker([23.9936, 49.7553], { icon: blueIcon }).bindPopup(
    "Group 3, Marker 5"
  )
);

// Add the cluster groups to the map
map.addLayer(group1);
map.addLayer(group2);
map.addLayer(group3);

// Create custom control with radio buttons
var customControl = L.Control.extend({
  options: {
    position: "topright",
  },
  onAdd: function (map) {
    var container = L.DomUtil.create("div", "custom-control");

    container.innerHTML = `
          <div class="option ps-4"><input type="radio" name="group" id="available" /><label for="available"><span class="square available"></span> متاح</label></div>
          <div class="option"><input type="radio" name="group" id="sold" /><label for="sold"><span class="square sold"></span> مباع</label></div>
          <div class="option"><input type="radio" name="group" id="all" checked /><label for="all"><span class="square all"></span> الكل</label></div>
        `;

    return container;
  },
});

// Add custom control to map
map.addControl(new customControl());

// Function to handle radio button changes
document
  .querySelector(".custom-control")
  .addEventListener("change", function (e) {
    if (e.target.name === "group") {
      if (e.target.id === "available") {
        map.addLayer(group1);
        map.removeLayer(group2);
        map.removeLayer(group3);
      } else if (e.target.id === "sold") {
        map.removeLayer(group1);
        map.addLayer(group2);
        map.removeLayer(group3);
      } else if (e.target.id === "all") {
        map.addLayer(group1);
        map.addLayer(group2);
        map.addLayer(group3);
      }
    }
  });
