import React, { Component } from "react";
import { scroller } from "react-scroll";
import { ImInstagram, ImFacebook } from "react-icons/im";
import { BiDonateHeart } from "react-icons/bi";
import Paypal from "../../Paypal";
import { Button, Label, FormGroup, Form, Row, Col } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import axios from "axios";
// import { Table, Container, Input, Label, FormGroup, Form } from "reactstrap";
class WhatYouCanDo extends Component {
  emptyitem = {
    name: "",
    pNumber: "",
    email: "",
    msg: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      flag: false,
      disabled: false,
      item: this.emptyitem,
    };
    this.handleItem = this.handleItem.bind(this);
    this.handleVcode = this.handleVcode.bind(this);
  }

  handleItem(event) {
    this.emptyitem[event.target.name] = event.target.value;
    console.log(this.emptyitem[event.target.name]);
  }
  handleVcode() {
    axios({
      method: "post",
      url: "/web/sendEmail",
      headers: {},
      data: {
        email: this.state.item.email,
        pNumber: this.state.item.pNumber,
        name: this.state.item.name,
        msg: this.state.item.msg,
      },
    });
    alert("Thank you for contact us!");
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
      <div id="Application">
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
            <div style={{ marginTop: "40px" }}>
              <br />

              <h2 style={{ color: "red" }}>Donate To</h2>
              <p>Bank Name: US Bank</p>
              <p>Account Name: It's A Small World Project</p>
              <p>Account Number: 157524014022</p>
              <p>Routing Number: 121122676</p>
              {/* <label>
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
              </label> */}
            </div>

            {/* <div className="paypal-wapper">
              {this.state.flag && <Paypal amount={this.state.value} />}
            </div> */}
          </div>
          {/* <div className="contactUs-container">
            <h3 style={{ marginTop: "20px" }}>Contact Us</h3>
            <Form onSubmit={this.handleVcode}> */}
          {/* <FormGroup>
                <Label>Full Name</Label>
                <Input type="text" name="name" onChange={this.handleItem} />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input type="text" name="pNumber" onChange={this.handleItem} />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="text" name="email" onChange={this.handleItem} />
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <Input
                  type="textarea"
                  name="msg"
                  onChange={this.handleItem}
                  id="Text-box-size"
                />
              </FormGroup> */}

          {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control
                    name="name"
                    onChange={this.handleItem}
                    placeholder="Full Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control
                    name="pNumber"
                    onChange={this.handleItem}
                    placeholder="Phone No."
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={this.handleItem}
                    placeholder="name@example.com"
                  />
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  name="msg"
                  onChange={this.handleItem}
                  rows={3}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div> */}
        </div>
      </div>
    );
  }
}

export default WhatYouCanDo;
