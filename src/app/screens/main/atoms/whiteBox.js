import React from 'react'
import './whiteBox.scss'

const whiteBox = (props) => {
  return (
    <div className="white-box">
      {props.children}
    </div>
  )
}

export default whiteBox
