import React,{useState, useEffect} from "react";
 import Weather from"./weather.jpeg";
 import Pro from "./pro.jpeg"
 import Dots from"./dots.jpg";
import { Button,Container,Dropdown,Progress, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function Card() {

    var [initial, finalvalue] = useState(Dots); 
    const [degree, finaldegree] = useState("--");
    const [maximum, finalmaximum] = useState("--");


    

    useEffect(() => {
        const interval = setInterval(() => {
          button2();
        }, 3000);
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
          button1();
        }, 3000);
        return () => clearInterval(interval);
      }, []);


      
      function button(){
        finalvalue (Weather,Pro)
      }


      function button1(){
        finaldegree(Math.floor(Math.random()*(100-50)))
      }

      
      function button2(){
        finalmaximum(Math.floor(Math.random()*(80-50)))
      }



   

    return (       
        <div  id="component_2_weather">
            <button onClick={()=>button()}>click to update</button>
            <button onClick={()=>button1()}>weather update</button>
            <button onClick={()=>button2()}>weather maximum</button>
        <Row>
            <Row>
                <Col sm="1"></Col>
                <Col >
                <div>
                <a   style={{textDecoration:"none",fontSize:"15px",color:" rgb(20, 20, 20)"}} >Weather </a> 
                </div>
                </Col>
               
                <Col sm="1"> </Col>
            </Row>
            
            <Row>
            <Col sm="1"></Col>

            <Col  style={{marginTop:"20px",marginLeft:"0px"}}>
                <div >
                <img  src={initial} style={{height:"63px",width:"63px"}} /> 
                </div>
            </Col>  
            
            <Col  style={{marginTop:"20px",marginLeft:"0px"}}>
              <a style={{fontSize:"13px",color:" rgb(20, 20, 20)"}} >
              New York City <br/>
              <span style={{color:"red"}}> Sunny</span> <br/>
              <span style={{color:" rgb(129, 142, 146)"}}> Precipitation:{degree}%</span>
              </a> 
            </Col>
            <Col  ></Col>
            <Col > 
             <a style={{color:"rgb(59, 200, 255)",marginTop:"26px",fontSize:"42px",fontWeight:"400"}}>{maximum}<sup>&deg;</sup></a>
             <a><br/><span>32<sup>&deg;</sup>/25<sup>&deg;</sup></span></a>
            </Col>
            </Row>
        </Row>
        </div>  
    );
  }
     
export default function On_click_change() {
    return (
      <div>
        <Card/>        
      </div>
    );
}