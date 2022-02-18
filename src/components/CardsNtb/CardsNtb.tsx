import React from "react";
import { CardContainer, CardWrapper } from "../CardsNtb/CardsNtb.styled";
import ntbs from "../../data/ntbs.json";
import NtbCard from "../NtbCard/NtbCard";

const CardsNtb: React.FC = () => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          {ntbs.map((ntb) => (
            <NtbCard key={ntb.id} notebook={ntb} />
          ))}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default CardsNtb;
