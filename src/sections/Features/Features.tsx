import "./Features.scss";
import Barber from "../../assets/close-up-of-barber-cutting-hair-with-clippers.jpeg";
import Nails from "../../assets/nails.jpeg";
import Skin from "../../assets/face-roller.jpeg";
import Lounge from "../../assets/lounge.jpeg";
import Cigar from "../../assets/cutting cigar.jpeg";
import Drink from "../../assets/cocktail.jpeg";

export default function Features() {
  const features = [
    {
      title: "Trained Barbers",
      text: "Allow our professionally trained barbers to trim & sculpt your mane to perfection. We offer razor shaves, shaping, and a variety of other techniques for all hair types.",
      img: Barber,
    },
    {
      title: "Nail Grooming",
      text: "You're on your feet all day, King. Let us help you relax & unwind with our premium manicure & pedicure treatments. ",
      img: Nails,
    },
    {
      title: "Soothing Facials",
      text: "Pamper your skin with a luxorius hot towel facial. Lay back, relax, & allow the steam to rejuvenate your pores.",
      img: Skin,
    },
    {
      title: "The Den",
      text: "Coming soon to our north Atlanta location, The Den is a perfect place to network or wind down while enjoying one of our topshelf cocktails, cigars, & live music.",
      img: Lounge,
    },
    {
      title: "Fine Cigars",
      text: "Browse our selection of cigars or enjoy one of your own in our private lounge.",
      img: Cigar,
    },
    {
      title: "Bespoke Cocktails",
      text: "Every gentleman will receive a complimentary beverage with each grooming service. We offer a selection of premium, expertly-crafted cocktails.",
      img: Drink,
    },
  ];

  return (
    <div className="feature-grid">
      {features.map((feature, index) => {
        const firstPart = feature.title.split(" ").slice(0, -1).join() + " ";
        const lastWord = feature.title.split(" ").pop();
        return (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <p className="lora header">
              <span className="lora header">{firstPart}</span>
              <span className="lora header accent">{lastWord}</span>
            </p>
            <p>{feature.text}</p>
          </div>
        );
      })}
    </div>
  );
}
