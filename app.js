window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            

     
            const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&temperature_unit=fahrenheit&daily`;
            fetch(api)
            .then(response => {
             return response.json();
            })
            .then(data => {
             console.log(data);
             const {temperature} = data.current_weather;
              temperatureDegree.textContent = temperature;
              locationTimezone.textContent = data.timezone;

              let celsius = (temperature - 32) * (5/9);
            

              temperatureSection.addEventListener("click",()=>{
                if(temperatureSpan.textContent =="F"){
                    temperatureSpan.textContent = "C";
                    temperatureDegree.textContent =  Math.floor(celsius);

                }
                else {
                    temperatureSpan.textContent = "F";
                    temperatureDegree.textContent = temperature;
                }
              });
            });
        
        });

    }

});



// const options = {
            //     method: 'GET',
            //     headers: {
            //         'X-RapidAPI-Key': 'b7f17ae7dbmsh397c786351597d3p1f4fefjsnf382f47f0eab',
            //         'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
            //     }
            // };


            // fetch(`https://dark-sky.p.rapidapi.com/${lat},${long}`, options)
            // .then(response => response.json())
            // .then(data => {

            // console.log(data);
            
            //  });
             