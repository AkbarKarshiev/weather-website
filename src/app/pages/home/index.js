import React from 'react'

import {
  TodayInfo,
  WeeklyForecast,
  News
} from './molecules'

import './index.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row pb-3">
          <div className="col-4 pr-0">
            <TodayInfo /> 
          </div>
          <div className="col-5">
            <WeeklyForecast/>
          </div>
          <div className="col-3 pl-0">
            <News/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
