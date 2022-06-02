import "./ComingSoon.scss";
import Lounge2 from "../../assets/cigar lounge.jpeg";

export default function ComingSoon() {
  return (
    <div className="coming-container">
      <div className="coming-text-container">
        <p className="lora subtext">COMING SOON</p>
        <img className="mobile-lounge" src={Lounge2} />
        <p className="rye title">THE DEN</p>
        <p className="subtitlle">
          This Fall we will open the doors to our members-only cigar lounge and
          bar.
        </p>
        {/* <button
          className="header solid"
          onClick={() => alert("go to sign up form")}
          style={{ margin: "1rem auto" }}
        >
          sign up here
        </button> */}
      </div>
      <div className="coming-image-container">
        <img src={Lounge2} />
      </div>
    </div>
  );
}
