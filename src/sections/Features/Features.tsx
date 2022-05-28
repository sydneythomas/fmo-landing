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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam",
      img: Barber,
    },
    {
      title: "Nail Grooming",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam",
      img: Nails,
    },
    {
      title: "Soothing Facials",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam",
      img: Skin,
    },
    {
      title: "The Den",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam",
      img: Lounge,
    },
    {
      title: "Fine Cigars",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam",
      img: Cigar,
    },
    {
      title: "Bespoke Cocktails",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam",
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
