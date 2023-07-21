import React, { useState } from "react";
import Header from "../../component/Header";
import "./engineoil.css";
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";

function Engineoil() {
  const [carmodal, setcarmodal] = useState([]);
  const [cartitle,setcartitle]=useState([])
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
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
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
  return (
    <>
      <Header />

      <div className="container-fluid" style={{overflow:'hidden'}}  >
        <h3 className="oilheading">ONLINE MOTOR OIL SHOP</h3>

        <div className="container container-drop">
          <Row>
            <div className="col-lg-3 col-xs-12 col-sm-12 col=md-6">
              <p className="hedingoil">
                Oil checker. Find the correct motor oil
              </p>
              <br />
              <div className="dropoil">
                <h4 className="dropoil-1">
                  ENGINE OIL FOR MY CAR. SELECT YOUR VEHICLE{" "}
                  <i class="fa-solid fa-rotate-right"></i>
                </h4>
                {/* <div className="dropoilcon1">
                  <div className="row oil-one">
                    <div className="col-1">1</div>
                    <div className="col-10">
                      <Select  options={options}
                    value={selectedOption}
                    onChange={handleChange}>

                      </Select>
                    </div>
                  </div>
                </div> */}


                
                <Select className="oilselect"
                  options={options}
                  value={selectedOption}
                  onChange={handleChange}
                
                />
             
                <Select
                  className="mt-2 oilselect"
                  options={optionsz}
                  value={selectedOption2}
                  onChange={handleChanges}
                />
                {/* 2nd Drop down */}
                <Select className="mt-2 oilselect" options={optionszz}value={selectedOption3} onChange={handleChangess}
                 />
                <Button className="oilbutton form-control mt-3">SEARCH</Button>
                <div className="select-car mt-4"></div>
                <p className="mt-4 byregnumber">
                  <i class="fa-solid fa-car" style={{ color: "blue" }}></i>{" "}
                  <strong>BY REGISTRATION NUMBER</strong>
                </p>

                <InputGroup className="mb-3">
                  {/* <InputGroup.Text
                    id="basic-addon1"
                    style={{ backgroundColor: "#0068d7" }}
                  >
                
                  </InputGroup.Text> */}
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
              </div>
             
            </div>
           
            <div className="lineoil">
              
              </div>
            
                <div className="col-6">
                  <h6 className="hedingoil">
                  SELECT ENGINE OIL REQUIREMENTS<i class="fa-solid fa-rotate-right"></i>
                  <br />
                  
                  </h6>
                  <p className="mt-4 oilpar">SAE viscosity grade</p>
                    <Select className="" label="All"/>
                    <p className="mt-4 oilpar">Brand</p>
                    <Select className="" label="All"/>
                    <p className="mt-4 oilpar">OEM approval</p>

                    <Select className=""  label="All"/>

                 
                    <p className="mt-4 oilpar">Brand</p>

<Select className=""  label="All"/>
                  <Button className="form-control mt-3 oilbutton">SEARCH</Button>
              
                </div>
            

          

          </Row>
        </div>
      </div>
    </>
  );
}

export default Engineoil;
