import React from 'react'
import { Col, Row, Form, Button,  } from 'react-bootstrap';

/**
 * This is the Sign In component
 */

export default function SignIn() {
  return (
    <div className="container">
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
        User Control Center
      </h3>
      <div className="container-fluid align-items-center">
        <Row>
          <Col
            className="mx-auto"
            sm="12"
            md="6"
            lg="6"
            style={{
              backgroundColor: "#f8fafb",
              padding: "15px",
              borderRadius: "5px",
              border: "2px solid black",
              marginRight: "10px",
              height: "450px",
              width: "500px",
            }}
          >
            <u>
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "40px",
                }}
              >
                Log In
              </h4>
            </u>
            <div className="label" style={{ textAlign: "start" }}>
              <label>User Name</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                style={{ padding: "5px" }}
              />
            </div>
            <div
              className="label"
              style={{ textAlign: "start", marginTop: "20px" }}
            >
              <label>Password</label>
            </div>
            <input
              type="password"
              className="form-control me-2"
              style={{
                padding: "5px",
                marginTop: "5px",
              }}
            />

            <Button className="mt-md-5">Sign In</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
