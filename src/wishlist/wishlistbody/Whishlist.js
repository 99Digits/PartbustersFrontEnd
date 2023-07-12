import React, { useState } from "react";
import Header from "../../component/Header";
import "./wish.css";
import { Badge, Button, Card, Collapse, Row } from "react-bootstrap";
import Mobilefooter from "../../component/footer/mobilefooter/Mobilefooter";

function Whishlist() {
  const [open, setOpen] = useState(false);

  return (
    <div div className="" style={{ overflow: "hidden" }}>
      <div className="" style={{ overflow: "hidden" }}>
        <Header />
      </div>
      <div className="wishlistheader" style={{ overflow: "hidden" }}>
        <span className="left_arrow">
          <i class="fa-solid fa-arrow-left-long"></i>
        </span>{" "}
        <h5 className="wishlisttitle">
          My wishlist &nbsp; <i class="fa-solid fa-heart-circle-bolt"></i>
        </h5>
      </div>
      <div className="">
        <Row style={{ overflow: "hidden" }}>
          <div
            className="col-lg-6     col-md-6 col-sm-12 col-xs-12"
            style={{ overflow: "hidden" }}
          >
            <div className="row">
              <div className="col-8">
                <p className="wishlisttext ms-2">
                  items on wishlist <i class="fa-solid fa-minus"></i>&nbsp;
                  &nbsp;
                  <Badge bg="warning" style={{ overflow: "hidden" }}>
                    {" "}
                    9
                  </Badge>
                </p>
              </div>
              <div className="col-3" style={{ overflow: "hidden" }}>
                <button class="cta">
                  <span class="hover-underline-animation">
                    DeleteAll<i class="fa-solid fa-trash"></i>{" "}
                  </span>
                  <svg
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal"
                  >
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      data-name="Path 10"
                      id="Path_10"
                    ></path>
                  </svg>
                </button>
                {/* <a className='wishlistlink' href="">delete all <i class="fa-solid fa-xmark"></i></a> */}
              </div>
            </div>
          </div>
        </Row>
        <Card className="shadow-sm p-3 mb-5 bg-white rounded wishlistlog">
          <h6 className="d-flex mx-auto">
            Register or Login to save your Wishlist
          </h6>
          <Row>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                className="row d-flex mx-auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="col-4">
                  <a href="/login" className="btn btn-warning">
                    Register/Login
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Card>
      </div>
      <Row>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Button className="form-control buttonbuyall">
            Buy All items <i class="fa-solid fa-cart-shopping"></i>
            <Badge bg="warning" style={{ overflow: "hidden" }}>
              {" "}
              9
            </Badge>
          </Button>
        </div>
      </Row>

      {/* card for wishlist body */}
      <div className="shadow p-3 mb-5 bg-white rounded mt-3">
        <table>
          <tr>
            <td>
              <img
                src="https://cdn.autodoc.de/thumb?id=15877831&m=2&n=0&lng=en&ccf=94077841"
                alt="img"
              />
            </td>

            <td>
              <p className="ms-5">
                <strong>Wishlist item</strong>
              </p>
            </td>
            <td>
              <p className="ms-4">
                <strong>$67</strong>
              </p>
            </td>
            <td>
              <Row>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-4">
                  <div className="row">
                    <div className="col-2">
                      <input className="tdinput" type="number" value={2} />
                    </div>
                    <div className="col-1">
                      <button className="cartplus">
                        <i class="fa-solid fa-chevron-up"></i>
                      </button>
                    </div>
                    <div className="col-1">
                      <button className="cartplus">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Row>
            </td>
            <td>
              <Button className="btn btn-danger ms-5">
                <i class="fa-solid fa-cart-shopping"></i>
              </Button>
            </td>
      
          </tr>
          <tr>
          <td>
           
           <Button
             onClick={() => setOpen(!open)}
             aria-controls="example-collapse-text"
             aria-expanded={open}
           >
            Details
           </Button>
           
         </td>
          </tr>
         
           
         
        </table>
        <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
      </div>
      <Row>
        <div className="col-lg-4"></div>
        <div className="col-lg-3">
          <Button className="form-control buttonbuyall">
            Buy All items <i class="fa-solid fa-cart-shopping"></i>
            <Badge bg="warning" style={{ overflow: "hidden" }}>
              {" "}
              9
            </Badge>
          </Button>
        </div>
      </Row>
      <Mobilefooter />
    </div>
  );
}

export default Whishlist;
