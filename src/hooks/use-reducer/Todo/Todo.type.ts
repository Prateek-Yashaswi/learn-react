import { TodoActions } from "./Todo.actions";

export type ToDoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TodoPayload = {
  title?: string;
  id?: string;
};

export type TodoDispatch = {
  action: TodoActions;
  payload: TodoPayload;
};
