import { use, useState } from "react";
import "../allstyle/photo.css";
export const Photo = () => {
  const [change, setChange] = useState("");
  const buttonCliked = (too) => setChange(change + too);
  const clearHandler = () => setChange("");

  return (
    <div className="photo">
      {change}
      <button onClick={buttonCliked}>rigth</button>
      <button onClick={clearHandler}>cancel</button>
      <div className="lemonButton">
        <button>LEMONNADE</button>
        <p>Энхжин:Тийрэлтэн онгоцны Монголын анхны нисгэгч | S4:E5</p>
      </div>
    </div>
  );
};
// import "../allstyle/photo.css";
// const Photo = () => {
//   return (
//     <div className="photo">
//       <img
//         src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/474c14c2-118d-4cb5-9812-270c320a5cf4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T022126Z&X-Goog-Expires=86399&X-Goog-Signature=69f22db36aa90458a57b0dac6e162e05c638798702751e50a38fab43b7a1610375f09e43e51acb95b765c78bdd2d838a8c63d788eee0e5ad947f5a3d1eb105a596d75f8c08c5382d8a2948705cb2716444cbdf0372c872f5628e87b5b33a0aafcd3a8d3376dbd2db6f5b3909dd0a5718378239c245dcf8a2561eafc7bb91b2060287f6d98654cfd8e19baf6f84ec77347795b257f8df4496d5109863d359540bb8ca7be48a6e97322da609e87f5acb51b383b47fa23022dde932efbb6bedeb66da7d0a18af7f5a4dd4bb602a46ec21bf2f4c51e7ef5a73fa6a2438eba4433f7d61f16a7b1b2725d5a4e2c52b8b17f1bc8195b61cf937f903f78f4e8d9b951d83&X-Goog-SignedHeaders=host"
//         alt=""
//       />
//       <div className="lemonButton">
//         <button>LEMONNADE</button>
//         <p>Энхжин:Тийрэлтэн онгоцны Монголын анхны нисгэгч | S4:E5</p>
//       </div>
//     </div>
//   );
// };
// export default Photo;
