import React from "react";
import { NtbType } from "../../api/datatypes";
import { useCart } from "../../contexts/CartContext";
import {
  RemoveItem,
  Card,
  H3,
  TextWrapper,
  QuantityWrapper,
} from "./CartItem.styled";
import { toast } from "react-toastify";

const CartItem = (props: { notebook: NtbType }) => {
  const { removeFromCart, increaseQnt, decreaseQnt } = useCart();
  const price = props.notebook.price.toFixed(2);

  const handleDecrease = () => {
    if (props.notebook.quantity >= 1) {
      decreaseQnt(props.notebook);
    }
    return 0;
  };

  const handleRemove = () => {
    removeFromCart(props.notebook);
    toast.success("Produkt bol odstránený z košíka.");
  };

  return (
    <Card key={props.notebook.id}>
      <TextWrapper>
        <H3>{props.notebook.name}</H3>
        <p>
          {price} {props.notebook.currency}
        </p>
      </TextWrapper>
      <QuantityWrapper>
        <button onClick={() => increaseQnt(props.notebook)}>+</button>
        <span>{props.notebook.quantity}</span>
        <button onClick={() => handleDecrease()}>-</button>
      </QuantityWrapper>
      <RemoveItem onClick={() => handleRemove()} />
    </Card>
  );
};

export default CartItem;
