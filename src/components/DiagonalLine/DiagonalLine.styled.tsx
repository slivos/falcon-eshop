import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const PrimaryTr = styled.div`
  position: absolute;
  top: -63%;
  left: -30%;
  width: 125%;
  height: 125%;
  transform: rotate(-26.5deg);
  background-color: #445157;
  transition: box-shadow 0.3s ease;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blueviolet;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.8);
    z-index: 10;

    span {
      color: #ffd60a;
      border-bottom: 4px solid #ffd60a;
    }
  }

  span {
    position: absolute;
    top: 80%;
    left: 40%;
    font-size: 3rem;
    color: blueviolet;
    transform: rotate(-0.5deg);
    border-bottom: 4px solid blueviolet;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.XL}) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    transform: rotate(0deg);

    span {
      position: static;
    }
  }
`;

export const SecondaryTr = styled.div`
  position: absolute;
  top: initial;
  right: initial;
  width: 125%;
  height: 125%;
  right: -30%;
  bottom: -65%;
  transform: rotate(-26.5deg);
  background-color: #ffd60a;
  transition: box-shadow 0.3s ease;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blueviolet;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.8);

    span {
      color: #ffd60a;
      border-bottom: 4px solid #ffd60a;
    }
  }

  span {
    position: absolute;
    bottom: 80%;
    left: 40%;
    font-size: 3rem;
    color: #445157;
    transform: rotate(-0.5deg);
    border-bottom: 4px solid #445157;
    font-weight: 700;
    transition: color 0.3s ease;
    transition: border-bottom 0.3s ease;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.XL}) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    transform: rotate(0deg);

    span {
      position: static;
    }
  }
`;
