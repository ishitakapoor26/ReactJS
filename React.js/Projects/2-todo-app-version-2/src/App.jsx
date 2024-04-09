import AppName from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import ToDoContainer from "./Components/ToDoContainer";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "04/10/2023",
    },
    {
      name: "Learn New Skills",
      dueDate: "04/02/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ToDoContainer todoItems={todoItems}></ToDoContainer>
    </center>
  );
}

export default App;
