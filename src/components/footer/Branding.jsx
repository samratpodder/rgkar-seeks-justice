import React from 'react'
import styled from 'styled-components';

const LogoLine = styled.span`
font-family: 'Bebas Neue';
font-size: 4rem;
`;
const Line = styled.span`
font-family: 'Bebas Neue';
font-size: 1.2rem;
margin-top: -1.5rem;
`;
const Container = styled.div`
display: flex;
flex-direction:column;
`;

function Branding() {
    return (
        <Container>

            <LogoLine>WE</LogoLine>
            <Line>The people of India</Line>
        </Container>
    )
}

export default Branding