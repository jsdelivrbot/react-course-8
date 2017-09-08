import axios from 'axios';

const WEATHER_API = '8f7e983ce14d03f2c3d7119874b5122d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
	const url = `${ROOT_URL}&q=${city},br`;
	const request = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}