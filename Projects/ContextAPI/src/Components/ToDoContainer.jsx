import TodoItem from "./TodoItem";
import css from "./ToDoContainer.module.css";
import { ToDoItemsContext } from "store/todo-items-store";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const ToDoContainer = ({ onDeleteHandler }) => {
  const contextObj = useContext(ToDoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <>
      <div className={css["items-container"]}>
        {/* eslint-disable-next-line react/prop-types*/}
        {todoItems.map((item) => (
          <TodoItem
            key={item.dueDate}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteHandler={onDeleteHandler}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default ToDoContainer;
