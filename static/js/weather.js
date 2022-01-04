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
        $("#value-visibility").text(data.sys.visibility);
        $("#value-clouds").text(data.clouds.all);
        $("#value-main").text(data.weather[0].main);
        $("#value-description").text(data.weather[0].description);
        $("#value-country").text(data.sys.country);
        const date_now = new Date();
        $("#value-date").text(date_now.getFullYear() + "-" + date_now.getMonth()+1 + "-" + 0+date_now.getDate());
        let sunrise = getUnixUTCTime(data.sys.sunrise);
        $("#value-sunrise").text(sunrise);
        let sunset = getUnixUTCTime(data.sys.sunset);
        $("#value-sunset").text(sunset);
        console.log(data);

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
    wind_value = $('#value-wind').text();
    console.log(wind_value);

    $.ajax({
        type: 'POST',
        
        url: '/weather/',
        dataType: 'json',
        data: {'value_wind': wind_value},
        
        success: function (data) {
            console.log(data);
            alert(context);
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
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.slice(1, 3)+ ':' + seconds.slice(1, 3);
    return(formattedTime);
}




