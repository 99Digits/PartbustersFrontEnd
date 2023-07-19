import React from 'react'
import './mobilefooter.css'
import { Card, Row } from 'react-bootstrap'


function Mobilefooter() {
  return (
    <>
       <div className="container mt-4">
          <div className="mobilefooter">
            <img className='loginimages' src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?size=626&ext=jpg&uid=R110228866&ga=GA1.2.1208901341.1689751801&semt=ais" alt="gif" />
            
          <div className="youtubelogo">
            <img src="https://seeklogo.com/images/Y/youtube-square-logo-3F9D037665-seeklogo.com.png" alt="youtube" />
          </div>
          <iframe className='mt-3 youtubeiframe' width="80%" height="490" src="https://www.youtube.com/embed/tmY8D71Mp10" title="Laser Tools | Air Hammer Puller Set | At Partbusters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className='youtubetitle'>
            Video lessons from our experts-all the car info you neeed
            <span><a className="mobilea" href="https://www.youtube.com/@partbusters4628"> Go to our Youtube Channel <i class="fa-brands fa-youtube"></i></a></span>
           </p>
           <Row>
           <div className="col-lg-6 col-sm-6 col-xs-6">
            <div className="row">
            <div className="col-4">
                <img src="https://www.partbusters.com/static/version1680745608/frontend/Smartwave/partbusters_mobile/en_US/images/logo.svg" alt="img" />
            </div>
            <div className="col-6 ms-5">
                <img src="https://www.autodoc.co.uk/atd/img/logo/instagram-logo.svg?1688039373" alt="insta" />

                     
            </div>


            </div>
           
            </div>
           </Row>
          </div>
          <div className="customarservicemobile">

            <h3 className="heading_bottommobile">
                  Customer Service hours for the UK
            </h3>
            <p style={{textAlign:'center',color:'white'}}>Monday to Friday 7.00am-8.00pm</p>
            <p style={{textAlign:'center',color:'white'}}>Saturday 7.00am-4.00pm</p>
            <p style={{textAlign:'center',color:'white'}}>Sunday notworking</p>
                    <p className="footermail">partbuster@gmail</p>
                  

          </div>
          <Card className='card-footer'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign:'center',color:'white'}}>
            {' '}
            &copy;2023 Partbusters onlineshop The website owner is  Haroon
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>

       </div>
    </>
  )
}

export default Mobilefooter