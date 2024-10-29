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
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/1.jpeg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 1</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group1.addLayer(
  L.marker([24.7236, 46.6853], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/2.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 2</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group1.addLayer(
  L.marker([24.7336, 46.6953], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/4.png" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 3</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group1.addLayer(
  L.marker([24.7436, 46.6553], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/5.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 4</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);

// Add markers to group2
group2.addLayer(
  L.marker([24.8436, 47.7053], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/5.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 5</h3>
      <div class="author">
        <span class="badge bg-danger pt-1 " style="font-size: 1em;">مباع</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group2.addLayer(
  L.marker([24.8536, 47.7153], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/6.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 6</h3>
      <div class="author">
        <span class="badge bg-danger pt-1 " style="font-size: 1em;">مباع</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group2.addLayer(
  L.marker([24.8636, 47.7253], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/7.png" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 7</h3>
      <div class="author">
        <span class="badge bg-danger pt-1 " style="font-size: 1em;">مباع</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);

// Add markers to group3
group3.addLayer(
  L.marker([23.7736, 49.7353], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/3.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 8</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group3.addLayer(
  L.marker([23.7836, 49.7453], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/5.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 9</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group3.addLayer(
  L.marker([23.7936, 49.7553], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/7.png" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 9</h3>
      <div class="author">
        <span class="badge bg-danger pt-1 " style="font-size: 1em;">مباع</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group3.addLayer(
  L.marker([23.8936, 49.7553], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/2.jpg" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 10</h3>
      <div class="author">
        <span class="badge bg-danger pt-1 " style="font-size: 1em;">مباع</span>
      </div>
      </div>
      </div>
    </a>
  `
  )
);
group3.addLayer(
  L.marker([23.9936, 49.7553], { icon: blueIcon }).bindPopup(
    `
    <a href="./falt-details.html">
      <div style="text-align: center;">
      <img 
        src="./image/7.png" 
        alt="Popup Image" 
        style="width: 268px; height: auto; border-radius: 8px; margin-bottom: 8px;"
        class="pb-1"
      />
      <div class="d-flex justify-content-around">
      <h3 style="margin: 5px 0; font-size: 1.2em; color: #25439b;">مشروع 11</h3>
      <div class="author">
        <span class="badge main-col pt-1 " style="font-size: 1em;">متاح</span>
      </div>
      </div>
      </div>
    </a>
  `
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
