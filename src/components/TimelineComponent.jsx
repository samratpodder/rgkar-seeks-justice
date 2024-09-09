import { useState } from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineCustomContent from "./TimelineCustomContent";
const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: whitesmoke;
`;

function TimelineComponent() {
  const timelineObj = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Code",
    },
    {
      id: 3,
      title: "Sleep",
    },
  ];
  return (
    <>
      <Wrapper>
        <SectionTitle content={"Timeline of Events"} />
        <Timeline
          position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {timelineObj.map((item) => {
            return (
              <>
                <TimelineItem key={item.id}>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      fontFamily: "Monsterrat , sans-serif",
                      color: "grey",
                    }}
                  >
                    <TimelineCustomContent title={item.title}/>
                  </TimelineContent>
                </TimelineItem>
              </>
            );
          })}
        </Timeline>
        {/* <span style={{color:"black"}}>{"Justice yet to be served"}</span> */}
      </Wrapper>
    </>
  );
}

export default TimelineComponent;
