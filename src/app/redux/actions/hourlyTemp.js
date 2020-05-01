import * as actionTypes from "../actionTypes";
import {fetchHourlyForecast as fetchHourlyForecastAPI} from '../../pages/hourlyTemp/api'

export const fetchHourlyForecast = (lat, long, startTime, endTime) => {
  return dispatch => {
    fetchHourlyForecastAPI(lat, long, startTime, endTime)
      .then(response => {
        dispatch(setHourlyForecast(response.data));
      })
  }
}

export const setStartEndTime = (currentDate, startTime, endTime) => {
  return {
    type: actionTypes.SET_START_END_DATE,
    currentDate: currentDate,
    startTime: startTime,
    endTime: endTime
  }
}

export const setHourlyForecast = (rawData) => {
  return {
    type: actionTypes.SET_HOURLY_FORECAST,
    forecastData: rawData
  }
}

export const resetHourlyForecast = () => {
  return {
    type: actionTypes.RESET_HOURLY_FORECAST,
  }
}