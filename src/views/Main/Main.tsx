import { LanguageChange } from "components/LanguageChange/LanguageChange";
import { TaskPopup } from "components/TaskPopup/TaskPopup";
import { useLang } from "hooks/useLang";
import { TaskContent } from "lib/tasks";
import { FC } from "react";
import { useMain } from "./useMain";

const buttonTextData = {
  Rus: "Получить задание",
  Ua: "Отримати завдання",
};

export const Main: FC<{ data: TaskContent[] }> = ({ data }) => {
  const { handleFindTask, loading, taskData, setTaskData } = useMain(data);
  const { lang, toggleLanguage } = useLang();
  const showTask = !!taskData;
  return (
    <section className="Main">
      {showTask && (
        <TaskPopup
          onClose={() => setTaskData(undefined)}
          updateTaskCallback={handleFindTask}
          data={taskData}
          lang={lang}
          loading={loading}
        />
      )}
      <div className="Main-head">
        <p className="Main-logo">My Lady Slim</p>
        <LanguageChange
          activeLanguage={lang}
          toggleLanguageCallback={toggleLanguage}
        />
      </div>
      <button className="Main-roll" onClick={handleFindTask}>
        {buttonTextData[lang]}
      </button>
    </section>
  );
};
