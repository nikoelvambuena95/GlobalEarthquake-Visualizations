// // Store our API endpoint inside queryUrl
// var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-03-01&endtime=2021-03-08&eventtype=earthquake&limit=4000";

// // Perform a GET request to the query URL
// d3.json(queryUrl).then(function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
// });

// //
// console.log(data.features)