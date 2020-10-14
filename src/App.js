import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import Btn from "./components/Btn/Btn";
import { AppStyle, Container, Btns } from "./AppStyle";
import NextBtn from "./components/Btn/NextBtn.svg";
import PreBtn from "./components/Btn/PreBtn.svg";
import { quotes } from "./data/qoutes";

function App() {
  const [user, setUser] = useState(0);
  const qouteUser = quotes[user];

  const PreQoute = () => {
    if (user > 0) {
      setUser(user - 1);
    } else {
      setUser(quotes.length - 1);
    }
  };
  const NextQoute = () => {
    if (user < quotes.length - 1) {
      setUser(user + 1);
    } else {
      setUser(0);
    }
  };

  return (
    <AppStyle>
      <Nav />
      <Container>
        <QuoteCard
          autor={qouteUser.autor}
          quote={qouteUser.quote}
          img={qouteUser.img}
        />
        <Btns>
          <Btn btnIcon={PreBtn} name="pre" clickHandler={PreQoute} />
          <Btn btnIcon={NextBtn} name="next" clickHandler={NextQoute} />
        </Btns>
      </Container>
    </AppStyle>
  );
}

export default App;
