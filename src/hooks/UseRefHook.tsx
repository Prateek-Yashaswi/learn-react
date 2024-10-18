import { useEffect, useRef, useState } from "react";

const RENDER_COUNT_DEFAULT = 1;

const UseRefHookPage = () => {
  const [name, setName] = useState<string>("");
  const renderCountRef = useRef(RENDER_COUNT_DEFAULT);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

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
          fall into problems of getting into an infinite loop. Here, the way to
          handle it is using react's useRef.
        </p>

        <p>
          Ref is similar to states & it persists between renders of a
          component.The difference between useState and useRef is useRef does
          not re-renders your entire application when anything changes.
        </p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p>My Name Is: {name}</p>
        <p>Name Rendered For: {renderCountRef.current} times.</p>
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

      <div className="credits-content" style={{ marginTop: "1rem" }}>
        <h3>Credits</h3>
        <a
          href="https://www.youtube.com/watch?v=t2ypzz6gJm0"
          target="_blank"
          rel="noreferrer"
        >
          Link to the source video
        </a>
      </div>
    </div>
  );
};

export default UseRefHookPage;
