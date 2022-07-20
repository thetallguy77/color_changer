import BigColor from "./BigColor";
import InputColor from "./InputColor";
import { useState } from "react";
function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setDarkText] = useState(true);
  return (
    <div className="App">
      <BigColor
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setDarkText={setDarkText}
        isDarkText={isDarkText}
      />
    </div>
  );
}

export default App;
