import { createContext, ReactNode, useContext, useState } from "react";

const ThemeContext = createContext<boolean>(false);
const ThemeUpdateContext = createContext<() => void>(() => {});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export { ThemeProvider, useTheme, useThemeUpdate };

