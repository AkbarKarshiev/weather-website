import { httpGet, API_KEY } from "../../api";

export const fetchDailyForecast = (lat, long, endTime, params) => httpGet({
  url: `daily?lat=${lat}&lon=${long}&unit_system=si&fields=temp%2Chumidity%2Cwind_speed%2Cwind_direction%2Cbaro_pressure%2Csunrise%2Csunset%2Cmoon_phase%2Cweather_code&start_time=now&end_time=${endTime}&apikey=${API_KEY}`, params
});

