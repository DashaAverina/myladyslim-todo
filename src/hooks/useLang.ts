import { useEffect, useState } from "react";

export type tLanguage = "Rus" | "Ua";

const langKey = "lang";

export const useLang = () => {
  const [lang, setLang] = useState<tLanguage>("Rus");

  useEffect(() => {
    const lang = sessionStorage.getItem(langKey);
    if (!lang) return sessionStorage.setItem(langKey, "Rus");

    setLang(lang as tLanguage);
  }, []);

  const toggleLanguage = (newLang: tLanguage) => {
    if (lang === newLang) return;
    setLang(newLang);
    sessionStorage.setItem(langKey, newLang);
  };

  return { lang, setLang, toggleLanguage };
};
