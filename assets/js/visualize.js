
//d3 svg setup
var scenariosSVG = d3.select('#user_scenarios');
var scenariosWidth = scenariosSVG.node().clientWidth;
var scenariosHeight = scenariosSVG.node().clientHeight;

var scenariosMargin = { top: 20, right: 20, bottom: 20, left: 20 };

var scenariosInnerWidth = scenariosWidth - scenariosMargin.left - scenariosMargin.right
var scenariosInnerHeight = scenariosHeight - scenariosMargin.top - scenariosMargin.bottom


scenariosSVG.selectAll("circle")
    .append("circle")
    .style("stroke", "gray")
    .style("fill", "black")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 20);

