import { Dispatch, FC } from "react";
import { TodoActions } from "./Todo.actions";
import { TodoDispatch, ToDoType } from "./Todo.type";

type ITodo = {
  todo: ToDoType;
  dispatch: Dispatch<TodoDispatch>;
};

const Todo: FC<ITodo> = ({ todo, dispatch }) => {
  const handleToggle = (id: string) => {
    dispatch({ action: TodoActions.TOGGLE_TODO, payload: { id: id } });
  };

  const handleRemove = (id: string) => {
    dispatch({ action: TodoActions.REMOVE, payload: { id: id } });
  };

  return (
    <div
      style={{
        border: ".1rem, solid black",
        marginTop: "1rem",
        padding: ".5rem",
      }}
    >
      <h3>{todo.title}</h3>
      <p>{`Status: ${todo.isCompleted ? "Completed" : "Incomplete"}`}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
        <button onClick={() => handleToggle(todo.id)}>{`Mark This as ${
          todo.isCompleted ? "Incomplete" : "Complete"
        }`}</button>
        <button onClick={() => handleRemove(todo.id)}>Remove This Item</button>
      </div>
    </div>
  );
};

export default Todo;
