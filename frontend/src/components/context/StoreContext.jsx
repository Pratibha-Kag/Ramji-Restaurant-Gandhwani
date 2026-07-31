import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});

  const url = "http://localhost:4000";

  // const url = "https://ramji-restaurant-gandhwani.onrender.com";

  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } },
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } },
      );
    }
  };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = food_list.find((product) => product._id === item);
  //       totalAmount += itemInfo.price * cartItems[item];
  //     }
  //   }
  //   return totalAmount;
  // };
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);

        // 👇 YE LINE ADD KARO (crash stop)
        if (!itemInfo) continue;

        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    // console.log("Food List:", response.data.data);

    setFoodList(response.data.data);
  };

  // const loadCartData = async (token) => {
  //   const response = await axios.post(
  //     url + "/api/cart/get",
  //     {},
  //     { headers: { token } },
  //   );
  //   setCartitems(response.data.cartData);
  // };
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } },
    );

    // console.log("Cart Data:", response.data.cartData);

    setCartitems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const ContextValue = {
    food_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
