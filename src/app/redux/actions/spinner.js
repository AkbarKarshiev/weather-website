import * as actionTypes from "../actionTypes";

export const startSpinning = () => {
  return {
    type: actionTypes.START_SPINNING,
  }
}

export const endSpinning = () => {
  return {
    type: actionTypes.END_SPINNING,
  }
}