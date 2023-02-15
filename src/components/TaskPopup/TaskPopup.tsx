import { Close } from "assets/Icons/Close";
import { tLanguage } from "hooks/useLang";
import { TaskContent } from "lib/tasks";
import { FC } from "react";

interface iTaskPopup {
  onClose: () => void;
  updateTaskCallback: () => void;
  data: TaskContent;
  lang: tLanguage;
}

export const TaskPopup: FC<iTaskPopup> = ({
  data,
  updateTaskCallback,
  onClose,
}) => {
  console.log(data);

  return (
    <div className="TaskPopup">
      <div className="TaskPopup-content">
        <button className="TaskPopup-close" onClick={onClose}>
          <Close className="TaskPopup-close-icon" />
        </button>
      </div>
    </div>
  );
};
