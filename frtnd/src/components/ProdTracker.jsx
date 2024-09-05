import React from 'react'
import { Col, Row, Form, Button,  } from 'react-bootstrap';

function ProdTracker() {
  return (
    <div>
      <div
        className="container-fluid mt-5 mx-5"
        sm="12"
        md="6"
        lg="6"
        style={{
          backgroundColor: "#f8fafb",
          padding: "15px",
          borderRadius: "5px",
          border: "2px solid black",
          height: "auto",
          width: "auto",
        }}
      >
        <u>
          <h4
            style={{
              textAlign: "left",
              marginBottom: "40px",
            }}
          >
            Track My Order
          </h4>
        </u>
        <div>
          <Row>
            <Col sm="12" md="4" lg="4">
              <h5>Pending</h5>
            </Col>
            <Col sm="12" md="4" lg="4">
              <h5>Warehouse</h5>
            </Col>
            <Col sm="12" md="4" lg="4">
              <h5>Delivered</h5>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProdTracker