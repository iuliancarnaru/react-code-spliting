import React, { Component } from "react";
import "./App.css";

import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: "page1",
      component: null
    };
  }

  // -----> no code splitting
  // onRouteChange = route => {
  //   this.setState({ route });
  // };

  // code splitting
  onRouteChange = route => {
    if (route === "page1") {
      this.setState({ route });
    } else if (route === "page2") {
      // is working only with webpack setup
      import("./components/Page2").then(Page2 => {
        this.setState({ route, component: Page2.default });
      });
    } else if (route === "page3") {
      // is working only with webpack setup
      import("./components/Page3").then(Page3 => {
        this.setState({ route, component: Page3.default });
      });
    }
  };

  render() {
    // -----> no code splitting
    // if (this.state.route === "page1") {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === "page2") {
    //   return <Page2 onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === "page3") {
    //   return <Page3 onRouteChange={this.onRouteChange} />;
    // }

    if (this.state.route === "page1") {
      // default page
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
