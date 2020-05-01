import React from "react";

import {
  LinkButton
} from '../ui'

import './index.scss';

const SubHeader = ({array, cityclickedHandler}) => (
  <div className="sub-header">
    <div className="container">
      <div className="row city-list">
        {/* {array.map(elem => <LinkButton name={elem.name} clicked={() => cityclickedHandler(elem.lat, elem.long)}/>)} */}
        <div className="col-auto list-item">
          <span><LinkButton name={"Tashkent"}/></span>
        </div>
        <div className="col-auto list-item">
          <span><LinkButton name={"Samarkand"}/></span>
        </div>
        <div className="col-auto list-item">
          <span><LinkButton name={"Andijan"}/></span>
        </div>
        <div className="col-auto list-item">
          <span><LinkButton name={"Go Back"}/></span>
        </div>
      </div>
    </div>
  </div>
)

export default SubHeader;