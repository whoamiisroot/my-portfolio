import React from "react";
import { About, Timeline, Footer, Hero, Navbar, Project } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Timeline />
      <Footer />
    </>
  );
};

export default App;
