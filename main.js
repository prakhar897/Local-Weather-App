var x = document.getElementById("demo");
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
			}
			ourRequest.send();
        });
    } 
    else 
    { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


