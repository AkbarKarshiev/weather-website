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
  
  const goBackHandler = () => {
    history.push('/')
  }

  if(withCities) {
    datatToRender = cityData.map((elem, index) => (
      <div className="col-auto list-item" key={index}>
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
            clicked={goBackHandler}/>
        </span>
      </div>
    )
  }

  return (
    <div className="sub-header">
      <div className="container">
        <div className="row city-list">
          {datatToRender}
        </div>
      </div>
    </div>
  )
}

export default connector(SubHeader);