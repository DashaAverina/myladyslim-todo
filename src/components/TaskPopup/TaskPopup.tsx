import { Close } from "assets/Icons/Close";
import { tLanguage } from "hooks/useLang";
import { TaskContent } from "lib/tasks";
import { FC } from "react";

interface iTaskPopup {
  onClose: () => void;
  updateTaskCallback: () => void;
  data: TaskContent;
  lang: tLanguage;
  loading: boolean;
}

export const TaskPopup: FC<iTaskPopup> = ({
  data,
  updateTaskCallback,
  onClose,
  lang,
  loading,
}) => {
  console.log(data);

  return (
    <div className="TaskPopup">
      <div className="TaskPopup-content">
        {loading && (
          <div className="TaskPopup-loader">
            <span className="loader"></span>
          </div>
        )}
        {!loading && (
          <>
            <button className="TaskPopup-close" onClick={onClose}>
              <Close className="TaskPopup-close-icon" />
            </button>
            <div className="TaskPopup-image-wrap">
              <img
                className="TaskPopup-image"
                src={data?.image}
                alt="Task-logo"
              />
            </div>
            <div className="TaskPopup-text-container">
              <h2 className="TaskPopup-title">
                {lang === "Rus" ? data?.title : data?.title_ukr}
              </h2>
              <p className="TaskPopup-description">
                {lang === "Rus" ? data?.description : data?.description_ukr}
              </p>
            </div>
            <div className="TaskPopup-control">
              <button className="TaskPopup-cancel" onClick={onClose}>
                {lang === "Rus" ? "Закрыть" : "Закрити"}
              </button>
              <button
                className={`TaskPopup-update ${loading ? "disabled" : ""}`}
                disabled={loading}
                onClick={updateTaskCallback}
              >
                {lang === "Rus" ? "Обновить" : "Оновити"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
