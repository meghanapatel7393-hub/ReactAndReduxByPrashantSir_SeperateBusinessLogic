import { createContext } from "react";
import { useState, useReducer } from "react";

// const TodoItemsContext = createContext([]); // this way also work but below way is better because its suggest auto complete during typing
export const TodoItemsContext = createContext({
  items: [],
  onDeleteItems: () => {},
  onAddItems: () => {},
});
// export default TodoItemsContext; //A module cannot have multiple default exports.ts(2528) - so define direct export with function name

//this if pure reducer function we can write in new files
const todoItemsReducer = (stateCurTodoItem, action) => {
  let newTodoItems = stateCurTodoItem;
  console.log(stateCurTodoItem.length);
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...stateCurTodoItem,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = stateCurTodoItem.filter(
      (item) => item.name !== action.payload.name
    );
  }
  return newTodoItems;
};

//here move our business logic from ui component app.jsx
const TodoItemsContextProvider = ({ children }) => {
  const [items, dispatchTodoItem] = useReducer(todoItemsReducer, []);

  const onAddItems = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { name: name, date: date },
    };
    dispatchTodoItem(newItemAction);
  };
  const onDeleteItems = (name) => {
    console.log(name);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { name: name },
    };
    dispatchTodoItem(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        items: items,
        onDeleteItems: onDeleteItems,
        onAddItems: onAddItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
