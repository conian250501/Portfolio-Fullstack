// import "./App.css";
import GlobalStyle from "./GlobalStyles";
import About from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
// import { Project } from './components/Project/Project'
import ProjectPage from "./pages/Routes/Routes";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footers } from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import MouseCustom from "./components/MouseCustom/MouseCustom";
import React from "react";

function App() {
  return (
    <>
      {/* Style Global */}
      <GlobalStyle />
      {/* <Loading /> */}

      {/* Custom mouse */}
      <MouseCustom />

      {/* Components */}
      <Navbar />
      <About id="About" />
      <ProjectPage id="Project" />
      <Skills id="Skills" />
      <Contact id="Contact" />
      <Footers />
    </>
  );
}

export default App;
