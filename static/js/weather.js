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
    console.log(writeData);
    let recordsToDisplay = $('input[name="records-to-display"]:checked').val();
    let otherValueToDisplay1 = $('#s-d-o-list-1').val();
    let otherValueToDisplay2 = $('#s-d-o-list-2').val();
    // Date and time
    let currentDate = $('#value-date').text();
    const dateNow = new Date();
    let currentTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
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
// CRUD panel buttons

$('#crud-create-button').click(function(){
  // Dislpay panel to create/edit records and send them to the database
  $('#crud-create-or-edit-panel').css("display","block");
  $('#crud-quit-edition-mode-button-div').css("display","block");
  $('#crud-panel-status > p').text("Create a record");
});

$('#crud-select-and-edit-button').click(function(){
  // Dislpay panel to create/edit records and send them to the database
  $('.edit-button-in-table').css("display","block");
  $('#crud-create-or-edit-panel').css("display","block");
  $('#crud-quit-edition-mode-button-div').css("display","block");
  $('.delete-button-in-table').css("display","none");
  $('#crud-panel-status > p').text("Edit a record by clicking the button in the table");
});

$('#crud-delete-button').click(function(){
  // Dislpay panel to create/edit records and send them to the database
  $('.delete-button-in-table').css("display","block");
  $('#crud-create-or-edit-panel').css("display","none");
  $('#crud-quit-edition-mode-button-div').css("display","block");
  $('.edit-button-in-table').css("display","none");
  $('#crud-panel-status > p').text("Delete a record by clicking the button in the table");
});

$('#crud-quit-edition-mode-button').click(function(){
  // Dislpay panel to create/edit records and send them to the database
  $('#crud-create-or-edit-panel').css("display","none");
  $('#crud-quit-edition-mode-button-div').css("display","none");
  $('.edit-button-in-table').css("display","none");
  $('.delete-button-in-table').css("display","none");
  $('#crud-panel-status > p').text("");
});

// ------------------------------------------------------------------


// ------------------------------------------------------------------
// CRUD Panel - Send data to database using AJAX

$("#crud-send-weather-data-button").click (e => sendWeatherDataInCrud(e, true));

