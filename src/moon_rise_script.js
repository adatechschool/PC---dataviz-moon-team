function fetchMoon(){
    fetch('https://api.ipgeolocation.io/astronomy?apiKey=bc821545b212458b93d35ab006e86be3&lat=48.856&long=2.352',{ method:'GET'})
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    var userData = response;
                    //document.getElementById('earth_hour').innerHTML = response.current_time;
                    document.getElementById('date_earth').innerHTML = response.date;
                    document.getElementById('earth_latitude').innerHTML = response.location.latitude;
                    document.getElementById('earth_longitude').innerHTML = response.location.longitude;   
                    document.getElementById('moon_azimuth').innerHTML = response.moon_azimuth;
                    document.getElementById('moon_altitude').innerHTML = response.moon_altitude;   
                    document.getElementById('moon_distance').innerHTML = response.moon_distance;   
                    document.getElementById('moonrise').innerHTML = response.moonrise;   
                    document.getElementById('moonset').innerHTML = response.moonset;   
                    document.getElementById('solar_noon').innerHTML = response.solar_noon;   
                    document.getElementById('sun_altitude').innerHTML = response.sun_altitude;   
                    document.getElementById('sun_azimuth').innerHTML = response.sun_azimuth;   
                    document.getElementById('sun_distance').innerHTML = response.sun_distance;   
                    document.getElementById('sunrise').innerHTML = response.sunrise;  
                    document.getElementById('sunset').innerHTML = response.sunset;   
 

                })
            } 
    fetchMoon();
    