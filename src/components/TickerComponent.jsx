import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const MarqueeContainer = styled.span`
  font-family: "Montserrat";
  background-color: #bdff32;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  height: 10vh;
  padding-right: 2vw;
`;
const TickerComponent = () => (
  <Marquee
    autoFill
    pauseOnHover
    children={
      <>
        <MarqueeContainer>We Demand Justice for RG Kar</MarqueeContainer>
      </>
    }
  />
);

export default TickerComponent;
