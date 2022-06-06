import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import Slider from "./components/Slider";
import rainbow from '../src/images/rainbow2.jpg';
//import { Button } from "bootstrap";
import Jumbo from "./components/Jumbotron";
import { Text } from "./components/Text";

export const Home = () => {
      return (
            < >
         <Slider/> 
       
         <Text/>
         <Jumbo/>
         <Container style={{ marginBottom:'30px', marginTop:'30px'}}>
               <Row>
                     <Col md={7}>
                           <img src={rainbow}  alt='rainbow' height={400}/>
                     </Col>
                     <Col md={5}>
                           <h2>Beauty of rainbows</h2>
                           <p>The Rainbow is a reflection of perfect balance of the physical world.
                           The Rainbow spectrum helps us understand the physical nature of the Universe.
                           Rainbows are positive energy.Rainbows have relaxing and healing qualities. Rainbows are the universal symbol of peace and harmony. What we see, feel, hear, taste and smell exists between the frequencies of red and violet.
                  <br/>
                            And in fact, a rainbow doesn’t even actually “exist,” ... it’s not an object, it’s an optical phenomenon. Which is why no two people see the same rainbow.</p>
                     </Col>
               </Row>
         </Container>
         </>
      ) 
}