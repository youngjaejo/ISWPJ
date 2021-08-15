import React, { Component } from "react";
import { scroller } from "react-scroll";
import { ImInstagram, ImFacebook } from "react-icons/im";
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
    return (
      <div id="whatyoucando">
        <div className="container">
          <h3 className="title-container">
            Email us at <u>smallworldprojectbyarbitots@gmail.com</u> to :
          </h3>
          <div className="text-container1">
            <ol className="WCYD">
              <li>
                Sponsor a Child
                <ul>
                  <li>Monthly contribution</li>
                  <li>One-time contribution</li>
                </ul>
              </li>

              <li>Sponsor a guide-in-training</li>

              <li>Sponsor a project school</li>

              <li>
                Donate
                <ul>
                  <li>Cash</li>
                  <li>Montessori materials</li>
                  <li>School supplies</li>
                  <li>Office supplies</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="text-container2">
            <ol className="WCYD" start="5">
              <li>Be a partner organization</li>
              <li>Be a volunteer or ambassador</li>
              <li>Recommend and coordinate a project location</li>
              <li>Follow, share and support our social media pages</li>
            </ol>
            <div className="icons">
              <div>
                <a
                  href="https://www.instagram.com/invites/contact/?i=19854js83engt&#38;utm_content=levscij"
                  alt="instagram"
                  style={{ marginLeft: "40px" }}
                >
                  <ImInstagram fontSize="40px" />
                  &nbsp;Instagram
                </a>

                <a
                  href="https://www.facebook.com/itsasmallworldproj/"
                  alt="facebook"
                  style={{ marginLeft: "20px" }}
                >
                  <ImFacebook fontSize="40px" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatYouCanDo;
