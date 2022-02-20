import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const InfoWrapper = styled.div`
  position: relative;
  margin: 70px 15px 0 15px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 1rem;
    text-align: right;
    margin: 0;
  }
`;

export const Card = styled.div`
  height: 20em;
  width: 15em;
  background-color: darkgray;
  border-radius: 5px;
  margin: 20px 30px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.8);
    transform: scale(1.05);

    @media (max-width: ${({ theme }) => theme.mobileS}) {
      transform: none;
    }
  }
`;

export const AddCart = styled(FaPlus)`
  font-size: 1.3rem;
  margin-top: 0;
  color: #003566;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffc300;
  }
`;

export const H3Card = styled.h3`
  font-size: 1rem;
  margin-bottom: 0;
  text-align: center;
`;

export const Border = styled.div`
  position: absolute;
  top: -160%;
  height: 2px;
  width: 100%;
  background: linear-gradient(
    138deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 53, 102, 1) 45%,
    rgba(255, 214, 10, 1) 100%
  );
`;
