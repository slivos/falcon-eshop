import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

export const RemoveItem = styled(FaRegTimesCircle)`
  font-size: 1.3rem;
  color: #ffc300;
  cursor: pointer;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #d9534f;
  }
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0;
`;

export const Card = styled.div`
  height: 8em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #001d3d;
  color: white;
  border-top: 2px solid transparent;
  border-image-slice: 1;
  border-image: linear-gradient(
      20deg,
      rgb(2, 0, 36),
      rgb(0, 53, 102),
      rgb(255, 214, 10)
    )
    1;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    height: 20px;
    width: 35px;
    border: none;
    outline: none;
    border-radius: 3px;
    margin: 0 10px 0 10px;
    padding: 0;
    color: #003566;
    background-color: #ffc300;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #ffd60a;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
