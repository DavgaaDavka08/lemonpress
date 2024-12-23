import "../allstyle/header.css";
export const Header = () => {
  return (
    <div className="mainHeader">
      <div className="title">
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        <h4>Товхимол v</h4>
        <h4>Нийтлэлүүд v</h4>
        <h4>Цувралууд v</h4>
        <h4>Подкаст v</h4>
      </div>
      <div className="header-rigth">
        <img src="./header.svg" alt="" />
        <button>Уншаад үзье</button>
      </div>
    </div>
  );
};
