import React, { useRef } from "react";
import AboutMe from "../AboutMe/AboutMe";
import EdwardVE from "../EdwardVE/EdwardVE";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import NavigationBar from "../NavigationBar/NavigationBar";

const Home = () => {

  const edwardVERef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
    <div><NavigationBar
              homeRef={edwardVERef}
              aboutMeRef={aboutMeRef}
              portfolioRef={portfolioRef}
              educationRef={educationRef}
              skillsRef={skillsRef}
              contactRef={contactRef}/>
    </div>
      <div style={{ paddingTop: "80px" }}>
          {/* 64px es la altura de la barra de navegación, ajusta esto según sea necesario */}
          <div ref={edwardVERef}>
            <EdwardVE />
          </div>
          <div ref={aboutMeRef}>
            <AboutMe />
          </div>
          <div ref={portfolioRef}>
            <Portfolio />
          </div>
          {/* <div ref={educationRef}>
            <Education />
          </div> */}
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
    </>
  );
};

export default Home;
