import * as actionTypes from '../actionTypes';

const initialState = {
  spinnig: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_SPINNING: 
      return {
        spinnig: true
      }
    case actionTypes.END_SPINNING: 
      return {
        spinnig: false
      };
    default:
      return state;
  }
}

export default reducer;