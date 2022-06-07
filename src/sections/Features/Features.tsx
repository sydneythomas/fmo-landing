import "./Features.scss";
import BarberBlack from "../../assets/close-up-of-barber-cutting-hair-with-clippers.jpeg";
import BarberWhite from "../../assets/barber white.jpg";
import BarberStraight from "../../assets/barber straight.jpg";
import BarberStraight2 from "../../assets/barber straight2.jpg";
import Nails from "../../assets/nails.jpeg";
import Skin from "../../assets/face-roller.jpeg";
import Lounge from "../../assets/lounge.jpeg";
import Cigar from "../../assets/cutting cigar.jpeg";
import Drink from "../../assets/cocktail.jpeg";
import Towel from "../../assets/hottowel.jpeg";
import Lounge2 from "../../assets/cigar lounge.jpeg";
import Feet from "../../assets/feet.jpeg";
import ManAtBar from "../../assets/man_at_bar.jpeg";
import ManAtBarZoom from "../../assets/man_at_bar_zoom.jpeg";

export default function Features() {
  const photos = [BarberStraight, Feet, Towel, ManAtBarZoom];

  const features = [
    {
      title: "Barber & Facials",
      text: "Allow our professionally licensed barbers to trim & sculpt your mane to perfection. We offer razor shaves, scissor cuts, hot towels, facials, & a variety of other techniques for all hair types.",
    },
    {
      title: "Nail Grooming",
      text: "King, because you're on your feet all day, let us help you relax & unwind with our classic & signature manicure & pedicure treatments. ",
    },
    {
      title: "The Bar",
      text: "Every gentleman will receive a complimentary beverage with each service.",
    },
  ];

  return (
    <div className="feature-container">
      <div className="photo-grid">
        <div className="div0">
          <p className="lora title gold">OUR SERVICES</p>
        </div>

        {photos.map((photo, index) => {
          return (
            <div className={`div${index + 1}`} key={index}>
              <img src={photo} />
            </div>
          );
        })}
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => {
          const firstPart =
            feature.title.split(" ").slice(0, -1).join(" ") + " ";
          const lastWord = feature.title.split(" ").pop();
          return (
            <div className="feature-card" key={index}>
              <p className="lora header">
                <span className="lora header">{firstPart}</span>
                <span className="lora header accent">{lastWord}</span>
              </p>
              <p>{feature.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
