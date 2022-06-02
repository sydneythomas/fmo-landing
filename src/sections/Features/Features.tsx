import "./Features.scss";
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

export default function Features() {
  const photos = [Barber, Feet, Towel, ManAtBar];

  const features = [
    {
      title: "Barber & Facials",
      text: "Allow our professionally trained barbers to trim & sculpt your mane to perfection. We offer razor shaves, shaping, and a variety of other techniques for all hair types.",
      img: Barber,
    },
    {
      title: "Nail Grooming",
      text: "You're on your feet all day, King. Let us help you relax & unwind with our premium manicure & pedicure treatments. ",
      img: Feet,
    },
    {
      title: "The Bar",
      text: "Every gentleman will receive a complimentary beverage with each grooming service. We offer a selection of premium, expertly-crafted cocktails.",
      img: ManAtBar,
    },
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
    <div className="feature-container">
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

      <div className="feature-grid">
        {features.map((feature, index) => {
          const firstPart = feature.title.split(" ").slice(0, -1).join() + " ";
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
