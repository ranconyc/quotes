import React from "react";
import quotations from "./Logo.svg";
import {
  Card,
  QuoteCircle,
  AutorImg,
  AutorName,
  Quote,
} from "./QuoteCardStyle";

// COMPONENT
function QuoteCard({ autor, quote, img }) {
  return (
    <Card>
      <QuoteCircle src={quotations} />
      <AutorImg src={img} alt="" />
      <AutorName>{autor}</AutorName>
      <Quote>"{quote}"</Quote>
    </Card>
  );
}

export default QuoteCard;
