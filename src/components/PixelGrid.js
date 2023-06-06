import React, { useContext, useState } from "react";
import { store } from "../App";
import "../App.css";
function Pixel() {
  const [changeColor] = useContext(store);
  const [pixelColor, setChangeColorPixelColor] = useState("#ccc");
  return (
    <div
      className="pixel"
      onClick={() => {
        setChangeColorPixelColor(changeColor);
      }}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}
const PixelGrid = () => {
  let pixel = [];
  for (let i = 0; i <= 153; i++) {
    pixel.push(<Pixel />);
  }
  return (
    <>
      <div className="container">
        {pixel.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default PixelGrid;
