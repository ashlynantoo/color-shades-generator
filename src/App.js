import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [weight, setWeight] = useState(10);
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const wt = parseInt(weight);
      let colors = new Values(color).all(wt);
      setColorList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Shades Generator</h3>
        <form className="color-form" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="color">Color: </label>
            <input
              type="text"
              name="color"
              value={color}
              className={error ? "error" : null}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="weight">Weight: </label>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hex={color.hex}
              index={index}
              wt={weight}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
