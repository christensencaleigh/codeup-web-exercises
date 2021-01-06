"use strict";

$(document).ready(function () {
	// AJAX call to OpenWeatherApi
	function getWeather(lon, lat) {

		$.get("http://api.openweathermap.org/data/2.5/forecast", {
			APPID: OPEN_WEATHER_APPID,
			q: "San Antonio, US",
			units: "imperial"
		}).done(function (data) {
			console.log(data);
		})
	}
})