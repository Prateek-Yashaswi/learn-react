import { CSSProperties, useCallback, useState } from "react";
import MyList from "./MyList";
import { CALLBACK_REFERENCES } from "./References";
import Links from "../../components/Links";

const defaultThemeStyles: CSSProperties = {
  backgroundColor: "wheat",
  height: "10rem",
};

const darkThemeStyles: CSSProperties = {
  backgroundColor: "black",
  height: "10rem",
};

const UseCallbackPage = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  const getItems = useCallback(
    (incrementor: number) => {
      return [
        number + incrementor,
        number + incrementor + 1,
        number + incrementor + 2,
      ];
    },
    [number]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <p>
        The major difference between useMemo & useCallback is that useMemo
        memoizes the value whereas useCallback memoizes the function iteself.
      </p>
      <p>
        The only major usecase of using useCallback is when dealing with
        referrential equality.
      </p>
      <div>
        <h3>This Page Is For Understanding React useCallback Hook.</h3>
        <Links items={CALLBACK_REFERENCES} />
      </div>
      <input
        style={{ padding: "1rem", fontSize: "1rem" }}
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <button
        style={{ padding: "1rem", fontSize: "1rem" }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <div style={darkTheme ? darkThemeStyles : defaultThemeStyles} />
      <div>
        <h3>Next 3 Numbers Would Be: </h3>
        <MyList getItems={getItems} />
      </div>
    </div>
  );
};

export default UseCallbackPage;
