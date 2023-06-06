import React, { createContext, useState } from "react";
import "./App.css";
import ColorPickerNavBar from "./components/ColorPickerNavBar";
import PixelGrid from "./components/PixelGrid";
export const store = createContext();
const App = () => {
  const [changeColor, setChangeColor] = useState("#ccc");
  return (
    <>
      <store.Provider value={[changeColor, setChangeColor]}>
        <ColorPickerNavBar />
        <PixelGrid />
      </store.Provider>
    </>
  );
};

export default App;
