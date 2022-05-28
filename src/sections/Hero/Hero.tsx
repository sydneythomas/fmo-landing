import "./Hero.scss";
import ManAtBar from "../../assets/man_at_bar.jpeg";

export default function Hero() {
  return (
    <div className="hero-grid">
      <img className="hero-image" src={ManAtBar} />
      <div className="hero-content">
        <h1>Fine Grooming Den for Men</h1>
        <h3>Because you deserve to look, feel, & be treated like a king</h3>
        <button
          className="outline blue"
          onClick={() => alert("go to sign up form")}
        >
          Sign up for more info
        </button>
      </div>
    </div>
  );
}
