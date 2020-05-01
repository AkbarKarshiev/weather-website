import React, {useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from '../../redux/actions';

import {
  TodayInfo,
  WeeklyForecast,
  News
} from './molecules'

import './index.scss'

const mapStateToProps = (state) => ({
  cityName: state.home.cityName,
  lat: state.home.lat,
  long: state.home.long,
  dailyForecasts: state.home.forecastData
});

const mapDispatchToProps = (dispatch) => ({
  fetchDailyForecast: (lat, long, endTime) => dispatch(actions.fetchDailyForecast(lat, long, endTime))
});

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

const Home = (props) => {
  const {cityName, lat, long, fetchDailyForecast, dailyForecasts} = props;

  useEffect(() => {
    if(!dailyForecasts.length) {
      fetchDailyForecast(lat, long, '2020-05-07');
    }
  }, [])

  console.log(dailyForecasts);
  
  return (
    <div className="home">
      <div className="container">
        <div className="row pb-3">
          {dailyForecasts.length !== 0 && 
            <React.Fragment>
              <div className="col-4 pr-0">
                <TodayInfo 
                  cityName={cityName}
                  todayData={dailyForecasts[0]}
                /> 
              </div>
              <div className="col-5">
                <WeeklyForecast
                  weeklyData={dailyForecasts}
                  />
              </div>
              <div className="col-3 pl-0">
                <News/>
              </div>
            </React.Fragment>
          }
        </div>
      </div>
    </div>
  )
}

export default connector(Home)
