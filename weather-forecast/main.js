let weather = {
  apiKey: '304c9d52276d90ea09ec5db854b79959',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.location').innerText = 'Weather in ' + name;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°';
    document.querySelector('.humidity').innerText =
      'humidity:  ' + humidity + '%';
    document.querySelector('.wind-speed').innerText =
      'Windspeed: ' + speed + 'mph';
  },
  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
};
document.querySelector('.search button').addEventListener('click', function () {
  weather.search();
});
