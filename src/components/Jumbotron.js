import React from "react";
import styled from 'styled-components';
import nature from '../images/nature.jpg';

const Styles = styled.div`
.jumbo {
background: url(${nature}) no-repeat fixed bottom;
background-size: cover;
color: #efefef;
height: 400px;
position: relative;
z-index: -2;
}
.container {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
}
`;

const Jumbo = () => {
    return (
        <Styles>
        <div class="jumbo">
  <div class="container">
    <h1 class="display-4">The hug of homecoming</h1>
    <p class="lead">In the practice of nature connection there is none of the coercion often involved in other healthy habits like exercise and diets, nor the hangover of other pleasurable experiences like food and drink. Yet nature connection provides the health benefits of the former and the intoxication and bliss of the latter.</p>
  </div>
</div></Styles>
    )
}
export default Jumbo;