import React from 'react'
import { connect } from "react-redux";
import moment from 'moment'

import history from "../../../../helpers/history";
import * as actions from '../../../redux/actions';
import * as utilityFunctions from '../../../../helpers/UtilityFunctions';

import {
  WhiteBox
} from '../../../screens/main/atoms'

import TableRow from './tableRow'

const mapDispatchToProps = (dispatch) => ({
  setHourlyDate: (currentDate, startTime, endTime) => dispatch(actions.setStartEndTime(currentDate, startTime, endTime))
});

const connector = connect(
	null,
	mapDispatchToProps
);

const WeeklyForecast = ({weeklyData, setHourlyDate}) => {
  const showHourlyDataHandler = (startTime, endTime, currentDate) => {
    setHourlyDate(currentDate, startTime, endTime);
    history.push('/' + currentDate);
  }

  const days = weeklyData.map((elem, index) => {
    if(index !== 0) {
      let startTime = '', endTime = '';
      const currentDate = elem.observation_time.value;
      const weekDay = moment(elem.observation_time.value).format('dddd');
      const date = moment(elem.observation_time.value).format('MMMM D');
      const weatherCode = elem.weather_code.value;
      const weatherDesrb = utilityFunctions.convertToTitleCase(weatherCode);
      const minTemp = utilityFunctions.getTempSign(elem.temp[0].min.value) + Math.round(elem.temp[0].min.value) + '°';
      const maxTemp = utilityFunctions.getTempSign(elem.temp[1].max.value) + Math.round(elem.temp[1].max.value) + '°';

      if(index <= 6-1) {
        startTime = moment(elem.observation_time.value).toISOString();
        if(index !== 5) {
          endTime = moment(elem.observation_time.value).add(1,'days').toISOString();
        } else endTime = '';
      }
      
      return (
        <TableRow 
          key={index}
          weekDay={weekDay}
          date={date}
          weatherCode={weatherCode}
          weatherDesrb={weatherDesrb}
          hourlyHandler={startTime !== '' ? () => showHourlyDataHandler(startTime, endTime, currentDate) : undefined}
          minTemp={minTemp}
          maxTemp={maxTemp}
        />
      )
    } else return null;
    
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
              <th className="text-muted">View Hourly</th>
            </tr>
            {days}
          </tbody>
        </table>
      </div>
    </WhiteBox>
  )
}

export default connector(WeeklyForecast)
