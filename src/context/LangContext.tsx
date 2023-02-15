import { createContext } from "vm";

const LangContext = createContext({});

export const LangContextProvider = ({ children }) => {
  return <LangContext.Provider value={{}}> {children}</LangContext.Provider>;
};
