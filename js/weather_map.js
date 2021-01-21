"use strict";

$(document).ready(function () {
	// AJAX call to OpenWeatherApi
	function getWeather(lat, lon) {
		$.get("https://api.openweathermap.org/data/2.5/onecall", {
			appid: OPEN_WEATHER_APPID,
			lat: lat,
			lon: lon,
			units: "imperial"
		}).done(function (data) {
			$("#cardOne").append('<p class="card-header">'+ '</p>' + '<br>');
			$("#cardOne").append('<p>' + data.daily[0].temp.max + '/' + data.daily[0].temp.min + '</p>');
			$("#cardOne").append('<p>' + "Description: " + data.daily[0].weather[0].description + '</p>');
			$("#cardOne").append('<p>' + "Humidity: " + data.daily[0].humidity + '</p>');
			$("#cardOne").append('<p>' + "Wind: " + data.daily[0].wind_deg + '</p>');
			$("#cardOne").append('<p>' + "Pressure: " + data.daily[0].pressure + '</p>');

			$("#cardTwo").append('<p class="card-header">' + '</p>' + '<br>');
			$("#cardTwo").append('<p>' + data.daily[1].temp.max + '/' + data.daily[1].temp.min + '</p>');
			$("#cardTwo").append('<p>' + "Description: " + data.daily[1].weather[0].description + '</p>');
			$("#cardTwo").append('<p>' + "Humidity: " + data.daily[1].humidity + '</p>');
			$("#cardTwo").append('<p>' + "Wind: " + data.daily[1].wind_deg + '</p>');
			$("#cardTwo").append('<p>' + "Pressure: " + data.daily[1].pressure + '</p>');

			$("#cardThree").append('<p class="card-header">' + '</p>' + '<br>');
			$("#cardThree").append('<p>' + data.daily[2].temp.max + '/' + data.daily[2].temp.min + '</p>');
			$("#cardThree").append('<p>' + "Description: " + data.daily[2].weather[0].description + '</p>');
			$("#cardThree").append('<p>' + "Humidity: " + data.daily[2].humidity + '</p>');
			$("#cardThree").append('<p>' + "Wind: " + data.daily[2].wind_deg + '</p>');
			$("#cardThree").append('<p>' + "Pressure: " + data.daily[2].pressure + '</p>');

			$("#cardFour").append('<p class="card-header">' + '</p>' + '<br>');
			$("#cardFour").append('<p>' + data.daily[3].temp.max + '/' + data.daily[3].temp.min + '</p>');
			$("#cardFour").append('<p>' + "Description: " + data.daily[3].weather[0].description + '</p>');
			$("#cardFour").append('<p>' + "Humidity: " + data.daily[3].humidity + '</p>');
			$("#cardFour").append('<p>' + "Wind: " + data.daily[3].wind_deg + '</p>');
			$("#cardFour").append('<p>' + "Pressure: " + data.daily[3].pressure + '</p>');

			$("#cardFive").append('<p class="card-header">' + '</p>' + '<br>');
			$("#cardFive").append('<p>' + data.daily[4].temp.max + '/' + data.daily[4].temp.min + '</p>');
			$("#cardFive").append('<p>' + "Description: " + data.daily[4].weather[0].description + '</p>');
			$("#cardFive").append('<p>' + "Humidity: " + data.daily[4].humidity + '</p>');
			$("#cardFive").append('<p>' + "Wind: " + data.daily[4].wind_deg + '</p>');
			$("#cardFive").append('<p>' + "Pressure: " + data.daily[4].pressure + '</p>');










			// console.log(data.daily);
		});
	}

	getWeather(29.520065873672063, -98.60593488158992);
});