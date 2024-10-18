import { useState } from "react";

const DEFAULT_VALUE: number = 0;
const REFERENCES: Array<{ label: string; url: string }> = [
  {
    label: "Video Tutorial",
    url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
  },
  {
    label: "Source Code",
    url: "https://github.com/Prateek-Yashaswi/learn-react/tree/master/src/hooks/use-state/UseStatePage.tsx",
  },
];

const UseStatePage = () => {
  const [value, setValue] = useState<number>(DEFAULT_VALUE);
  const [newTheme, setNewTheme] = useState("");
  const incrementValue = () => setValue((prev) => prev + 1);
  const decrementValue = () => setValue((prev) => prev - 1);
  const resetValue = () => setValue(DEFAULT_VALUE);

  const [state, setState] = useState({ value: DEFAULT_VALUE, theme: "black" });
  const value2 = state.value;
  const theme = state.theme;

  const incrementValue2 = () => {
    setState((prevState) => {
      return { ...prevState, value: prevState.value + 1 };
    });
  };

  const decrementValue2 = () => {
    setState((prevState) => {
      return { ...prevState, value: prevState.value - 1 };
    });
  };

  const changeTheme = () => {
    setState((prevState) => {
      return { ...prevState, theme: newTheme };
    });
  };

  return (
    <div>
      <h3>This Page Is For Understanding React useState Hook.</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <p>
            Below component shows the implemention of use state. We have two
            buttons '-' & '+' and a counter in between them. '-' button
            decrements the counter by 1 where as '+' increments it by 1. The
            Reset Button resets the counter to 0.
          </p>

          <p>
            The functionality is implemented by useState which returns an array
            of value. First item in the array is the current state itself and
            the second item is a function which allows us to update the state.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <button onClick={decrementValue} disabled={value === 0}>
            -
          </button>
          <span>Counter: {value}</span>
          <button onClick={incrementValue}>+</button>
        </div>
        <div>
          <button onClick={resetValue}>Reset Value</button>
        </div>
      </div>
      <hr />
      <div>
        <p>
          {`There is a more complex way to use useState hooks when dealing with
          objects. In the example below, we have an object { value: 0, theme: "black" }. 
          In this case, our useState declaration looks like: const [state, setState] = useState({ value: 0, theme: "black" });`}
        </p>
        <p>
          In this case we have to use spread operator to make sure that react
          doesn't overwrite the previous state. Refer the Source Code Or{" "}
          <a
            href="https://www.youtube.com/watch?v=O6P86uwfdR0&t=11m15s"
            target="_blank"
            rel="noreferrer"
          >
            Watch This Video To Understand
          </a>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <button onClick={decrementValue2} disabled={value2 === 0}>
            -
          </button>
          <span>{value2}</span>
          <button onClick={incrementValue2}>+</button>
          <input
            type="text"
            value={newTheme}
            onChange={(e) => {
              setNewTheme(e.target.value);
            }}
          />
          <button onClick={changeTheme}>Apply Theme</button>
          <p>Current Theme: {theme}</p>
        </div>
        <hr />
        <div>
          <p>
            Another way to using useState is when we pass a function inside
            useState like{" "}
            <span>{`const [item, setItem] = useState(() => { console.log("Called"); }); `}</span>
            <br />
            <a
              href="https://www.youtube.com/watch?v=O6P86uwfdR0&t=9m"
              target="_blank"
              rel="noreferrer"
            >
              Follow this link to understand
            </a>
          </p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h2>References</h2>
          {REFERENCES.map((item, idx) => (
            <a
              className="references-div-links"
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={idx}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseStatePage;
