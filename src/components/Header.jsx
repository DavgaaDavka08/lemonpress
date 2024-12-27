import { useState } from "react";
import "../allstyle/header.css";
const arr = [
  {
    title: "2",
    title2: "ncjdls",
    title3: "dhie",
  },
];

export const Header = () => {n
  const [text, useText] = useState("");
  const textHandler = (too) => useText(text + too);
  return (
    <div className="mainHeader">
      <div className="title">
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        <button onClick={textHandler}>Товхимол v</button>

        <h4>{text}</h4>
        <h4>{text}</h4>
        <h4>{text}</h4>
      </div>
      <div className="header-rigth">
        <img src="./header.svg" alt="" />
        <button>Уншаад үзье</button>
      </div>
    </div>
  );
};
