import { connect } from "react-redux";
import styled from "styled-components";
import Container from "./BaseComponents";

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
  padding: 15px;
`;

const Card = styled.div`
  background-color: #37474f;

  display: flex;
  align-items: flex-start;

  flex-direction: column;
  justify-content: center;

  transition: all 500ms ease-out;

  :hover {
    outline: red 1px solid;
    cursor: default;
  }
`;

const CardImg = styled.div``;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: white;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Project = ({ ...props }) => {
  const cardProject = props.project.map((obj, index) => (
    <Card key={index}>
      <CardImg>
        <Img src={obj.src} alt="" />
      </CardImg>
      <CardContent>
        <Title>{obj.name}</Title>
        <LinkContainer>
          <a href={obj.link.deployed} target="_blank">
            Deploy
          </a>
          |
          <a href={obj.link.repository} target="_blank">
            Github
          </a>
        </LinkContainer>
      </CardContent>
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
