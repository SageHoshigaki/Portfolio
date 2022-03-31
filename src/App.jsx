import React from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "../src/projects";

function App() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
