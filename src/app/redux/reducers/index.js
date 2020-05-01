import { combineReducers } from 'redux'

import home from './home'
import hourlyTemp from './hourlyTemp'
import spinner from './spinner'

export default combineReducers({
  home,
  hourlyTemp,
  spinner
});
