import { useState } from "react";
import { createContext } from "vm";

const LangContext = createContext({});

type tLanguage = "Rus" | "Ua";

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState<tLanguage>("Rus");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
