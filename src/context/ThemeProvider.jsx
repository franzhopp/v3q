import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState("bg-FFF6E4");
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const options = {
    isDarkMode,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={options}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
