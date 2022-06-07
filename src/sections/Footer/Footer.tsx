import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import {
  faFacebook,
  faLinkedin,
  faYelp,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Footer() {
  const facebookIcon = faFacebook as IconProp;
  const linkedInIcon = faLinkedin as IconProp;
  const googleIcon = faMapLocationDot as IconProp;
  const tiktokIcon = faTiktok as IconProp;
  const yelpIcon = faYelp as IconProp;
  const instagramIcon = faInstagram as IconProp;
  const emailIcon = faEnvelope as IconProp;
  const phoneIcon = faPhone as IconProp;

  const locations = [
    {
      name: "FMO Sandy Springs",
      address: "5801 Roswell Rd, Ste A",
      city: "Sandy Springs",
      state: "GA",
      zip: "30328",
    },
    {
      name: "FMO & THE DEN",
      isNew: true,
    },
  ];

  const socials = {
    facebook: "https://www.facebook.com/fmofinegrooming/",
    linkedIn: "",
    google: "https://g.page/fmofinegrooming?share",
    tiktok: "",
    yelp: "https://www.yelp.com/biz/fmo-a-fine-grooming-den-for-men-sandy-springs-3",
    instagram: "https://www.instagram.com/fmofinegrooming/",
    email: "Sales@fmogrooming.com",
  };

  return (
    <div className="footer-container">
      <div className="footer-locations">
        <div className="contact-container">
          <span
            style={{
              margin: "1rem auto .5rem",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            Contact Us
          </span>
          <span>
            <FontAwesomeIcon
              icon={phoneIcon}
              style={{ marginRight: "0.5rem" }}
            />
            {"555 - 555 - 5555"}
          </span>

          <a
            href="mailto:sales@fmogrooming.com"
            style={{ margin: ".5rem auto" }}
          >
            <span>
              <FontAwesomeIcon
                icon={emailIcon}
                style={{ marginRight: "0.5rem" }}
              />
              {"sales@fmogrooming.com"}
            </span>
          </a>
        </div>

        <span
          style={{
            margin: "1rem auto 0",
            fontWeight: "500",
            fontSize: "25px",
          }}
        >
          Locations
        </span>
        {locations.map((location, index) => {
          return (
            <div key={index} className="footer-location">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {location.isNew && <span>COMING FALL 2022: </span>}
                <span>{location.name}</span>
                {location.isNew && <span>TBA</span>}

                <span>{location.address}</span>
                {location.city && (
                  <span>
                    {location.city}, {location.state} {location.zip}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer-socials">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={facebookIcon} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={instagramIcon} />
          </a>
        )}
        {socials.tiktok && (
          <a href={socials.tiktok} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={tiktokIcon} />
          </a>
        )}
        {socials.linkedIn && (
          <a href={socials.linkedIn} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={linkedInIcon} />
          </a>
        )}
        {socials.yelp && (
          <a href={socials.yelp} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={yelpIcon} />
          </a>
        )}
        {socials.google && (
          <a href={socials.google} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={googleIcon} />
          </a>
        )}
      </div>
    </div>
  );
}
