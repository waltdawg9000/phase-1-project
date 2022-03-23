let weather = {
    "apiKey": "0c2d8c723f6a4d209025be1e527fc955",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=gilroy&units=metric&appid=0c2d8c723f6a4d209025be1e527fc955"
        ).then((response) => response.json())
         .then((data) => console.log(data));
    },
};