async function sendWeatherDataInCrud(e, write) {

  $('#crud-panel-status > p').text("Sending data to the database")
  

    if (write){
      if ($('#crud-value-wind').val() == '' ||
          $('#crud-value-wind-direction').val() == '' ||
          $('#crud-value-value-temperature').val() == '' ||
          $('#crud-value-value-feels-like').val() == '' ||
          $('#crud-value-temperature-max').val() == '' ||
          $('#crud-value-temperature-min').val() == '' ||
          $('#crud-value-pressure').val() == '' ||
          $('#crud-value-humidity').val() == '' ||
          $('#crud-value-visibility').val() == '' ||
          $('#crud-value-clouds').val() == '' ||
          $('#crud-value-main').val() == '' ||
          $('#crud-value-description').val() == '' ||
          $('#crud-value-country').val() == '' ||
          $('#crud-value-date').val() == '' ||
          $('#crud-value-sunrise').val() == '' ||
          $('#crud-value-sunset').val() == ''){
        $('#crud-panel-status > p').text("Create a record");
        alert("Please load data first");
        return;
      }
    }  

    console.log("Send data CRUD init");
     
    // Selected data
    let writeData = write;
    let recordsToDisplay = $('input[name="records-to-display"]:checked').val();
    let otherValueToDisplay1 = $('#s-d-o-list-1').val();
    let otherValueToDisplay2 = $('#s-d-o-list-2').val();
    // Date and time
    let currentDate = $('#crud-value-date').val();
    const dateNow = new Date();
    let currentTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
    // Wind data
    let valueWind = $('#crud-value-wind').val();
    console.log(valueWind);
    let valueWindDir = $('#crud-value-wind-direction').val();
    // Temperature data
    let valueTemperature = $('#crud-value-temperature').val();
    let valueFeelsLike = $('#crud-value-feels-like').val();
    let valueTemperatureMax = $('#crud-value-temperature-max').val();
    let valueTemperatureMin = $('#crud-value-temperature-min').val();
    // Other weather data
    let valuePressure = $("#crud-value-pressure").val();
    let valueHumidity = $("#crud-value-humidity").val();
    let valueVisibility = $("#crud-value-visibility").val();
    let valueClouds = $("#crud-value-clouds").val();
    let valueMain = $("#crud-value-main").val();
    let valueDescription = $("#crud-value-description").val();
    let valueCountry = $("#crud-value-country").val();
    let valueSunrise = $("#crud-value-sunrise").val();
    let valueSunset = $("#crud-value-sunset").val();

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
            $('#crud-panel-status > p').text("Data sent to database")
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
// Edit data in database using AJAX
//$(".edit-button-in-table").click(e => sendWeatherDataToEdit(e, "edition"));
//
//async function sendWeatherDataToEdit(e, write) {  
//     
//    // Selected data
//    let writeData = write;
//    let id = this.event.target.id.slice(12);
//    let otherValueToDisplay1 = $('#s-d-o-list-1').val();
//    let otherValueToDisplay2 = $('#s-d-o-list-2').val();
//    console.log(id);
//      
//    $.ajax({
//        type: 'POST',        
//        url: '/weather/',
//        //dataType: 'json',
//        data: {
//            // Data
//            'otherValueToDisplay1': otherValueToDisplay1,
//            'otherValueToDisplay2': otherValueToDisplay2,
//            'writeData' : writeData,
//            'id' : id
//            },
//        success: function (data) {
//          if (write){
//              alert("Retrieving data, data to edit will appear in the edition panel.");
//            }
//            // https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
//            $("#crud-panel-status").load(location.href+" #crud-panel-status>*","");
//            //$("#crud-panel-status").html("#crud-panel-status");
//            let users = JSON.parse(data);
//            const fields = record_to_edit[0]['fields'];
//            $('#crud-panel-status').val(fields['wind_speed']);
//            setTimeout(generateGoogleChartGraphs, 5000);
//        }    
//    });
//}
//// ------------------------------------------------------------------


$(document).ready(function(){

$(".edit-button-in-table").click(function(){

  let id = this.id.slice(12);
  let otherValueToDisplay1 = $('#s-d-o-list-1').val();
  let otherValueToDisplay2 = $('#s-d-o-list-2').val();
  let country = $("#value-country").val();
  console.log(otherValueToDisplay2);
  console.log(otherValueToDisplay1);

  fetch('/weather/', {
      headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'id': id,
          'otherValueToDisplay1': otherValueToDisplay1,
          'otherValueToDisplay2': otherValueToDisplay2,
          'country': country
      },
  })
  .then(response => {
      return response.json();
  })
  .then(data => {
      
      let record_to_edit = JSON.parse(data);
      const fields = record_to_edit[0]['fields'];
      //const fields2 = record_to_edit_2[0]['fields'];
      console.log(fields['wind_speed']);
      alert("Retrieving data, data to edit will appear in the edition panel.");
      //https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
      //$("#crud-panel-status").load(location.href+" #crud-panel-status>*","");
      // Date and time
      $('#crud-value-date').val(fields['date']);
      $('#crud-value-time').val(fields['time']);
      // Wind data
      $('#crud-value-wind').val(fields['wind_speed']);
      $('#crud-value-wind-direction').val(fields['wind_direction']);
      // Temperature data
      $('#crud-value-temperature').val(fields['temperature']);
      $('#crud-value-feels-like').val(fields['feels_like']);
      $('#crud-value-temperature-max').val(fields['temperature_max']);
      $('#crud-value-temperature-min').val(fields['temperature_min']);
      // Other weather data
      $("#crud-value-pressure").val(fields['pressure']);
      $("#crud-value-humidity").val(fields['humidity']);
      $("#crud-value-visibility").val(fields['visibility']);
      $("#crud-value-clouds").val(fields['sky']);
      $("#crud-value-main").val(fields['main']);
      $("#crud-value-description").val(fields['description']);
      $("#crud-value-country").val(fields['country']);
      $("#crud-value-sunrise").val(fields['sunrise']);
      $("#crud-value-sunset").val(fields['sunset']);
  })
  .catch(error => {
      console.log(`Ajax Error: ${error}`);
  })
})
});