// import moment from "moment";
("use strict");
//  JSON очень удобно использовать для получения данных в сети. Например, один из популярных сервисов прогноза погоды, Open Weather, может отдавать данные в JSON через API.
let timezone = 3600;

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg, RU&appid=7d9fc0c12d7e72c928c46cab5249ab7e"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city-name").textContent = data.name;
    document.querySelector(".temperature-count").innerHTML =
      Math.round(data.main.temp - 273) + " &deg;C";
    document.querySelector(".weather-status").textContent =
      data.weather[0]["description"];
    document.querySelector(".feels-like").innerHTML =
      Math.round(data.main.feels_like - 273) + " &deg;C";
    document.querySelector(".sunrise").innerHTML = moment
      .utc(data.sys.sunrise, "X")
      .add(data.sys.timezone, "seconds")
      .format("HH:mm a");
    document.querySelector(
      ".weather-status icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  })
  .catch(function () {
    // catch any errors
  });
