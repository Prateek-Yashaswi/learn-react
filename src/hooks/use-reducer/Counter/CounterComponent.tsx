import { Dispatch, FC } from "react";
import { CounterActions } from "./Counter.types";

interface ICounterComponent {
  value: number;
  dispatch: Dispatch<CounterActions>;
}

const CounterComponent: FC<ICounterComponent> = ({ value, dispatch }) => {
  return (
    <div>
      <h2>Counter: {value}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch(CounterActions.INCREMENT)}>
          Increment
        </button>
        <button onClick={() => dispatch(CounterActions.DECREMENT)}>
          Decrement
        </button>
        <button onClick={() => dispatch(CounterActions.RESET)}>Reset</button>
      </div>
    </div>
  );
};

export default CounterComponent;
