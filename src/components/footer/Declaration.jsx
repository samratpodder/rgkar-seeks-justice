import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled.footer`
  background-color: inherit;
  padding: 10px;
  text-align: center;
  /* border-top: 1px solid #ddd; */
`;

const Heart = styled.span`
  font-size: 1.2em;
`;

const GitHubLink = styled.a`
  color: #c9e3ff;
  text-decoration: none;
  &:hover{
    text-decoration: none;
    color: #96bfeb;
  }
`;

function Declaration() {
  return (
    <FooterContainer>
      <p>
        Made with <Heart>❤️</Heart> to support the movement of the protesting doctors against the rape and murder of Tillotama.
      </p>
      <p>
        Built by <GitHubLink href="https://github.com/samratpodder" target="_blank" rel="noopener noreferrer"><GitHubIcon/> samratpodder</GitHubLink>
      </p>
    </FooterContainer>
  )
}

export default Declaration