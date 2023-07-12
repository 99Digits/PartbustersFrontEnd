import React from 'react'
import Cartnav from './cartnav/Cartnav'
import './cart.css'
import { Button, Row } from 'react-bootstrap'

function Cart() {
  return (
    <>
    <Cartnav/>
    <div  className="container cartnavcontainer" style={{overflow:'hidden'}}>
        <Row>
            <div className="col-lg-12 col-sm-10 col-xs-12 col-md-12">
                <div className="row">
                <div className="col-6 mt-3">
                
                <p className="cartparagraph">Cart sub Total (1 item)</p>
    
                </div>
                <div className="col-3">
                <h6 className='carttotal'>$2,78</h6>

                              </div>
                              <div className="col-sm-6 col-lg-3 col-xs-6 mt-3">
                                        <Button style={{backgroundColor:'#0067d7'}} className='d-flex mx-auto'>Proceed to checkout &nbsp; <i class="fa-solid fa-arrow-right mt-1"></i></Button>

                </div>
                <div className="col-3">
                  
                </div>
                         
                </div>
            </div>
               
                
            
                 
               
        </Row>
        <div className="container shadow-sm p-3 mb-5 bg-white rounded" style={{overflow:'hidden'}}>
    <Row style={{overflow:'hidden'}}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4">
                  <div className="row">
                    <table>
                    
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Quantity</th>
                          <th style={{padding:'10px'}}>price</th>
                          <th>total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img className='tdimg' src="https://cdn.autodoc.de/brands/thumbs/100015.png?m=2&ccf=46951899" alt="img" />
                              <br /><select className='mt-3 tdselect'>
                                <option>Details</option>
                              </select>
                          </td>
                          <td >
                          <Row>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                              <div className="row">
                              <div className="col-2">
                              <input  className='tdinput' type="number" value={2} />

                              </div>
                              <div className="col-1">
                              <button className='cartplus'><i class="fa-solid fa-chevron-up"></i></button>

                              </div>
                              <div className="col-1"><button className='cartplus'><i class="fa-solid fa-minus"></i></button>
                            </div>
                            </div>
                           
                         

                              </div>

                              
                          </Row>
                        
                       
                            {/* <Button className='btn btn-warning '><i class="fa-solid fa-plus"></i></Button>
                            <Button className='btn btn-danger '><i class="fa-solid fa-minus"></i></Button> */}

                          </td>
                          <td className='tdprice' >$500</td>
                          <td className='tdprice'>500</td>
                        </tr>
                      </tbody>

                     
                    </table>
                    
                  </div>
                </div>
        </Row>
    </div>

    <div className="container mt-5 shadow-sm p-3 mb-5 bg-white rounded">
      <Row>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-12">
              <h6 className='d-flex mx-auto ms-5'><i class="fa-solid fa-heart"></i> &nbsp; &nbsp;Add all itms to wishlist</h6>
            </div>
          </div>
        </div>
      </Row>

    </div>

    <div className="container mt-5 shadow-sm p-3 mb-5 bg-white rounded mt-3">
    <Row>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-12">
            <Button style={{backgroundColor:'#0067d7'}} className='d-flex mx-auto'>Proceed to checkout &nbsp; <i class="fa-solid fa-arrow-right mt-1"></i>  </Button>
             </div>
          </div>
        </div>
      </Row>
    </div>

    </div>
   
   
    </>
  )
}

export default Cart