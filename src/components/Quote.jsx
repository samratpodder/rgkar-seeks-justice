import styled from "styled-components";

const BengaliContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 0;
  text-align: justify;
  font-family: "Noto Serif Bengali", serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 2.5rem;
`;

const EnglishContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 0;
  text-align: justify;
`;
// const contentWrapper = styled.span``;
const SubSource = styled.div`
  font-family: "Monsterrat", sans-serif;
  font-size: 1rem;
  text-align: right;
`;

function Quote({ content, source, bengali }) {
  return (
    <>
      {bengali ? (
        <BengaliContainer>
          {content}
          <br />
          <SubSource>&mdash; {source}</SubSource>
        </BengaliContainer>
      ) : (
        <EnglishContainer>
          {content}
          <br />
          <SubSource>&mdash; {source}</SubSource>
        </EnglishContainer>
      )}
    </>
  );
}

export default Quote;
