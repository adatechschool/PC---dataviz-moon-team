
    
    
window.onload = function() {
    var startPos;

    var fetchMoon = function(latitude, longitude) {
        let url = 'https://api.ipgeolocation.io/astronomy?apiKey=bc821545b212458b93d35ab006e86be3&lat=' + latitude + '&long=' + longitude;
        fetch(url, {method:'GET'})
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
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

             let btn = document.querySelector('#degrade');
             btn.addEventListener('mousemove', e => {
               let rect = e.target.getBoundingClientRect();
               let x = e.clientX - rect.left;
               let y = e.clientY - rect.top;
               btn.style.setProperty('--x', x + 'px');
               btn.style.setProperty('--y', y + 'px');
               console.log('change');
             });

             // heure lunaire lié html

             window.addEventListener("moontime:updated", function(e) {
                document.querySelector(".moonClock").innerHTML = " " + "HOUR ON MOON : " + " " + moon.formatMoonString("%MS:%MM:%M"); 
            })

            // bouton texte lune

                     
              function randomPoetry () {
                const moonPoetry = [ 
                    `"De deux choses lune, l'autre c'est le soleil."<br>Jacques Prévert`,
                    `"La lune est le rêve du soleil."<br>Paul Klee`,
                    `"L'amitié n'est pas un soleil, c'est une jolie lune qui éclaire surtout le soir de la vie."<br>Anne Barratin`,
                    `"Quand la lune est pleine, elle commence à décliner."<br>Proverbe japonais"`,
                    `"La multitude des étoiles soutient la lune."<br>Proverbe chinois"`,
                    `"La lune bouge doucement mais elle traverse la ville.<br>Proverbe ashanti"`,
                    `"We all shine on...like the moon and the stars and the sun...we all shine on...come on and on and on..."<br>John Lennon`,
                    `"Yours is the light by which my spirit’s born : - you are my sun, my moon, and all my stars."<br>E.E. Cummings`,
                    `Do not swear by the moon, for she changes constantly. then your love would also change."<br>William Shakespeare`];
                var moonPoetryRandom = 0;
                for (moonPoetryRandom; moonPoetryRandom < moonPoetry.length; moonPoetryRandom++) {
                    moonPoetryRandom = moonPoetry[Math.floor(Math.random() * moonPoetry.length)];
                    console.log(moonPoetryRandom);
                    document.getElementById("texte_lune").innerHTML = moonPoetryRandom;
                }
                   
              }
            

            //   `"De deux choses lune, l'autre c'est le soleil."<br>Jacques Prévert`,
            //   `"La lune est le rêve du soleil."<br>Paul Klee`,
            //   `"L'amitié n'est pas un soleil, c'est une jolie lune qui éclaire surtout le soir de la vie."<br>Anne Barratin`,
            //   `"Quand la lune est pleine, elle commence à décliner."<br>Proverbe japonais"`,
            //   `"La multitude des étoiles soutient la lune."<br>Proverbe chinois"`,
            //   `"La lune bouge doucement mais elle traverse la ville.<br>Proverbe ashanti"`,
            //   `"We all shine on...like the moon and the stars and the sun...we all shine on...come on and on and on..."<br>John Lennon`,
            //   `"Yours is the light by which my spirit’s born : - you are my sun, my moon, and all my stars."<br>E.E. Cummings`,
            //   `Do not swear by the moon, for she changes constantly. then your love would also change."<br> William Shakespeare`,

          