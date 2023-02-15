import { useEffect, useState } from "react";

export type tLanguage = "Rus" | "Ua";

const langKey = "lang";

export const useLang = () => {
  const [lang, setLang] = useState<tLanguage>("Rus");

  useEffect(() => {
    const lang = sessionStorage.getItem(langKey);
    if (!lang) return sessionStorage.setItem(langKey, lang);

    setLang(lang as tLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "Rus" ? "Ua" : "Rus";
    setLang(newLang);
    sessionStorage.setItem(langKey, newLang);
  };

  return { lang, setLang, toggleLanguage };
};
