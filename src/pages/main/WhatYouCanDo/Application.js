import React, { Component } from "react";
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        {" "}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfdX7I6XWI3V65ukplCQCzSwGKYDf8WnVpvQ8d0MMNIdoMLeA/viewform?embedded=true"
          width="100%"
          height="2326"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        ;
      </div>
    );
  }
}

export default Application;
