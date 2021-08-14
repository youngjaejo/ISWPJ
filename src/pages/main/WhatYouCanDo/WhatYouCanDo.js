import React, { Component } from "react";
import { scroller } from "react-scroll";
class WhatYouCanDo extends Component {
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
    return <div id="whatyoucando"></div>;
  }
}

export default WhatYouCanDo;
