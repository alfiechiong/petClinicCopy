import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const HeaderNavigation = () => {
  const [active, setActive] = useState();
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="border-bottom border-gray nav-bar fixed-top "
    >
      <Row>
        <Col sm={4}>
          <Navbar.Brand href="/home">Petclinic App</Navbar.Brand>
        </Col>
        <Col sm={8}>
          <Nav
            className="mr-auto sub-nav"
            defaultActiveKey="home"
            activeKey={active}
            onSelect={(selectedKey) => {
              setActive(selectedKey);
            }}
          >
            <Nav.Item>
              <Nav.Link eventKey="home" href="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pets" href="/pets">
                Pets
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="owners" href="/owners">
                Owners
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vets" href="/vets">
                Vets
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
};

export default HeaderNavigation;
