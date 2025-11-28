import style from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <input
      id="display"
      type="text"
      className={style["display"]}
      value={displayValue}
      readOnly
    />
  );
}
export default Display;
