import React, { Component } from "react";
import { scroller } from "react-scroll";
import { ImInstagram, ImFacebook } from "react-icons/im";
import { BiDonateHeart } from "react-icons/bi";
import Paypal from "../../Paypal";
import Button from "react-bootstrap/Button";
import CurrencyInput from "react-currency-input-field";
class WhatYouCanDo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, flag: false, disabled: false };
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
            Email us at <u>Itsasmallworldproj@gmail.com</u> to :
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
              <div id="donate" />
              <li>Follow, share and support our social media pages</li>
            </ol>
            <div>
              <a
                href="https://www.instagram.com/invites/contact/?i=19854js83engt&#38;utm_content=levscij"
                alt="instagram"
                style={{ float: "left" }}
              >
                <ImInstagram fontSize="40px" />
                &nbsp;Instagram
              </a>
            </div>
            <a
              href="https://www.facebook.com/itsasmallworldproj/"
              alt="facebook"
            >
              <ImFacebook fontSize="40px" />
              Facebook
            </a>
            <div style={{ marginTop: "20px" }}>
              <label>
                <h2 style={{ color: "red" }}>
                  Donation Amount
                  <BiDonateHeart fontSize="40px" />
                </h2>

                <CurrencyInput
                  intlConfig={{ locale: "en-US", currency: "USD" }}
                  disabled={this.state.disabled}
                  onValueChange={(value, name) =>
                    this.setState({ value: value })
                  }
                  defaultValue={this.state.value}
                />
                <Button
                  onClick={() => this.setState({ flag: true, disabled: true })}
                  style={{ marginBottom: "5px", fontSize: "19px" }}
                >
                  Pay
                </Button>
                <Button
                  onClick={() =>
                    this.setState({ flag: false, disabled: false })
                  }
                  style={{
                    marginBottom: "5px",
                    fontSize: "19px",
                    marginLeft: "4px",
                  }}
                >
                  Change Amount
                </Button>
              </label>
            </div>

            <div className="paypal-wapper">
              {this.state.flag && <Paypal amount={this.state.value} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatYouCanDo;
