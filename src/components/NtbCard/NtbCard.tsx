import React from "react";
import {
  Card,
  Image,
  InfoWrapper,
  AddCart,
  H3Card,
  Border,
} from "../NtbCard/NtbCard.styled";
import { NtbType } from "../../api/datatypes";
import { useCart } from "../../contexts/CartContext";

const NtbCard = (props: { notebook: NtbType }) => {
  const { addToCart } = useCart();
  const decimal = props.notebook.price.toFixed(2);

  return (
    <Card key={props.notebook.id}>
      <Image src={props.notebook.src} />
      <H3Card>{props.notebook.name}</H3Card>
      <InfoWrapper>
        <Border />
        <AddCart onClick={() => addToCart(props.notebook)} />
        <p>
          {decimal} {props.notebook.currency}
        </p>
      </InfoWrapper>
    </Card>
  );
};

export default NtbCard;
