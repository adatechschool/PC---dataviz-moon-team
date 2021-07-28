function fetchMoon(){
    fetch('https://api.ipgeolocation.io/astronomy?apiKey=bc821545b212458b93d35ab006e86be3&lat=-27.4748&long=153.017',{ method:'GET'})
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    var userData = response;
                    console.log(userData.location)
                    document.getElementById('informations').innerHTML = response.date;   
                })
            } 
    fetchMoon();