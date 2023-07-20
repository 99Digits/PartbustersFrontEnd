import React, { useState } from "react";
import Header from "../../component/Header";
import Mobilefooter from "../../component/footer/mobilefooter/Mobilefooter"

import {
  Button,
  Card,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import Topcars from "../footernav/Topcars";
import Partscar from "../cars/CarParts/Partscar";
import Drop from "./tuckfunctionalities/Drop";
import Drop2 from "./tuckfunctionalities/Drop2";
import Scrool_indicator from "../../component/scrool_indicator/Scrool_indicator";
function Truck() {
  const [modalShow, setModalShow] = React.useState(false);
  const [topcar, settopcar] = useState(true);
  const [carparts, setcarparts] = useState(false);
  const allcarnav = () => {
    // settopcar((prevState)=>!prevState);
    setcarparts(false);
    settopcar(true);
  };
  const allcarparts = () => {
    // setcarparts((prevState)=>!prevState);
    settopcar(false);
    setcarparts(true);
  };
  return (
    <>
      <Header />
      <div className="container carsall">
        <Row>
          <div className="col-lg-5 col-md-4 col-sm-4 searchcar">
            <Card
              style={{ width: "22rem" }}
              className="shadow-lg p-3 mb-5 bg-white rounded"
            >
              <div className="select-car"></div>
              <Card.Body>
                <Card.Title>
                  <div>
                    <i class="fa-solid fa-truck cardcartitle"></i>
                    <i class="fa-solid fa-magnifying-glass cardcartitle"></i>
                    &nbsp;
                    <span className="selectcar-title">
                      <strong>
                        Start your search for spare parts by choosing a
                        commercial vehicle model &nbsp;
                        <i class="fa-solid fa-rotate-right"></i>
                      </strong>
                    </span>
                  </div>
                </Card.Title>

                <Card.Text>
                  {/* 1st drop down */}

                  <Dropdown
                    style={{ backgroundColor: "white" }}
                    data-bs-theme="light"
                  >
                    <span className="dropnumber">1</span>
                    <span className="arrow">
                      <i class="fa-solid fa-chevron-down"></i>
                    </span>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      className="form-control selectcar1"
                      variant="light"
                    >
                      BMW
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* 2nd Drop down */}
                  <Dropdown
                    style={{ backgroundColor: "white" }}
                    data-bs-theme="dark"
                    className="mt-3"
                  >
                    <span className="arrow2">
                      <i class="fa-solid fa-chevron-down"></i>
                    </span>

                    <span className="dropnumber2">2</span>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      className="form-control"
                      variant="light"
                    >
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* 3rd dropdown */}
                  <Dropdown data-bs-theme="dark" className="mt-3">
                    <span className="dropnumber">3</span>
                    <span className="arrow">
                      <i class="fa-solid fa-chevron-down"></i>
                    </span>

                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      className="form-control"
                      variant="light"
                    >
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Text>
                {/* <Button
                  className="form-control"
                  style={{ backgroundColor: "#0067d7" }}
                >
                  <i class="fa-solid fa-magnifying-glass fa-xs"></i> Search
                </Button> */}
                <div className="select-car mt-4"></div>
                {/* <p className="mt-4 byregnumber">
                  <i class="fa-solid fa-car" style={{ color: "blue" }}></i>{" "}
                  <strong>BY REGISTRATION NUMBER</strong>
                </p> */}
             
              
        
                 
                <Row>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       <p className="text-center mt-1">Additional Information</p>
                    <div className="row">
                      <div className="col-6 mt-3">
                        <Drop />
                        <div className="mt-3">
                          <Drop2 />
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <Drop />
                        <div className="mt-3">
                          <Drop2 />
                        </div>
                      </div>
                      <div className="col-6 mt-3">
                        <Drop />
                        <div className="mt-3"></div>
                      </div>
                      <div className="col-6 mt-3">
                        <Drop />
                        <div className="mt-3"></div>
                      </div>
                    </div>
                    <Button
                    className="ms-3 form-control"
                    style={{ backgroundColor: "#0067d7" }}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>Search
                  </Button>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-10 col-lg-7 col-md-12">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/16867/atd/81070/banner_image__en.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/16867/atd/81070/banner_image__en.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/16867/atd/81070/banner_image__en.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/16867/atd/81070/banner_image__en.jpg"
                />
                <Carousel.Caption>
                  <h3>fourth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>

            {/* react coraosals */}
          </div>
        </Row>

        {/*   */}
        {/* <Row>
          <h5 className="products-title">YOUR RECENTLY VIEWED ITEMS</h5>
          <div className="col-lg-2">
            <div className="products-card">
              <Card
                style={{ width: "25rem" }}
                className="shadow-lg p-3 mb-5 bg-white rounded"
              >
                <span className="love">
             
                  <i class="fa-regular fa-heart"></i>
                </span>
                <div className="promotion-discount">-24%</div>
                <Card.Img
                  variant="top"
                  src="https://cdn.autodoc.de/thumb?id=1508741&m=2&n=0&lng=en&ccf=94077840"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "100%",
                      margin: "0%",
                      padding: "0%",
                      border: "0px",
                      outline: "0%",
                      verticalAlign: "baseline",
                      background: "0px",
                    }}
                  >
                    FERODO Brakepadset
                  </Card.Title>
                  <Card.Text>
                    <p className="articlenumber mt-3">Article number: FDB818</p>
                    <strong>£ 15,41</strong>
                  </Card.Text>
                  <Button className="button-products form-control">
                    {" "}
                    <strong>
                      <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                    </strong>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

       
          <div className="col-lg-2 ms-2">
            <div className="products-card">
              <Card
                style={{ width: "25rem" }}
                className="shadow-lg p-3 mb-5 bg-white rounded"
              >
                <span className="love">
                  {" "}
                  <i class="fa-regular fa-heart"></i>
                </span>
                <div className="promotion-discount">-24%</div>
                <Card.Img
                  variant="top"
                  src="https://cdn.autodoc.de/thumb?id=7710838&m=2&n=0&lng=en&ccf=94077841"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "100%",
                      margin: "0%",
                      padding: "0%",
                      border: "0px",
                      outline: "0%",
                      verticalAlign: "baseline",
                      background: "0px",
                    }}
                  >
                    A.B.S. Brake Disc
                  </Card.Title>
                  <Card.Text>
                    <p className="articlenumber mt-3">Article number: FDB818</p>
                    <strong>£ 30,99</strong>
                  </Card.Text>
                  <Button className="button-products form-control">
                    {" "}
                    <strong>
                      <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                    </strong>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Row> */}

        {/* nav */}
        {/* <Nav className="dark" justify variant="tabs">
          <Nav.Item>
            <Nav.Link className="btn btn-primary" onClick={allcarnav}>
              <i class="fa-solid fa-car"></i> Top CarBrands
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-primary"
              eventKey="link-1"
              onClick={allcarparts}
            >
              Car Parts<i class="fa-solid fa-screwdriver-wrench"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-primary" eventKey="link-2">
              Link
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {topcar == true ? <Topcars /> : ""}

        {carparts == true ? <Carparts /> : ""} */}

        <div className="top_all">
          <ul className="tabs" style={{ width: "100%", overflowX: "scroll" }}>
            <li className="active">
              <a href="" className="cars">
                <i class="fa-solid fa-car-side icons"></i>Car Brands
              </a>
            </li>
            <li className="active">
              <a className="cars" href="">
                <i class="fa-solid fa-screwdriver-wrench icons"></i>carparts
              </a>
            </li>
            <li className="active">
              <a className="cars" href="">
                <i class="fa-solid fa-truck-ramp-box icons"></i>Truck parts
              </a>
            </li>
            <li className="active">
              <a className="cars" href="">
                <i class="fa-solid fa-motorcycle icons"></i>Motorcycle parts
              </a>
            </li>
            <li className="active">
              <a className="cars" href="">
                <i class="fa-solid fa-gear icons"></i>
                <i class="fa-solid fa-wrench icons"></i>Car ACCESSORIES
              </a>
            </li>
            <li className="active">
              <a className="cars" href="">
                <i class="fa-solid fa-users-gear icons"></i>Smart Recomendation
              </a>
            </li>
          </ul>

          <Topcars />
          {/* <Partscar/> */}
        </div>
        <div className="mt-5"></div>
        <Card class="shadow p-3 mb-5 bg-white rounded mt-5">
          <h4 className="">
            <strong>
              <i class="fa-solid fa-tag"></i> GET GREAT DEALS ON CAR PARTS FROM
              THE BEST MANUFACTURERS IN OUR ONLINE SHOP
            </strong>
          </h4>
          <div style={{ overflowX: "scroll", display: "flex" }}>
            <div className="ms-4">
              <img
                src="https://cdn.autodoc.de/brands/thumbs/30.png?m=3&ccf=72871509"
                alt=""
              />
            </div>

            <div className="ms-4">
              <img
                src="https://cdn.autodoc.de/brands/thumbs/2.png?m=3&ccf=72871509"
                alt=""
              />
            </div>

            <div className="ms-4">
              <img
                src="https://cdn.autodoc.de/brands/thumbs/312.png?m=3&ccf=72871509"
                alt=""
              />
            </div>

            <div className="ms-4">
              <img
                src="https://cdn.autodoc.de/brands/thumbs/101.png?m=3&ccf=72871509"
                alt=""
              />
            </div>

            <div className="ms-4">
              <img
                src="https://cdn.autodoc.de/brands/thumbs/32.png?m=3&ccf=72871509"
                alt=""
              />
            </div>
            <div className="ms-4">
              <img
                src="https://cdn.autodoc.de/brands/thumbs/11.png?m=3&ccf=72871509"
                alt=""
              />
            </div>
          </div>
        </Card>
        <div className="mt-4">
          <Partscar />
        </div>
      </div>
      <Mobilefooter/>
      <Scrool_indicator/>
    </>
  );
}

export default Truck;
