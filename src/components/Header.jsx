import { NavLink } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import Container from "./BaseComponents";
import {Squash as Hamburger} from "hamburger-react";
import { useState } from "react";
import Burger from "./BurgerMenu";


const Navbar = styled.div`
display: flex;
justify-content: center;
padding: 20px;

@media (max-width: 425px) {
  height: 6em;
}
`;

const WrapperLink = styled.div`
display: flex;
justify-content: center;

@media (max-width: 425px) {
  display: none;
}
`;

const WrapperMobileLink = styled.div`
padding-top: 20%;
display: flex;
justify-content: center;

@media (max-width: 425px) {
  flex-direction: column;
}
`;

const activeClassName = "nav-item-active";
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
  color: white;
}
font-size: 1.5em;

color: #525252;
text-decoration: none;
text-transform: uppercase;
padding: 2%;
font-size: 2em;
font-weight: 600;

transition: all 300ms ease-out;
`;

const StyledHamburger = styled.div`
position: absolute;
display: none;
@media (max-width: 425px) {
  display: block;
}
`;

////////////////

const blockAnimateShow = keyframes`
0% {
    
    transform:  translate(-0%,-100%)  ;
}
100% {
  
  transform:  translate(0px,0px)  ;
}
`;

const blockAnimateClose = keyframes`
0% {
transform:  translate(0%,0%)  ;
}
100% {
transform:  translate(0%,-100%)  ;
}
`;

const Block = styled.div`
display: none;

@media (max-width: 425px) {
  display: block;
}

position: absolute;
height: 100%;
width: 100%;

background-color: currentColor;

animation: ${(props) =>
  props.isOpen === true
    ? css`
        ${blockAnimateShow} 1s ease-in-out forwards
      `
    : css`
        ${blockAnimateClose} 1s ease-in-out forwards
      `};
`;


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [Mobiel, setMobiel] = useState(false);


  return (
    <>
      <Block isOpen={isOpen}>
        <WrapperMobileLink>
          <StyledNavLink to="/project" onClick={() => setOpen(false)}>
            Project
          </StyledNavLink>
          <StyledNavLink to="/aboutme" onClick={() => setOpen(false)}>
            CV
          </StyledNavLink>
          <StyledNavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </StyledNavLink>
        </WrapperMobileLink>
      </Block>
      <Navbar>

        <StyledHamburger>
          <Burger isOpen={isOpen} setOpen={setOpen}/>
        </StyledHamburger>

        <Container>
          <WrapperLink>
            <StyledNavLink to="/project">Project</StyledNavLink>
            <StyledNavLink to="/aboutme">CV</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </WrapperLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
