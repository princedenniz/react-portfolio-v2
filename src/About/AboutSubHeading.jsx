import React, { Component } from 'react'
import classNames from "classnames"
import "../styles/aboutMenu.css"

const AboutSubHeading =({title, content, active, onClick, menuItem})=> {
  const subContainerClass = `sub-container-${menuItem}`
  
    return (
      <div className={classNames(subContainerClass, {"active-subheading" : active})}>
        <h2 className='aboutTitle' onClick={onClick}>{title}</h2>
        <div className='p-container'>{content}</div>
      </div>
    )
  
}

export default AboutSubHeading
