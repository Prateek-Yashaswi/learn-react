import { FormEvent, useReducer, useState } from "react";
import { CounterReducer, DEFAULT_VALUE } from "./Counter/Counter.dispatch";
import CounterComponent from "./Counter/CounterComponent";
import Todo from "./Todo/Todo";
import { TodoActions } from "./Todo/Todo.actions";
import { TodoReducer } from "./Todo/Todo.dispatch";
import { REDUCER_REFERENCES } from "./References";
import Links from "../../components/Links";

const UseReducerPage = () => {
  const [state, counterDispatch] = useReducer(CounterReducer, {
    value: DEFAULT_VALUE,
  });

  const [todos, todoDispatch] = useReducer(TodoReducer, []);
  const [input, setInput] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoDispatch({ action: TodoActions.ADD, payload: { title: input } });
    setInput("");
  };

  return (
    <div>
      <div>
        <h3>This Page Is For Understanding React useReducer Hook.</h3>
        <Links items={REDUCER_REFERENCES} />
      </div>
      <hr />
      <CounterComponent value={state.value} dispatch={counterDispatch} />
      <hr />
      <div>
        <h3>{`To-Do Application. More Complex Usecase For useReducer`}</h3>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", gap: 12 }}
        >
          <input
            required
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit Form</button>
        </form>

        {todos.map((item, idx) => (
          <Todo todo={item} key={idx} dispatch={todoDispatch} />
        ))}
      </div>
    </div>
  );
};

export default UseReducerPage;
