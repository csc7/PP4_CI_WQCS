//const { getDefaultSettings } = require("http2");

//const { getDefaultSettings } = require("http2");

// Initial coordinate values
var latitude = 50;
var longitude = 70;


//var pg = require(["pg"]);
//var connectionString = "postgres://userName:password@serverName/ip:5432/d4i9o0uj43bnqveeeee";
//var pgClient = require(["pg"]).Client;
//const db = pg(connectionString);



// ------------------------------------------------------------------
// Code for maps and picking of latitude and longitude, by LloydBronn, (01-05-2017 10:00 AM):
// https://community.esri.com/t5/arcgis-api-for-javascript-questions/mouse-click-to-get-map-point-or-x-y/m-p/516073#M48139;
// copied and modified on December 8th, 2021, 04:00.

//var map;
require(["esri/map", "esri/geometry/webMercatorUtils",
        "esri/graphic", "esri/InfoTemplate", "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol", "esri/Color", "dojo/dom", "dojo/domReady!"
        ], function (Map, webMercatorUtils,
                    Graphic, InfoTemplate, SimpleMarkerSymbol,
                    SimpleLineSymbol, Color, dom){
                    //esriConfig.apiKey = "AAPKcb5628ff50b04f38bfb15788ab6d79afBV-DZA2SyobB3bFx8LlFMQR0LAkOly9XoAJSPmAMmbNTnWzCqixPSdFYZV_DpGC6";
                    map = new Map("viewDiv", {
                        basemap: "streets",
                        center: [-95.249, 38.954],
                        zoom: 14,
                        slider: false
                    });
                    var symbol = new SimpleMarkerSymbol(
                        SimpleMarkerSymbol.STYLE_CIRCLE,
                        6,
                        new SimpleLineSymbol(
                            SimpleLineSymbol.STYLE_NULL,
                            new Color([247, 34, 101, 0.9]),
                            1
                        ),
                        new Color([207, 34, 171, 0.5])
                    );
                    map.on("click", function(evt){
                        var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
                        map.graphics.clear();
                        map.graphics.add(new Graphic(evt.mapPoint, symbol));
                        // To show coordinates on map, commented from original source code
                        //map.infoWindow.setContent("Longitude: " + mp.x.toString() + ", <br>Latitude: " + mp.y.toString());
                        //map.infoWindow.show(evt.mapPoint)  
                        
                        // Added to original source code
                        latitude = mp.y;
                        longitude = mp.x;
                        $("#latitude").text(mp.y.toString());
                        $("#longitude").text(mp.x.toString());
                        });
                    });

// ------------------------------------------------------------------

// Alternative to send answers with the Enter key
function pressEnter (event) { 
    if (event.key === "Enter") {
        //sendAnswer();
    }    
};

// ------------------------------------------------------------------

// Check status of OpenWeather API
// Credit for code: Code Institute
// Credit for API: OpenWeather

//const API_KEY = "";
const API_URL = "api.openweathermap.org";
$("#get-weather-data-button").click (e => getStatus(e));

//const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));
//document.getElementById("log-in-button").addEventListener("click", e => getStatus(e));

async function getStatus(e) {


    //const queryString = `https://${API_URL}/data/2.5/weather?q=London&appid=${API_KEY}`;

    const queryString = `https://${API_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a4e017407a1ea716fa42316b9fe012b5`;
    const response = await fetch(queryString);
    const data = await response.json();
    
    if (response.ok) {
        $("#value-wind").text(data.wind.speed);
        $("#value-wind-direction").text(data.wind.deg);
        $("#value-temperature").text(data.main.temp);
        $("#value-feels-like").text(data.main.feels_like);
        $("#value-temperature-max").text(data.main.temp_max);
        $("#value-temperature-min").text(data.main.temp_min);
        $("#value-pressure").text(data.main.pressure);
        $("#value-humidity").text(data.main.humidity);
        $("#value-visibility").text(data.visibility);
        $("#value-clouds").text(data.clouds.all);
        $("#value-main").text(data.weather[0].main);
        $("#value-description").text(data.weather[0].description);
        $("#value-country").text(data.sys.country);
        const date_now = new Date();
        let current_date = date_now.getFullYear() + "-" + date_now.getMonth()+1 + "-" + 0+date_now.getDate();
        //let current_time = date_now.getHours() + ":" + date_now.getMinutes() + ":" + date_now.getSeconds();
        $("#value-date").text(current_date);
        let sunrise = getUnixUTCTime(data.sys.sunrise + data.timezone);
        $("#value-sunrise").text(sunrise);
        let sunset = getUnixUTCTime(data.sys.sunset + data.timezone);
        $("#value-sunset").text(sunset);
        console.log(data);
        console.log(data.timezone);        
    }   
}




// ------------------------------------------------------------------


