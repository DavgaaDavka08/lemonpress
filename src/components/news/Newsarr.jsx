import { bisunnesCart } from "../../saveArr/business";
import "../../allstyle/news.css";
export const Newsarr = () => {
  return (
    <div className="main-news-div">
      {bisunnesCart.map((arr) => {
        return (
          <div className="bussinusMap">
            <img src={arr.imgS} alt="" />
            <div className=" cartText">
              <p className="cartP">{arr.text1}</p>
              <h7 className="cartH">{arr.text2}</h7>
              <p className="cartP">{arr.text3}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
