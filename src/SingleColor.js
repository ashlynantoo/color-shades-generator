import { toast } from "react-toastify";

const SingleColor = (props) => {
  const { color, index, wt } = props;
  const { hex, weight } = color;
  const hexValue = `#${hex}`;
  const midValue = Math.floor(100 / wt);

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(hexValue);
        toast.success(`Color ${hexValue} copied to clipboard`);
      } catch (error) {
        toast.error(`Failed to copy color ${hexValue} to clipboard`);
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <article
      className={index > midValue ? "color color-light" : "color"}
      style={{ backgroundColor: hexValue }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
