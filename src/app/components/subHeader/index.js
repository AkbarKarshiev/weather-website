import React from "react";
import { connect } from "react-redux";
import history from "../../../helpers/history";
import * as actions from '../../redux/actions';

import {cityData} from '../../cities';

import {
  LinkButton
} from '../ui'

import './index.scss';

const mapDispatchToProps = (dispatch) => ({
  setCityData: (cityName, lat, long) => dispatch(actions.setCityData(cityName, lat, long))
});

const connector = connect(
	null,
	mapDispatchToProps
);

const SubHeader = (props) => {
  const {
    withCities, 
    withReturnBtn,
    setCityData
  } = props;
  
  let datatToRender = 'failed';
  
  if(withCities) {
    datatToRender = cityData.map(elem => (
      <div className="col-auto list-item">
        <span>
          <LinkButton 
            name={elem.name} 
            clicked={() => setCityData(elem.name, elem.lat, elem.long)}/>
        </span>
      </div>
    ))
  }

  if(withReturnBtn) {
    datatToRender = (
      <div className="col-auto list-item">
        <span>
          <LinkButton 
            name={"Go Back"}
            cicked={history.push('/')}/>
        </span>
      </div>
    )
  }

  return (
    <div className="sub-header">
      <div className="container">
        <div className="row city-list">
          {datatToRender}
          {/* <div className="col-auto list-item">
            <span><LinkButton name={"Go Back"}/></span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default connector(SubHeader);