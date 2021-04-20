// Creating map object
var myMap = L.map("map", {
  center: [33.68, -117.82],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.csv("Seismic_Data.csv").then(function(eqdata){
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < eqdata.length; i++) {

    var latitude=eqdata[i].Latitude
    var longitude=eqdata[i].Longitude
    var depth=eqdata[i].Depth
    var magnitude=eqdata[i].Magnitude
    var waveform=eqdata[i].Waveform
    var place=eqdata[i].Place
    var time=eqdata[i].Time
    var type=eqdata[i].Type
    
    

    // Set the data location property to a variable
    
    // var foromatTime=d3.parseTime("%B $d, %Y")
    // console.log(formatTime(time))

    // Check for location property
    // if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([latitude, longitude])
        .bindPopup(`<h3>${place}</h3><hr><p>${time}</p>`)
        .on("click", function(){
        console.log(magnitude)
        d3.select("#magnitude").text(`${magnitude}`)
          // var depth2= Math.round(depth*100)/100
          d3.select("#depth").text(`${depth}`)
          var waveForm=waveform
          d3.select("#form").text(`${waveForm.toUpperCase()}`)
          $( "#map" ).effect( "shake" )
        }))
        
    }



  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
