import "./ComingSoon.scss";
import Lounge2 from "../../assets/cigar lounge.jpeg";

export default function ComingSoon() {
  return (
    <div className="coming-container">
      <div className="coming-text-container">
        <span className="rye title">THE DEN</span>
        <img className="mobile-lounge" src={Lounge2} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <span className="lora subtext">COMING SOON</span>
          <span className="lora" style={{ fontSize: "20px" }}>
            TBA Fall 2022
          </span>
        </div>

        <span className="subtitlle">
          In this space, enjoy our top shelf cocktails, cigars, and live music.
          This is the perfect place to network and wind down.
        </span>
      </div>
      <div className="coming-image-container">
        <img src={Lounge2} />
      </div>
    </div>
  );
}
