// Initial coordinate values
var latitude = 50;
var longitude = 70;

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
const API_KEY = "a4e017407a1ea716fa42316b9fe012b5";
const API_URL = "api.openweathermap.org";
$("#get-weather-data-button").click (e => getStatus(e));

//const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));
//document.getElementById("log-in-button").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    //const queryString = `https://${API_URL}/data/2.5/weather?q=London&appid=${API_KEY}`;
    const queryString = `https://${API_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
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