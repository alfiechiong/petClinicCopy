import React, { Component } from "react";
import "./App.css";
import HeaderNavigation from "./components/common/navigation/HeaderNavigation";

import { Container, Row, Col } from "react-bootstrap";
import Routes from "./components/common/Routes";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavigation />
        <Row>
          <Col>
            <Routes />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
