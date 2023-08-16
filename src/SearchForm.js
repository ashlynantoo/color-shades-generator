import { useState } from "react";

const SearchForm = (props) => {
  const { addColorsToColorList } = props;
  const [color, setColor] = useState("#f15025");
  const [weight, setWeight] = useState(10);

  const handleSubmit = (event) => {
    event.preventDefault();
    addColorsToColorList(color, weight);
  };

  return (
    <section className="container">
      <h3>Color Shades Generator</h3>
      <form className="color-form" onSubmit={handleSubmit}>
        <div className="group">
          <div className="input">
            <label htmlFor="color">Color: </label>
            <input
              type="text"
              name="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <input
            type="color"
            className="color-picker"
            name="color-picker"
            value={color}
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
  );
};

export default SearchForm;
