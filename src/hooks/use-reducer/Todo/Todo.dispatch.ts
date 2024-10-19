import { TodoActions } from "./Todo.actions";
import { ToDoType, TodoDispatch } from "./Todo.type";

const newTodo = (title: string): ToDoType => {
  return { id: Date.now().toString(), title: title, isCompleted: false };
};

const handleToggle = (todos: Array<ToDoType>, id: string) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted: !todo.isCompleted };
    }

    return todo;
  });
};

export const TodoReducer = (
  todos: ToDoType[],
  actions: TodoDispatch
): ToDoType[] => {
  switch (actions.action) {
    case TodoActions.ADD:
      return actions.payload.title !== undefined
        ? [...todos, newTodo(actions.payload.title)]
        : todos;

    case TodoActions.TOGGLE_TODO:
      return actions.payload.id !== undefined
        ? handleToggle(todos, actions.payload.id)
        : todos;

    case TodoActions.REMOVE:
      return actions.payload.id !== undefined
        ? todos.filter((todo) => todo.id !== actions.payload.id)
        : todos;

    default:
      return todos;
  }
};
