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
              Construction/setting up of new schools with sustainable facilities
            </li>
            <li>
              Upgrading of existing schools to integrate facilities for
              comprehensive well-being development (e.g. rehabilitation facility
              &#38; health clinic, vegetable garden/small farm for food supply,
              alternative energy sources, and carpentry &#38; crafting area for
              making materials)
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
            <li>Refugee camps</li>
            <li>Prisons</li>
            <li>Rural villages</li>
            <li>Underdeveloped sectors</li>
            <li>
              Children’s hospital
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
