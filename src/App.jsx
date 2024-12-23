import "../src/app.css";
import React from "react";
import { Header } from "./components/Header";
import { Photo } from "./components/Photo";
import { Business } from "./components/business/Business";
import { Story } from "./components/story/Story";
import { Mail } from "./components/Mail";
import { Carts } from "./components/carts/Carts";
import { Cartsecond } from "./components/carts/Cartsecond";
import { News } from "./components/news/News";
import { Footer } from "./components/Footer";
const App = () => {
  return (
    <div className="bigMain">
      <Header />
      <Photo />
      <Business />
      <Story />
      <Mail />
      <Carts />
      <Cartsecond />
      <News />
      <Footer />
    </div>
  );
};
export default App;
