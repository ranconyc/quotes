import styled from "styled-components";

// STYLE
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  max-width: 60vw;
  flex: 1.5;
`;

export const QuoteCircle = styled.img`
  width: 2.125rem;
  position: relative;
  top: 35px;
  right: 51px;
`;

export const AutorImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border-top: 7px solid #000;
  border-right: 7px solid #000;
`;

export const AutorName = styled.h1`
  font-size: 2.1rem;
  width: max-content;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin-top: 0.32rem;
  margin-bottom: 0.63rem;
`;

export const Quote = styled.p`
  font-size: 1.1rem;
  text-align: center;
  min-width: 90vw;
  min-height: 110px;
`;
