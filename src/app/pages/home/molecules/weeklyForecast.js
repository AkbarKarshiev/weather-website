import React from 'react'

import {
  WhiteBox
} from '../../../screens/main/atoms'
import {
  WeatherIcon
} from '../../../components/ui'

const WeeklyForecast = () => {
  return (
    <WhiteBox>
      <div className="weekly-forecast">
        <h3>Weekly Forecast</h3>
        <table className="weather-table w-100">
          <tr>
            <th className="text-muted">Day</th>
            <th className="text-muted">Temperature</th>
            <th className="text-muted">Description</th>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-weight-bold red-text">Week day</p>
              <p>20 May</p>
            </td>
            <td>
              <WeatherIcon 
                type="cloudy"
                style={{
                  width: "40px", 
                  height: "40px", 
                  float: "left",
                  marginRight: "5px"}}/>
              <p className="forecast-day">+28°</p>
              <p className="text-muted">+18°</p>
            </td>
            <td>
              Cloudy
            </td>
          </tr>
        </table>
      </div>
    </WhiteBox>
  )
}

export default WeeklyForecast
