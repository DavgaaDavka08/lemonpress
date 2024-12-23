import "../../allstyle/businnes.css";
import { Businesscart } from "./ecportarr/Businesscart";
export const Business = () => {
  return (
    <div className="mainBusiness">
      <div className="businnesRigth">
        <img
          src="https://dash-api.yld.mn/api/image/1cb1c205-6e96-4f15-b8e1-102bf35e0f7b"
          alt=""
        />
        <p className="blue">Interview</p>
        <h3>
          Н.Мөнхнасан: ЗГ-ын гэнэтийн шийдвэрүүдийн золиос <br></br>нь дотоодын
          компаниуд, хөрөнгө оруулагчид
        </h3>
        <p>М.Хулан / 12 сарын 20, 2024</p>
      </div>
      <div className="businessLeft">
        <img
          src="https://dash-api.yld.mn/api/image/5df9f347-0e55-42d0-afc2-b438ec13a97f"
          alt=""
        />
        <div className="mainCart">
          <Businesscart />
        </div>
      </div>
    </div>
  );
};
