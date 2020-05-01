import * as actionTypes from "../actionTypes";
import * as actions from "./index";

import {fetchDailyForecast as fetchDailyForecastAPI} from '../../pages/home/api'

export const fetchDailyForecast = (lat, long, endTime) => {
  return dispatch => {
    dispatch(actions.startSpinning());
    fetchDailyForecastAPI(lat, long, endTime)
      .then(response => {
        dispatch(actions.endSpinning());
        dispatch(setDailyForecast(response.data));
      })
      .catch(error => {
        dispatch(actions.endSpinning());
      })
  }
}

export const setCityData = (name, lat, long) => {
  return {
    type: actionTypes.SET_CITY_DATA,
    cityName: name,
    lat: lat,
    long: long
  }
}

export const setDailyForecast = (rawData) => {
  return {
    type: actionTypes.SET_DAILY_FORECAST,
    forecastData: rawData
  }
}

export const resetDailyForecast = () => {
  return {
    type: actionTypes.RESET_DAILY_FORECAST,
  }
}