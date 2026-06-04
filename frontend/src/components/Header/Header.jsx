import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredient and culinary to satisfy you and
          your craving and elevate your dinning experience , one delicoius meal
          at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
