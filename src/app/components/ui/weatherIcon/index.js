import React from 'react'

const WeatherIcon = ({type, style={ width: "40px", verticalAlign: "baseline"}, className}) => {
  let convertedType = '';
  if (type === "ice_pellets" || type === "ice_pellets_light" || type === "ice_pellets_heavy") {
    convertedType = "ice_pellets";
  } else if (type === "snow_light" || type === "flurries") {
    convertedType = "snow_light";
  } else if (type === "rain_heavy" || type === "freezing_rain_heavy") {
    convertedType = "rain_heavy";
  } else if (type === "rain" || type === "freezing_rain") {
    convertedType = "rain";
  } else if (type === "rain_light" || type === "freezing_rain_light") {
    convertedType = "rain_light";
  } else if (type === "drizzle" || type === "freezing_drizzle") {
    convertedType = "drizzle";
  } else if (type === "fog" || type === "fog_light") {
    convertedType = "fog";
  } else if (type === "cloudy" || type === "mostly_cloudy") {
    convertedType = "cloudy";
  } else convertedType = type;

  const logo = require('../../../../assets/weather-icons/' + convertedType + '.png'); 
  return (
    <img src={logo} alt={type} style={style} className={className}/>
  )
}

export default WeatherIcon