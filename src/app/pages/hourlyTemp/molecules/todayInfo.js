import React from 'react'

import {
  WhiteBox
} from '../../../screens/main/atoms'

const TodayInfo = ({cityName, currentDate}) => {
  return (
    <WhiteBox>
      <div className="today-info"> 
        <h2>{cityName}</h2>
        <p className="mb-0">{currentDate}</p>
      </div>
    </WhiteBox>
  )
}

export default TodayInfo
