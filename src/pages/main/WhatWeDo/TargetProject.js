import React, { Component } from "react";
import mission from "../../../IMG/mission.jpg";
class TargetProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="TP-wrapper">
        <div className="img-target">
          <img src={mission} alt="target" className="img-target img" />
        </div>
        <div className="TP-Project-Bg">
          <div className="TP-title">
            <p>Target Projects</p>
          </div>
          <div className="TP-text">
            <li>
              Construction of new schools with sustainable facilities in remote
              villages
            </li>
            <li>
              Upgrading of existing schools to integrate facilities for
              comprehensive well-being development (e.g., rehabilitation
              facility &#38; health clinic; spaces for vegetable garden/small
              farm for food supply, &#38; alternative energy sources; and
              carpentry &#38; crafting area for making materials)
            </li>
            <li>
              Identifying participants in maintaining sustainability of
              facilities (guides, assistants, administrators, cooks, sanitation,
              maintenance, supplies, health workers etc)
            </li>
            <li>
              Town hall meetings and information/education campaigns with
              stakeholders
              <br />
              <br />
            </li>
          </div>
        </div>
        <div className="TP-Project-Bg2">
          <div className="TP-title2">
            <p>Target Project Areas</p>
          </div>
          <div className="TP-text2">
            <li>Indigenous communities</li>
            <li>Refugee Camps</li>
            <li>Prisons</li>
            <li>Remote areas</li>
            <li>Highly underdeveloped sectors</li>
            <li>Urban poor</li>
            <li>
              Other disenfranchised areas in the world
              <br />
              <br />
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default TargetProject;
