import React, { createContext, useState } from "react";

export const CartStore = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCard] = useState([]);

  const addToCart = (product) => {
    setCard((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product }];
    });
  };

  const removeCart = (productId) => {
    setCard((prev) => prev.filter((items) => items.id != productId));
  };

  const updateCart = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCard((preCart) =>
      preCart.map((items) =>
        items.id === productId ? { ...items, quantity: newQuantity } : items
      )
    );
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <CartStore.Provider
        value={{ cart, addToCart, removeCart, updateCart, totalPrice }}
      >
        {children}
      </CartStore.Provider>
    </>
  );
};

export default CartProvider;
