import React from "react";
import { Button, Card, Container, Dropdown, Row } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="mt-5 footer-all">
        <div className="footer_app">
          <div className="footer_app-img">
            <div className="big-image">
              {/* <img
                src="https://www.autodoc.co.uk/atd/img//footer/footer-phone-big.png?1688039373"
                alt=""
              /> */}
              <img
                src="https://www.autodoc.co.uk/atd/img//footer/footer-phone-small.png?1688039373"
                alt=""
              />
            </div>
          </div>
          {/* <div className="footer_app-text">
                Purchasing products via the app is always cheaper than on the website
                </div> */}
          {/* <div className="footer_app-icon">
                    <span className='pointer'>
                    </span>
                    <img src="https://www.autodoc.co.uk/atd/img/footer/google-play.png" alt="" />

                </div> */}
          <Row>
            <div className="col-lg-4"></div>
            <div className="col-sm-4">
              <h6 className="footer_app-text mt-4">
                Purchasing products via the app is always cheaper than on the
                website
              </h6>
            </div>
            <div className="col-lg-2 col-lg-offset-2 mt-4">
              {/* <img
                style={{ float: "right" }}
                className="imgmobile"
                src="https://www.autodoc.co.uk/atd/img/footer/google-play.png"
                alt="play store"
              /> */}
            </div>
            <div className="col-lg-2 mt-4">
              {/* <img
                className="imgmobile"
                src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
                alt="ios"
              /> */}
            </div>
          </Row>
        </div>

        {/* <Card bg="dark" data-bs-theme="dark">
      <Card.Header> 
        <Row>
            <div className="col-lg-4">
           
            </div>
           
        </Row>
        
      
      </Card.Header>
      <Card.Body>
       <Row>
        <div className="col-lg-3">

            <h4 style={{color:'white'}}><strong>CAR REPAIRS HAVE NEVER BEEN SO EASY</strong></h4>

            <p style={{color:'white',justifyContent:'center'}}>Say no to complicated instructions and confusing diagrams. Use the practical and easy car repair tutorials from PARTBUSTERS</p>
        </div>
        <div className="col-lg-3">
            <Row>
                <div className="col-lg-6">

                <img style={{width:'100%'}} src="https://www.partbusters.com/static/version1680745608/frontend/Smartwave/partbusters/en_US/images/logo.svg" alt="" />
                </div>
                <div className="col-lg-6">
                    <h5 class="club"><i class="fa-solid fa-plus fa-xs"></i>CLUB</h5>
                </div>
            </Row>
      

       
        <img   style={{height:'200px'}}  className='mt-3' src="https://cdn5.vectorstock.com/i/1000x1000/86/89/girl-hand-holding-modern-style-smartphone-vector-19628689.jpg" alt="" />


        <p> Free detailed guides and video tutorials for DIY car repairs</p>
        </div>
        <div className="col-lg-3">
            <Row>
                <div className="col-lg-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />

                  
                </div>
                <div className="col-lg-12">
                <iframe  src="https://www.youtube.com/embed/lxdjL-c00rc" title="Laser Tools | Serpentine Belt Tool Kit For Mini | At Partbusters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Free detailed guides and video tutorials for DIY car repairs </p>
                </div>
            </Row>
          
        </div>
        <div className="col-lg-3"></div>

       </Row>
      </Card.Body>
         </Card> */}
        <Row className="footer_social" style={{ backgroundColor: "#132530" }}>
          <div className="col-lg-3 ms-2 heading mt-4">
            Car repairs have never been so easy
            <div className="heading1 mt-3">
              Say no to complicated instructions and confusing diagrams. Use the
              practical and easy car repair tutorials from PARTBUSTERS
            </div>
          </div>
          <div className="col-lg-3 mt-3">
            <img
              style={{ width: "50%", height: "50px", float: "right" }}
              className=""
              src="https://www.partbusters.com/static/version1680745608/frontend/Smartwave/partbusters/en_US/images/logo.svg"
              alt=""
            />
            <span style={{ color: "#ff471a", float: "right" }}>
              {" "}
              <strong>CLUB</strong>
            </span>
            <img
              style={{ height: "auto" }}
              className="mt-5"
              src="https://www.popsci.com/uploads/2021/01/11/7INONBL2EBG2TJ4X763TTOK7RI.jpg?auto=webp&width=1440&height=1080"
              alt=""
            />
            <div className="heading1 mt-5">
              Free detailed guides and video tutorials for DIY car repairs
            </div>
          </div>
          <div className="col-lg-3 mt-3">
            <img
              style={{ width: "40%", height: "50px", float: "right" }}
              src="https://www.autodoc.co.uk/atd/img/logo/youtube-logo.svg?1688039373"
              alt=""
            />
            <iframe
              className="mt-5"
              style={{ height: "53%" }}
              width="100%"
              height="30%"
              src="https://www.youtube.com/embed/fDnrNCe6qY0"
              title="Laser Tools | Brake Piston Spreader | At Partbusters"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="mt-4 heading1">
              Video lessons from our experts all the car repair info you need
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-4">
            <img
              className="mt-2"
              style={{ width: "40%", height: "30px", float: "right" }}
              src="https://www.autodoc.co.uk/atd/img/logo/instagram-logo.svg?1688039373"
              alt=""
            />

            <img
              className="mt-5"
              style={{ width: "100%", height: "50%" }}
              src="https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/5ec49b667a4c6450daa0f6e4_Best%20instagram%20planning%20apps.png"
              alt=""
            />
            <div className="heading1 mt-5">
              Follow the latest trends and enjoy updates, useful tips, and posts
              about cars
            </div>
          </div>

          {/* 2nd footer last */}
        </Row>
        <Row className="footer_links">
          <div className="col-lg-2">
            <div className="footer_link-block">
              <div className="footer_link-block_title">ABOUT PARTBUSTERS</div>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Conpany information</a>
                </li>
                <li>
                  <a href="">Bonus programme</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
                <li>
                  <a href="">PARTBUSTERS app</a>
                </li>
                <li>
                  <a href="">PARTBUSTERS </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="footer_link-block">
              <div className="footer_link-block_title">HELP & SUPPORT</div>
              <ul>
                <li>
                  <a href="">Help Сentre</a>
                </li>
                <li>
                  <a href="">PARTBUSTERS Club</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Car repair manuals & video tutorials</a>
                </li>
                <li>
                  <a href="">Terms & conditions</a>
                </li>
                <li>
                  <a href="">Right of withdrawal</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
                <li>
                  <a href="">Cookie settings</a>
                </li>
                <li>
                  <a href="">Code of Conduct</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="footer_link-block">
              <div className="footer_link-block_title">CUSTOMER SERVICE</div>
              <ul>
                <li>
                  <a href="">Payment</a>
                </li>
                <li>
                  <a href="">Delivery</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Returns & refunds</a>
                </li>
                <li>
                  <a href="">Core exchange</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer_link-block">
              <div className="footer_link-block_title">TOP PRODUCTS</div>
              <ul>
                <li>
                  <a href="">Shock absorber</a>
                </li>
                <li>
                  <a href="">Clutch kit</a>
                </li>
                <li>
                  <a href="">Suspension arm</a>
                </li>
                <li>
                  <a href="">Wheel bearing</a>
                </li>
                <li>
                  <a href="">Car care & cleaning products</a>
                </li>
                <li>
                  <a href="">Shop by maker</a>
                </li>
                <li>
                  <a href="">Shop by model</a>
                </li>
                <li>
                  <a href="">Shop by car brand</a>
                </li>
                <li>
                  <a href="">Car parts brands</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_language-title">
              INTERNATIONAL CUSTOMER SERVICE
            </div>

            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                style={{ backgroundColor: "0a1a24" }}
                className="language-btn"
                id="dropdown-basic"
              >
                {" "}
                <img
                  style={{ width: "20%", height: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
                  alt="uk"
                />
                UNITED KINGDOM
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="footer_language-title mt-3">
              SUBSCRIBE AND SAVE TODAY!
            </div>
            <Row>
              <div className="col-lg-10">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="form-control"
                />
              </div>
              <div className="col-lg-2">
                <Button style={{ backgroundColor: "#0068d7" }}>
                  SUBSCRIBE
                </Button>
              </div>
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Footer;
