import { useContext, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

// import { BiMessageAdd } from "react-icons/bi";

function AddTodoByForm() {
  /*
  this way is also working by video */

  const contextObj = useContext(TodoItemsContext);
  const onAddItemsbyContext = contextObj.onAddItems;

  //comon way to access data
  // const { items, onDeleteItems, onAddItems } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleNameChange = (event) => setTodoName(event.target.value); //this method set on change event to todoName
  const handleDateChange = (event) => setTodoDate(event.target.value); //this method set on change event to todoDate
  const handleOnCLicked = (event) => {
    event.preventDefault();
    console.log(event);

    // onAddItems(todoName, todoDate); //this is add by props
    onAddItemsbyContext(todoName, todoDate); // this is add by context
    setTodoDate("");
    setTodoName("");
  };

  //this flow is defin self coding by bhavesh
  // const handleOnCLicked = () => {
  //   let todoName = document.getElementById("input").value;
  //   let todoDate = document.getElementById("dates").value;
  //   {
  //     todoName === "" || todoDate === ""
  //       ? alert("Enter Data")
  //       : onAddItems(todoName, todoDate);
  //   }
  //   document.getElementById("input").value = "";
  //   document.getElementById("dates").value = "";
  // };

  // const handleOnCLicked = () => {};

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleOnCLicked}>
        <div className="col-6">
          <input
            placeholder="Enter Todo using form method Here"
            id="input"
            type="text"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="dates"
            value={todoDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            className="btn btn-success kg-button"
            // onClick={handleOnCLicked}
          >
            {/* <BiMessageAdd /> */}

            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoByForm;
