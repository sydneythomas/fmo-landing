import "./Footer.scss";

export default function Footer() {
  const locations = [{ place: "place A" }, { place: "place B" }];

  return (
    <div className="footer-container">
      {locations.map((location, index) => {
        return (
          <div key={index} className="footer-location">
            <p>{location.place}</p>
          </div>
        );
      })}
    </div>
  );
}
