import React from 'react'
import {Route, Switch, withRouter} from "react-router";

import Header from '../../components/header';
import SubHeader from '../../components/subHeader';
import {Spinner} from '../../components/ui';
import {
  Home,
  HourlyTemp
} from '../../pages'

export const Main = () => {
  return (
    <div className="main-container">
      <Header/>
      <Spinner/>
      <Switch>
        <Route path='/' exact>
          <SubHeader withCities/>
          <Home/>
        </Route> 
        <Route path='/:date'>
          <SubHeader withReturnBtn/>
          <HourlyTemp/>
        </Route> 
        
        {/* <Route path='/' exact render={() => {
          return (
            <React.Fragment>
              <SubHeader withReturnBtn/>
              <HourlyTemp/>
            </React.Fragment>
          )
        }}/> */}
      </Switch>
    </div>
  )
}


export default withRouter(Main);