
    
    
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
        console.log("2 " + startPos.coords.latitude, startPos.coords.longitude);
        fetchReverseGeoloc(startPos.coords.longitude , startPos.coords.latitude);   
    };

    navigator.geolocation.getCurrentPosition(geoSuccess);
};

if (navigator.geolocation) {
    console.log('Geolocation is supported!');
    
} else {
    console.log('Geolocation is not supported for this Browser/OS.');
}

// var valuesGeo = geoSuccess(position);
// var valuesLong = valuesGeo.long;
// var valuesLat = valuesGeo.lat;
    

 var fetchReverseGeoloc = function(longitude, latitude) {
          let url =  "https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "+" + longitude + "&key=60615941f35440d0a11fd071b32532a0"
          fetch(url, {method:'GET'},{ mode : 'no-cors'})
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                document.getElementById('earth_location').innerHTML = " " + "LOCATION : " + response.results[0].formatted;


            })
            }  
            
           
             // gestion du dégradé

             $(document).mousemove(function(event) {
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                
                mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
                mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
                
                $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
              });

