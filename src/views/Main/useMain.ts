import { TaskContent } from "lib/tasks";
import { useState, useRef, useEffect } from "react";

export const useMain = (data: TaskContent[]) => {
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
  return { handleFindTask, loading, taskData, setTaskData };
};
