import { Close } from "assets/Icons/Close";
import { tLanguage } from "hooks/useLang";
import { TaskContent } from "lib/tasks";
import { FC, useEffect, useState } from "react";

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
  const [show, setShow] = useState(false);
  const getClosedBtnText = () =>
    lang === "Rus" ? "Читать дальше" : "Читати далі";
  const getOpenBtnText = () => (lang === "Rus" ? "Свернуть" : "Згорнути");

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
            <div
              className="TaskPopup-image-wrap"
              style={{ backgroundImage: `url("${data?.image}")` }}
            ></div>
            <div className="TaskPopup-text-container">
              <h2 className="TaskPopup-title">
                {lang === "Rus" ? data?.title : data?.title_ukr}
              </h2>
              <p className={`TaskPopup-description ${show ? "full" : ""}`}>
                {lang === "Rus" ? data?.description : data?.description_ukr}
              </p>
              <button
                className="TaskPopup-read-more"
                onClick={() => setShow(!show)}
              >
                {!show ? getClosedBtnText() : getOpenBtnText()}
              </button>
            </div>
            <div className="TaskPopup-control">
              <button className="TaskPopup-cancel" onClick={onClose}>
                {lang === "Rus" ? "Закрыть" : "Закрити"}
              </button>
              <button
                className={`TaskPopup-update ${loading ? "disabled" : ""}`}
                disabled={loading}
                onClick={() => {
                  updateTaskCallback();
                  show && setShow(false);
                }}
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
