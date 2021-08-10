import React, { Component } from "react";
import "../pages.css";
import TargetProject from "./TargetProject";
import { scroller } from "react-scroll";
class WhatWeDo extends Component {
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
        <div id="target-projects">
          <TargetProject />
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
