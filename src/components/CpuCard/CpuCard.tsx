import React from "react";
import {
  Card,
  Image,
  InfoWrapper,
  AddCart,
  H3Card,
  Border,
} from "../CpuCard/CpuCard.styled";
import { NtbType } from "../../api/datatypes";
import { useCart } from "../../contexts/CartContext";

const CpuCard = (props: { processor: NtbType }) => {
  const { addToCart } = useCart();
  const decimal = props.processor.price.toFixed(2);

  return (
    <Card key={props.processor.id}>
      <Image src={props.processor.src} />
      <H3Card>{props.processor.name}</H3Card>
      <InfoWrapper>
        <Border />
        <AddCart onClick={() => addToCart(props.processor)} />
        <p>
          {decimal} {props.processor.currency}
        </p>
      </InfoWrapper>
    </Card>
  );
};

export default CpuCard;
