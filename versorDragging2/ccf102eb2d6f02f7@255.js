// https://observablehq.com/@cincodenada/d3-versor-dragging@255
export default function define(runtime, observer) {
  const main = runtime.module();
//   main.variable(observer()).define(["md"], function(md){return(
// md`# D3 Versor Dragging

// See also Jason Davies’ [Rotate the World](https://www.jasondavies.com/maps/rotate/).`
// )});
  main.variable(observer("globe")).define("globe", ["svg"], function(svg){return(
svg.node()
)});
  main.variable(observer("status")).define("status", ["DOM"], function(DOM){return(
DOM.element('div')
)});
  main.variable(observer("svg")).define("svg", ["d3","DOM","width","height","drag","sphere","path","countries","status","names"], function(d3,DOM,width,height,drag,sphere,path,countries,status,names)
{
  const svg = d3.select(DOM.svg(width, height));
  svg.call(drag)
  
  function enter(d, i, nodes) { this.setAttribute('class','country active'); }
  function exit(d, i, nodes) { this.setAttribute('class','country'); }
  
  svg.append("path")
    .datum(sphere)
      .attr("d", path)
      .attr("fill","#a8cfff")
  var country_map = svg.selectAll("path")
    .data(countries.features)
    .enter().append("path")
      .attr("d", path)
      .attr("fill", "#51a499")
      .attr("stroke", "#fff")
      .attr("class", "country")

  svg.append("path")
    .datum(sphere)
      .attr("d", path)
      .attr("fill","none")
      .attr("stroke","#a8cfff")
    
  // Define mouseover event for countries
      country_map
    .on('mouseover', function(d){
      d3.select(this).style("fill", "#e44a6d")
    })
    .on('mouseout', function(d){
      d3.select(this).style("fill", "#51a499")
    })
    .on('click', function(d, i, nodes) {
      status.innerText = "You clicked " + names[d.id]
    })
  return svg
}
);
  main.variable(observer("names")).define("names", function()
{ return {"242": "Fiji", "834": "Tanzania",
"732": "Western Sahara",
"124": "Canada",
"840": "United States",
"398": "Kazakhstan",
"860": "Uzbekistan",
"598": "Papua New Guinea",
"360": "Indonesia",
"032": "Argentina",
"152": "Chile",
"180": "Democratic Republic of the Congo",
"706": "Somalia",
"404": "Kenya",
"729": "Sudan",
"148": "Chad",
"332": "Haiti",
"214": "Dominican Republic",
"643": "Russian Federation",
"044": "Bahamas",
"238": "Falkland Islands",
"304": "Greenland",
"260": "French Southern and Antarctic Lands",
"626": "Timor-Leste",
"710": "South Africa",
"426": "Lesotho",
"484": "Mexico",
"858": "Uruguay",
"076": "Brazil",
"068": "Bolivia",
"604": "Peru",
"170": "Colombia",
"591": "Panama",
"188": "Costa Rica",
"558": "Nicaragua",
"340": "Honduras",
"222": "El Salvador",
"320": "Guatemala",
"084": "Belize",
"862": "Venezuela",
"328": "Guyana",
"740": "Suriname",
"250": "France",
"218": "Ecuador",
"630": "Puerto Rico",
"388": "Jamaica",
"192": "Cuba",
"716": "Zimbabwe",
"072": "Botswana",
"516": "Namibia",
"686": "Senegal",
"466": "Mali",
"478": "Mauritania",
"204": "Benin",
"562": "Niger",
"566": "Nigeria",
"120": "Cameroon",
"768": "Togo",
"288": "Ghana",
"384": "Côte d'Ivoire",
"324": "Guinea",
"624": "Guinea-Bissau",
"430": "Liberia",
"694": "Sierra Leone",
"854": "Burkina Faso",
"140": "Central African Republic",
"178": "Republic of the Congo",
"266": "Gabon",
"226": "Equatorial Guinea",
"894": "Zambia",
"454": "Malawi",
"508": "Mozambique",
"748": "eSwatini",
"024": "Angola",
"108": "Burundi",
"376": "Israel",
"422": "Lebanon",
"450": "Madagascar",
"275": "Palestine",
"270": "The Gambia",
"788": "Tunisia",
"012": "Algeria",
"400": "Jordan",
"784": "United Arab Emirates",
"634": "Qatar",
"414": "Kuwait",
"368": "Iraq",
"512": "Oman",
"548": "Vanuatu",
"116": "Cambodia",
"764": "Thailand",
"418": "Lao PDR",
"104": "Myanmar",
"704": "Vietnam",
"408": "Dem. Rep. Korea",
"410": "Republic of Korea",
"496": "Mongolia",
"356": "India",
"050": "Bangladesh",
"064": "Bhutan",
"524": "Nepal",
"586": "Pakistan",
"004": "Afghanistan",
"762": "Tajikistan",
"417": "Kyrgyzstan",
"795": "Turkmenistan",
"364": "Iran",
"760": "Syria",
"051": "Armenia",
"752": "Sweden",
"112": "Belarus",
"804": "Ukraine",
"616": "Poland",
"040": "Austria",
"348": "Hungary",
"498": "Moldova",
"642": "Romania",
"440": "Lithuania",
"428": "Latvia",
"233": "Estonia",
"276": "Germany",
"100": "Bulgaria",
"300": "Greece",
"792": "Turkey",
"008": "Albania",
"191": "Croatia",
"756": "Switzerland",
"442": "Luxembourg",
"056": "Belgium",
"528": "Netherlands",
"620": "Portugal",
"724": "Spain",
"372": "Ireland",
"540": "New Caledonia",
"090": "Solomon Islands",
"554": "New Zealand",
"036": "Australia",
"144": "Sri Lanka",
"156": "China",
"158": "Taiwan",
"380": "Italy",
"208": "Denmark",
"826": "United Kingdom",
"352": "Iceland",
"031": "Azerbaijan",
"268": "Georgia",
"608": "Philippines",
"458": "Malaysia",
"096": "Brunei Darussalam",
"705": "Slovenia",
"246": "Finland",
"703": "Slovakia",
"203": "Czech Republic",
"232": "Eritrea",
"392": "Japan",
"600": "Paraguay",
"887": "Yemen",
"682": "Saudi Arabia",
"010": "Antarctica",
"196": "Cyprus",
"504": "Morocco",
"818": "Egypt",
"434": "Libya",
"231": "Ethiopia",
"262": "Djibouti",
"800": "Uganda",
"646": "Rwanda",
"070": "Bosnia and Herzegovina",
"807": "Macedonia",
"688": "Serbia",
"499": "Montenegro",
"780": "Trinidad and Tobago",
"728": "South Sudan"
}}
);
  main.variable(observer("hover")).define("hover", function()
{
  function enter(d, i, nodes) { this.class = "country active"; }
  function exit(d, i, nodes) { this.class = "country"; }
  return function(sel) { 
    sel
      .on('mouseover', enter)
      .on('mouseout', exit)
  }
}
);
  main.variable(observer()).define(["html"], function(html){return(
html`<style>.country.selected { fill: blue }</style>`
)});
  main.variable(observer("path")).define("path", ["d3","projection"], function(d3,projection){return(
d3.geoPath(projection)
)});
  main.variable(observer("drag")).define("drag", ["versor","mutable projection","d3"], function(versor,$0,d3)
{
  let v0, q0, r0;
  
  function dragstarted() {
    v0 = versor.cartesian($0.value.invert(d3.mouse(this)));
    q0 = versor(r0 = $0.value.rotate());
  }
  
  function dragged() {
    const v1 = versor.cartesian($0.value.rotate(r0).invert(d3.mouse(this)));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    $0.value = $0.value.rotate(versor.rotation(q1));
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged);
}
);
  main.define("initial projection", ["d3","height","width"], function(d3,height,width){return(
d3.geoOrthographic()
    .scale((height - 10) / 2)
    .translate([width / 2, height / 2])
    .precision(0.1)
)});
  main.variable(observer("mutable projection")).define("mutable projection", ["Mutable", "initial projection"], (M, _) => new M(_));
  main.variable(observer("projection")).define("projection", ["mutable projection"], _ => _.generator);
  main.variable(observer("height")).define("height", ["width"], function(width){return(
width
)});
  main.variable(observer("sphere")).define("sphere", function(){return(
{type: "Sphere"}
)});
  main.variable(observer("countries")).define("countries", ["topojson","world"], function(topojson,world){return(
topojson.feature(world, world.objects.countries)
)});
  main.variable(observer("world")).define("world", ["d3","resolve"], function(d3,resolve){return(
d3.json(resolve("world-atlas@1.1.4/world/110m.json"))
)});
  main.variable(observer("versor")).define("versor", ["require"], function(require){return(
require("versor@0.0.3/build/versor.min.js")
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3.0.0/dist/topojson-client.min.js")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("https://d3js.org/d3.v5.min.js")
)});
  return main;
}
