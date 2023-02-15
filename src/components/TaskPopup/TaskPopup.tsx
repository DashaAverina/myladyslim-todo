import { TaskContent } from "lib/tasks";
import { FC } from "react";

interface iTaskPopup {
  onClose: () => void;
  updateTaskCallback: () => void;
  data: TaskContent;
}

export const TaskPopup: FC<iTaskPopup> = ({
  data,
  updateTaskCallback,
  onClose,
}) => {
  return (
    <div className="TaskPopup">
      <div className="TaskPopup-content"></div>
    </div>
  );
};
