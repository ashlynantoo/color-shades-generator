import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = (props) => {
  const { colorList, weight } = props;

  return (
    <section className="colors">
      {colorList.map((color, index) => {
        return (
          <SingleColor key={nanoid()} color={color} index={index} wt={weight} />
        );
      })}
    </section>
  );
};
export default ColorList;
