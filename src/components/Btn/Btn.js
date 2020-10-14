import React from "react";
import { BtnStyle, BtnLink } from "./BtnStyle";

function Btn({ btnIcon, clickHandler, name }) {
  return (
    <BtnLink href="#" onClick={clickHandler} className={name}>
      <BtnStyle src={btnIcon} />
    </BtnLink>
  );
}

export default Btn;
