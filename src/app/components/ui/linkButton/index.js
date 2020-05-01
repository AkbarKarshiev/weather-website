import React from 'react'
import './index.scss'

const LinkButton = ({name, clicked}) => (
  <button 
    className="link-button"
    onClick={clicked}>
    {name}
  </button>
)

export default LinkButton
