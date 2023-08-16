import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchForm from "./SearchForm";
import ColorList from "./ColorList";

const App = () => {
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));
  const [weight, setWeight] = useState(10);

  const addColorsToColorList = (color, weight) => {
    try {
      const wt = parseInt(weight);
      const colors = new Values(color).all(wt);
      setColorList(colors);
      setWeight(wt);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <SearchForm addColorsToColorList={addColorsToColorList} />
      <ColorList colorList={colorList} weight={weight} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