//fetch("https://ci-swapi.herokuapp.com/api/")
//    .then(response => response.text()) // or .json()
//    .then(data => displayData(data))
//    .catch((e) => {
//        console.log("Error: ", e);
//})
//
//function displayData(data) {
//document.getElementById("content").innerText = data;
//}


//$(document).ready(function () {
//    $(document).on("click",'.car_add', function() {
//        $car_id = $(this).attr('id')
//        $.ajax({
//            type: "POST",
//            // This is the dictionary you are SENDING to your Django code. 
//            // We are sending the 'action':add_car and the 'id: $car_id  
//            // which is a variable that contains what car the user selected
//            data: { action: "add_car", id: $car_id },
//            success: function(data){
//                // This will execute when where Django code returns a dictionary 
//                // called 'data' back to us.
//                $("#car").html("<strong>"+data.car+"</strong>");                
//            }
//        });
//    });
//});

generateGoogleChartGraphs ();

$("#send-weather-data-button").click (e => sendWeatherData(e, true));

async function sendWeatherData(e, write) {
  
    // Check that data was got at least once     
    if ($('#value-wind').text() == 'wind'){
      alert("Please load data first");
      return;
    }

    // Selected data
    writeData = write;
    recordsToDisplay = $('input[name="records-to-display"]:checked').val();
    otherValueToDisplay1 = $('#s-d-o-list-1').val();
    otherValueToDisplay2 = $('#s-d-o-list-2').val();

    // Date and time
    currentDate = $('#value-date').text();
    const dateNow = new Date();
    let currentTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
    // Wind data
    valueWind = $('#value-wind').text();
    valueWindDir = $('#value-wind-direction').text();
    // Temperature data
    valueTemperature = $('#value-temperature').text();
    valueFeelsLike = $('#value-feels-like').text();
    valueTemperatureMax = $('#value-temperature-max').text();
    valueTemperatureMin = $('#value-temperature-min').text();
    // Other weather data
    valuePressure = $("#value-pressure").text();
    valueHumidity = $("#value-humidity").text();
    valueVisibility = $("#value-visibility").text();
    valueClouds = $("#value-clouds").text();
    valueMain = $("#value-main").text();
    valueDescription = $("#value-description").text();
    valueCountry = $("#value-country").text();
    valueSunrise = $("#value-sunrise").text();
    valueSunset = $("#value-sunset").text();
   
    $.ajax({
        type: 'POST',        
        url: '/weather/',
        //dataType: 'json',
        data: {
            // Selected Data
            'writeData' : writeData,
            'recordsToDisplay': recordsToDisplay,
            'otherValueToDisplay1': otherValueToDisplay1,
            'otherValueToDisplay2': otherValueToDisplay2,
            // Date and time
            'valueDate': currentDate,
            'valueTime': currentTime,
            // Wind data
            'valueWind': valueWind, 
            'valueWindDir': valueWindDir,
            // Temperature data
            'valueTemperature': valueTemperature,
            'valueFeelsLike': valueFeelsLike,
            'valueTemperatureMax': valueTemperatureMax,
            'valueTemperatureMin': valueTemperatureMin,
            // Other weather data
            'valuePressure' : valuePressure,
            'valueHumidity' : valueHumidity,
            'valueVisibility' : valueVisibility,
            'valueClouds' : valueClouds,
            'valueMain' : valueMain,
            'valueDescription' : valueDescription,
            'valueCountry' : valueCountry,
            'valueSunrise' : valueSunrise,
            'valueSunset' : valueSunset },
        success: function (data) {
            alert("Database updated, new data will appear below.");
            
            // https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
            $("#wind-extra-info").load(location.href+" #wind-extra-info>*","");
            $("#temperature-extra-info").load(location.href+" #temperature-extra-info>*","");
            $("#other-weather-extra-info").load(location.href+" #other-weather-extra-info>*","");
            setTimeout(generateGoogleChartGraphs, 10000);
        }    
    });
    
}




//Credit for getUnixUTCTime(): https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript,
//copied and modified on January 3rd, 2022, at 13;00
function getUnixUTCTime(unix_timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = date.getMinutes();
    // Seconds part from the timestamp
    var seconds = date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes + ':' + seconds;
    return(formattedTime);
}




  ////////////////////////
  // DATA FOR GOOGLE CHART
