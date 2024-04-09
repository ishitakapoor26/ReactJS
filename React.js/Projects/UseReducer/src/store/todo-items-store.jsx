import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addToDoHandler: () => {},
  onDeleteHandler: () => {},
});

const todoItemsReducer = (currToDoItems, action) => {
  let newItems = currToDoItems;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currToDoItems,
      { name: action.payload.todoName, dueDate: action.payload.todoDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currToDoItems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }
  return newItems;
};

// eslint-disable-next-line react/prop-types
const ToDoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducer, []);

  const addToDoHandler = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchToDoItems(newItemAction);
  };

  const onDeleteHandler = (toDoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: toDoName,
      },
    };
    dispatchToDoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addToDoHandler: addToDoHandler,
        onDeleteHandler: onDeleteHandler,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default ToDoItemsContextProvider;
