import React, { Component } from "react";
import "../pages.css";
import TargetProject from "./TargetProject";
class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, this.props.y);
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
