import React from 'react'

import {
  WhiteBox
} from '../../../screens/main/atoms'
import {
  WeatherIcon
} from '../../../components/ui'

const TodayInfo = () => {
  return (
    <WhiteBox>
      <div className="today-info"> 
        <h2>Tashkent</h2>
        <p>Today, 30 april</p>
        <div className="current-forecast">
          <div className="row d-flex align-items-center">
            <div className="col-auto pr-0">
              <WeatherIcon 
                type="cloudy"
                style={{width: "64px", height: "64px"}}/>
            </div>
            <div className="col-auto pr-0">
              <h1>+26°</h1>
            </div>
            <div className="col-auto pr-0">
              <h2 className="text-muted">+14°</h2>
            </div>
          </div>
          <p className="weather-condition">Clear</p>
        </div>
        <hr className="my-2"/>
        <div className="current-forecast-details">
          <div className="row">
            <div className='col-auto pr-0'>
              <p className="text-muted">Humidity: 60%</p>
              <p className="text-muted">Wind: W-E, 9 м/c</p>
              <p className="text-muted">Pressure: 765 mm рт. ст.</p>
            </div>
            <div className='col-auto'>
              <p className="text-muted">Moon phase: Растущая Луна</p>
              <p className="text-muted">Sunrise: 05:22</p>
              <p className="text-muted">Sunset: 19:20</p>
            </div>
          </div>
        </div>
        <hr className="my-3"/>
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
        </div>
      </div>
    </WhiteBox>
  )
}

export default TodayInfo
