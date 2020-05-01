import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import moment from 'moment'
import { useParams } from "react-router-dom";

import * as utilityFunctions from '../../../helpers/UtilityFunctions';
import * as actions from '../../redux/actions'

import { 
  TempVarChart,
  TodayInfo 
} from "./molecules"

import './index.scss'

const mapStateToProps = (state) => {
  return {
    lat: state.home.lat,
    long: state.home.long,
    cityName: state.home.cityName,
    currentDate: state.hourlyTemp.currentDate,
    startTime: state.hourlyTemp.startTime,
    endTime: state.hourlyTemp.endTime,
    hourlyForecasts: state.hourlyTemp.forecastData
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHourlyForecast: (lat, long, startTime, endTime) => dispatch(actions.fetchHourlyForecast(lat, long, startTime, endTime)),
  resetHourlyForecast: () => dispatch(actions.resetHourlyForecast())
});

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

const HourlyTemp = (props) => {
  const {
    lat, 
    long, 
    cityName, 
    currentDate,
    startTime, 
    endTime, 
    hourlyForecasts,
    fetchHourlyForecast,
    resetHourlyForecast
  } = props;
  const [outOfRange, setOutOfRange] = useState(false);
  const { date } = useParams();
  let currentDateFormatted = '', startTimeDerived = '', endTimeDerived = '';

  if (currentDate !== '') {
    currentDateFormatted = moment(currentDate).format('dddd, MMMM D');
  } else currentDateFormatted = moment(date).format('dddd, MMMM D');

  let formattedHourlyArray = [];

  useEffect(() => {
    if(startTime === '') {
      let day = moment(date);
      let current = moment().toISOString();
      const differenceDays = day.diff(current, 'days');
      let differenceHours = '';

      if (differenceDays >= 0 && differenceDays <= 4) {
        day = moment(date);
        current = moment().toISOString();
        differenceHours = day.diff(current, 'hours');
        
        if (differenceHours > -24 && differenceHours < 0) {
          startTimeDerived = moment().toISOString();
          endTimeDerived = moment().add(1,'days').format('YYYY-MM-DD');
          endTimeDerived = moment(endTimeDerived).toISOString();
        } else {
          startTimeDerived = moment(date).toISOString();
          if (differenceDays === 4) {
            endTimeDerived=''
          } else endTimeDerived = moment(date).add(1,'days').toISOString();
        }
        fetchHourlyForecast(lat, long, startTimeDerived, endTimeDerived)
      } else setOutOfRange(true)
    } else fetchHourlyForecast(lat, long, startTime, endTime);

    return () => {
      resetHourlyForecast()
    }
  }, []);
  
  if (hourlyForecasts.length) {
    formattedHourlyArray = hourlyForecasts.map((elem, index) => {
      if (index !== 0) {
        const label = moment(elem.observation_time.value).format('HH:mm');
        const value = utilityFunctions.getTempSign(elem.temp.value) + elem.temp.value;
        return {
          label: label,
          value: value
        }
      } 
      return;
    })
  }
  
  return (
    <div className="hourly-temperature">
      <div className="container">
        <div className="row pb-3">
          {hourlyForecasts.length > 0 && !outOfRange && 
            <React.Fragment>
              <div className="col-12">
                <TodayInfo
                  cityName={cityName}
                  currentDate={currentDateFormatted}
                />
              </div>
              <div className="col-12 mt-3">
                <TempVarChart 
                  formattedHourlyArray={formattedHourlyArray}/>
              </div>
            </React.Fragment>
          }
          {outOfRange && 
            <div className="col red-text"> 
              Out of Range
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default connector(HourlyTemp)
