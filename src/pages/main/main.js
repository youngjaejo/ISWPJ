import React, { Component } from "react";
import "./pages.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-back">
        <div className="background-image">
          <div>
            <div className="main-title">
              <p className="text-main-page">
                IT'S A SMALL WORLD PROJECT
                <p className="navbar-logo c">
                  We can only better humanity through the child. <br />
                  -Dr. Maria Montessori
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
