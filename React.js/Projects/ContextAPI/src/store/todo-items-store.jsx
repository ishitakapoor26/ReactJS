import { createContext } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addToDoHandler: () => {},
  onDeleteHandler: () => {},
});

export default TodoItemsContext;
