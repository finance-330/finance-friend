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
      text: "Company's Average Monthly"
    },
    axisY:{
      includeZero: false,
      title:"Value ($)"
    },
    axisX:{
      title:"Year"
    },
    data: [{        
      type: "line",       
      dataPoints: [
        { y: 450 },
        { y: 500},
        { y: 1400, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
        { y: 460 },
        { y: 800 },
        { y: 1000 },
        { y: 480 },
        { y: 700 },
        { y: 300 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
        { y: 900 },
        { y: 480 },
        { y: 600, x:10 }
      ]
    }]
  });
  chart.render();
  
  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
      text: "Top 5 Sectors by Number of IPOs"
    },
    axisY: {
      title: "Value ($)"
    },
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      legendText: "Number of IPOs",
      dataPoints: [      
        { y: 17, label: "Tech" },
        { y: 15,  label: "Consumer Products" },
        { y: 11,  label: "Healthcare" },
        { y: 7,  label: "Finance" },
        { y: 2,  label: "Industrials" },
      ]
    }]
  });
  chart2.render();
  
  var chart3 = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title:{
      text: "Apple Stock Price - 2016"
    },
    subtitles: [{
      text: "All Prices are in USD"
    }],
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      includeZero:false, 
      prefix: "$",
      title: "Price"
    },
    axisY2: {
      prefix: "$",
      suffix: "bn",
      title: "Revenue & Income",
      tickLength: 0
    },
    toolTip: {
      shared: true
    },
    legend: {
      reversed: true,
      cursor: "pointer",
      itemclick: toggleDataSeries
    },     
    data: [{
      type: "candlestick",
      showInLegend: true,
      name: "Stock Price",
      yValueFormatString: "$#,##0.00",
      xValueFormatString: "MMMM",
      dataPoints: [   // Y: [Open, High ,Low, Close]
        { x: new Date(2016, 0), y: [101.949997, 112.839996, 89.370003, 112.209999] },
        { x: new Date(2016, 1), y: [112.269997, 117.589996, 96.820000, 106.919998] },
        { x: new Date(2016, 2), y: [107.830002, 116.989998, 104.400002, 114.099998] },
        { x: new Date(2016, 3), y: [113.750000, 120.790001, 106.309998, 117.580002] },
        { x: new Date(2016, 4), y: [117.830002, 121.080002, 115.879997, 118.809998] },
        { x: new Date(2016, 5), y: [118.500000, 119.440002, 108.230003, 114.279999] },
        { x: new Date(2016, 6), y: [114.199997, 128.330002, 112.970001, 123.940002] },
        { x: new Date(2016, 7), y: [123.849998, 126.730003, 122.070000, 126.120003] },
        { x: new Date(2016, 8), y: [126.379997, 131.979996, 125.599998, 128.270004] },
        { x: new Date(2016, 9), y: [128.380005, 133.500000, 126.750000, 130.990005] },
        { x: new Date(2016, 10), y: [131.410004, 131.940002, 113.550003, 118.419998] },
        { x: new Date(2016, 11), y: [118.379997, 122.500000, 114.000000, 115.050003] }
      ]
    }]
  });
  chart3.render();
  
  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart3.render();
  }
  
                                                  
  
  }



// BACK TO TOP
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});