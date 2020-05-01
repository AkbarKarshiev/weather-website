import React from 'react'

import {
  WhiteBox
} from '../../../screens/main/atoms'

import TableRow from './tableRow'

const WeeklyForecast = ({weeklyData}) => {

  const days = weeklyData.map(elem => {
    const weekDay = "Week Day";
    const date = elem.observation_time.value;
    const weatherCode = elem.weather_code.value;
    const minTemp = Math.round(elem.temp[0].min.value);
    const maxTemp = Math.round(elem.temp[1].max.value);
    return <TableRow 
      weekDay={weekDay}
      date={date}
      weatherCode={weatherCode}
      minTemp={minTemp}
      maxTemp={maxTemp}
    />
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
