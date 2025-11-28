import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems() {
  //using this way we can used any data without passing props
  // const todoItemFromCOntext = useContext(TodoItemsContext);
  // console.log(`item from context:${todoItemFromCOntext} ${todoItems}`);
  //above way not access data because now we have changed value into object so we have to use below way
  const contextObj = useContext(TodoItemsContext);
  const todoItemFromCOntext = contextObj.items;

  //comon way to access data
  // const { items, onDeleteItems, onAddItems } = useContext(TodoItemsContext);
  return (
    <div className={style["items-container"]}>
      {/**working fine to use data uisng context below without used props:  todoItems.map((todo) => { return <TodoItem todoDate={todo.date} todoName={todo.name} key={todo.name}  onDeleteItems={onDeleteItems}/>; }) */}
      {todoItemFromCOntext.map((todo) => {
        return (
          <TodoItem
            todoDate={todo.date}
            todoName={todo.name}
            key={todo.name}
            // onDeleteItems={onDeleteItems} // here used props function both working
            onDeleteItems={contextObj.onDeleteItems} //here used context function both working  this things also we can implement on TodoItem component
          />
        );
      })}
    </div>
  );
  // let items = props.items;
  // return <TodoItem todoDate={items.date} todoName={items.name} />;
}

export default TodoItems;
