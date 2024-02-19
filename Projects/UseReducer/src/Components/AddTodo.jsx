// import { useRef } from "react";
import { useState } from "react";
import ToDoItemsContext from "../store/todo-items-store";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
function AddTodo() {
  const { addToDoHandler } = useContext(ToDoItemsContext);
  const [todoName, setName] = useState();
  const [todoDate, setDate] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  let handleAddButton = () => {
    // event.preventDefault();
    addToDoHandler(todoName, todoDate);
    setDate("");
    setName("");
  };

  // const todoNameElement = useRef();
  // const todoDateElement = useRef();

  // const handleAddButton = (event) => {
  //   event.preventDefault();
  //   const todoName = todoNameElement.current.value;
  //   const dueDate = todoDateElement.current.value;
  //   todoDateElement.current.value = "";
  //   todoNameElement.current.value = "";
  //   addToDoHandler(todoName, dueDate);
  // };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            value={todoName}
            onChange={handleNameChange}
            placeholder="Enter to-do here"
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-1">
          <button
            type="submit"
            className="btn btn-success kg-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
