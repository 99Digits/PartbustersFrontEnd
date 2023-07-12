import React, { useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import Header from "../../../component/Header";
import "./login.css";
import Mobilefooter from "../../../component/footer/mobilefooter/Mobilefooter";
import Register from "../register/Register";
import { userLogin } from "../../../service/allapi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../component/loaders/Loader'
import { useNavigate } from "react-router-dom";

function Login() {
  const nav=useNavigate()
  const [loader,setloader]=useState(false)
    const [reg,setreg]=useState(false)

const allreg=()=>{
    setreg((prevstate)=>!prevstate)
}
const [inputdata,setinputdata]=useState({
       email:"",
       psw:""
})
const inputvalue=(e)=>{
  const {name,value}=e.target
  setinputdata({...inputdata,[name]:value})
}
console.log(inputdata);
  const UserLoginFn=async()=>{
       const {email,psw}=inputdata
       if(email===""){
        toast.error("email required")
       }
       else if(psw===""){
        toast.error("password Required")
       }
       else{
        const data=new FormData()
        data.append("email",email)
        data.append("psw",psw)
        try{
          const response = await userLogin(data)

          if(response.status===200){
            toast.success("Login SuccessFully")
            setloader(true)
            setTimeout(() => {
               setloader(false)
               nav('/')
            }, 3000);
          }
          else{
            toast.error("User Not Found Please Check mail/password")
          }

        }
        catch(err){
          console.log(err);
        }
       }

  }
  
  return (
    <>
      <Header />

      <div className="container mt-3">
        
            {reg===false?<Card className="cardlogin">
            <Row>
            <div className="col-lg-12 col-sm-12 col-xs-6">
            <div className="row">
              <div className="col-6">
                <Button onClick={allreg} className="form-control loginbutton">Sign In</Button>
              </div>
              <div className="col-6">
                <Button onClick={allreg} className="form-control registerbutton">Register</Button>
              </div>
            </div>
            <div className="logincontainer">
            <Form.Group  className="mb-3 login-formGroup" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" value={inputdata.email} onChange={inputvalue} type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group  className="mb-3 login-formGroup" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="psw" value={inputdata.psw} onChange={inputvalue} type="password" placeholder="Enter the Password" />
        <Form.Text className="text-muted">
          <a href="" style={{color:'blue'}}>Forget Password?</a>
        </Form.Text>
        <Button onClick={UserLoginFn} style={{backgroundColor:'#3267d6;'}} className="form-control">SIGN IN</Button>
           {loader===true?<div className="mt-5 d-flex justify-content-center">
            <Loader/>
           </div>:""}
      </Form.Group>

            </div>
          </div>
          </Row>
            </Card>:''}
         
          {reg===true? <Register allreg={allreg} />:''}
      </div>
      <Mobilefooter/>
      <ToastContainer position='top-center'/>

    </>
  );
}

export default Login;
