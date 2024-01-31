import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddTodo({ addToDoHandler }) {
  const [todoName, setName] = useState();
  const [todoDate, setDate] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  let handleAddButton = (event) => {
    event.preventDefault();
    addToDoHandler(todoName, todoDate);
    setDate("");
    setName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-4">
          <input
            type="text"
            value={todoName}
            placeholder="Enter to-do here"
            onChange={(event) => {
              handleNameChange(event);
            }}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(event) => {
              handleDateChange(event);
            }}
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
