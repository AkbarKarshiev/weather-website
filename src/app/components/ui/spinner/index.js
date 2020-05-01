import React from 'react';
import { connect } from "react-redux";

import './index.scss';

const mapStateToProps = (state) => {
  return {
    spinnig: state.spinner.spinnig,
  }
}

const connector = connect(
	mapStateToProps
);

const spinner = (props) => {
  return (
    <div className={`backdrop ${props.spinnig ? '' : 'd-none'}`}>
      <div className={`spinner ${props.spinnig ? '' : 'd-none'}`}>Loading...</div>
    </div>
  )
}

export default connector(spinner)