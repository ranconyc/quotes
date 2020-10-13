import React from "react";
import styled from "styled-components";
import quotations from "./Logo.svg";

// STYLE
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem;
`;

const QuoteCircle = styled.img`
  width: 3rem;
  position: relative;
  top: 80px;
  right: 100px;
`;

const AutorImg = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border-top: 10px solid #000;
  border-right: 10px solid #000;
`;

const AutorName = styled.h1`
  font-size: 3rem;
  font-family: "Abril Fatface", cursive;
  margin: 2rem;
`;

const Quote = styled.p`
  font-size: 2rem;
`;

// COMPONENT
function QuoteCard() {
  return (
    <Card>
      <QuoteCircle src={quotations} />
      <AutorImg
        src="https://www.lionworldtravel.com/sites/default/files/styles/large/public/blog/Nelson-Mandela.jpg?itok=HtbIhsmY"
        alt=""
      />
      <AutorName>Nelson Mandela</AutorName>
      <Quote>
        "The greatest glory in living lies not in never falling, but in rising
        every time we fall."
      </Quote>
    </Card>
  );
}

export default QuoteCard;
