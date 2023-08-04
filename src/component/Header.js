import React, { useState } from 'react'
import { Button, Col, Container, Dropdown, Form, Nav, Navbar, Row } from 'react-bootstrap'
import './header.css'

function Header() {
  const [showTime,setshowtime]=useState(new Date())
  const date = new Date();
  const interval = setInterval(() => {
    setshowtime(new Date());
  }, 1000);
  
       
        // console.log(showTime);
      
  return (
    <>
    
     <div style={{overflow:'hidden'}} className="navbar-all">


     <Navbar style={{ backgroundColor: '#132530' }} variant="dark" expand="lg">
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ backgroundColor: '#132530' }} id="responsive-navbar-nav">
            <Nav className="me-auto d-flex mx-auto" style={{ textAlign: 'center' }}>
              <Nav.Link href="#home" style={{color:'white'}}><i style={{color:'orange'}} className="fa-solid fa-shop"></i> SHOP</Nav.Link>
              <Nav.Link href="#features"><i className="fa-solid fa-handshake-angle"></i> PARTNERS</Nav.Link>
              <Nav.Link href="#pricing"><i className="fa-solid fa-cube"></i> Club</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="orange">
      <h6 className='mt-2' style={{color:'whitesmoke',textAlign:'center',marginLeft:'10%',fontWeight:'bold'}}>BIG PRICE CRASH! UP TO 36% OFF<span style={{fontSize:'10px',float:'right'}}>{showTime.toLocaleTimeString()}</span> </h6> 
      </div>

      <Navbar style={{ backgroundColor: '#132530' }} variant="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand>
          <img style={{paddingLeft:'50%'}}
            alt=""
            src="https://www.partbusters.com/static/version1680745608/frontend/Smartwave/partbusters/en_US/images/logo.svg"
            width="100%"
            height="30%"
            
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

    

      </Container>
      <Navbar.Collapse  className="justify-content-end">
            <Nav>
              <Nav.Link href="/"><i className="fa-solid fa-warehouse fa-md"></i></Nav.Link>
              <Nav.Link href="/services/products/wishlist"><i className="fa-solid fa-heart fa-md"></i></Nav.Link>
              <Nav.Link style={{marginLeft:'-10% '}} href="/login"><i className="fa-solid fa-user fa-md ms-2"></i> <span style={{fontSize:'10px'}}><strong>Signin</strong></span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          


        {/* <Container>
          
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.partbusters.com/static/version1680745608/frontend/Smartwave/partbusters/en_US/images/logo.svg"
              width="400px"
              height="60%"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#features"><i className="fa-solid fa-warehouse fa-xl"></i></Nav.Link>
              <Nav.Link href="#features"><i className="fa-solid fa-heart fa-xl ms-2"></i></Nav.Link>
              <Nav.Link href="#features"><i className="fa-solid fa-user fa-xl ms-2"></i> <strong>Sign in</strong></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container> */}
      </Navbar>

      <Navbar   style={{ backgroundColor: '#132530' }} expand="lg">
      <Dropdown  >
      <Dropdown.Toggle className='btn btn-dark ms-5 mb-3'  style={{ background: '#0a1a24', width: '100%' }} id="dropdown-basic">
      <i class="fa-solid fa-car icon"></i> Car Parts
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Container className='d-flex flex-wrap justify-content-center'>
  <div className="col-lg-5 col-md-12 header-cart mb-2">
    <input type="text" className='form-control' placeholder='Enter the part number or name' />
  </div>
  <Button style={{ backgroundColor: '#0068d7' }} className='col-lg-1 col-md-6 me-md-2 mb-2 ms-2'><i class="fa-solid fa-magnifying-glass"></i></Button>
  <a href='/cart' style={{ backgroundColor: '#0a1a24' }} className='btn btn-dark col-lg-2 col-md-3'>
    <div className="d-flex align-items-center">
      <i className="fa-solid fa-cart-shopping fa-lg"></i>
      <p className="m-0 ms-2">3 items</p>
      <h6 className='icon m-0 ms-2'><strong>$56</strong><i className="fa-solid fa-angle-down fa-bounce"></i></h6>
    </div>
  </a>
</Container>


      </Navbar>



      <Navbar  style={{ backgroundColor: '#132530' }} expand="lg">
        <Container>
          <Navbar.Toggle style={{backgroundColor:'white '}} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ textAlign: 'center'}}>
              <Nav.Link href="truck" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-truck-moving icon"></i> Truck parts
              </Nav.Link>
              <Nav.Link href="bikes" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-motorcycle icon"></i> MOTOR CYCLE
              </Nav.Link>
              <Nav.Link href="tyres" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-cookie fa-spin icon"></i> Tyres
              </Nav.Link>
              <Nav.Link href="tools" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-wrench fa-shake icon"></i> Tools
              </Nav.Link>
              <Nav.Link href="car-accessories" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-screwdriver-wrench icon"></i>
                <i className="fa-solid fa-car-side fa-fade icon"></i> Car Accessories
              </Nav.Link>
              <Nav.Link href="engineoil" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-oil-can icon"></i> Engine Oil
              </Nav.Link>
              <Nav.Link href="filter" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-filter icon"></i> Filter
              </Nav.Link>
              <Nav.Link href="breakes" style={{color:'white',padding:'20px' }}>
                <i className="fa-solid fa-car-burst icon"></i> Brakes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


     </div>

       
   
            
         


       
        
    
    </>
  )
}

export default Header