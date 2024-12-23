import { cardsarry } from "../../saveArr/business";
import "../../allstyle/cards.css";
export const Cartsecond = () => {
  return (
    <div className="second-card-maindiv">
      {cardsarry.map((connects2) => {
        return (
          <div className="maincards2">
            <img src={connects2.imgUrl} alt="" />
            <div className="text2">
              <p>{connects2.text1}</p>
              <h2>{connects2.text2}</h2>
              <p>{connects2.text3}</p>
            </div>
          </div>
        );
      })}
      <div className="news1">
        <h2>Илүү үзэх</h2>
      </div>
    </div>
  );
};
