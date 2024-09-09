import styled from "styled-components";

const ContentWrapper = styled.div`
font-family: "Bebas Neue", sans-serif;
font-size: 2rem;
font-weight: 500;
color: black;
`;

function SectionTitle({content}){
    return<>
    <ContentWrapper>{content}</ContentWrapper>
    </>
}


export default SectionTitle;