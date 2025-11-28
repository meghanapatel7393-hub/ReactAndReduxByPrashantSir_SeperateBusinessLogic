import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import style from "./WlcomeMessage.module.css";
function WlcomeMessage() {
  const contextObj = useContext(TodoItemsContext);
  const myitems = contextObj.items;

  return (
    myitems.length === 0 && <h1 className={style["welcome"]}>Enjoy Your Day</h1>
  );
}
export default WlcomeMessage;
