import React from "react";
import { useCart } from "../../contexts/CartContext";
import {
  CartContainer,
  CartWrapper,
  CartWrapperEmpty,
  H1,
  TextEmpty,
  TextPrice,
  TextWrapper,
  EmptyBtn,
} from "./Cart.styled";
import CartItem from "./CartItem";
import { LinkTo } from "../LinkTo/LinkTo.styled";

const Cart = () => {
  const { products, emptyCart } = useCart();
  const totalPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  if (products.length === 0)
    return (
      <CartContainer>
        <CartWrapperEmpty>
          <TextEmpty>
            Váš košík je prázdny:{" "}
            <LinkTo to="/option">
              <span>PRODUKTY</span>
            </LinkTo>
          </TextEmpty>
        </CartWrapperEmpty>
      </CartContainer>
    );

  return (
    <>
      <H1>Váš košík:</H1>
      <CartContainer>
        <CartWrapper>
          {products.map((product) => (
            <CartItem key={product.id} notebook={product} />
          ))}
          <TextWrapper>
            <EmptyBtn onClick={() => emptyCart(products)}>
              VYPRÁZDNIŤ KOŠÍK
            </EmptyBtn>
            <TextPrice>
              <strong>Cena spolu:</strong> {totalPrice.toFixed(2)} {"EUR"}
            </TextPrice>
          </TextWrapper>
        </CartWrapper>
      </CartContainer>
    </>
  );
};

export default Cart;
