import React, { Component } from "react";
import "../pages.css";
import vision from "../../../IMG/vision.jpg";
class Vision extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="vision-wrapper">
        <div className="vision-img-area">
          <img
            src={vision}
            alt="vision"
            width="100%"
            height="100%"
            className="visionImg"
          />
        </div>

        <div className="vision-area">
          <div className="title-vision">
            <p>VISION</p>
          </div>

          <div className="vision-text">
            <p className="vision-text p">
              It's A Small World Project aims to provide accessible
              comprehensive and sustainable Montessori programs and facilities
              to disenfranchised communities across the world and connect the
              children using technology as a means of cultural education and
              global citizenship
            </p>
          </div>
        </div>
        <div className="title-vision">{/* <h1>VISION</h1> */}</div>
      </div>
    );
  }
}

export default Vision;
