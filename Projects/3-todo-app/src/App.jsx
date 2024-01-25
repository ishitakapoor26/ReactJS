import AppName from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import ToDoContainer from "./Components/ToDoContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const addToDoHandler = (todoName, todoDate) => {
    const newItems = [...todoItems, { name: todoName, dueDate: todoDate }];
    setToDoItems(newItems);
  };

  const onDeleteHandler = (toDoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== toDoName);
    setToDoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addToDoHandler={addToDoHandler} />
      <ToDoContainer
        todoItems={todoItems}
        onDeleteHandler={onDeleteHandler}
      ></ToDoContainer>
    </center>
  );
}

export default App;
