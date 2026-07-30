import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Ramji Restaurant mein har subah milta hai taaza Poha, kurkuri Kachori,
        garma-garam Samosa aur meethi Jalebi ka asli desi swaad. Pyaar se bana
        har vyajan, jo har bite ke saath ghar jaisi apnapan ki yaad dilaye. 🍽️🌿
        Khakhre ke pattal mein parosa gaya garma-garam Poha, kurkuri Kachori aur
        taazi hari chutney ka asli desi swaad. Ramji Restaurant mein har plate
        pyaar, parampara aur taazgi ke saath taiyaar hoti hai.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
