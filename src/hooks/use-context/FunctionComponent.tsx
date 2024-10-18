import "./Component.styles.css";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div className={`container-div ${darkTheme ? "dark" : "light"}`}>
      <p>This Is A Functional Component</p>
      <p>Current Theme is: {darkTheme ? "Dark" : "Light"}</p>
      <button className="context-root-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default FunctionComponent;
