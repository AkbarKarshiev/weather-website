import React from 'react'
import {Route, Switch, withRouter} from "react-router";

import Header from '../../components/header';
import SubHeader from '../../components/subHeader';
import {
  Home,
  HourlyTemp
} from '../../pages'

export const Main = () => {
  return (
    <div className="main-container">
      <Header/>
      
      <Switch>
        <Route path='/' render={() => {
          return (
            <React.Fragment>
              <SubHeader withCities/>
              <Home/>
            </React.Fragment>
          )
          }}/>
        <Route path='/:day' render={() => {
          return (
            <React.Fragment>
              <SubHeader withReturnBtn/>
              <HourlyTemp/>
            </React.Fragment>
          )
        }}/>
      </Switch>
    </div>
  )
}


export default withRouter(Main);