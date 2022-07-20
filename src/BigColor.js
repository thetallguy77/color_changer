import React from "react";

const BigColor = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{ background: colorValue, color: isDarkText ? "#000" : "#fff" }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>

      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};
BigColor.defaultProps = {
  colorValue: "Empty Color Value",
};
export default BigColor;
