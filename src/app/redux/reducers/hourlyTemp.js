import * as actionTypes from '../actionTypes';

const initialState = {
  currentDate: "",
  startTime: "",
  endTime: "",
  forecastData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_START_END_DATE: 
      return {
        ...state,
        currentDate: action.currentDate,
        startTime: action.startTime,
        endTime: action.endTime,
      }
    case actionTypes.SET_HOURLY_FORECAST: 
      return {
        ...state, 
        forecastData: action.forecastData
      };
    case actionTypes.RESET_HOURLY_FORECAST:
      return {
        ...initialState
      }
    default:
        return state;
  }
}

export default reducer;