import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.headerImage})` }}
    >
      <div className="header-contents">
        {/* <h4>Your Favorite Morning Snacks, Freshly Prepared</h4>
        <p>Ramji Restaurant </p>
        <button onClick={handleclick}>View Menu</button> */}
      </div>
    </div>
  );
};
export default Header;
