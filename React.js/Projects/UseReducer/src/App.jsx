import AppName from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import ToDoContainer from "./Components/ToDoContainer";
import "./App.css";
import ToDoItemsContextProvider from "./store/todo-items-store";

const App = () => {
  return (
    <ToDoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ToDoContainer></ToDoContainer>
      </center>
    </ToDoItemsContextProvider>
  );
};

export default App;
