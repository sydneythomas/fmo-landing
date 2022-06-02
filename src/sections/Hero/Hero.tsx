import "./Hero.scss";
import ManAtBar from "../../assets/man_at_bar.jpeg";
import Logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <div className="hero-content">
      <img className="hero-logo" src={Logo} />
      <span className="lora title gold">A Fine Grooming Den for Men</span>
      <button
        className="outline blue"
        onClick={() => alert("go to sign up form")}
        style={{ margin: "2rem auto" }}
      >
        BECOME A MEMBER
      </button>
    </div>
  );
}
