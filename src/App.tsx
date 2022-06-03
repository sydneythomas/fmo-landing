import { useState } from "react";
import "./App.scss";
import "./styles/_main.scss";
import Features from "./sections/Features/Features";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import ComingSoon from "./sections/ComingSoon/ComingSoon";
import Group from "./assets/group.png";
import Cheers from "./assets/cheers.png";

function App() {
  const Intro = () => (
    <div className="intro-container">
      {/* <div style={{ margin: "-3rem -1rem 0" }}>
        <img src={Cheers} />
      </div> */}
      <p className="lora subtitle">
        At FMO we pamper hardworking men with our fine grooming services.
      </p>
      <div
        className="subtext"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "2rem auto",
        }}
      >
        <span>Our goal is for all Gentlemen to</span>
        <span> WALK IN AS A MAN, WALK OUT AS A KING!</span>
      </div>
    </div>
  );

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
