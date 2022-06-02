import "./About.scss";
import Barber from "../../assets/close-up-of-barber-cutting-hair-with-clippers.jpeg";
import Nails from "../../assets/nails.jpeg";
import Skin from "../../assets/face-roller.jpeg";
import Lounge from "../../assets/lounge.jpeg";
import Cigar from "../../assets/cutting cigar.jpeg";
import Drink from "../../assets/cocktail.jpeg";
import Towel from "../../assets/hottowel.jpeg";
import Lounge2 from "../../assets/cigar lounge.jpeg";
import Feet from "../../assets/feet.jpeg";
import ManAtBar from "../../assets/man_at_bar.jpeg";

export default function About() {
  const photos = [Barber, Feet, Towel, ManAtBar];

  const about = [
    //   ⁃	We service men only!
    // ⁃	We educate men on self-care,
    //          health and wellness
    // ⁃	Judgement free place for first
    //          timers and returning clients
    // ⁃	We have FIVE STAR reviews of
    //          more than 500 over google,
    //          yelp and other social media
    //          platforms
    // ⁃	We are one of a kind, and a
    //          one stop shop for mens fine
    //          grooming and lounge
    // {
    //   title: "Soothing Facials",
    //   text: "Pamper your skin with a luxurious hot towel facial. Lay back, relax, & allow the steam to rejuvenate your pores.",
    //   img: Towel,
    // },
    // {
    //   title: "The Den",
    //   text: "Coming soon to our north Atlanta location, The Den is a perfect place to network or wind down while enjoying one of our topshelf cocktails, cigars, & live music.",
    //   img: Lounge2,
    // },
    // {
    //   title: "Fine Cigars",
    //   text: "Browse our selection of cigars or enjoy one of your own in our private lounge.",
    //   img: Cigar,
    // },
    // {
    //   title: "Bespoke Cocktails",
    //   text: "Every gentleman will receive a complimentary beverage with each grooming service. We offer a selection of premium, expertly-crafted cocktails.",
    //   img: Drink,
    // },
  ];

  return (
    <div className="about-container">
      <div className="photo-grid">
        <div className="div0">
          <p className="lora title gold">OUR SERVICES</p>
        </div>

        {photos.map((photo, index) => {
          return (
            <div className={`div${index + 1}`}>
              <img src={photo} />
            </div>
          );
        })}
      </div>

      {/* <div className="about-grid">
        {about.map((about, index) => {
          const firstPart = about.title.split(" ").slice(0, -1).join() + " ";
          const lastWord = about.title.split(" ").pop();
          return (
            <div className="about-card" key={index}>
              <p className="lora header">
                <span className="lora header">{firstPart}</span>
                <span className="lora header accent">{lastWord}</span>
              </p>
              <p>{about.text}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
