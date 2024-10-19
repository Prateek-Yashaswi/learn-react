import { CounterObject, CounterActions } from "./Counter.types";

export const DEFAULT_VALUE = 0;

export const CounterReducer = (
  state: CounterObject,
  action: CounterActions
): CounterObject => {
  switch (action) {
    case CounterActions.INCREMENT:
      return { ...state, value: state.value + 1 };
    case CounterActions.DECREMENT:
      return { ...state, value: state.value - 1 };
    case CounterActions.RESET:
      return { ...state, value: DEFAULT_VALUE };
    default:
      return state;
  }
};
