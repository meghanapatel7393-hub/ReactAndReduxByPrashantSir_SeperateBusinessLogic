import { useContext, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

/* useState vs useRef :  */
/* in this demo useRef prevent re-render of component and working fine*/
function AddTodoByuseRef() {
  //here used useRef hook just for simple explanation not related with this component
  //when ui rerender or component rerender useRef hook will not rerender and keep the value as it is
  const noOfUpdates = useRef(0); //its not like static its work self state as per component wise

  const contextObj = useContext(TodoItemsContext);
  const onAddItemsbyContext = contextObj.onAddItems;

  //  const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  //this is now with component work - so we have not need to keep state  that commnet above also not need to handle on change event
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current = noOfUpdates.current + 1;
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  // };
  const handleOnCLicked = (event) => {
    event.preventDefault();
    console.log(event);

    //now we can directly access value using useRef
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    console.log(todoName, todoDate);
    onAddItemsbyContext(todoName, todoDate);
    //when use ref also not need to use this to reset value
    // setTodoDate("");
    // setTodoName("");
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleOnCLicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            placeholder="Enter Todo using useRef "
            id="input"
            type="text"
            // value={todoNameElement.current.value}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            type="date"
            id="dates"
            // value={todoDateElement.current.value}
            // onChange={handleDateChange}
          />
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

export default AddTodoByuseRef;
