import "./Footer.scss";

export default function Footer() {
  const locations = [
    {
      name: "FMO Salon & Den",
      address: "place A",
      city: "atl",
      state: "Georgia",
      zip: "55555",
      phone: "555 - 555 - 5555",
      isNew: true,
    },
    {
      name: "FMO Salon",
      address: "place A",
      city: "atl",
      state: "Georgia",
      zip: "55555",
      phone: "555 - 555 - 5555",
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-locations">
        {locations.map((location, index) => {
          return (
            <div key={index} className="footer-location">
              <p>
                {location.isNew && <span>COMING SOON: </span>} {location.name}
              </p>
              <p>{location.address}</p>
              <p>
                {location.city}, {location.state} {location.zip}
              </p>
              <p>📞 {location.phone}</p>
            </div>
          );
        })}
      </div>
      <p>info@fmo.com</p>
    </div>
  );
}
