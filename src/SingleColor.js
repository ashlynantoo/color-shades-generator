import React, { useState, useEffect } from "react";

const SingleColor = (props) => {
  const { rgb, weight, hex, index, wt } = props;
  const [alert, setAlert] = useState(false);
  const currentColor = rgb.join(",");
  const hexValue = `#${hex}`;
  const midValue = Math.floor(100 / wt);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={index >= midValue ? "color color-light" : "color"}
      style={{ backgroundColor: `rgb(${currentColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
