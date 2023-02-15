import { TaskPopup } from "components/TaskPopup/TaskPopup";
import { TaskContent } from "lib/tasks";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";

type tLanguage = "Rus" | "Ua";

const buttonTextData = {
  Rus: "Получить задание",
  Ua: "Отримати завдання",
};

export const Main: FC<{ data: TaskContent[] }> = ({ data }) => {
  const [lang, setLang] = useState<tLanguage>("Rus");
  const [loading, setLoading] = useState(false);
  const [taskData, setTaskData] = useState<TaskContent>();
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>();

  useEffect(() => {
    if (!loading) return;
    timeout.current = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => timeout.current && clearTimeout(timeout.current);
  }, [loading]);

  const handleFindTask = () => {
    if (!data) return;
    setLoading(true);

    const dataCopy = data.slice();
    const filteredData = dataCopy.filter(
      (item) => item.slug !== taskData?.slug
    );

    const max = filteredData?.length;
    const randomIndex = Math.floor(Math.random() * max);

    setTaskData(filteredData[randomIndex]);
  };

  const showTask = !loading && !!taskData;
  return (
    <div className="Main">
      {showTask && (
        <TaskPopup
          onClose={() => setTaskData(undefined)}
          updateTaskCallback={handleFindTask}
          data={taskData}
        />
      )}
      <div className="Main-logo">My Lady Slim</div>
      <button className="Main-roll" onClick={handleFindTask} disabled={loading}>
        {loading ? <span className="loader"></span> : buttonTextData[lang]}
      </button>
    </div>
  );
};
