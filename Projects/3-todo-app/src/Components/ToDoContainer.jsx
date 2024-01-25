import TodoItem from "./TodoItem";
import css from "./ToDoContainer.module.css";

// eslint-disable-next-line react/prop-types
const ToDoContainer = ({ todoItems, onDeleteHandler }) => {
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
