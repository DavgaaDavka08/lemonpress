import { businessArray2 } from "../../saveArr/business";
export const Storyarr = () => {
  return businessArray2.map((news) => {
    return (
      <div className="mainSorty-array">
        <h6>{news.title1}</h6>
        <h4>{news.title2}</h4>
        <p>{news.title3}</p>
      </div>
    );
  });
};
