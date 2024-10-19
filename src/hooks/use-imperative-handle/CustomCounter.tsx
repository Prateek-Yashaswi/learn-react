import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

export interface CustomCounterRef {
  reset: () => void;
}

interface CustomCounterProps {}

const CustomCounter = (
  _props: CustomCounterProps,
  ref: ForwardedRef<CustomCounterRef>
) => {
  const [value, setValue] = useState<number>(0);
  const incrValue = () => setValue((prev) => prev + 1);
  const decrValue = () => setValue((prev) => prev - 1);
  const resetValue = () => setValue(0);

  useImperativeHandle(ref, () => ({
    reset: resetValue,
  }));

  return (
    <div>
      <p>Current Value: {value}</p>
      <button onClick={decrValue} disabled={value === 0}>
        Decrement
      </button>
      <button onClick={incrValue}>Increment</button>
    </div>
  );
};

export default forwardRef(CustomCounter);
