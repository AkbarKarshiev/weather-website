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
      <SubHeader/>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/:day' render={() =>
          <HourlyTemp/>}/>
      </Switch>
      {/* <HourlyTemp/> */}
    </div>
  )
}


export default withRouter(Main);