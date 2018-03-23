var url;

function start()
{
	if (navigator.geolocation) 
	{
        navigator.geolocation.getCurrentPosition(function(position)
        {
        	var ourRequest = new XMLHttpRequest();
        	url ="http://api.openweathermap.org/data/2.5/weather?lat="+parseInt(position.coords.latitude)+"&lon="+parseInt(position.coords.longitude)+"&id=524901&APPID=33bf83187c4b7768f5ece4c332470a70";
        	ourRequest.open('GET',url);
        	ourRequest.onload = function()
        	{
				var data = JSON.parse(ourRequest.responseText);
				console.log(data);
				renderlog(data);
			}
			ourRequest.send();
        });
    } 
    else 
    { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function renderlog(data)
{
	var cel = parseInt(data.main.temp-273);
	var feh = (cel*1.8)+32;
    var humidity = parseInt(data.main.humidity)+"%";
    var windspeed = parseInt(data.wind.speed)+" m/s";
    var pressure = parseInt(data.main.pressure)+" mBar";
	//console.log("The temperature in hum,wis,pre is "+ humidity+ " "+windspeed+" "+pressure);
    document.getElementById("humidityid").innerHTML=humidity;
    document.getElementById("windspeedid").innerHTML=windspeed;
    document.getElementById("pressureid").innerHTML=pressure;
    document.getElementById("temperatureid").innerHTML=cel+"&deg;C";
	
}

