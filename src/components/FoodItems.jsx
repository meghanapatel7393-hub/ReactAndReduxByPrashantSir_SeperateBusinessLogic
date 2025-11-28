import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import MyItem from "./MyItem";

function FoodItems(props) {
  let [activeItems, setActiveItem] = useState([]);
  // if (foodItem.length === 0) {
  //   return <h1>No item found</h1>;
  // }
  let emptyMessage =
    props.foodItem.length === 0 ? <h1>No item found</h1> : null;
  return (
    <>
      {/* {emptyMessage} */}
      {/*Working fine ingnore null. both method work fine above and below*/}
      {props.foodItem.length === 0 && <ErrorMessage message="No item found" />}
      {props.foodItem.map((item) => {
        return (
          <MyItem
            items={item}
            key={item}
            bought={activeItems.includes(item)}
            handleBuyButtonClicked={(e) => {
              if (activeItems.includes(item)) {
                setActiveItem(activeItems.filter((i) => i !== item));
              } else {
                setActiveItem([...activeItems, item]);
              }

              console.log(e);
              console.log(`${item} being bought`);
            }}
          />
        );
      })}
      {/* {console.log("here when state changed it re renderFood Item?")} */}
    </>
  );
}

export default FoodItems;
