import React, { useReducer, useContext, createContext } from "react";
import CartReducer from "../reducers/CartReducer";
import { NtbType } from "../api/datatypes";

export interface CartState {
  products: NtbType[];
  quantity: number;
  addToCart: (product: NtbType) => void;
  removeFromCart: (product: NtbType) => void;
  increaseQnt: (product: NtbType) => void;
  decreaseQnt: (product: NtbType) => void;
  emptyCart: (products: NtbType[]) => void;
}

const initialState: CartState = {
  products: [],
  quantity: 1,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQnt: () => {},
  decreaseQnt: () => {},
  emptyCart: () => {},
};

const CartStateContext = createContext<CartState>(initialState);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product: NtbType) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product: NtbType) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  const increaseQnt = (product: NtbType) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: product,
    });
  };

  const decreaseQnt = (product: NtbType) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
  };

  const emptyCart = (products: NtbType[]) => {
    dispatch({
      type: "EMPTY_CART",
      payload: products,
    });
  };

  return (
    <CartStateContext.Provider
      value={{
        products: state.products,
        quantity: state.quantity,
        addToCart,
        removeFromCart,
        increaseQnt,
        decreaseQnt,
        emptyCart,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
