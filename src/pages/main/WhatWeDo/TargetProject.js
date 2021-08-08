import React, { Component } from "react";
import mission from "../../../IMG/mission.jpg";
class TargetProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 1000);
  }

  render() {
    return (
      <div>
        <div className="TP-wrapper">
          <div className="img-target">
            <img src={mission} width="170%" height="100%" alt="target" />
          </div>
          <div className="TP-Project-Bg"></div>
          <div className="TP-title">
            <h1>Target Projects</h1>
          </div>
          <div className="TP-text">
            <ul>
              <li>
                Construction of new schools with sustainable facilities in
                remote villages
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
                facilities (guides, assistants, administrators, cooks,
                sanitation, maintenance, supplies, health workers etc)
              </li>
              <li>
                Town hall meetings and information/education campaigns with
                stakeholders
              </li>
            </ul>
          </div>
          <div className="TP-Project-Bg2"></div>
          <div className="TP-title2">
            <h1>Target Project Areas</h1>
          </div>
          <div className="TP-text2">
            <ul>
              <li>Indigenous communities</li>
              <li>Refugee Camps</li>
              <li>Prisons Remote areas</li>
              <li>Highly underdeveloped sectors</li>
              <li>Urban poor</li>
              <li>Other disenfranchised areas in the world</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TargetProject;
