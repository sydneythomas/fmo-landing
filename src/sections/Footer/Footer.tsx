import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import {
  faFacebook,
  faLinkedin,
  faGoogle,
  faYelp,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Footer() {
  const facebookIcon = faFacebook as IconProp;
  const linkedInIcon = faLinkedin as IconProp;
  const googleIcon = faGoogle as IconProp;
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
      phone: "555 - 555 - 5555",
    },
    {
      name: "FMO & The Den",
      isNew: true,
    },
  ];

  const socials = {
    facebook: "",
    linkedIn: "",
    google: "",
    tiktok: "",
    yelp: "",
    instagram: "https://www.instagram.com/fmofinegrooming/",
    email: "Sales@fmogrooming.com",
  };

  return (
    <div className="footer-container">
      <div className="footer-locations">
        {locations.map((location, index) => {
          return (
            <div key={index} className="footer-location">
              <span>
                {location.isNew && <span>COMING FALL '22: </span>}{" "}
                {location.name}
              </span>
              <span>{location.address}</span>
              {location.city && (
                <span>
                  {location.city}, {location.state} {location.zip}
                </span>
              )}
              {location.phone && (
                <span>
                  <FontAwesomeIcon
                    icon={phoneIcon}
                    style={{ marginRight: "0.5rem" }}
                  />
                  {location.phone}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="footer-socials">
        {socials.email && (
          <a href={socials.email}>
            <FontAwesomeIcon className="footer-social" icon={emailIcon} />
          </a>
        )}
        {socials.facebook && (
          <FontAwesomeIcon className="footer-social" icon={facebookIcon} />
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank">
            <FontAwesomeIcon className="footer-social" icon={instagramIcon} />
          </a>
        )}
        {socials.tiktok && (
          <FontAwesomeIcon className="footer-social" icon={tiktokIcon} />
        )}
        {socials.linkedIn && (
          <FontAwesomeIcon className="footer-social" icon={linkedInIcon} />
        )}
        {socials.yelp && (
          <FontAwesomeIcon className="footer-social" icon={yelpIcon} />
        )}
        {socials.google && (
          <FontAwesomeIcon className="footer-social" icon={googleIcon} />
        )}
      </div>
    </div>
  );
}
