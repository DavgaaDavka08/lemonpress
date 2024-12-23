import { businessArray } from "../../../saveArr/business";

export const Businesscart = () => {
  return businessArray.map((medee) => {
    return (
      <div>
        <h6>{medee.title1}</h6>
        <h4>{medee.title2}</h4>
        <p>{medee.title3}</p>
      </div>
    );
  });
};
