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


$("#send-weather-data-button").click (e => sendWeatherData(e));

async function sendWeatherData(e) {
    // Date and time
    current_date = $('#value-date').text();
    const date_now = new Date();
    let current_time = date_now.getHours() + ":" + date_now.getMinutes() + ":" + date_now.getSeconds();
    // Wind data
    wind_value = $('#value-wind').text();
    value_wind_dir = $('#value-wind-direction').text();
    // Temperature data
    value_temperature = $('#value-temperature').text();
    value_feels_like = $('#value-feels-like').text();
    value_temperature_max = $('#value-temperature-max').text();
    value_temperature_min = $('#value-temperature-min').text();
    // Other weather data
    value_pressure = $("#value-pressure").text();
    value_humidity = $("#value-humidity").text();
    value_visibility = $("#value-visibility").text();
    value_clouds = $("#value-clouds").text();
    value_main = $("#value-main").text();
    value_description = $("#value-description").text();
    value_country = $("#value-country").text();
    value_sunrise = $("#value-sunrise").text();
    value_sunset = $("#value-sunset").text();

    console.log(wind_value);

    $.ajax({
        type: 'POST',        
        url: '/weather/',
        //dataType: 'json',
        data: {
            // Date and time
            'value_date': current_date,
            'value_time': current_time,
            // Wind data
            'value_wind': wind_value, 
            'value_wind_dir': value_wind_dir,
            // Temperature data
            'value_temperature': value_temperature,
            'value_feels_like': value_feels_like,
            'value_temperature_max': value_temperature_max,
            'value_temperature_min': value_temperature_min,
            // Other weather data
            'value_pressure' : value_pressure,
            'value_humidity' : value_humidity,
            'value_visibility' : value_visibility,
            'value_clouds' : value_clouds,
            'value_main' : value_main,
            'value_description' : value_description,
            'value_country' : value_country,
            'value_sunrise' : value_sunrise,
            'value_sunset' : value_sunset },
        success: function (data) {
            alert("Database updated, new data will appear below.");
            // https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
            $("#wind-extra-info").load(location.href+" #wind-extra-info>*","");
            $("#temperature-extra-info").load(location.href+" #temperature-extra-info>*","");
            $("#other-weather-extra-info").load(location.href+" #other-weather-extra-info>*","");
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

var col1=[], col2=[], col3=[], col4=[];
var table1=[], table2=[], table3=[];
var options1=[], options2=[], options3=[];

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
    let r = [col1[i], col2[i], col3[i], col4[i]];
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
  let r = [col1[i], col2[i], col3[i], col4[i]];
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
  let r = [col1[i], col2[i], col3[i], col4[i]];
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
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var data2 = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var data3 = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'FIRST Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  var options2 = {
    title: 'SECOND Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  var options3 = {
    title: 'THIRD Performance',
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