import React from 'react'
import { FacebookEmbed } from 'react-social-media-embed';
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
justify-content: center;

`;

function FacebookPost({ url }) {
    return (
        <div><Container>
            <FacebookEmbed url={url} captioned/>
        </Container></div>
    )
}

export default FacebookPost