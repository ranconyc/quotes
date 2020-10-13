import React from "react";
import Nav from "./components/Nav/Nav";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import styled from "styled-components";

const AppStyle = styled.div`
  font-family: "Raleway", sans-serif;
`;

function App() {
  return (
    <AppStyle>
      <Nav />
      <QuoteCard />
    </AppStyle>
  );
}

export default App;
