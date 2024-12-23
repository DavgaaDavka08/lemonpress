import { dataArr } from "../../saveArr/business";

export const Storydataarr = () => {
  return dataArr.map((data) => {
    return (
      <div>
        <p>{data.dates}</p>
        <h5>{data.desc}</h5>
      </div>
    );
  });
};
