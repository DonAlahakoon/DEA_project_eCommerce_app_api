import React, { useState } from 'react';
import { Col, Row, Form, Button,  } from 'react-bootstrap';

export default function NewProd() {
  const [productImages, setProductImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setProductImages(imageUrls);
  };

  return (
    <div className="container-fluid">
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Add Products</h3>
      <div className="container-fluid">
        <Row>
          <Col
            className="mb-3 mb-md-0 mr-md-3 mt-md-2"
            sm="12"
            md="6"
            lg="3"
            style={{
              backgroundColor: "#f8fafb",
              padding: "15px",
              borderRadius: "5px",
              border: "2px solid black",
              marginRight: "10px",
            }}
          >
            <u>
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                General Details
              </h4>
            </u>
            <div className="label" style={{ textAlign: "start" }}>
              <label>Product Name</label>
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
              <label>Product Description</label>
            </div>
            <input
              type="text"
              className="form-control me-2"
              style={{
                padding: "5px",
                height: "150px",
                marginTop: "5px",
              }}
            />
          </Col>
          <Col
            className="mt-2 mt-md-2 mr-md-3"
            sm="12"
            md="6"
            lg="3"
            style={{
              backgroundColor: "#f8fafb",
              padding: "15px",
              borderRadius: "5px",
              border: "2px solid black",
              marginRight: "10px",
            }}
          >
            <u>
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                Pricing
              </h4>
            </u>
            <div className="label" style={{ textAlign: "start" }}>
              <label>Base Price</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                style={{ padding: "5px", width: "100%" }}
              />
            </div>
            <div
              className="label"
              style={{ textAlign: "start", marginTop: "20px" }}
            >
              <label>Discount Percentage (%)</label>
            </div>
            <input
              type="text"
              className="form-control me-2"
              style={{
                padding: "5px",
                marginTop: "5px",
                width: "100%",
              }}
            />
            <div
              className="label"
              style={{ textAlign: "start", marginTop: "20px" }}
            >
              <label>Sale Price</label>
            </div>
            <input
              type="text"
              className="form-control me-2"
              style={{
                padding: "5px",
                marginTop: "5px",
                width: "100%",
              }}
            />
          </Col>
          <Col
            className="mt-2 mt-md-2"
            sm="12"
            md="6"
            lg="5"
            style={{
              backgroundColor: "#f8fafb",
              padding: "15px",
              borderRadius: "5px",
              border: "2px solid black",
            }}
          >
            <u>
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                Product Images
              </h4>
            </u>
            <div className="label" style={{ textAlign: "start" }}>
              <label>Upload Images</label>
            </div>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control type="file" multiple onChange={handleImageChange} />
            </Form.Group>
            {productImages.length > 0 && (
              <div className="mt-3">
                {productImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product Preview ${index + 1}`}
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "5px",
                      objectFit: "cover",
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                  />
                ))}
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col
            className="mb-3 mb-md-3 mr-md-3 mt-2"
            sm="12"
            md="6"
            lg="3"
            style={{
              backgroundColor: "#f8fafb",
              padding: "15px",
              borderRadius: "5px",
              border: "2px solid black",
              marginRight: "10px",
            }}
          >
            <u>
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                Inventory Details
              </h4>
            </u>
            <div className="label" style={{ textAlign: "start" }}>
              <label>Product Code</label>
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
              <label>Bar Code</label>
            </div>
            <input
              type="text"
              className="form-control me-2"
              style={{
                padding: "5px",
                marginTop: "5px",
              }}
            />

            <div
              className="label"
              style={{ textAlign: "start", marginTop: "20px" }}
            >
              <label>Quantity</label>
            </div>
            <input
              type="text"
              className="form-control me-2"
              style={{
                padding: "5px",
                marginTop: "5px",
              }}
            />
          </Col>
          <Col
            className="mb-3 mb-md-3 mr-md-3 mt-2"
            sm="12"
            md="6"
            lg="6"
            style={{
              backgroundColor: "#f8fafb",
              padding: "15px",
              borderRadius: "5px",
              border: "2px solid black",
              marginRight: "10px",
            }}
          >
            <u>
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                Category
              </h4>
            </u>
            <div className="label" style={{ textAlign: "start" }}>
              <label>Product Category</label>
            </div>
            <div className="d-flex align-items-center">
              <select className="form-control" style={{ width: "300px" }}>
                <option>Cloths</option>
                <option>Shoes</option>
                <option>Belts</option>
                <option>Cosmetics</option>
                <option>Laptops</option>
                <option>Mobile Phones</option>
              </select>
            </div>
            <div
              className="label"
              style={{ textAlign: "start", marginTop: "20px" }}
            >
              <label>Product Tags</label>
            </div>
            <div className="d-flex align-items-center">
              <select className="form-control" style={{ width: "300px" }}>
                <option>Clothings</option>
                <option>Accessories</option>
                <option>Electronics</option>
                <option>Cosmetics</option>
                <option>Foods</option>
                <option>Auto Mobiles</option>
              </select>
            </div>
          </Col>
          <Col className='mt-md-5 ml-md-5 mb-md-3 d-flex  align-items-end'>
            <Button>Add Item</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
