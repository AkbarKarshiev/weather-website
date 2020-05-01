import { combineReducers } from 'redux'

import home from './home'
import hourlyTemp from './hourlyTemp'

export default combineReducers({
  home,
  hourlyTemp
});
