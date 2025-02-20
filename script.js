async function getWeatherData() {
    const city=document.getElementById("cityInput").value;
    const apiKey = "fcb2eddad746c55f27136fccebdbb156";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        let response=await fetch(url);
        let data=await response.json();

        DocumentFragment.getElementById("waetherResult").innerHTML= `<h3>${data.name}</h3><p>${data.weather[0].description}</p><h2>${data.main.temp}°C</h2>`;
    }catch(error){
        document.getElementById("weatherResult").innerHTML="City not found"
    }

}