import { useMemo, useState } from "react";

function doubleNumberSlowFunction(num: number) {
  // Commented because it affects the performance, Uncomment in dev env to see the difference
  //for (let i: number = 0; i <= 1000000000; i++) {}
  return num * 2;
}

const UseMemoHookPage = () => {
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  const themeStyles: React.CSSProperties = {
    padding: "1rem",
    backgroundColor: dark ? "black" : "yellow",
    color: dark ? "white" : "black",
  };

  // Without Using useMemo - Uncomment This (To Experience What happens if we don't use useMemo)
  // const doubledNumber = doubleNumberSlowFunction(number);

  // Using useMemo - Comment this in case you want to see the difference
  const doubledNumber = useMemo(() => {
    return doubleNumberSlowFunction(number);
  }, [number]);

  return (
    <div
      style={{ display: "flex", gap: 8, flexDirection: "column", width: "50%" }}
    >
      <p>
        We have a input and a button here. Input takes a number and displays the
        doubled number. The button is responsible for toggling the theme of the
        div where the doubled number is displayed. We also have a function that
        doubles the input number.
      </p>

      <p>
        The function that is responsible for doubling the number has a very
        large loop to simulate the purpose of useMemo. When we don't use
        useMemo, the entire website feels very slow. Even If we don't change the
        number and just toggle the theme, it takes few seconds to get rendered.
        This is because when we don't use useMemo hook, the entire code is
        re-rendered and the loop get's executed everytime.
      </p>

      <p>
        When we use the hook on the doubled number, the loop is only triggered
        when the input number get's changed. Please refer the source code to
        experience it yourself.
      </p>

      <p>
        To simulate it, comment line number 23-25 and uncomment line number 20.
        Also, enable the loop by uncommenting line 5.{" "}
        <span style={{ fontWeight: "bold" }}>Refer the source code. </span>
        You'll see even if you don't change the number and just change the
        theme, it takes some time for react to render the changes. This doesn't
        happen when using useMemo.
      </p>

      <p>
        When Using useMemo, React only calls the function when it sees that the
        number is different. If it finds that there is no change in the number,
        it understands that the result is going to be same and there is no need
        to re-render the component. Hence, if we don't change the number (& only
        change the theme) we don't experice the delay.
      </p>

      <p>
        Here are some major use cases of useMemo:
        <ul>
          <li>
            When you know that the function that is going to be executed on
            renders is slow but we don't need to execute it on every state
            change. Eg. Configurations codes (if any) are only needed when the
            website loads up for the first time & not at all needed with every
            state/DOM update.
          </li>
          <li>
            In case of referential equality -{" "}
            <a
              href="https://www.youtube.com/watch?v=THL1OPn72vo&t=393s"
              target="_blank"
              rel="noreferrer"
            >
              Watch This Timestamped Video To Understand
            </a>
          </li>
        </ul>
      </p>
      <input
        style={{ padding: "1rem" }}
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <div style={themeStyles}>
        {Number.isNaN(doubledNumber)
          ? "Enter Something"
          : `Doubled Value Is: ${doubledNumber}`}
      </div>
      <button style={{ padding: "0.5rem" }} onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
      <h3>References</h3>
      <a
        href="https://www.youtube.com/watch?v=THL1OPn72vo"
        rel="noreferrer"
        target="_blank"
        style={{ width: "fit-content" }}
      >
        Video
      </a>
      <a
        href="https://github.com/Prateek-Yashaswi/learn-react/blob/master/src/hooks/UseMemoHook.tsx"
        rel="noreferrer"
        target="_blank"
        style={{ width: "fit-content" }}
      >
        Source Code
      </a>
    </div>
  );
};

export default UseMemoHookPage;
