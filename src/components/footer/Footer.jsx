import React from 'react'
import Declaration from './Declaration';
import Branding from './Branding';
import styled from 'styled-components';

const Wrapper = styled.div`
min-height: 30vh;
width: 100%;
background-color: inherit;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
align-content: center;
flex-wrap: wrap;
`;

function Footer() {
    return (
        <Wrapper>
            <Branding />
            <Declaration />
        </Wrapper>
    )
}

export default Footer