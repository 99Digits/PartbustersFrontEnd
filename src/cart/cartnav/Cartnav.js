import React from 'react'
import './cartnav.css'
import { Container, Navbar } from 'react-bootstrap'

function Cartnav() {
  return (
    <>
     <Navbar className="" style={{overflow:'hidden',backgroundColor:'white'}}>
        <Container>
       
          <Navbar.Brand href="#home">
          <a href=""><i style={{fontSize:'34px',color:'black'}} class="fa-solid fa-arrow-left"></i></a>

            <img
              src="https://www.partbusters.com/static/version1680745608/frontend/Smartwave/partbusters/en_US/images/logo.svg"
              width="140"
              height="80"
              className="d-inline-block align-top ms-5"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />

 

    </>
  )
}

export default Cartnav