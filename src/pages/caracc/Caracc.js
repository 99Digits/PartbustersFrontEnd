import React, { useState } from 'react'
import Header from '../../component/Header'
import { Card, Collapse, Container, Navbar, Row } from 'react-bootstrap'
import './caracc.css'
function Caracc() {
    const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
    <div style={{overflow:'hidden'}} className="">  <Header/></div>
  
    <div style={{overflow:'hidden'}} className="container-fluid">
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='d-flex mx-auto navtools'  href="tools">CAR ACCESSORIES ONLINE STORE</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <p className="animate__slideOutDown">
      Everything for your car from one provider. In our online shop you find numerous car accessory items: From interior and exterior car care up to many gadgets and accessories for travelling and transportation.
      </p>

    {/* car acc */}
    <div className="container background-image">
      <Row className='justify-content-center'>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     

         <Card  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
          <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/303.png" />
          <Card.Body>
            <Card.Title>Car cleaning & detailing accessories</Card.Title>
          </Card.Body>
        </Card>
        
       
      </div>
      <Collapse in={open}>
        <div className='copens' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card style={{ width: '16rem' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/33016.png" />
      <Card.Body>
        <Card.Title>Car Air Freshener</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img  variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/34511.png" />
      <Card.Body>
        <Card.Title>preassure Washers</Card.Title>
      </Card.Body>
    </Card>

            </div>
          </Row>
       
        </div>
      </Collapse>
      <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card onClick={() => setOpen1(!open1)} style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/305.png" />
      <Card.Body>
        <Card.Title>Pullers And special carTools</Card.Title>
      </Card.Body>
    </Card>
    
  
  </div>
  <Collapse in={open1}>
        <div className='copens' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/33038.png" />
      <Card.Body>
        <Card.Title>Battery chargers</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/33019.png" />
      <Card.Body>
        <Card.Title>Car firstaid Kit</Card.Title>
      </Card.Body>
    </Card>
    

            </div>
            <div className="col-lg-3 mt-3 tools-card">
            <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/33021.png" />
      <Card.Body>
        <Card.Title>Window  Breaker</Card.Title>
      </Card.Body>
    </Card>

              </div>
            
        
          </Row>
       
        </div>
      </Collapse>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card onClick={() => setOpen2(!open2)}  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/600.png" />
      <Card.Body>
        <Card.Title>Winter car accessories</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <Collapse in={open2}>
        <div className='copens' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/602.png" />
      <Card.Body>
        <Card.Title>Wheel tyre accessories</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/315.png" />
      <Card.Body>
        <Card.Title>In car Entertainment</Card.Title>
      </Card.Body>
    </Card>
    

            </div>
            <div className="col-lg-3 mt-3 tools-card">
            <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/350.png" />
      <Card.Body>
        <Card.Title>Charging Acessories</Card.Title>
      </Card.Body>
    </Card>
              
              </div>
          
          </Row>
       
        </div>
      </Collapse>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card onClick={() => setOpen3(!open3)}  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/604.png" />
      <Card.Body>
        <Card.Title>Camping accessories</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <Collapse in={open3}>
        <div className='copens' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36032.png" />
      <Card.Body>
        <Card.Title>Cable tie guns</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36025.png" />
      <Card.Body>
        <Card.Title>Cremping Pilers</Card.Title>
      </Card.Body>
    </Card>
    

            </div>
            <div className="col-lg-3 mt-3 tools-card">
            <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36029.png" />
      <Card.Body>
        <Card.Title>Locking pilers</Card.Title>
      </Card.Body>
    </Card>
              
              </div>
          
          </Row>
       
        </div>
      </Collapse>
  {/* <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card style={{ width: '16rem' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/632.png" />
      <Card.Body>
        <Card.Title>Pillers</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card style={{ width: '16rem' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/632.png" />
      <Card.Body>
        <Card.Title>Pillers</Card.Title>
      </Card.Body>
    </Card>
  </div> */}
  
   

</Row>
      </div>

    </div>
    
    
    </>
  )
}

export default Caracc