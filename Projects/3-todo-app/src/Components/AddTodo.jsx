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

  let handleAddButton = () => {
    addToDoHandler(todoName, todoDate);
    setDate("");
    setName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
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
          <button
            type="button"
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
