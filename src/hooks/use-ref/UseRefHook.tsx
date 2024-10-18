import { useEffect, useRef, useState } from "react";

const RENDER_COUNT_DEFAULT = 1;

const UseRefHookPage = () => {
  const [name, setName] = useState<string>("");
  const renderCountRef = useRef(RENDER_COUNT_DEFAULT);
  const prevRef = useRef("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    prevRef.current = name;
    renderCountRef.current = renderCountRef.current + 1;
  }, [name]);

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h3>This Page Is For Understanding React useRef Hook.</h3>
      <div className="input-count-render">
        <p>
          We Have an Input element which takes a name & a paragraph tag that
          reflects the change. We also want to show how many times a component
          was rendered on the screen. If we use React's useState hook, we might
          fall into problems of getting into an infinite loop. The way to handle
          it is using react's useRef.
        </p>

        <p>
          The useRef hook in React creates a mutable reference that persists
          across component renders. Unlike useState, which manages state and
          triggers re-rendering, useRef is primarily used to access and
          manipulate the DOM or to store mutable values that don't trigger
          re-renders. It returns a mutable object with a current property.
        </p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p>My Name Is: {name}</p>
        <p>Name Rendered For: {renderCountRef.current} times.</p>
        <p>Previous Name: {prevRef.current}</p>
        <p>
          We can also use refs to store the previous value of the names as shown
          above
        </p>
      </div>
      <hr />
      <div>
        <p>
          Following example shows the use of refs in order to focus on a
          particular element on button click. You can click the "focus" button
          which is going to work as a document query selector on input tag.
        </p>
        <input type="text" ref={inputRef} />
        <button onClick={focus}>Focus</button>
      </div>

      <div className="references" style={{ marginTop: "1rem" }}>
        <h3>References</h3>
        <div
          className="links"
          style={{ display: "flex", flexDirection: "column", gap: 6 }}
        >
          <a
            href="https://www.youtube.com/watch?v=t2ypzz6gJm0"
            target="_blank"
            rel="noreferrer"
            style={{ width: "fit-content" }}
          >
            Link to the source video
          </a>
          <a
            href="https://github.com/Prateek-Yashaswi/learn-react/blob/master/src/hooks/use-ref/UseRefHook.tsx"
            target="_blank"
            rel="noreferrer"
            style={{ width: "fit-content" }}
          >
            Source Code
          </a>
          <a
            href="https://medium.com/@rdhamnaskar11/understanding-of-when-to-use-usestate-and-useref-hooks-6f7f60f79c82"
            target="_blank"
            rel="noreferrer"
            style={{ width: "fit-content" }}
          >
            When to use useRef & useState
          </a>
        </div>
      </div>
    </div>
  );
};

export default UseRefHookPage;
