import React, { Component } from "react";
import { NavBarItems_WhoWeAre, WhatWeCanDo_NavItems } from "./NavBarItems";
import "./Navbar.css";
import logo from "../IMG/imgOnlyNoBG.png";
class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
    this.navItems = this.navItems.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset > 70) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  navItems = (url, param1, param2, name) => {
    return (
      <a href={!window.location.href.includes(url) ? param1 : param2}>{name}</a>
    );
  };
  render() {
    return (
      <div>
        <div className={`NavbarItems ${this.state.nav && "nav-white"}`}>
          <a className="navbar-logo a" href="/">
            <div className="logo">
              <img src={logo} alt="logo" width="50px" height="50px" />
            </div>
            <p className="navbar-logo title">
              IASWP
              <br />
              {/* <p className="navbar-logo b">
                We can only better humanity through the child. -Dr. Maria
                Montessori
              </p> */}
            </p>
          </a>

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <div className="dropdown">
              <li>
                <p className="nav-links">Who We Are</p>
                <div class="dropdown-content">
                  {NavBarItems_WhoWeAre.map((item, index) => {
                    return (
                      <a
                        href={
                          !window.location.href.includes(item.url)
                            ? item.param1
                            : item.param2
                        }
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </li>
            </div>
            <div className="dropdown">
              <li>
                <p className="nav-links">What We Do</p>
                <div class="dropdown-content">
                  {WhatWeCanDo_NavItems.map((item, index) => {
                    return (
                      <a
                        href={
                          !window.location.href.includes(item.url)
                            ? item.param1
                            : item.param2
                        }
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </li>
            </div>
            {/* <li>
              <div class="dropdown">
                <p className="nav-links">What You Can Do</p>
                <div class="dropdown-content">
                  <a href="#1">Target Project &#38; Areas</a>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
