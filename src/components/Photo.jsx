import { useState } from "react";
import "../allstyle/photo.css";

let changePhoto = [
  "	https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21SyMyzVYXLuwsmqYYpWUZGm-l37bW0xHCA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s",
  "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_b9F7xfCjXbJfitt4kqhkmwhL8EBRwgKlfA&s",
];
export const Photo = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(changePhoto[0]);

  const buttonHandler = (photo) => {
    setSelectedPhoto(photo); // Тухайн зураг дээр дарсан үед өөрчлөлт хийнэ
  };

  return (
    <div className="photo">
      <div className="selectedPhoto">
        {/* Сонгогдсон зургийг харуулна */}
        <img
          src={selectedPhoto}
          alt="Selected"
          style={{ width: "300px", height: "100px" }}
        />
      </div>
      <div className="photoButtons">
        {changePhoto.map((photo, index) => (
          <button key={index} onClick={() => buttonHandler(photo)}>
            Photo {index + 1}
          </button>
        ))}
      </div>

      <div className="lemonButton">
        <button>LEMONADE</button>
        <p>Энхжин: Тийрэлтэн онгоцны Монголын анхны нисгэгч | S4:E5</p>
      </div>
    </div>
  );
};
