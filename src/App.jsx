import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
const App = () =>{
  return(
  
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
   

    </>
  );
}
export default App;