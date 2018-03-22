var x = document.getElementById("demo");
var lat,lon;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat =  parseInt(position.coords.latitude);
    lon =  parseInt(position.coords.longitude);
    console.log(lat+" "+lon);
}

function start(){
	getLocation();
	var ourRequest = new XMLHttpRequest();
	var url ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&id=524901&APPID=33bf83187c4b7768f5ece4c332470a70";
	ourRequest.open('GET',url);
	ourRequest.onload = function(){
	var data = ourRequest.responseText;
	console.log(data);
	}
	ourRequest.send();
}


