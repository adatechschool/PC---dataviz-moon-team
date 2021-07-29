function fetchMoon(){
    fetch('https://api.ipgeolocation.io/astronomy?apiKey=bc821545b212458b93d35ab006e86be3&lat=48.856&long=2.352',{ method:'GET'})
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    var userData = response;
                    //document.getElementById('earth_hour').innerHTML = response.current_time;
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
    fetchMoon();

    var backgroundImage = document.getElementById("background_image");

    var imageArray = ["/full_moon_black.jpg","/full_moon_white.jpg"];

    var imageIndex = 0;

    function changeImage() {
        backgroundImage.setAttribute('src',imageArray[imageIndex]);
        imageIndex++;
        if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }

    setInterval(changeImage,500);
    