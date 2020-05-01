import React from 'react'

import {
  WhiteBox
} from '../../../screens/main/atoms'
import {
  WeatherIcon
} from '../../../components/ui'

const TodayInfo = ({cityName, todayData}) => {
  
  const {observation_time, temp, weather_code, humidity, wind_direction, wind_speed, baro_pressure, moon_phase, sunrise, sunset} = todayData;

  return (
    <WhiteBox>
      <div className="today-info"> 
        <h2>{cityName}</h2>
        <p>{observation_time.value}</p>
        <div className="current-forecast">
          <div className="row d-flex align-items-center">
            <div className="col-auto pr-0">
              <WeatherIcon 
                type={weather_code.value}
                style={{width: "64px", height: "64px"}}/>
            </div>
            <div className="col-auto pr-0">
              <h1>{'+' + Math.round(temp[1].max.value) + '°'}</h1>
            </div>
            <div className="col-auto pr-0">
              <h2 className="text-muted">{'+' + Math.round(temp[0].min.value) + '°'}</h2>
            </div>
          </div>
          <p className="weather-condition">{weather_code.value}</p>
        </div>
        <hr className="my-2"/>
        <div className="current-forecast-details">
          <div className="row">
            <div className='col-auto pr-0'>
              <p className="text-muted">Humidity: {Math.round(humidity[0].min.value + humidity[1].max.value)}%</p>
              <p className="text-muted">Wind: {Math.round(wind_direction[0].min.value + wind_direction[1].max.value)}, {Math.round(wind_speed[1].max.value)} м/c</p>
              <p className="text-muted">Pressure: {Math.round(baro_pressure[0].min.value + baro_pressure[1].max.value)}</p>
            </div>
            <div className='col-auto'>
              <p className="text-muted">Moon phase: {moon_phase.value}</p>
              <p className="text-muted">Sunrise: {sunrise.value}</p>
              <p className="text-muted">Sunset: {sunset.value}</p>
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
