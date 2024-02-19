import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ todoName, todoDate }) => {
  const { onDeleteHandler } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteHandler(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
