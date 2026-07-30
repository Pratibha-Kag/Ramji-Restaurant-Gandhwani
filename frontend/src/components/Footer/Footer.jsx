import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="" />
          <p>
            At Ramji Restaurant, we serve fresh and delicious breakfast, snacks,
            sweets, and beverages made with authentic flavors and quality
            ingredients. From crispy kachoris and hot samosas to flavorful poha
            and sweet jalebis, we bring traditional taste to every meal.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-782-841-5612</li>
            <li>pratibhakag.s29@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2026 Ramji Restaurant. All Rights Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
