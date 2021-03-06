import React from "react";
import "./footer.css";

import Boxes from "../Footer-boxes/boxes";
import NewsLetter from "../NewsLetter/newsletter";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <div className="footer">
      <NewsLetter />
      <div className="big">
        <div className="logoName">
          <h4>JOOTEY!</h4>
          <p>COMFORTABLE AND DURABLE</p>
        </div>
        <Boxes
          title="Products"
          links={[
            "Best Seller",
            "WishList",
            "Featured Products",
            "Trending Products",
          ]}
        />
        <Boxes
          title="Our Company"
          links={[
            "Search",
            "Contact Us",
            "Delivery",
            "Terms & conditions of Use",
          ]}
        />
        <Boxes
          disable="true"
          title="Store Information"
          links={[
            "JOOTEY, Tyre Market, Rawalpindi",
            "+923355574741",
            "earthling986@gmail.com",
            ".",
          ]}
          icons={[<LocationOnIcon />, <PhoneIcon />, <EmailIcon />]}
        />
      </div>
      <div className="small">
        <p>Copyright &copy; Bojaz 2020</p>
        <p>
          Made with{" "}
          <span role="img" aria-labelledby="heart">
            ❤️
          </span>{" "}
          by Bojaz
        </p>
      </div>
    </div>
  );
};

export default Footer;