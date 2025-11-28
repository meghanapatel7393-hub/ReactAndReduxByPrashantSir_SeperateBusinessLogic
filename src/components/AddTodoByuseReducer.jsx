import { useContext, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

// import { BiMessageAdd } from "react-icons/bi";

function AddTodoByuseReducer() {
  const contextObj = useContext(TodoItemsContext);
  const onAddItemsbyContext = contextObj.onAddItems;

  const todoNameElement = useRef();
  const todoDateElement = useRef();
  /**Here we have not used reducer but reducer used in App.jsx  and there we have replace useState with useReducer - bhavesh this class is now complete useRef & useContext */
  const handleOnCLicked = (event) => {
    event.preventDefault();
    console.log(event);

    //now we can directly access value using useRef
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onAddItemsbyContext(todoName, todoDate); // this is add by context
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleOnCLicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            placeholder="Enter Todo using Reducer"
            id="input"
            type="text"
          />
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" id="dates" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoByuseReducer;
