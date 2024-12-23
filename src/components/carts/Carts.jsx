import { cardsarry } from "../../saveArr/business";
import "../../allstyle/cards.css";
export const Carts = () => {
  return (
    <div className="Maincart">
      {cardsarry.map((connects2) => {
        return (
          <div className="maincards2">
            <img src={connects2.imgUrl} alt="" />
            <div className="text">
              <p>{connects2.text1}</p>
              <h2>{connects2.text2}</h2>
              <p>{connects2.text3}</p>
            </div>
          </div>
        );
      })}
      <div className="photo-enginer">
        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241222%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241222T013023Z&X-Goog-Expires=86399&X-Goog-Signature=47ce4d60a88451b5db2c21dabdf27639edca1e77286b597968a7a1d22866457b46216b64326de774e74c8608a2cdd6c9a75442fa05da336fdf1f7e54633a52f15135f8cd3d16b654548a855621fefd22a933d4f6471924f693e434b78bbe2c975bae3552df3b6342bde00fbc239db899288d3f3a61a4a1048fd1dd877896ae83897ee00a12c6d21d4af6d10f3e8b5b669b4ba856a198730a1be9f3c46a599d0bc45f30e0acb96297e1237432a3adf185bb0685fe93360405b5853411a39970d1814d89eb78b31e0c2382f90fc7d6d30eb0472864c84eefbe23ff203645f5e9ac0230853c2d053bdfbe805899df466e14a1af9c945e8cb87ccd9094094fa0cf6b&X-Goog-SignedHeaders=host"
          alt=""
        />
      </div>
    </div>
  );
};
