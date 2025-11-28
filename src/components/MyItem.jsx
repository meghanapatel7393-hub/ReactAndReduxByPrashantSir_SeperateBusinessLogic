import styles from "./MyItem.module.css";
//function MyItem({ items, handleBuyButtonClicked }) {  // ==== OR ====
function MyItem(props) {
  let item = props.items;
  // const handleBuyButtonClicked = (foodItem, event) => {
  //   console.log(`${foodItem} being bought`);
  //   console.log(event);
  // };

  return (
    <li
      className={`list-group-item ${styles["kg-item"]} ${styles["fd-row"]} ${
        props.bought && "active"
      }`}
    >
      <span className={`${styles["kg-span"]}`}>{item}</span>
      <button
        className={`${styles["button"]} btn  ${
          props.bought ? "btn-danger" : "btn-info"
        }`}
        onClick={props.handleBuyButtonClicked}
        // onClick={(event) => handleBuyButtonClicked(item, event)} // onClick have bydefault one event object that is synthetic object
        // onClick={() => handleBuyButtonClicked(item)}
        // onClick={ handleBuyButtonClicked} // if no any parameter need
      >
        {props.bought ? "Remove" : "Buy"}
      </button>
    </li>
  );
}

export default MyItem;
