import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContent from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  /* height: 100%; */

  display: flex;
  justify-content: center;
  /* overflow: scroll; */
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.0);
	border-radius: 10px;
	/* background-color: grey; */
  opacity: 0.6;

}

  ::-webkit-scrollbar {
	width: 5px;
}

  ::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #525252;
  opacity: 0.5;
}
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <HeaderContent />
        </Header>
        <Main>
          <Route path="/project" component={Project} exact />
          <Route path="/aboutme" component={About} />
          <Route path="/contact" component={Contact} />
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
