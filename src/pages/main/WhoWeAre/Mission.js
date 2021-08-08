import React, { Component } from "react";
import "../pages.css";

import vision from "../../../IMG/vision.jpg";
import Target from "../../../IMG/Target1.jpg";
class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mission-wrapper">
        <div className="mission-area">
          {/* <div className="img-mission">
            <img src={mission} alt="mission" width="100%" height="100%" />
          </div> */}
          <div className="title-mission">
            <p>MISSION</p>
          </div>
          <div className="mission-text">
            <ol className="missionOL">
              <li>
                Create a global chain of sustainable facilities in
                disenfranchised communities conducive to children’s discovery of
                self and environment
              </li>

              <li>
                Connect children from different parts of the globe as a means of
                cultural education and social awareness
              </li>

              <li>
                Partner with different agencies, professionals and key community
                players to ensure the fulfillment of the holistic approach to
                early childhood development and well-being
              </li>

              <li>
                Help uplift the quality of life, not only of the children, but
                of the community as well as the society by offering
                participation opportunities
              </li>
            </ol>
          </div>
        </div>
        <div className="mission-img-area">
          <img
            src={Target}
            alt="mission"
            width="100%"
            height="100%"
            className="missionImg"
          />
        </div>
      </div>
    );
  }
}

export default Mission;
