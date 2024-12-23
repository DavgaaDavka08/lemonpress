import "../allstyle/mail.css";
export const Mail = () => {
  return (
    <div className="mail">
      <div className="childMail">
        <p className="oneP">NEWSLETTER</p>
        <h2>Хөрөнгө оруулалт, бизнесийн тоймыг 5 минутад</h2>
        <div className="input">
          <input type="text" placeholder="Имэйл хаяг" />
          <button>уншаад үзье</button>
        </div>
        <p className="oneP">
          Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан имэйл
          товхимлыг ажлын өдөр бүр, өглөө 07:00 цагт үнэгүй илгээнэ
        </p>
      </div>
    </div>
  );
};
