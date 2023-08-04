import React, { useState } from 'react'
import './mainfilter.css'
import Header from '../../component/Header'
import { Button, Card, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import Select from "react-select";
import axios from 'axios';


function MainFilter() {
  const [carmodal, setcarmodal] = useState([]);
  const [cartitle,setcartitle]=useState([])


  //  const carapi=async()=>{
  //   const headers = {
  //       'X-RapidAPI-Key': '2093b31d42msh8699915702a2e18p151f23jsn92464a07db83',
  //       'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  //     };

  //     const params = {
  //       limit: '50',
  //       page: '0',
  //       make: selectedOption
  //     };

  //     const queryString = new URLSearchParams(params).toString();
  //     const url = `https://car-data.p.rapidapi.com/cars?${queryString}`;

  //     return await CommonRequest('GET', url, headers);
  //   };

  // car response

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  const options = [
    { value: "MINI", label: "Mini" },
    { value: "BMW", label: "BMW" },
    { value: "HONDA", label: "HONDA" },
    { value: "SUZUKI", label: "SUZUKI" },
    { value: "BMW", label: "BMW" },
    { value: "HYUNDAI", label: "HYUNDAI" },
    { value: "FORD", label: "FORD" },
    { value: "NISSAN", label: "NISSAN" },
    { value: "TOYOTA", label: "TOYOTA" },
    { value: "TESLA", label: "TESLA" },
  ];
  const optionsz = carmodal.map((item) => ({
    value: item.model,
    label: item.model,
  }));
  const optionszz = cartitle.map((item) => ({
    value: item.type,
    label: item.type,
  }));;
  const handleChange = async(selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: selectedOption.value,
        // model: selectedOption2.value,
        //  type: selectedOption.value
      },
      headers: {
        "X-RapidAPI-Key": "2093b31d42msh8699915702a2e18p151f23jsn92464a07db83",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcarmodal(response.data);
    } catch (error) {
      console.error(error);
    }
  
  };
  const handleChanges =async (selectedOption2) => {
    setSelectedOption2(selectedOption2);
    console.log(selectedOption2);
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: selectedOption.value,
         model: selectedOption2.value,
        //  type: selectedOption.value
      },
      headers: {
        "X-RapidAPI-Key": "2093b31d42msh8699915702a2e18p151f23jsn92464a07db83",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcartitle(response.data);
    } catch (error) {
      console.error(error);
    }

  };
  const handleChangess =async (selectedOption3) => {
    setSelectedOption3(selectedOption3);
    
  };
 
  const carRes = async () => {
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: selectedOption.value,
         model: selectedOption2.value,
        
      },
      headers: {
        "X-RapidAPI-Key": "2093b31d42msh8699915702a2e18p151f23jsn92464a07db83",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcarmodal(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // { value: carmodal.map((data)=>data.model), label: carmodal.map((data)=>data.model) },

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <><Header/>

    
    
    <div className="container-fluid">
        <Row>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 searchcar">
            <Card
              style={{ width: "22rem" }}
              className="shadow-lg p-3 mb-5 bg-white rounded"
            >
              <div className="select-car"></div>
              <Card.Body>
                <Card.Title>
                  <div>
                    <i class="fa-solid fa-car cardcartitle"></i>
                    <i class="fa-solid fa-magnifying-glass cardcartitle"></i>
                    &nbsp;
                    <span className="selectcar-title">
                      <strong>
                        SELECT YOUR CAR TO SEARCH FOR PARTS &nbsp;
                        <i class="fa-solid fa-rotate-right"></i>
                      </strong>
                    </span>
                  </div>
                </Card.Title>

                <Card.Text>
                  {/* 1st drop down */}
                  <span className="dropnumber">1</span>
                
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                  
                  />
                  <span className="arrow2 mt-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  <span className="dropnumber2 mt-2">2</span>
                  <Select
                    className="mt-2"
                    options={optionsz}
                    value={selectedOption2}
                    onChange={handleChanges}
                  />
                  {/* 2nd Drop down */}
                  <span className="dropnumber mt-2">3</span>{" "}
                  <Select className="mt-2" options={optionszz}value={selectedOption3} onChange={handleChangess}
                   />
                  {/* <span className="arrow">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span> */}
                  {/* 3rd dropdown */}
                </Card.Text>
                <Button
                onClick={carRes}
                  className="form-control"
                  style={{ backgroundColor: "#0067d7" }}
                >
                  <i class="fa-solid fa-magnifying-glass fa-xs"></i> Search
                </Button>
                <div className="select-car mt-4"></div>
                <p className="mt-4 byregnumber">
                  <i class="fa-solid fa-car" style={{ color: "blue" }}></i>{" "}
                  <strong>BY REGISTRATION NUMBER</strong>
                </p>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    style={{ backgroundColor: "#0068d7" }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt="img"
                      style={{ width: "20%", height: "20px" }}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    style={{ backgroundColor: "#ffe883" }}
                    placeholder="Your Reg Num"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <Button
                    className="ms-3 form-control"
                    style={{ backgroundColor: "#0067d7" }}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>Search
                  </Button>
                </InputGroup>
                <a
                  className="selector-find-text"
                  onClick={() => setModalShow(true)}
                >
                  {" "}
                  CAN’T FIND YOUR CAR IN THE CATALOGUE?
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
            <h4 className="mt-3 filterheading">Filters car spares</h4>
           
            <div className="filternav">
            <Dropdown>
      <Dropdown.Toggle style={{backgroundColor:'whitesmoke',color:'black'}}>
      Filters<i class="fa-solid fa-angle-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
    
            </div>
            
            


          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 mt-5">
           
            
            <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:'whitesmoke',color:'black'}}>
      Choose Car<i class="fa-solid fa-angle-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
    
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 mt-5">
           
            
           <Dropdown >
     <Dropdown.Toggle style={{backgroundColor:'whitesmoke',color:'black'}}>
     Choose Model<i class="fa-solid fa-angle-down"></i>
     </Dropdown.Toggle>

     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>
 
   
           </div>
           <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 mt-5">
           
            
           <Dropdown >
     <Dropdown.Toggle style={{backgroundColor:'whitesmoke',color:'black'}}>
     Choose Body Style<i class="fa-solid fa-angle-down"></i>
     </Dropdown.Toggle>

     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>
 
   
           </div>
            
            


        
          

        </Row>

    </div>
    </>
  )
}

export default MainFilter