function generateGoogleChartGraphs() {
  var col1=[], col2=[], col3=[], col4=[];
  var table1=[['Date', 'Wind Speed', 'Wind Direction']];
  var table2=[['Date', 'Temperature', 'Feels Like']];
  var table3=[['Date', 'Value 1', 'Value 2']];
  //var options1=[], options2=[], options3=[];

  // CHART 1 - Read date
  $('#wind-extra-info > table > tbody tr td:nth-child(1)').each(function(){
      col1.push( ($(this).text() ));    
  });
  // CHART 1 - Read time
  $('#wind-extra-info > table > tbody tr td:nth-child(2)').each(function(){
      col2.push( ($(this).text() ));
  });
  // CHART 1 - Read 1st Column Value
  $('#wind-extra-info > table > tbody tr td:nth-child(3)').each(function(){
      col3.push(parseFloat(($(this).text())));    
  });
  // CHART 1 - Read 2nd Column Value
  $('#wind-extra-info > table > tbody tr td:nth-child(4)').each(function(){
      col4.push(parseFloat(($(this).text())));
  });

  for (let i = 0; i < col1.length; i++) {
      // Include second column (col2[i]) if time is accounted for x axis
      let r = [col1[i], col3[i], col4[i]];
      table1.push(r);
  }

  col1=[];
  col2=[];
  col3=[];
  col4=[];

  // CHART 2 - Read date
  $('#temperature-extra-info > table > tbody tr td:nth-child(1)').each(function(){
    col1.push( ($(this).text() ));    
  });
  // CHART 2 - Read time
  $('#temperature-extra-info > table > tbody tr td:nth-child(2)').each(function(){
    col2.push( ($(this).text() ));
  });
  // CHART 2 - Read 1st Column Value
  $('#temperature-extra-info > table > tbody tr td:nth-child(3)').each(function(){
    col3.push(parseFloat(($(this).text())));    
  });
  // CHART 2 - Read 2nd Column Value
  $('#temperature-extra-info > table > tbody tr td:nth-child(4)').each(function(){
    col4.push(parseFloat(($(this).text())));
  });

  for (let i = 0; i < col1.length; i++) {
    // Include second column (col2[i]) if time is accounted for x axis
    let r = [col1[i], col3[i], col4[i]];
    table2.push(r);
  }

  col1=[];
  col2=[];
  col3=[];
  col4=[];

  // CHART 3 - Read date
  $('#other-weather-extra-info > table > tbody tr td:nth-child(1)').each(function(){
    col1.push( ($(this).text() ));    
  });
  // CHART 3 - Read time
  $('#other-weather-extra-info > table > tbody tr td:nth-child(2)').each(function(){
    col2.push( ($(this).text() ));
  });
  // CHART 3 - Read 1st Column Value
  $('#other-weather-extra-info > table > tbody tr td:nth-child(3)').each(function(){
    col3.push(parseFloat(($(this).text())));    
  });
  // CHART 3 - Read 2nd Column Value
  $('#other-weather-extra-info > table > tbody tr td:nth-child(4)').each(function(){
    col4.push(parseFloat(($(this).text())));
  });

  for (let i = 0; i < col1.length; i++) {
    // Include second column (col2[i]) if time is accounted for x axis
    let r = [col1[i], col3[i], col4[i]];
    table3.push(r);
  }

  console.log(table1);
  console.log(table2);
  console.log(table3);

  // DATA FOR GOOGLE CHART
  ////////////////////////

  
  // GRAPH
  // Google Charts
  // Line Charts
  // Copied and modified from https://developers.google.com/chart/interactive/docs/gallery/linechart on January 5th, 2022, at 20:40. 

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(table1);
    var data2 = google.visualization.arrayToDataTable(table2);
    var data3 = google.visualization.arrayToDataTable(table3);
    var options = {
      title: 'Wind Data',
      curveType: 'function',
      legend: { position: 'bottom' }
    };
    var options2 = {
      title: 'Termperature Data',
      curveType: 'function',
      legend: { position: 'bottom' }
    };
    var options3 = {
      title: 'Other Data',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart_left'));
    var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart_middle'));
    var chart3 = new google.visualization.LineChart(document.getElementById('curve_chart_right'));

    chart.draw(data, options);
    chart2.draw(data2, options2);
    chart3.draw(data3, options3);
  }
}

// VISUALIZATION
$('input:radio[name="records-to-display"]').change(e => sendWeatherData(e, false));




//$('input:radio[name="records-to-display"]').change(generateGoogleChartGraphs());
  
  // END VISUALIZATION

//function generateGraph() {
//    dataForGoogleChartFunction = computeGraphData();
//    google.charts.load('current', {'packages':['corechart']});
//    google.charts.setOnLoadCallback(drawChart);
//    function drawChart() {
//        var data = google.visualization.arrayToDataTable(dataForGoogleChartFunction);
//        var options = {
//          curveType: 'none',
//          legend: { position: 'bottom' }
//        };
//        var chart = new google.visualization.LineChart(document.getElementById('chart-left'));
//        chart.draw(data, options);
//    }
//}
//
//// Compute the data, for each wavelet type, that will be used to make the Google graph
//function computeGraphData() {
//    let xVector = []; 
//    let yVector = [];
//    let dataForGraph = [];
//    dataForGraph.push(["Time", "Amplitude"]);
//    xVector.push([1, 2, 3, 4]);
//    yVector.push([10, 12, 10, 15]);
//    console.log(xVector);
//    return dataForGraph;
//
//}