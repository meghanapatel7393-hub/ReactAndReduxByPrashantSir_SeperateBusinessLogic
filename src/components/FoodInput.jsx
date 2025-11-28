import style from "./FoodInput.module.css";
function FoodInput({ foodItem, onKeyDown }) {
  //handleOnCHanged
  // const handleOnCHanged = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      placeholder="Enter Food Item"
      id="foodId"
      type="text"
      value={foodItem}
      className={style["food-Input"]}
      // onChange={handleOnCHanged}
      onKeyDown={onKeyDown}
    ></input>
  );
}

export default FoodInput;
