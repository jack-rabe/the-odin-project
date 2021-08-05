import apiKey from './apiKey.js';

// gets the current, high and low temp, wind speed, and description of cloud cover
async function getCurrentWeather(cityName, units) {
	let response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`
	);
	response = await response.json();

	const temp = response.main.temp;
	const high = response.main.temp_max;
	const low = response.main.temp_min;
	const humidity = response.main.humidity;
	const windSpeed = response.wind.speed;
	const cloudDescription = response.weather[0].description;
	return { temp, high, low, humidity, windSpeed, cloudDescription };
}

async function getForecast(cityName, units) {
	let response = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=${apiKey}`
	);
	response = await response.json();

	console.log(response);
}

getForecast('Columbus', 'imperial');

const a = async () => {
	const currentWeather = await getCurrentWeather('Columbus', 'imperial');

	const tags = document.querySelectorAll('p');
	for (const tag of tags) {
		tag.textContent += currentWeather[tag.id];
	}
};

a();
