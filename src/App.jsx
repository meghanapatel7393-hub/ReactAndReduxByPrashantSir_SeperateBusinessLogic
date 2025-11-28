import { useState, useReducer, useContext } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./TodoApp.css"; //this is used for Todo
import WlcomeMessage from "./components/WlcomeMessage";
import AddTodoByForm from "./components/AddTodoByForm";
import AddTodoByuseRef from "./components/AddTodoByuseRef";

import AddTodoByuseReducer from "./components/AddTodoByuseReducer";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./store/todo-items-store";

//this is called functional component
function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppName />
        <AddTodo />
        <AddTodoByForm />
        <AddTodoByuseRef />

        <AddTodoByuseReducer />
        <WlcomeMessage />
        {/* {items.length === 0 && <WlcomeMessage />} */}
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
