// ------------------------------------------------------------------
// weather.js file to address interation of user with weather.html
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Initial coordinate values
var latitude = -6.263104;
var longitude = 53.345278;
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Detect in latitude and longitude are being entered manually
// Credit: MDN Web Docs
// Moz://a
// https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
// copied and modified on January 7th, 2022, at 18:17.
const latitudeInput = document.querySelector('#latitude-input');
latitudeInput.addEventListener('focus', (event) => {
  event.target.style.background = 'cyan';
});

latitudeInput.addEventListener('blur', (event) => {
  event.target.style.background = '';
  if (parseFloat($("#longitude-input").val())){
    longitude = parseFloat($("#longitude-input").val());
  }
  if (parseFloat($("#latitude-input").val()) > 90 ||
      parseFloat($("#latitude-input").val()) < -90
     ){
    alert("Please enter a number betwee -90° and 90°");
    $("#latitude-input").val('');
  } else {    
    if (!(isNaN(parseFloat($("#latitude-input").val())))) {
      latitude = parseFloat($("#latitude-input").val());
    }
    map.centerAt([longitude, latitude]);
  }
});

const longitudeInput = document.querySelector('#longitude-input');
longitudeInput.addEventListener('focus', (event) => {
  event.target.style.background = 'cyan';
});

longitudeInput.addEventListener('blur', (event) => {
  event.target.style.background = '';
  if (parseFloat($("#latitude-input").val())){
     latitude = parseFloat($("#latitude-input").val());
  }
  if (parseFloat($("#longitude-input").val()) > 180 ||
      parseFloat($("#longitude-input").val()) < -180
     ){
    alert("Please enter a number betwee -180° and 180°");
    $("#longitude-input").val('');
  } else {
    if (!(isNaN(parseFloat($("#longitude-input").val())))) {
      longitude = parseFloat($("#longitude-input").val());
    }
    map.centerAt([longitude, latitude]);
  }
});
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Code for maps and picking of latitude and longitude, by LloydBronn, (01-05-2017 10:00 AM):
// https://community.esri.com/t5/arcgis-api-for-javascript-questions/mouse-click-to-get-map-point-or-x-y/m-p/516073#M48139;
// copied and modified on December 8th, 2021, 04:00.
var map;
require(["esri/map", "esri/geometry/webMercatorUtils",
        "esri/graphic", "esri/InfoTemplate", "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol", "esri/Color", "dojo/dom", "dojo/domReady!"
        ], function (Map, webMercatorUtils,
                    Graphic, InfoTemplate, SimpleMarkerSymbol,
                    SimpleLineSymbol, Color, dom){
                    //esriConfig.apiKey = "AAPKcb5628ff50b04f38bfb15788ab6d79afBV-DZA2SyobB3bFx8LlFMQR0LAkOly9XoAJSPmAMmbNTnWzCqixPSdFYZV_DpGC6";
                    map = new Map("viewDiv", {
                        basemap: "streets",
                        //center: [-6.263104, 53.345278],   
                        center: [latitude, longitude],                     
                        zoom: 14,
                        slider: true
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
                        // map.infoWindow.setContent("Longitude: " + mp.x.toString() + ", <br>Latitude: " + mp.y.toString());
                        // map.infoWindow.show(evt.mapPoint)  
                        
                        // Added to original source code                        
                        latitude = mp.y;
                        longitude = mp.x;
                        $("#latitude").text(mp.y.toFixed(4).toString());
                        $("#longitude").text(mp.x.toFixed(4).toString());
                        });
                    });
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Check status of OpenWeather API
// Credit for code: Code Institute
// Credit for API: OpenWeather

const API_URL = "api.openweathermap.org";
$("#get-weather-data-button").click (e => getStatus(e));

