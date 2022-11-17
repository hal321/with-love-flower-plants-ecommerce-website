import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

export function AppProvider(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  //const [count,setCount]=(0)
  let [cartItems, setCartItems] = useState([]);
  let count = cartItems.length;
  // setCount(cartItems.length)

  const isLogged = (checkTrue) => {
    console.log(checkTrue, "is logged in");

    setIsAdmin(checkTrue);
  };

  const isCheckedOut = () => {
    setIsAdmin(false);
  };

  const AddtoCart = (plant) => {
    const exist = cartItems.find((x) => x._id === plant._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === plant._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...plant, qty: 1 }]);
    }
  };

  const onRemove = (plant) => {
    const exist = cartItems.find((x) => x._id === plant._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== plant._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === plant._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  let values = {
    isAdmin,
    isLogged,
    isCheckedOut,
    cartItems,
    AddtoCart,
    onRemove,
    count,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
}
