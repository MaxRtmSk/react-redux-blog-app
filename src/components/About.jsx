import React, { useState } from "react";
import SinglePage from "./single-page";
import samplePDF from "../resume.pdf";
import styled from 'styled-components';

const ButtonLink = styled.a`
  display: inline-block;
  border-radius: 3px;
  text-decoration: none;
  padding: 0.5em;
  /* margin: 0.5em; */
  font-size: 1.4em;
  font-weight: bold;
  transition: all 0.5s;
  border: 1px solid #1e90ff;

  :before {
    content: "";
    display: block;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 5px;
    transition: all 0.5s;
  }

  background: rgba(5, 118, 255, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(5, 118, 255, 1) 0%,
    rgba(36, 248, 255, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(5, 118, 255, 1)),
    color-stop(100%, rgba(36, 248, 255, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(5, 118, 255, 1) 0%,
    rgba(36, 248, 255, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(5, 118, 255, 1) 0%,
    rgba(36, 248, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(5, 118, 255, 1) 0%,
    rgba(36, 248, 255, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(5, 118, 255, 1) 0%,
    rgba(36, 248, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0576ff', endColorstr='#24f8ff', GradientType=1 );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 2px;
    top: 2px;
    bottom: 2px;
    right: 2px;
    z-index: -1;
    border-radius: 5px;
    transition: all 0.5s;
  }

  margin-top: 100px;
`;


const About = () => {
  return (
    <div>
      <ButtonLink href={samplePDF} target="_blank">
        PDF fiel
        </ButtonLink>
      {/* <SinglePage pdf={samplePDF}/> */}
    </div>
  );
};

export default About;
