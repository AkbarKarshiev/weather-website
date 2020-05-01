import React from 'react'
import moment from 'moment'
import {
  WhiteBox
} from '../../../screens/main/atoms'
import {
  WeatherIcon
} from '../../../components/ui'

import * as utilityFunctions from '../../../../helpers/UtilityFunctions';

const TodayInfo = ({cityName, todayData}) => {
  
  const {observation_time, temp, weather_code, humidity, wind_direction, wind_speed, baro_pressure, moon_phase, sunrise, sunset} = todayData;

  const todayDate = moment(observation_time.value).format('MMMM D');
  const tempMax = utilityFunctions.getTempSign(temp[1].max.value) + Math.round(temp[1].max.value) + '°';
  const tempMin = utilityFunctions.getTempSign(temp[0].min.value) + Math.round(temp[0].min.value) + '°';
  const weatherDescrb = utilityFunctions.convertToTitleCase(weather_code.value);
  const humidityConverted = Math.round(humidity[0].min.value + humidity[1].max.value)/2;
  const windSpeed = Math.round(wind_speed[1].max.value);
  const pressure = Math.round((baro_pressure[0].min.value + baro_pressure[1].max.value)/2 * 0.75006375541921);
  const windDirection = utilityFunctions.deriveWindDir(Math.round(wind_direction[0].min.value + wind_direction[1].max.value)/2);
  const moonPhase = utilityFunctions.convertToTitleCase(moon_phase.value);
  const sunrizeTime = moment(sunrise.value).format('HH:mm');
  const sunrsetTime = moment(sunset.value).format('HH:mm');
  
  return (
    <WhiteBox>
      <div className="today-info"> 
        <h2>{cityName}</h2>
        <p>{todayDate}</p>
        <div className="current-forecast">
          <div className="row d-flex align-items-center">
            <div className="col-auto pr-0">
              <WeatherIcon 
                type={weather_code.value}
                style={{width: "64px", height: "64px"}}/>
            </div>
            <div className="col-auto pr-0">
              <h1>{tempMax}</h1>
            </div>
            <div className="col-auto pr-0">
              <h2 className="text-muted">{tempMin}</h2>
            </div>
          </div>
          <p className="weather-condition">{weatherDescrb}</p>
        </div>
        <hr className="my-2"/>
        <div className="current-forecast-details">
          <div className="row">
            <div className='col-auto pr-0'>
              <p className="text-muted">Humidity: {humidityConverted}%</p>
              <p className="text-muted">Wind: {windDirection}, {windSpeed} м/c</p>
              <p className="text-muted">Pressure: {pressure} mm Hg</p>
            </div>
            <div className='col-auto'>
              <p className="text-muted">Moon phase: {moonPhase}</p>
              <p className="text-muted">Sunrise: {sunrizeTime}</p>
              <p className="text-muted">Sunset: {sunrsetTime}</p>
            </div>
          </div>
        </div>
        {/* <hr className="my-3"/>
        <div className="current-forecast-day">
          <div className="row d-flex justify-content-center">
            <div className="col-auto text-center">
              <p className="mb-1 text-muted">Morning</p>
              <WeatherIcon
                className="mx-auto" 
                type="clear"
                style={{width: "48px", height: "48px"}}/>
              <p className="mt-1">+12°</p>
            </div>
            <div className="col-auto text-center">
              <p className="mb-1 text-muted">Day</p>
              <WeatherIcon
                className="mx-auto" 
                type="clear"
                style={{width: "48px", height: "48px"}}/>
              <p className="mt-1">+12°</p>
            </div>
            <div className="col-auto text-center">
              <p className="mb-1 text-muted">Evening</p>
              <WeatherIcon
                className="mx-auto" 
                type="clear"
                style={{width: "48px", height: "48px"}}/>
              <p className="mt-1">+12°</p>
            </div>
          </div>
        </div> */}
      </div>
    </WhiteBox>
  )
}

export default TodayInfo
