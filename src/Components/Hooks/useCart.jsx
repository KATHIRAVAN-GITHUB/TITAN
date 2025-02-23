import React, { useContext } from "react";
import { CartStore } from "../Store/cartStore";

const useCart = () => {
  return useContext(CartStore);
};

export default useCart;
