import React from 'react'

const WeatherIcon = ({type, style={ width: "40px", verticalAlign: "baseline"}, className}) => {
  const logo = require('../../../../assets/weather-icons/' + type + '.png'); 
  return (
    <img src={logo} alt={type} style={style} className={className}/>
  )
}

export default WeatherIcon
