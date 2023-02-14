import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";

type tLanguage = "Rus" | "Ua";

const buttonTextData = {
  Rus: "Получить задание",
  Ua: "Отримати завдання",
};

export const Main: FC = () => {
  const [lang, setLang] = useState<tLanguage>("Rus");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [loading]);

  const handleFindTask = () => {
    setLoading(true);
  };
  return (
    <div className="Main">
      <div className="Main-logo">My Lady Slim</div>
      <button className="Main-roll" onClick={handleFindTask} disabled={loading}>
        {loading ? <span className="loader"></span> : buttonTextData[lang]}
      </button>
    </div>
  );
};
