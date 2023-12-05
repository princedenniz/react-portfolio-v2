import React, { Component } from 'react'
import Avatar from "../avatar/Avatar.jsx"
import SkillsMenu from './SkillsMenu.jsx'

export default class About extends Component {
  render() {
    return (
      <>
      {/* <Avatar page="skills"/> */}
      <SkillsMenu />
      </>
    )
  }
}
