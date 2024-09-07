import { useState } from "react";
import bannerBg from '../assets/bannerBg.jpeg';
import { Container,Paper } from "@mui/material";
import styled from "styled-components";

const HeroContainer = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const ImageContainer = styled.img`
max-width: 35%;
height: auto;
border: 1px solid black;
border-radius: 2rem;
`;

const BannerTextContainer = styled.div`
font-family: "Bebas Neue", sans-serif;
font-size: 6rem;
font-weight: 400;
font-style: normal;
align-self: flex-end;

`;

function HeroBanner() {
  return <>
  <HeroContainer>
    <BannerTextContainer>WE STAND WITH RG KAR</BannerTextContainer>
    <ImageContainer src={bannerBg} alt="" />
  </HeroContainer>
    
  </>;
}

export default HeroBanner;
