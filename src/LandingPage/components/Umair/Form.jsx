import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Form.css"; // Custom CSS file for styling
import { Icon } from "semantic-ui-react";
import { IconBase } from "react-icons";

function ContactForm() {
  return (
    <Container style={{ background: "black" }}>
      <Row className="mb-3">
        <Col className="text-center">
          <h2 style={{ color: "white" }} className="Re-Quote">
            Contact us now
          </h2>
        </Col>
      </Row>
      <Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3 style={{ color: "white" }}>
            Official WhatsApp:{" "}
            <a
              target="_blank"
              href="https://wa.me/923316670557?text=Hey%20we%20want%20to%20inquire%20about%20ToneSync%20AI."
            >
              <img height={50} width={50} src="whatsapp.png"></img>
            </a>
          </h3>
        </div>
      </Row>
    </Container>
  );
}

export default ContactForm;
