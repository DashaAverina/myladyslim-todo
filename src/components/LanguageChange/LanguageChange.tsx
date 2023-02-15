import { tLanguage } from "hooks/useLang";
import { FC } from "react";

interface iLanguageChange {
  toggleLanguageCallback: () => void;
  activeLanguage: tLanguage;
}

export const LanguageChange: FC<iLanguageChange> = ({
  activeLanguage,
  toggleLanguageCallback,
}) => {
  return (
    <div className="LanguageChange">
      <button
        className={`LanguageChange-btn ${
          activeLanguage === "Rus" ? "active" : ""
        }`}
        onClick={toggleLanguageCallback}
      >
        Русский
      </button>
      <button
        className={`LanguageChange-btn ${
          activeLanguage === "Ua" ? "active" : ""
        }`}
        onClick={toggleLanguageCallback}
      >
        Українська
      </button>
    </div>
  );
};
