import styled from "styled-components";
import InstagramPost from "./InstagramPost";
import SectionTitle from "../SectionTitle";
import { Wrapper } from "../TimelineComponent";
const PostContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
`;



function InstagramSection() {
    return <>
        <Wrapper>
            <SectionTitle content={"Posts from W.B.J.D.F. Instagram Page"} />
            <PostContainer>
                <InstagramPost url={"https://www.instagram.com/p/C_3yzXdTBzI/"}></InstagramPost>
                <InstagramPost url={"https://www.instagram.com/p/C_3gz0tS8Xy/"}></InstagramPost>
                <InstagramPost url={"https://www.instagram.com/p/C_13-GEyBe6/"}></InstagramPost>
            </PostContainer>
        </Wrapper>
    </>;
}

export default InstagramSection;