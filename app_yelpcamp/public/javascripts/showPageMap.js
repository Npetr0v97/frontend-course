mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/light-v10", // style URL
  center: campgroundObj.geometry.coordinates, // starting position [lng, lat]
  zoom: 4, // starting zoom
});

const marker = new mapboxgl.Marker()
  .setLngLat(campgroundObj.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${campgroundObj.title}</h4> <p>${campgroundObj.location}</p>`
    )
  )
  .addTo(map);
