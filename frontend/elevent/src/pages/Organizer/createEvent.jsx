import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './createEvent.css'

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    eventname: "",
    category: "",
    startDate: "",
    endDate: "",
    duration: "",
    venue: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    eventType: "public",
    ticketsRequired: false,
    price: 0,
    maxAttendees: "",
    speakers: "",
    services: "",
    sponsers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [key]: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.type === "checkbox" ? e.target.checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Event Submitted Successfully");
  };

  return (
    <Container className="p-4 rounded mt-5 " style={{ backgroundColor: "#121212", color: "#e0e0e0" }}>
      <h2 className="text-center mb-4">Create Event</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="eventname"
                placeholder="Enter event name"
                value={formData.eventname}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#F8FAFC", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type="text"
                name="venue"
                placeholder="Enter venue"
                value={formData.venue}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <h5>Address</h5>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                name="address.street"
                placeholder="Street"
                value={formData.address.street}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="address.city"
                placeholder="City"
                value={formData.address.city}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="address.state"
                placeholder="State"
                value={formData.address.state}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="address.postalCode"
                placeholder="Postal Code"
                value={formData.address.postalCode}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="address.country"
                placeholder="Country"
                value={formData.address.country}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Event Type</Form.Label>
              <Form.Select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="custom-placeholder"
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Tickets Required</Form.Label>
              <Form.Check
                type="checkbox"
                name="ticketsRequired"
                label="Require Tickets"
                checked={formData.ticketsRequired}
                onChange={handleChange}
                className="custom-placeholder"
                style={{ backgroundColor: "#1e1e1e", color: "#fff" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Price per ticket"
                value={formData.price}
                onChange={handleChange}
                className="custom-placeholder"
                disabled={!formData.ticketsRequired}
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Max Attendees</Form.Label>
              <Form.Control
                type="number"
                name="maxAttendees"
                placeholder="Max Attendees"
                value={formData.maxAttendees}
                onChange={handleChange}
                className="custom-placeholder"
                required
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Speakers</Form.Label>
              <Form.Control
                type="text"
                name="speakers"
                placeholder="Enter speakers (comma separated)"
                value={formData.speakers}
                onChange={handleChange}
                className="custom-placeholder"
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Services</Form.Label>
              <Form.Control
                type="text"
                name="services"
                placeholder="Enter services (comma separated)"
                value={formData.services}
                onChange={handleChange}
                className="custom-placeholder"
                style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "1px solid #444" }}
              />
            </Form.Group>
          </Col>
          </Row>

        <div className="text-center">
          <Button type="submit" variant="primary">
            Submit Event
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CreateEventForm;