async function getStatus(e) {

    const queryString = `https://${API_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a4e017407a1ea716fa42316b9fe012b5`;
    const response = await fetch(queryString);
    const data = await response.json();
    
    if (response.ok) {
        $("#value-wind").text(data.wind.speed);
        $("#value-wind-direction").text(data.wind.deg);
        $("#value-temperature").text((data.main.temp-273.15).toFixed(1));
        $("#value-feels-like").text((data.main.feels_like-273.15).toFixed(1));
        $("#value-temperature-max").text((data.main.temp_max-273.15).toFixed(1));
        $("#value-temperature-min").text((data.main.temp_min-273.15).toFixed(1));
        $("#value-pressure").text(data.main.pressure);
        $("#value-humidity").text(data.main.humidity);
        $("#value-visibility").text(data.visibility);
        $("#value-clouds").text(data.clouds.all);
        $("#value-main").text(data.weather[0].main);
        $("#value-description").text(data.weather[0].description);
        $("#value-country").text(data.sys.country);
        // To guarante two characters for day and month and avoid issues when writing the database 
        // (otherwise it assign only one for those smaller than 10),
        // https://www.w3schools.com/js/js_date_methods.asp, accessed on March 5th, 2022, at 21:20
        const days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
                       "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
                       "25", "26", "27", "28", "29", "30", "31"];
        const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const date_now = new Date();
        let current_date = date_now.getFullYear() + "-" + months[date_now.getMonth()] + "-" + days[date_now.getDate()-1];
        console.log(current_date);
        //let current_time = date_now.getHours() + ":" + date_now.getMinutes() + ":" + date_now.getSeconds();
        $("#value-date").text(current_date);
        let sunrise = getUnixUTCTime(data.sys.sunrise + data.timezone);
        $("#value-sunrise").text(sunrise);
        let sunset = getUnixUTCTime(data.sys.sunset + data.timezone);
        $("#value-sunset").text(sunset);    
    }   
}
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Generate charts using Google resources
generateGoogleChartGraphs ();
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Send data to database using AJAX
$("#send-weather-data-button").click (e => sendWeatherData(e, true));

async function sendWeatherData(e, write) {
  
    // Check that data was got at least once
    if (write){
      if ($('#value-wind').text() == ''){
        alert("Please load data first");
        return;
      }
    }       
    // Selected data
    let writeData = write;
    let recordsToDisplay = $('input[name="records-to-display"]:checked').val();
    let otherValueToDisplay1 = $('#s-d-o-list-1').val();
    let otherValueToDisplay2 = $('#s-d-o-list-2').val();
    // Date and time
    let currentDate = $('#value-date').text();
    const dateNow = new Date();
    let currentTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
    console.log(dateNow);
    console.log(currentTime);
    // Wind data
    let valueWind = $('#value-wind').text();
    let valueWindDir = $('#value-wind-direction').text();
    // Temperature data
    let valueTemperature = $('#value-temperature').text();
    let valueFeelsLike = $('#value-feels-like').text();
    let valueTemperatureMax = $('#value-temperature-max').text();
    let valueTemperatureMin = $('#value-temperature-min').text();
    // Other weather data
    let valuePressure = $("#value-pressure").text();
    let valueHumidity = $("#value-humidity").text();
    let valueVisibility = $("#value-visibility").text();
    let valueClouds = $("#value-clouds").text();
    let valueMain = $("#value-main").text();
    let valueDescription = $("#value-description").text();
    let valueCountry = $("#value-country").text();
    let valueSunrise = $("#value-sunrise").text();
    let valueSunset = $("#value-sunset").text();
   
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
          if (write){
              alert("Database updated, new data will appear below.");
            }
            // https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
            $("#wind-extra-info").load(location.href+" #wind-extra-info>*","");
            $("#temperature-extra-info").load(location.href+" #temperature-extra-info>*","");
            $("#other-weather-extra-info").load(location.href+" #other-weather-extra-info>*","");
            setTimeout(generateGoogleChartGraphs, 5000);
        }    
    });
}
// ------------------------------------------------------------------


// ------------------------------------------------------------------
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
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Data for Google Chart

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
// ------------------------------------------------------------------


// ------------------------------------------------------------------
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
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Visualization
// Update tables and charts without writing new records (then 
// second parameters is "false")
$('input:radio[name="records-to-display"]').change(e => sendWeatherData(e, false));
$('#s-d-o-list-1').change(e => sendWeatherData(e, false));
$('#s-d-o-list-2').change(e => sendWeatherData(e, false));
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// CRUD panel to create data

