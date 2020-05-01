import React from 'react'

import { 
  TempVarChart,
  TodayInfo 
} from "./molecules";

import './index.scss'

const HourlyTemp = () => {
  return (
    <div className="hourly-temperature">
      <div className="container">
        <div className="row pb-3">
          <div className="col-12">
            <TodayInfo/>
          </div>
          <div className="col-12 mt-3">
            <TempVarChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HourlyTemp
