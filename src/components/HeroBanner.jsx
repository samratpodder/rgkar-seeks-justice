import { useState } from "react";
import bannerBg from "../assets/bannerBg.jpeg";
import { Container, Paper } from "@mui/material";
import styled from "styled-components";
import TimelineComponent from "./TimelineComponent";
import Quote from "./Quote";

const HeroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const BannerContainer = styled.div`
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
  /* font-size: 6rem;
  font-weight: 400; */
  font-style: normal;
  align-self: flex-end;
`;

const LargerText = styled.span`
  font-size: 6rem;
  font-weight: 400;
`;

function HeroBanner() {
  return (
    <>
      <HeroContainer>
        <BannerContainer>
          <BannerTextContainer>
            <Quote
              bengali={true}
              content={"ডাক্তার, তুমি এগিয়ে যাও, আমরা তোমার সাথে আছি।"}
              source={"We, The People of India"}
            />{" "}
            <LargerText> WE STAND WITH RG KAR</LargerText>
          </BannerTextContainer>
          <ImageContainer src={bannerBg} alt="" />
        </BannerContainer>
        {/* <Quote content={"ডাক্তার, তুমি এগিয়ে যাও, আমরা তোমার সাথে আছি।"} source={"We, The People of India"}/> */}
      </HeroContainer>
    </>
  );
}

export default HeroBanner;
