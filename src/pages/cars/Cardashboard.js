import React, { useEffect, useState } from "react";
import Select from "react-select";
import "react-dropdown/style.css";
import {
  Button,
  Card,
  Carousel,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import "./car.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Topcars from "../footernav/Topcars";
import Footer from "../../component/footer/Footer";
import Partscar from "./CarParts/Partscar";
import Scrool_indicator from "../../component/scrool_indicator/Scrool_indicator";
import { demoapi } from "../../service/allapi";
import { CommonRequest } from "../../service/CommonRequest";
import axios from "axios";

function Cardashboard() {
  const [demo, setdemo] = useState([]);
  const [cartitle,setcartitle]=useState([])
  const [demoparts,setdemoparts]=useState([])

  useEffect(() => {
    // const demofn = async () => {
    //   try {
    //     const response = await demoapi();
    //     console.log(response.data);
    //     setdemo(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // demofn();
  }, []);
  const [carmodal, setcarmodal] = useState([]);

  //  const carapi=async()=>{
  //   const headers = {
  //       'X-RapidAPI-Key': '2093b31d42msh8699915702a2e18p151f23jsn92464a07db83',
  //       'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  //     };

  //     const params = {
  //       limit: '50',
  //       page: '0',
  //       make: selectedOption
  //     };

  //     const queryString = new URLSearchParams(params).toString();
  //     const url = `https://car-data.p.rapidapi.com/cars?${queryString}`;

  //     return await CommonRequest('GET', url, headers);
  //   };

  // car response

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  const options = [
    { value: "MINI", label: "Mini" },
    { value: "BMW", label: "BMW" },
    { value: "HONDA", label: "HONDA" },
    { value: "SUZUKI", label: "SUZUKI" },
    { value: "BMW", label: "BMW" },
    { value: "HYUNDAI", label: "HYUNDAI" },
    { value: "FORD", label: "FORD" },
    { value: "NISSAN", label: "NISSAN" },
    { value: "TOYOTA", label: "TOYOTA" },
    { value: "TESLA", label: "TESLA" },
  ];
  const optionsz = carmodal.map((item) => ({
    value: item.model,
    label: item.model,
  }));
  const optionszz = cartitle.map((item) => ({
    value: item.type,
    label: item.type,
  }));;
  const handleChange = async(selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: selectedOption.value,
        // model: selectedOption2.value,
        //  type: selectedOption.value
      },
      headers: {
        "X-RapidAPI-Key": "2093b31d42msh8699915702a2e18p151f23jsn92464a07db83",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcarmodal(response.data);
    } catch (error) {
      console.error(error);
    }
  
  };
  const handleChanges =async (selectedOption2) => {
    setSelectedOption2(selectedOption2);
    console.log(selectedOption2);
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: selectedOption.value,
         model: selectedOption2.value,
        //  type: selectedOption.value
      },
      headers: {
        "X-RapidAPI-Key": "2093b31d42msh8699915702a2e18p151f23jsn92464a07db83",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcartitle(response.data);
    } catch (error) {
      console.error(error);
    }

  };
  const handleChangess =async (selectedOption3) => {
    setSelectedOption3(selectedOption3);
    
  };
 
  const carRes = async () => {
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: selectedOption.value,
         model: selectedOption2.value,
        
      },
      headers: {
        "X-RapidAPI-Key": "2093b31d42msh8699915702a2e18p151f23jsn92464a07db83",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcarmodal(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // { value: carmodal.map((data)=>data.model), label: carmodal.map((data)=>data.model) },

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
      <div className="container carsall">
        <Row>
          <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 searchcar">
            <Card
              style={{ width: "22rem" }}
              className="shadow-lg p-3 mb-5 bg-white rounded"
            >
              <div className="select-car"></div>
              <Card.Body>
                <Card.Title>
                  <div>
                    <i class="fa-solid fa-car cardcartitle"></i>
                    <i class="fa-solid fa-magnifying-glass cardcartitle"></i>
                    &nbsp;
                    <span className="selectcar-title">
                      <strong>
                        SELECT YOUR CAR TO SEARCH FOR PARTS &nbsp;
                        <i class="fa-solid fa-rotate-right"></i>
                      </strong>
                    </span>
                  </div>
                </Card.Title>

                <Card.Text>
                  {/* 1st drop down */}
                  <span className="dropnumber">1</span>
                
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                  
                  />
                  <span className="arrow2 mt-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  <span className="dropnumber2 mt-2">2</span>
                  <Select
                    className="mt-2"
                    options={optionsz}
                    value={selectedOption2}
                    onChange={handleChanges}
                  />
                  {/* 2nd Drop down */}
                  <span className="dropnumber mt-2">3</span>{" "}
                  <Select className="mt-2" options={optionszz}value={selectedOption3} onChange={handleChangess}
                   />
                  {/* <span className="arrow">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span> */}
                  {/* 3rd dropdown */}
                </Card.Text>
                <Button
                onClick={carRes}
                  className="form-control"
                  style={{ backgroundColor: "#0067d7" }}
                >
                  <i class="fa-solid fa-magnifying-glass fa-xs"></i> Search
                </Button>
                <div className="select-car mt-4"></div>
                <p className="mt-4 byregnumber">
                  <i class="fa-solid fa-car" style={{ color: "blue" }}></i>{" "}
                  <strong>BY REGISTRATION NUMBER</strong>
                </p>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    style={{ backgroundColor: "#0068d7" }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt="img"
                      style={{ width: "20%", height: "20px" }}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    style={{ backgroundColor: "#ffe883" }}
                    placeholder="Your Reg Num"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <Button
                    className="ms-3 form-control"
                    style={{ backgroundColor: "#0067d7" }}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>Search
                  </Button>
                </InputGroup>
                <a
                  className="selector-find-text"
                  onClick={() => setModalShow(true)}
                >
                  {" "}
                  CAN’T FIND YOUR CAR IN THE CATALOGUE?
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-10 col-lg-7 col-md-12">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/17012/atd/81495/banner_image__en.jpg"
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/17182/atd/81954/banner_image__en.jpg"
                  alt="Second slide"
                />
            
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/17187/atd/81968/banner_image__en.jpg"
                  alt="Third slide"
                />
       
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://cdn.autodoc.de/uploads/construct_banner/13372/atd/70101/banner_image__en.jpg"
                />
                <Carousel.Caption>
                  <h3>fourth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* react coraosals */}
          </div>
        </Row>

        {/*   */}
        <Row>
          <h5 className="products-title">YOUR RECENTLY VIEWED ITEMS</h5>
          
       
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="products-card">
                <Card
                  style={{ width: "25rem", height: "400px" }}
                  className="shadow-lg p-3 mb-5 bg-white rounded"
                >
                  <span className="love">
                    {" "}
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <div className="promotion-discount">-24%</div>
                  <Card.Img
                    variant="top"
                    style={{ height: "30%", width: "80%" }}
                    src="https://www.partbusters.com/media/catalog/product/cache/063275b34911a0a4c7a81e6095c993a8/1/0/101-23113-1.jpg"
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
                  Febi BilsteinWasher Pump 23113
                      {/* {item.title.slice(0, 10)} */}
                    </Card.Title>
                    <Card.Text>
                      <p className="articlenumber mt-3">
                        Article number: FDB818
                      </p>
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

            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="products-card">
                <Card
                  style={{ width: "25rem", height: "400px" }}
                  className="shadow-lg p-3 mb-5 bg-white rounded"
                >
                  <span className="love">
                    {" "}
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <div className="promotion-discount">-24%</div>
                  <Card.Img
                    variant="top"
                    style={{ height: "30%", width: "80%" }}
                    src="https://www.partbusters.com/media/catalog/product/cache/063275b34911a0a4c7a81e6095c993a8/3/2/32-3000970127-1.jpg"
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
                      Sachs CLUTCH KIT
                      {/* {item.title.slice(0, 10)} */}
                    </Card.Title>
                    <Card.Text>
                      <p className="articlenumber mt-3">
                        Article number: FDB818
                      </p>
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
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="products-card">
                <Card
                  style={{ width: "25rem", height: "400px" }}
                  className="shadow-lg p-3 mb-5 bg-white rounded"
                >
                  <span className="love">
                    {" "}
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <div className="promotion-discount">-24%</div>
                  <Card.Img
                    variant="top"
                    style={{ height: "30%", width: "80%" }}
                    src="https://www.partbusters.com/media/catalog/product/cache/063275b34911a0a4c7a81e6095c993a8/4/7/475-hk2607-1.jpg"
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
                      BORG & BECK CLUTCH KIT 3-IN-1 HK2607
                      {/* {item.title.slice(0, 10)} */}
                    </Card.Title>
                    <Card.Text>
                      <p className="articlenumber mt-3">
                        Article number: FDB818
                      </p>
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

            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="products-card">
                <Card
                  style={{ width: "25rem", height: "400px" }}
                  className="shadow-lg p-3 mb-5 bg-white rounded"
                >
                  <span className="love">
                    {" "}
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <div className="promotion-discount">-24%</div>
                  <Card.Img
                    variant="top"
                    style={{ height: "30%", width: "80%" }}
                    src="https://www.partbusters.com/media/catalog/product/cache/063275b34911a0a4c7a81e6095c993a8/4/0/407-fwp3058-1.jpg"
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
              First Line WATER PUMP KIT

                      {/* {item.title.slice(0, 10)} */}
                    </Card.Title>
                    <Card.Text>
                      <p className="articlenumber mt-3">
                        Article number: FDB818
                      </p>
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

            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="products-card">
                <Card
                  style={{ width: "25rem", height: "400px" }}
                  className="shadow-lg p-3 mb-5 bg-white rounded"
                >
                  <span className="love">
                    {" "}
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <div className="promotion-discount">-24%</div>
                  <Card.Img
                    variant="top"
                    style={{ height: "30%", width: "80%" }}
                    src="https://www.partbusters.com/media/catalog/product/cache/063275b34911a0a4c7a81e6095c993a8/3/2/32-3000970127-1.jpg"
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
                     ` Sachs CLUTCH KIT`
                      {/* {item.title.slice(0, 10)} */}
                    </Card.Title>
                    <Card.Text>
                      <p className="articlenumber mt-3">
                        Article number: FDB818
                      </p>
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

            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="products-card">
                <Card
                  style={{ width: "25rem", height: "400px" }}
                  className="shadow-lg p-3 mb-5 bg-white rounded"
                >
                  <span className="love">
                    {" "}
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <div className="promotion-discount">-24%</div>
                  <Card.Img
                    variant="top"
                    style={{ height: "30%", width: "80%" }}
                    src="https://www.partbusters.com/media/catalog/product/cache/1dce474c4eb7ab5f3a59b5eabc8c13f9/1/0/101-26744-1.jpg"
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
                    Febi BilsteinWheel Bolt 26744
                      {/* {item.title.slice(0, 10)} */}
                    </Card.Title>
                    <Card.Text>
                      <p className="articlenumber mt-3">
                        Article number: FDB818
                      </p>
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


                      
          {/* 2nd card */}
          {/* <div className="col-lg-2 ms-2">
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
          </div> */}
        </Row>

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

      {/* modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{width:'.70684%;'}}></div>
      </div> */}
      <Scrool_indicator />
      <Footer />
    </>
  );
}

export default Cardashboard;
