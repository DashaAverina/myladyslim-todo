import { useState } from "react";
import { FC } from "react";

type tLanguage = "Rus" | "Ua";

export const Main: FC = () => {
  const [lang, setLang] = useState<tLanguage>("Rus");
  return (
    <div className="Main">
      <button className="Main-roll">
        {lang === "Rus" ? "Получить задание" : "Отримати завдання"}
      </button>
    </div>
  );
};
