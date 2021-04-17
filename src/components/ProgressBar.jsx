import styled, {keyframes, css} from "styled-components";

const ProgressBar = () => {

const widthAnimate = keyframes`
0% {
    width: 0%;
}
100% {
    width: 100%;
}
`;

  const ContainerStyles = styled.div`
    height: 10px;
    width: 100%;
    background-color: #e0e0de;
  `;

  const FillerStyles = styled.div`
    height: 100%;
    width: 0%;
    background: rgb(5, 255, 0);
    border-radius: inherit;
    animation:  ${widthAnimate} 5000ms linear forwards;
  `;

  return (
    <ContainerStyles>
      <FillerStyles />
    </ContainerStyles>
  );
};

export default ProgressBar;
