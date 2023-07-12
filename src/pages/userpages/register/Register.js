import React, { useState } from 'react'
import Header from '../../../component/Header'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Mobilefooter from '../../../component/footer/mobilefooter/Mobilefooter'
import "./register.css"
import {userRegister} from './../../../service/allapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import Loader from '../../../component/loaders/Loader'
import { useNavigate } from 'react-router-dom'
function Register({allreg}) {
  const nav=useNavigate()
  const [inputdata,setinputdata]=useState({
    email:"",
    psw:"",
    cpsw:""

  })
  const setinputvalue=(e)=>{
    const {name,value}=e.target
    setinputdata({...inputdata,[name]:value})
  }
  console.log(inputdata);
  // loader
  const [loader,setloader]=useState(false)
  // 

  const UserReg=async(e)=>{
    e.preventDefault()

    const {email,psw,cpsw}=inputdata

    if(email===""){
      toast.error("Email Required")

    }
    else if(psw===""){
      toast.error("Password cannot be Empty")
    }
    else if(psw!==cpsw){
      toast.error("Password Cannot Be Matched")

    }
    else{
      const data=new FormData()
      data.append("email",email)
      data.append("psw",psw)
      data.append("cpsw",cpsw)

      try{
        const response=await userRegister(data)
        console.log(response);
        if(response.status===200){
          toast.success("Register Successfully")
          setloader(true)
          setTimeout(() => {
            setloader(false)
            nav('/')
            
          }, 3000);
        }
        else{
          toast.error("User Alrady Exist please Register")
        }

      }catch(err){
        console.log(err);
      }
    }

  }

  return (
    
    <>
    
     <div className="container mt-3">
        
        <Card className="cardlogin ">
        <Row>
        <div className="col-lg-12 col-sm-12 col-xs-6">
        <div className="row">
          <div className="col-6">
            <Button onClick={allreg} className="form-control logbutton">Sign In</Button>
          </div>
          <div className="col-6">
            <Button className="form-control regbutton">Register</Button>
          </div>
        </div>
        <div className="logincontainer">
        <Form.Group  className="mb-3 login-formGroup" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' value={inputdata.email} onChange={setinputvalue} type="email" placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group  className="mb-3 login-formGroup" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className='d-flex justify-contnt-center' type="password" name='psw' value={inputdata.psw} onChange={setinputvalue} placeholder="Enter the Password" />
   

  </Form.Group>
  <Form.Group  className="mb-3 login-formGroup" controlId="formBasicEmail">
    <Form.Label>confirm password</Form.Label>
    <Form.Control name='cpsw' value={inputdata.cpsw} onChange={setinputvalue} type="password" placeholder="Confirm password" />
    <Button onClick={UserReg} style={{backgroundColor:'#3267d6;'}} className="form-control mt-3">SIGN UP</Button>
    { loader===true? <div className="mt-5 my d-flex justify-content-center">
      <Loader/>

      </div>:""}
  </Form.Group>

        </div>
      </div>
      </Row>
        </Card>
        <ToastContainer position='top-center'/>

   
  </div>

    </>
  )
}

export default Register