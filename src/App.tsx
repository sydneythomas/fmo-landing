import { useState } from "react";
import "./App.scss";
import "./styles/_main.scss";
import Features from "./sections/Features/Features";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import ComingSoon from "./sections/ComingSoon/ComingSoon";
import Intro from "./sections/Intro/Intro";

function App() {
  const Cta = () => (
    <div className="cta-container" style={{ margin: "5rem auto" }}>
      <p className="lora subtitle">Interested in becoming a member?</p>
      <button
        // className="header outline white"
        className="header solid"
        onClick={() => alert("go to sign up form")}
      >
        sign up here
      </button>
    </div>
  );

  return (
    <div className="App">
      <Hero />
      <div className="content-container">
        <Intro />
        <Features />
        <ComingSoon />
        <Cta />
      </div>
      <Footer />
    </div>
  );
}

export default App;
