import React from "react";
import cpus from "../../data/cpus.json";
import CpuCard from "../CpuCard/CpuCard";
import { CardContainer, CardWrapper } from "../CardsCpu/CardsCpu.styled";

const CardsCpu: React.FC = () => {
  return (
    <CardContainer>
      <CardWrapper>
        {cpus.map((cpu) => (
          <CpuCard key={cpu.id} processor={cpu} />
        ))}
      </CardWrapper>
    </CardContainer>
  );
};

export default CardsCpu;
