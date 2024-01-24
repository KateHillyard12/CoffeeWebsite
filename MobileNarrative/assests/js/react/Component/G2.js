var margin = { top: 80, right: 20, bottom: 80, left: 250 },
  width = 800 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var svg = d3.select("#paraChart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = [
  { "Starbucks": 20, "Homemade": 15.56, "DutchBros": 24, "Other": 12.5, "Response": "Mocha" },
  { "Starbucks": 42, "Homemade": 26.67, "DutchBros": 32, "Other": 43.75, "Response": "Latte" },
  { "Starbucks": 8, "Homemade": 40, "DutchBros": 4, "Other": 6.25, "Response": "Americano" },
  { "Starbucks": 10, "Homemade": 13.33, "DutchBros": 28, "Other": 12.5, "Response": "Iced coffee" },
  { "Starbucks": 20, "Homemade": 4.44, "DutchBros": 16, "Other": 6.25, "Response": "Cold brew" },
];

var color = d3.scaleOrdinal()
  .domain(["Mocha", "Latte", "Cold brew", "Americano", "Iced coffee"])
  .range(["#5cb015", "#e65100", "#5d4037", "#aed581", "#388e3c"]);

var y = {};
var dimensions = ["Starbucks", "Homemade", "DutchBros", "Other"];

var y = {}
for (i in dimensions) {
  name = dimensions[i]
  y[name] = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0])
}

x = d3.scalePoint()
  .range([0, width])
  .domain(dimensions);

var highlight = function (d) {
  selected_response = d.Response;
  d3.selectAll(".line")
    .transition().duration(200)
    .style("stroke", "lightgrey")
    .style("opacity", "0.2");
  d3.selectAll("." + selected_response)
    .transition().duration(200)
    .style("stroke", color(selected_response))
    .style("opacity", "1");
}

var doNotHighlight = function (d) {
  d3.selectAll(".line")
    .transition().duration(200).delay(1000)
    .style("stroke", function (d) { return (color(d.Response)) })
    .style("opacity", "1");
}

function path(d) {
  for (var i in dimensions) {
    var name = dimensions[i];
    if (isNaN(d[name])) {
      console.error("Invalid data: NaN value found for dimension '" + name + "'.");
      return "";
    }
  }

  return d3.line()(dimensions.map(function (p) {
    return [x(p), y[p](d[p])];
  }));
}

svg
  .selectAll("myPath")
  .data(data)
  .enter()
  .append("path")
  .attr("class", function (d) { return "line " + d.Response })
  .attr("d", function (d) {
    return path(d) || "";
  })
  .style("fill", "none")
  .style("stroke", function (d) { return color(d.Response) })
  .style("stroke-width", 5)
  .style("opacity", 0.5)
  .on("mouseover", highlight)
  .on("mouseleave", doNotHighlight);

svg.selectAll("myAxis")
  .data(dimensions).enter()
  .append("g")
  .attr("class", "axis")
  .attr("transform", function (d) { return "translate(" + x(d) + ")"; })
  .each(function (d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
  .append("text")
  .style("text-anchor", "middle")
  .attr("y", -9)
  .text(function (d) { return d; })
  .style("fill", "#313a38");

var legend = d3.select("#Legend")
  .append("svg")
  .attr("width", 500)
  .attr("height", 30)
  .append("g")
  .attr("transform", "translate(10,10)");

var legendItems = legend.selectAll(".legend-item")
  .data(["Mocha", "Latte", "Cold brew", "Americano", "Iced coffee"])
  .enter().append("g")
  .attr("class", "legend-item")
  .attr("transform", function (d, i) { return "translate(" + i * 70 + ", 0)"; });

legendItems.append("rect")
  .attr("x", 0)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", color);

legendItems.append("text")
  .attr("x", 24)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function (d) { return d; });