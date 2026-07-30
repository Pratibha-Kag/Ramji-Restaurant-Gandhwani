import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/menu");
    console.log("hgahj");
  };
  return (
    <div className="header">
      <div className="header-contents">
        <h4>Your Favorite Morning Snacks, Freshly Prepared</h4>
        <p>Ramji Restaurant </p>
        <button onClick={handleclick}>View Menu</button>
      </div>
    </div>
  );
};
export default Header;
