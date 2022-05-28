import "./Hero.scss";
import ManAtBar from "../../assets/man_at_bar.jpeg";
import Logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <div className="hero-grid">
      <img className="hero-logo" src={Logo} />
      <img className="hero-image" src={ManAtBar} />
      <div className="hero-content">
        <p className="lora title gold">Fine Grooming Den for Men</p>
        <p className="lora subtext white">
          Because you deserve to look, feel, & be treated like a king
        </p>
        <button
          className="outline blue"
          onClick={() => alert("go to sign up form")}
          style={{ margin: "2rem auto" }}
        >
          BECOME A MEMBER
        </button>
      </div>
    </div>
  );
}
