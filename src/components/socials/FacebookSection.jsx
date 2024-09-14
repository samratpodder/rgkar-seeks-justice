import React from 'react'
import FacebookPost from './FacebookPost'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
`;

function FacebookSection() {
  return (
    <Container>
        <FacebookPost url={"https://www.facebook.com/permalink.php?story_fbid=122112307196485908&amp;id=61564577258092"}></FacebookPost>
        <FacebookPost url={"https://www.facebook.com/permalink.php?story_fbid=122112264884485908&amp;id=61564577258092"}></FacebookPost>
        <FacebookPost url={"https://www.facebook.com/permalink.php?story_fbid=122112123374485908&amp;id=61564577258092"}></FacebookPost>
        
    </Container>
  )
}

export default FacebookSection