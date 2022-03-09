import React from "react";
import { Image, Row,Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
          <Row>
            <Col>
              <h3>Pet Clinic React App</h3>
            </Col>
          </Row>
      <Row>
        <Image src="images/pets.jpg" rounded fluid />
      </Row>
    </Container>
  );
};

export default Home;
