import { httpGet, API_KEY } from "../../api";

export const fetchHourlyForecast = (lat, long, startTime, endTime, params) => httpGet({
  url: `hourly?lat=${lat}&lon=${long}&unit_system=si&fields=temp&start_time=${startTime}&end_time=${endTime}&apikey=${API_KEY}`, params
});