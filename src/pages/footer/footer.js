import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-Contents">
          <div className="footer1">
            <h1 className="footer1 title">It's A Small World Project</h1>
            <li>
              <p>
                It’s a Small World Project (IASWP) is a Corporation, which
                conforms to the applicable laws of the State of California and
                the United States. IASWP is a nonprofit founded on Montessori
                principles for the education purposes under section 501(c)(3) of
                the Internal Revenue Code, or corresponding section of any
                future federal tax code.
              </p>
            </li>
          </div>
          <div className="footer2">
            <li>EIN: 86-3480021</li>
            <li>Phone: 510-514-9216</li>
          </div>
          <div className="footer3">
            <li>Email: smallworldprojectbyarbitots@gmail.com</li>
            <li>Powered By Youngjae Jo</li>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
