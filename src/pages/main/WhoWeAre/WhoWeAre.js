import React, { Component } from "react";
import "../pages.css";
import Mission from "./Mission";
import Vision from "./Vision";
import Member from "././Testmonial/Member";
import { scroller } from "react-scroll";
import { Redirect } from "react-router-dom";
class WhoWeAre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    scroller.scrollTo(this.props.id, {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  render() {
    return (
      <div>
        <div id="mission">
          <Mission />
        </div>
        <div id="vision">
          <Vision />
        </div>
        <div id="member">
          <Member />
        </div>
      </div>
    );
  }
}

export default WhoWeAre;
