import { useState } from "react";
import "./App.scss";
import "./styles/_main.scss";
import Features from "./sections/Features/Features";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";

function App() {
  const Intro = () => (
    <div className="intro-container">
      <p className="lora subtitle">
        We see that you work hard, King <br /> & you deserve to be rewarded.
      </p>
      <p style={{ fontSize: "20px" }}>
        At FMO, our goal is to address all your self-care needs in a space
        designed by you and for you. <br />
        <br />
        At FMO we pamper hardworking men with our fine grooming services… Our
        goal is for all Men to WALK IN AS A MAN, WALK OUT AS A KING!!
      </p>
      <p style={{ fontStyle: "italic" }}>
        *Membership model & louge location lauching Fall ‘22
      </p>
    </div>
  );

  const Cta = () => (
    <div className="cta-container" style={{ margin: "5rem auto" }}>
      <p className="lora title">Interested in becoming a member?</p>
      <button
        className="header outline white"
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
        <Cta />
      </div>
      <Footer />
    </div>
  );
}

export default App;
