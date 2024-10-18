import "./Component.styles.css";
import FunctionComponent from "./FunctionComponent";
import { ThemeProvider, useThemeUpdate } from "./ThemeContext";

const REFERENCES: Array<{ label: string; url: string }> = [
  {
    label: "Video Tutorial",
    url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
  },
  {
    label: "Source Code",
    url: "https://github.com/Prateek-Yashaswi/learn-react/tree/master/src/hooks/use-context",
  },
];

const ToggleThemeButton = () => {
  const toggleTheme = useThemeUpdate();

  return (
    <button onClick={toggleTheme} className="context-root-button">
      This Button Is Not In Our Functional Component
    </button>
  );
};

const UseContextHookPage = () => {
  return (
    <div className="context-root">
      <ThemeProvider>
        <h3 className="context-root-heading">
          This Page Is For Understanding React useContext Hook.
        </h3>
        <p>
          Following is the implementation of useContext in functional
          componenet. Functional Component uses useContext to understand what is
          the current state of the theme.
        </p>
        <p>
          In the source code, we've created a ThemeContext.tsx which handles
          ThemeContext & ThemeUpdateContext in order to get the current theme &
          update theme respectively. We have created custom hooks that can be
          used throughout our application in order to extract/update the theme.
          Please go through the source code.
        </p>
        <FunctionComponent />
        <ToggleThemeButton />
        <div className="references-div">
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
      </ThemeProvider>
    </div>
  );
};

export default UseContextHookPage;
