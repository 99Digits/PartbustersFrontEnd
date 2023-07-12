import React from "react";
import { Button, Form, InputGroup, Modal, Row } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CAN’T FIND YOUR CAR IN THE CATALOGUE?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <div className="col-lg-12"></div>
          </Row>
          <p>
            Please provide the following information about your car and we will
            try to add it to our catalogue
          </p>
          <div className="col-lg-12">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Vehicle Identification Number VIA"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <InputGroup className="mb-3">
            <div className="col-lg-4">
              <Form.Control
                placeholder="Brand"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col-lg-4 ms-2">
              <Form.Control
                placeholder="Modal"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col-lg-3 ms-2">
              <Form.Control
                placeholder="Year of ManuFacture"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </InputGroup>
          <p>
            As soon as your car has been added to the catalogue on our website,
            you will receive an email notification
          </p>
          <InputGroup>
            <div className="col-lg-12">
            <Form.Control
          placeholder="Email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <p className="mt-2">Adding your car to the catalogue may take from 30 to 90 days</p>
        <p className="small" style={{fontSize:'10px'}}>I confirm that I have read and accept this privacy policy.</p>
           <p className="mt-3" style={{fontSize:'12px'}}> <input type="checkbox"/>  &nbsp;Yes, I would like to receive the personalised PARTBUSTERS newsletter with information on products and special offers as well a... More
</p>
<Button style={{backgroundColor:'rgb(0, 103, 215);'}} className="form-control">SEND</Button>
            </div>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal;
