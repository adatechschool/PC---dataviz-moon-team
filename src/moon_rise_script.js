
    
    
window.onload = function() {
    var startPos;

    var fetchMoon = function(latitude, longitude) {
        let url = 'https://api.ipgeolocation.io/astronomy?apiKey=bc821545b212458b93d35ab006e86be3&lat=' + latitude + '&long=' + longitude;
        fetch(url, {method:'GET'})
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                var userData = response;
                document.getElementById('date_earth').innerHTML = " " + "DATE ON EARTH : " + response.date;
                document.getElementById('earth_latitude').innerHTML =  " "+ "LATITUDE : "+ response.location.latitude; 
                document.getElementById('earth_longitude').innerHTML = " "+ "LONGITUDE : "+ response.location.longitude;   
                document.getElementById('moon_azimuth').innerHTML = " "  + "MOON AZIMUTH : " + response.moon_azimuth ;
                document.getElementById('moon_altitude').innerHTML =  " "+ "MOON ALTITUDE  : " + response.moon_altitude ;   
                document.getElementById('moon_distance').innerHTML =  " " + "MOON DISTANCE : " +  response.moon_distance;   
                document.getElementById('moonrise').innerHTML =  " " + " MOONRISE : " + response.moonrise;   
                document.getElementById('moonset').innerHTML = " " + " MOONSET : " + response.moonset ;   
                document.getElementById('solar_noon').innerHTML = " " + " SOLAR NOON : " + response.solar_noon;   
                document.getElementById('sun_altitude').innerHTML =  " " + " SUN ALTITUDE : " + response.sun_altitude ;   
                document.getElementById('sun_azimuth').innerHTML =  " " + " SUN AZIMUTH : " +response.sun_azimuth; 
                document.getElementById('sun_distance').innerHTML = " " + "SUN DISTANCE : " + response.sun_distance ;    
                document.getElementById('sunrise').innerHTML = " " + " SUNRISE : " +response.sunrise;  
                document.getElementById('sunset').innerHTML = " " + "SUNSET : " + response.sunset;
        })
    }

    var geoSuccess = function(position) {
        startPos = position;
        fetchMoon(startPos.coords.latitude, startPos.coords.longitude);
    };

    navigator.geolocation.getCurrentPosition(geoSuccess);
};

if (navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS.');
}


    

    