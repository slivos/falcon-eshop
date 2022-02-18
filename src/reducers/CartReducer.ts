import { CartState } from "../contexts/CartContext";

const CartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
        quantity: state.quantity - 1,
      };

    case "INCREASE_QUANTITY":
      let increase = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      return { ...state, products: increase };

    case "DECREASE_QUANTITY":
      let decrease = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      return { ...state, products: decrease };

    case "EMPTY_CART":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id === action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
