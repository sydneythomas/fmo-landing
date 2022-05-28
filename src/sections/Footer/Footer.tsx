import "./Footer.scss";

export default function Footer() {
  const locations = [
    {
      name: "FMO Sandy Springs",
      address: "5801 Roswell Rd, Ste A",
      city: "Sandy Springs",
      state: "GA",
      zip: "30328",
      phone: "555 - 555 - 5555",
    },
    {
      name: "FMO & The Den",
      isNew: true,
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-locations">
        {locations.map((location, index) => {
          return (
            <div key={index} className="footer-location">
              <p>
                {location.isNew && <span>COMING FALL '22: </span>}{" "}
                {location.name}
              </p>
              <p>{location.address}</p>
              {location.city && (
                <p>
                  {location.city}, {location.state} {location.zip}
                </p>
              )}
              {location.phone && <p>📞 {location.phone}</p>}
            </div>
          );
        })}
      </div>
      <a href="mailto:Sales@fmogrooming.com">Email us!</a>
    </div>
  );
}
