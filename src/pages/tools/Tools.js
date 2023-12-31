import React, { useState } from 'react'
import Header from '../../component/Header'
import { Button, Card, Collapse, Container, Navbar, Row } from 'react-bootstrap'
import './tools.css'
import 'animate.css'
import Mobilefooter from '../../component/footer/mobilefooter/Mobilefooter'


function Tools() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <>
     <Header/>
     <div className="container-fluid">
     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='d-flex mx-auto navtools'  href="tools">ONLINE STORE FOR TOOLS</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <p className="animate__slideOutDown">
      High-quality professional tools for any purpose - supply your automotive workshop and garage with tools from top brands.
      </p>

      <div className="container">
      <Row className='justify-content-center'>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     

         <Card  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
          <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/636.png" />
          <Card.Body>
            <Card.Title>Spanners & wrenches</Card.Title>
          </Card.Body>
        </Card>
        
       
      </div>
      <Collapse in={open}>
        <div className='copen' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card style={{ width: '16rem' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36112.png" />
      <Card.Body>
        <Card.Title>Basin wrenches</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img  variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36101.png" />
      <Card.Body>
        <Card.Title>Band oil filter wrenches</Card.Title>
      </Card.Body>
    </Card>

            </div>
          </Row>
       
        </div>
      </Collapse>
      <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card onClick={() => setOpen1(!open1)} style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/637.png" />
      <Card.Body>
        <Card.Title>Pullers And special carTools</Card.Title>
      </Card.Body>
    </Card>
    
  
  </div>
  <Collapse in={open1}>
        <div className='copen' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36061.png" />
      <Card.Body>
        <Card.Title>Ball joint Pulers</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36059.png" />
      <Card.Body>
        <Card.Title>Puller accessories</Card.Title>
      </Card.Body>
    </Card>
    

            </div>
            <div className="col-lg-3 mt-3 tools-card">
            <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36155.png" />
      <Card.Body>
        <Card.Title>Windscreen removal tools</Card.Title>
      </Card.Body>
    </Card>

              </div>
            
        
          </Row>
       
        </div>
      </Collapse>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card onClick={() => setOpen2(!open2)}  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/635.png" />
      <Card.Body>
        <Card.Title>Building tools</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <Collapse in={open2}>
        <div className='copen' >
          <Row>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36040.png" />
      <Card.Body>
        <Card.Title>Builders buckets</Card.Title>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-3 mt-3 tools-card">
 <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36042.png" />
      <Card.Body>
        <Card.Title>Crowbars</Card.Title>
      </Card.Body>
    </Card>
    

            </div>
            <div className="col-lg-3 mt-3 tools-card">
            <Card  style={{ width: '16rem',cursor:'pointer' }}  className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/41x41/36136.png" />
      <Card.Body>
        <Card.Title>Cleaning Brushes</Card.Title>
      </Card.Body>
    </Card>
              
              </div>
          
          </Row>
       
        </div>
      </Collapse>
  <div className="col-lg-3 col-xs-6 col-sm-6 col-md-4 tools-card">
    
     
    <Card onClick={() => setOpen3(!open3)}  style={{ width: '16rem',cursor:'pointer' }} className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Img variant="top" src="https://cdn.autodoc.de/uploads/custom-catalog/atd/groups/230x155/632.png" />
      <Card.Body>
        <Card.Title>Pillers</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <Collapse in={open3}>
        <div className='copen' >
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
     <Mobilefooter/>
   
    </>
  )
}

export default Tools