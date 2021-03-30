import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import styled from "styled-components";

function App() {
  const Main = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main>
            <Route path="/project" component={Project} exact/>
            <Route path="/aboutme" component={About} />
            <Route path="/contact" component={Contact} />
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
