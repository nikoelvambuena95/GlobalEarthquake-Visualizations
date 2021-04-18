// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-03-01&endtime=2021-03-08&eventtype=earthquake&limit=4000";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features)
  // var timeList=[]
  // // console.log(data.features.length)
  // for (var i=0;i<100;i++){
  //   var timestamp=data.features[i].properties.time
  //   timeList.push(timestamp)
    
  // }console.log(timeList)
  
});


//
function createFeatures(earthquakeData) {
//
//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>")
    layer.on("click", function(){
      // console.log(`Mag: ${feature.properties.mag} Depth: ${feature.properties.dmin} type:${feature.properties.magType}`)
      d3.select("#magnitude").text(`${feature.properties.mag}`)
      var depth= Math.round(feature.properties.dmin*100)/100
      d3.select("#depth").text(`${depth}`)
      var waveForm=feature.properties.magType
      d3.select("#form").text(`${waveForm.toUpperCase()}`)
    })
    }


  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}



function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 3,
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);


var continents={"Europe":[54.5260, 15.2551],
        "Asia":[34.0479, 100.6197],
        "North America":[54.5260, -105.2551],
        "South America":[8.7832, -55.4915],
        "Africa":[8.7832, 34.5085],
        "Antarctica":[82.8628, 135.0000],
        "Oceania":[22.7359, 140.0188]}

// var center=[37.09, -95.71]
d3.selectAll("#europe").on("click", function(){
   var center=[54.5260, 15.25510]
   myMap.setView(center)
})
d3.selectAll("#asia").on("click", function(){
  center=[34.0479, 100.6197]
  myMap.setView(center)
})
d3.selectAll("#northAmerica").on("click", function(){
  center=[54.5260, -105.2551]
  myMap.setView(center)
})
d3.selectAll("#southAmerica").on("click", function(){
  center=[8.7832, -55.4915]
  myMap.setView(center)
})
d3.selectAll("#africa").on("click", function(){
  center=[8.7832, 34.5085]
  myMap.setView(center)
})
d3.selectAll("#antarctica").on("click", function(){
  center=[82.8628, 135.0000]
  myMap.setView(center)
})
d3.selectAll("#oceania").on("click", function(){
  center=[22.7359, 140.0188]
  myMap.setView(center)
})

}