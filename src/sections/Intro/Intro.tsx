import "./Intro.scss";
import Group from "../../assets/group.png";
import Cheers from "../../assets/cheers.png";

export default function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-image">
        <img src={Group} />
      </div>
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
}
