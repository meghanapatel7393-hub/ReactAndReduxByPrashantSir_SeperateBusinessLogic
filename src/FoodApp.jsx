import { useState } from "react";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import Container from "./Container";

function FoodApp() {
  // let foodItems = ["dal", "Green Vegetable", "Roti", "Salad", "Milk", "Poha"];

  /*
  let textState = useState("Food Item Entered By User"); // [text, setTextState]
  let [textToShow, setTextState] = textState; OR*/

  // let [textToShow, setTextState] = useState(); //working just small testing
  let [foodItems, setFoodItems] = useState([]);
  /*
  OR
  let textToShow = textState[0];
  let setTextState = textState[1];
  */

  // const handleOnCHanged = (event) => {
  //   console.log(event.target.value);
  //   setTextState(event.target.value); // setTextState(event.target.value) is same as setTextState = event.target.value;
  // };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      setFoodItems([...foodItems, event.target.value]); //here ... call spread operator that used to copy array elements from one array to another array
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food App</h1>

        <ul className="list-group">
          <FoodInput onKeyDown={handleOnKeyDown} />
          {/*handleOnCHanged={handleOnCHanged}*/}
          {/* <p>{textToShow}</p> working with just small testing */}
          <FoodItems foodItem={foodItems} />
        </ul>
      </Container>
      {/* {console.log(
        "here when state changed it re render whole component how to solve it?"
      )} */}
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default FoodApp;
