import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";
function Footer() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col><ui className="list-unstyled">
            <img src="./images/Indian_Institute_of_Information_Technology,_Allahabad_Logo.png" alt="IIITA"></img>
          </ui>
          </Col>
          <Col>
            <h4>Indian Institute of Information Technology Allahabad</h4>
            <h2 className="list-unstyled">
              <li>Devghat, Jhalwa</li>
              <li>Prayagraj-211015</li>
              <li>U. P. INDIA</li>
            </h2>
          </Col>
          <Col>
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>Phone: 91-532-2922000</li>
              <li>Fax: 91-532-2922125</li>
              <li>Email: contact@iiita.ac.in</li>
            </ui>
          </Col>
          <Col>
            <h4>Find Internships</h4>
            <ui className="list-unstyled">
              <li>Job Categories</li>
              <li>Locations</li>
            </ui>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
      <Row>
          <Col>
          <p>
            &copy;{new Date().getFullYear()} Internship IIITA | All rights reserved |
            Terms Of Service | Privacy
          </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;