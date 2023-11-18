import React, { Component } from "react";
import classNames from "classnames";
import skills from "./skillsData";
import "../styles/skillsMenu.css";
import frontendIcon from "../assets/frontend.png"
import backendIcon from "../assets/backend.png"

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItem = ["FRONT-END", "BACK-END"];

    const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

    return (
      <div className="skill-menu">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <img className="skill-icon" src={currentIcon} alt="current skill" />
        <div className="skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </div>
    );
  }
}
