var string = "What Are Stocks?";
var str = string.split("");
var el = document.getElementById('type-title');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();

window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Simple Line Chart"
    },
    axisY:{
      includeZero: false
    },
    data: [{        
      type: "line",       
      dataPoints: [
        { y: 450 },
        { y: 414},
        { y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
        { y: 460 },
        { y: 450 },
        { y: 500 },
        { y: 480 },
        { y: 480 },
        { y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
        { y: 500 },
        { y: 480 },
        { y: 510 }
      ]
    }]
  });
  chart.render();
  
  }