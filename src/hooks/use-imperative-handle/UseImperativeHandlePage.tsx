import { useRef } from "react";
import CustomCounter, { CustomCounterRef } from "./CustomCounter";

const REFERENCES: Array<{ label: string; url: string }> = [
  { label: "Video Source", url: "https://www.youtube.com/watch?v=ndVIEMasBl8" },
  {
    label: "Source Code",
    url: "https://github.com/Prateek-Yashaswi/learn-react/blob/master/src/hooks/use-imperative-handle",
  },
];

const UseImperativeHandlePage = () => {
  const counterRef = useRef<CustomCounterRef>(null);

  return (
    <div>
      <h2>This Page Is For Understanding React useEffect Hook.</h2>
      <h3>
        Here, we have a counter with 3 buttons increment, decrement & reset
        button. Two out of Three belongs to the Counter Component Itself whereas
        the reset button is outside the counter component.
      </h3>
      <h3>
        useImperativeHandle Lets you to expose functionality outside of the
        Counter component. In our case, we are exposing the reset functionality
        outside the Counter component and call it using CounterRef. Refer the
        source code for the implementation.
      </h3>
      <CustomCounter ref={counterRef} />
      <button onClick={() => counterRef.current?.reset()}>Reset Counter</button>
      <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
        <h3>References</h3>
        {REFERENCES.map((item, idx) => (
          <a href={item.url} target="_blank" rel="noreferrer" key={idx}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UseImperativeHandlePage;
