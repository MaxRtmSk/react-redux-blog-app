import { connect } from "react-redux";
import styled from "styled-components";
import Container from "./BaseComponents";

import bac from "../img/cartographer.png";

// import img from "../img/project/MemoryGame.png"

const CardsContainer = styled.div`

  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-rows: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  /* gap: 15px 15px; */
  /* grid-template-areas:
  ". . ."
  ". . ."; */

  /* height: 100%; */
  padding: 15px 15px 50px 15px;

  /* @media (max-width: 425px) {
    padding: 15px 15px 100px 15px;
  } */

`;

const Card = styled.div`
  /* background-color: #292929; */
  background-color: rgb(31, 33, 35);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);

  /* background-image: url(${bac}); */

  border-radius: 3px;

  display: flex;
  align-items: flex-start;
  align-items: flex-end;
  align-items: stretch;
  flex-direction: column;
  /* justify-content: center; */

  transition: all 500ms ease-out;

  /* justify-content: space-between; */

  :hover {
    cursor: default;
  }
`;

const CardImg = styled.div`
  height: 100%;
  min-height: 180px;
  max-height: 130px;
  width: 100%;

  background: ${props => `url(${props.background}) no-repeat top center`};
  background-size: cover;
`;
  /* background: url(${img}) no-repeat center center fixed; */
  /* background: {props => url(${img}) no-repeat 100% 100%}; */
/* background-image: ${props => url(${props.img})} */
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Title = styled.h2`
  color: white;
  padding: 0.3em;
  font-weight: 400;
  margin: 0px;
  margin: 0 auto;
`;

const LinkContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-shrink: 0;
  justify-content: left;
  color: white;
  a:nth-child(1) {
    margin-right: 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const LabelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Label = styled.span`
  /* font: 400 5vmax/5.5vmax sans-serif; */
  font: 400 sans-serif;
  border-radius: 2em;
  /* padding: 0.025em 0.75em; */
  margin: 2px 2px;
  /* background: #1e90ff; */
  color: #f1f1f1d4;
  color: 45deg, rgba(5, 118, 255, 1) 0%, rgba(36, 248, 255, 1) 100%;

  background: -webkit-linear-gradient(#04315f, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    color: #f1f1f1d4;
  }
`;

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
`;

const TextCard = styled.div`
  display: flex;
  justify-content: start;
  padding: 15px 0px;
  color: #f1f1f1d4;
  text-align: left;
`;

const Project = ({ ...props }) => {
  const cardProject = props.project.map((obj, index) => (
    <Card key={index}>
      <Title>{obj.name}</Title>

      <CardImg background={obj.src}>
        {/* <Img src={obj.src} alt="" /> */}
      </CardImg>

      <CardContent>
        {/* <LabelsContainer>
          {obj.tags.map((text, index) => {
            return (
              <Label key={index}>
                <span>#</span>
                {text}
              </Label>
            );
          })}
        </LabelsContainer> */}
        <TextCard>{obj.description}</TextCard>
      </CardContent>
      <LinkContainer>
        <ButtonLink href={obj.link.deployed} target="_blank">
          Deploy
        </ButtonLink>
        <ButtonLink href={obj.link.repository} target="_blank">
          Github
        </ButtonLink>
      </LinkContainer>
    </Card>
  ));

  return (
    <Container>
      <CardsContainer>{cardProject}</CardsContainer>
    </Container>
  );
};

let mapStateToProps = (state) => {
  return {
    project: state.app.project,
  };
};

export default connect(mapStateToProps, {})(Project);
