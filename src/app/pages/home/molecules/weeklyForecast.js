import React from 'react'
import moment from 'moment'

import * as utilityFunctions from '../../../../helpers/UtilityFunctions';

import {
  WhiteBox
} from '../../../screens/main/atoms'

import TableRow from './tableRow'

const WeeklyForecast = ({weeklyData}) => {
  const days = weeklyData.map((elem, index) => {
    if(index !== 0) {
      const weekDay = moment(elem.observation_time.value).format('dddd');
      const date = moment(elem.observation_time.value).format('MMMM D');
      const weatherCode = elem.weather_code.value;
      const weatherDesrb = utilityFunctions.convertToTitleCase(weatherCode);
      const minTemp = utilityFunctions.getTempSign(elem.temp[0].min.value) + Math.round(elem.temp[0].min.value) + '°';
      const maxTemp = utilityFunctions.getTempSign(elem.temp[1].max.value) + Math.round(elem.temp[1].max.value) + '°';
      return <TableRow 
        weekDay={weekDay}
        date={date}
        weatherCode={weatherCode}
        weatherDesrb={weatherDesrb}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    }
  })

  return (
    <WhiteBox>
      <div className="weekly-forecast">
        <h3>Weekly Forecast</h3>
        <table className="weather-table w-100">
          <tbody>
            <tr>
              <th className="text-muted">Day</th>
              <th className="text-muted">Temperature</th>
              <th className="text-muted">Description</th>
            </tr>
            {days}
          </tbody>
        </table>
      </div>
    </WhiteBox>
  )
}

export default WeeklyForecast
