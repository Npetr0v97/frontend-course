import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ color }) {
  const [boxColor, setBoxColor] = useState(color);

  const generateColor = () => {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      const randNum = Math.floor(Math.random() * 16);
      if (randNum >= 0 && randNum <= 9) {
        newColor = newColor.concat(randNum);
      } else {
        switch (randNum) {
          case 10:
            newColor = newColor.concat("a");
            break;
          case 11:
            newColor = newColor.concat("b");
            break;
          case 12:
            newColor = newColor.concat("c");
            break;
          case 13:
            newColor = newColor.concat("d");
            break;
          case 14:
            newColor = newColor.concat("e");
            break;
          case 15:
            newColor = newColor.concat("f");
            break;
        }
      }
    }
    return newColor;
  };

  const setNewColor = () => {
    // const newColor = generateColor();

    const newColor = generateColor();

    setBoxColor(newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: boxColor, padding: "10px" }}
      onClick={setNewColor}
    ></div>
  );
}
