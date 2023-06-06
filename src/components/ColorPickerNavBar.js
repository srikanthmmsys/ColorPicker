import React, { useContext } from "react";
import { store } from "../App";
const ColorPickerNavBar = () => {
  const allColor = [
    { name: "red", hexcode: "#f5372a" },
    { name: "blue", hexcode: "#2a41f5" },
    { name: "green", hexcode: "#2af545" },
    { name: "yellow", hexcode: "#f5ee2a" },
    { name: "pink", hexcode: "#f52ad3" },
  ];
  const [changeColor, setChangeColor] = useContext(store);
  return (
    <>
      <div className="colorNav">
        {allColor.map((value) => {
          return (
            <div
              onClick={() => {
                setChangeColor(value.hexcode);
              }}
              key={value.hexcode}
              style={{ backgroundColor: value.hexcode }}
              className="SmallPixel"
            >
              {value.name}
            </div>
          );
        })}
      </div>
      <div className="pickedPixel">
        <div className="SmallPixel" style={{ backgroundColor: changeColor }}>
          Picked
        </div>
      </div>
    </>
  );
};

export default ColorPickerNavBar;
