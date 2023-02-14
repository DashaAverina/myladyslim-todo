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
  const [taskData, setTaskData] = useState();
  const [curTask, setCurTask] = useState();
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>();

  useEffect(() => {
    if (!loading) return;
    timeout.current = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => timeout.current && clearTimeout(timeout.current);
  }, [loading]);

  const handleFindTask = () => {
    setLoading(true);
    const min = 0;
    const max = data?.length;
    const randomTask = Math.floor(Math.random() * max);

    console.log(randomTask);
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
