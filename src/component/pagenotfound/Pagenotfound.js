import React from 'react'
import './pnf.css'
import { Row } from 'react-bootstrap'
import Header from '../Header'

function Pagenotfound() {
  return (
    <> 
    <Header/>
    <div className="container">

    <Row>
        <div className="col-lg-12 col-sm-12">
            <a href="/">            <img className='pgfimg' src="https://cdn.dribbble.com/users/804852/screenshots/3549548/404.gif" alt="" />
</a>
        </div>
     </Row>

    </div>

     
    </>
  )
}

export default Pagenotfound