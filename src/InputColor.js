import colorNames from "colornames";
import React from "react";

const InputColor = ({
  colorValue,
  setColorValue,
  sethexValue,
  isDarkText,
  setDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="AddColorName">Add Color Name:</label>
      <input
        autoFocus
        id="inputcolor"
        type="text"
        placeholder="Add Color Name"
        required
        value={colorValue}
        //value={AddColorName}
        onChange={(e) => {
          setColorValue(e.target.value);
          sethexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputColor;
