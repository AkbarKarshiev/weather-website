import * as actionTypes from '../actionTypes';
import {cityData} from '../../cities';

const initialState = {
  cityName: cityData[0].name,
  lat: cityData[0].lat,
  long: cityData[0].long,
  forecastData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CITY_DATA: 
      return {
        ...state,
        cityName: action.cityName,
        lat: action.lat,
        long: action.long
      }
    case actionTypes.SET_DAILY_FORECAST: 
      return {
        ...state, 
        forecastData: action.forecastData
      };
    case actionTypes.RESET_DAILY_FORECAST:
      return {
        ...initialState
      }

    default:
        return state;
  }
}

export default reducer;