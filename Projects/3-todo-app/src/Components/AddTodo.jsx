import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function AddTodo({ addToDoHandler }) {
  // const [todoName, setName] = useState();
  // const [todoDate, setDate] = useState();

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // };

  // let handleAddButton = (event) => {
  //   event.preventDefault();
  //   addToDoHandler(todoName, todoDate);
  //   setDate("");
  //   setName("");
  // };

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
    addToDoHandler(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter to-do here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
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