$('#crud-create-button').click(function(){
  // CSS style with jQuery: https://api.jquery.com/css/, accessed on March 5th, 2022, at 04:35
  $('#crud-create-or-edit-panel').css("margin-top","50px");
  // Type time with seconds (00:00:00): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time, accessed on March 5th, 2022, at 05:37
  document.getElementById('crud-create-or-edit-panel').innerHTML = `
  <div class="container">
    <div class="row">

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-wind" id="label-for-crud-value-wind">Wind Spped</label>
    </div>                                       
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-wind" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-wind-direction" id="label-for-crud-value-wind-direction">Direction</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-wind-direction" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-temperature" id="label-for-crud-value-temperature">Temperature</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-temperature" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-feels-like" id="label-for-crud-value-feels-like">Feels Like</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-feels-like" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-temperature-max" id="label-for-crud-value-temperature-max">Temp. Max</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-temperature-max" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-temperature-min" id="label-for-crud-value-temperature-min">Temp. Min</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-temperature-min" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-pressure" id="label-for-crud-value-pressure">Pressure</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-pressure" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-humidity" id="label-for-crud-value-humidity">Humidity</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-humidity" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-visibility" id="label-for-crud-value-visibility">Visibility</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-visibility" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-clouds" id="label-for-crud-value-clouds">Sky</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-clouds" type="number">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right"> 
      <label for="crud-value-main" id="label-for-crud-value-main">Main</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-main" type="text" maxlength="16">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-description" id="label-for-crud-value-description">Description</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-description" type="text" maxlength="16">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-country" id="label-for-crud-value-country">Country</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-country" type="text" maxlength="16">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-date" id="label-for-crud-value-date">Date</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-date" type="date">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-sunrise" id="label-for-crud-value-sunrise">Sunrise</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-sunrise" type="time" step="2">
    </div>

    <div class="col-12 col-sm-3 weather-data-label text-right">
      <label for="crud-value-sunset" id="label-for-crud-value-sunset"">Sunset</label>
    </div>
    <div class="col-12 col-sm-3 weather-data-value">
      <input id="crud-value-sunset" type="time" step="2">
    </div>


    <div class="col-12" id="crud-send-weather-data-button-div">
      <button id="crud-send-weather-data-button" type="submit">Send Data to DB</button>
    </div>

  </div>
</div>
  
  `;

  $('#crud-send-weather-data-button-div').css("height","100px")

  $('#crud-send-weather-data-button').css({
    "width": "200px",
    "height": "40px", 
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "-ms-transform": "translate(-50%, -50%)",
    "transform": "translate(-50%, -50%)",
    "font-family": "'Heebo', sans-serif",
    "background-color": "white"
  });


});
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// CRUD Panel - Send data to database using AJAX

$("#crud-send-weather-data-button").click (e => sendWeatherDataInCrud(e, true));

async function sendWeatherDataInCrud(e, write) {

    console.log("Send data CRUD init");
     
    // Selected data
    let writeData = write;
    let recordsToDisplay = $('input[name="records-to-display"]:checked').val();
    let otherValueToDisplay1 = $('#s-d-o-list-1').val();
    let otherValueToDisplay2 = $('#s-d-o-list-2').val();
    // Date and time
    let currentDate = $('#crud-value-date').text();
    const dateNow = new Date();
    let currentTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
    // Wind data
    let valueWind = $('#crud-value-wind').text();
    let valueWindDir = $('#crud-value-wind-direction').text();
    // Temperature data
    let valueTemperature = $('#crud-value-temperature').text();
    let valueFeelsLike = $('#crud-value-feels-like').text();
    let valueTemperatureMax = $('#crud-value-temperature-max').text();
    let valueTemperatureMin = $('#crud-value-temperature-min').text();
    // Other weather data
    let valuePressure = $("#crud-value-pressure").text();
    let valueHumidity = $("#crud-value-humidity").text();
    let valueVisibility = $("#crud-value-visibility").text();
    let valueClouds = $("#crud-value-clouds").text();
    let valueMain = $("#crud-value-main").text();
    let valueDescription = $("#crud-value-description").text();
    let valueCountry = $("#crud-value-country").text();
    let valueSunrise = $("#crud-value-sunrise").text();
    let valueSunset = $("#crud-value-sunset").text();

    console.log("CRUD create read data");
   
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
          if (write){
              alert("Record created, new data will appear below.");
            }
            // https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
            $("#wind-extra-info").load(location.href+" #wind-extra-info>*","");
            $("#temperature-extra-info").load(location.href+" #temperature-extra-info>*","");
            $("#other-weather-extra-info").load(location.href+" #other-weather-extra-info>*","");
            setTimeout(generateGoogleChartGraphs, 5000);
        }    
    });
}
// ------------------------------------------------------------------