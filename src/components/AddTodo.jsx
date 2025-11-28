import { useContext, useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const contextObj = useContext(TodoItemsContext);
  const onAddItemsbyContext = contextObj.onAddItems;
  /*
  this way is also working by video 
  
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNameChange = (event) => setTodoName(event.target.value); //this method set on change event to todoName
  const handleDateChange = (event) => setTodoDate(event.target.value); //this method set on change event to todoDate
  const handleOnCLicked2 = () => {
    onAddItems(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };*/

  //this flow is defin self coding by bhavesh
  const handleOnCLicked = () => {
    let todoName = document.getElementById("input").value;
    let todoDate = document.getElementById("dates").value;
    {
      todoName === "" || todoDate === ""
        ? alert("Enter Data")
        : onAddItemsbyContext(todoName, todoDate);
    }
    document.getElementById("input").value = "";
    document.getElementById("dates").value = "";
  };

  // const handleOnCLicked = () => {};

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input placeholder="Enter Todo Here" id="input" />
        </div>
        <div className="col-4">
          <input type="date" id="dates" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleOnCLicked}
          >
            <BiMessageAdd />

            {/* <IoMdAddCircleOutline /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
