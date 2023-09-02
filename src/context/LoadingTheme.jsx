import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export default useLoading = () => {
  return useContext(LoadingContext);
};

const LoadingTheme = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading((prevMode) => !prevMode);
  };

  const options = {
    isLoading,
    toggleLoading,
  };

  return (
    <LoadingContext.Provider value={options}>
      {children}
    </LoadingContext.Provider>
  );
};
