const api_key = 'cbc8a446acb1c5ce2e426faa97f7c02e';
const city = 'Petrópolis, BR';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    document.getElementById('temperatura').innerHTML = `${temperature} °C`;
    document.getElementById('descricao').innerHTML = description;
    document.getElementById('icone').src = icon;
    document.getElementById('velVento').innerHTML = `${windSpeed} km/h`;
    document.getElementById('umidade').innerHTML = `${humidity}%`;
  });
