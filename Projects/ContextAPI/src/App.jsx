import AppName from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import ToDoContainer from "./Components/ToDoContainer";
import "./App.css";
import { useState } from "react";
import ToDoItemsContext from "./store/todo-items-store";

const App = () => {
  const [todoItems, setToDoItems] = useState([]);

  const addToDoHandler = (todoName, todoDate) => {
    const newItems = [...todoItems, { name: todoName, dueDate: todoDate }];
    setToDoItems(newItems);
  };

  const onDeleteHandler = (toDoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== toDoName);
    setToDoItems(newTodoItems);
  };

  // const addToDoHandler = (todoName, todoDate) => {
  //   setToDoItems((currValue) => [
  //     ...currValue,
  //     { name: todoName, dueDate: todoDate },
  //   ]);
  // };

  return (
    <ToDoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addToDoHandler: addToDoHandler,
        onDeleteHandler: onDeleteHandler,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ToDoContainer></ToDoContainer>
      </center>
    </ToDoItemsContext.Provider>
  );
};

export default App;
