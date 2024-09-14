import { InstagramEmbed } from 'react-social-media-embed';
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
justify-content: center;

`;

function InstagramPost({url}) {
    return <div>
        <Container>
            <InstagramEmbed url={url} />
        </Container>
    </div>;
}

export default InstagramPost;