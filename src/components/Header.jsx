import { useState } from "react";
import "../allstyle/header.css";

const arr = [
  {
    title: "2",
    title2: "ncjdls",
    title3: "dhie",
  },
];

export const Header = () => {
  const [text, useText] = useState("");
  const textHandler = (too) => useText(text + too);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className="mainHeader"
      style={{
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        minHeight: "200px",
      }}
    >
      <div className="title">
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        <button onClick={() => textHandler("hdjshfsdgh hbdcjsw")}>
          Товхимол v
        </button>
        <h4>{text}</h4>
        <h4>{text}</h4>
        <h4>{text}</h4>
      </div>
      <div className="header-rigth">
        <div className="mode">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            clickmode{isDarkMode ? "Light" : "Dark"}
          </button>
        </div>
        <img src="./header.svg" alt="" />
        <button>Уншаад үзье</button>
      </div>
    </div>
  );
};
