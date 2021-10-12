import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./Narbar/MainNavbar";
import Main from "./pages/main/main";
import Footer from "./pages/footer/footer";
import WhoWeAre from "./pages/main/WhoWeAre/WhoWeAre";
import WhatWeDo from "./pages/main/WhatWeDo/WhatWeDo";
import WhatYouCanDo from "./pages/main/WhatYouCanDo/WhatYouCanDo";
import TargetProject from "./pages/main/WhatWeDo/TargetProject";
import Application from "./pages/main/WhatYouCanDo/Application";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: [],
      sidebar: false,
    };
  }

  onChangeSidebar(flag) {
    this.setState({
      sidebar: flag,
    });
  }
  render() {
    return (
      <div>
        <Router>
          <MainNavbar />
          <Main />
          <Switch>
            <Route path="/WhatWeDo/target-projects">
              <WhatWeDo id="target-projects" />
            </Route>
            <Route path="/whoweare/mission">
              <WhoWeAre id="mission" />
            </Route>
            <Route path="/whoweare/vision">
              <WhoWeAre id="vision" />
            </Route>
            <Route path="/whoweare/MeetTheTeam">
              <WhoWeAre id="member" />
            </Route>
            <Route path="/whatyoucando/donate">
              <WhatYouCanDo id="donate" />
            </Route>
            <Route path="/WhatYouCanDo/WaysToHelp">
              <WhatYouCanDo id="whatyoucando" />
            </Route>
            <Route path="/WhatYouCanDo/application">
              <Application />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
      // </div>
    );
  }
}

export default App;
