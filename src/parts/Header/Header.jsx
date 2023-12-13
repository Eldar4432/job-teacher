import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Select from "react-select";
import Button from "../../elements/Button";
import BrandIcon from "../../parts/BrandIcon/BrandIcon";
import styles from "./Header.module.css";

const Header = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
    { value: "ky", label: "Кыргызча" },
  ];

  const { location } = props;
  const [isCollapse, setIsCollapse] = useState(false);
  const path = location;

  const [activeLanguage, setActiveLanguage] = useState(null);

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setActiveLanguage(language);
  };

  return (
    <header className={styles.header}>
      <Fade>
        <div className={`flex justify-between ${styles.headerContainer}`}>
          <BrandIcon />
        </div>

        <ul className={`hidden ${styles.headerLinks} lg:flex flex-row mt-0`}>
          <li>
            <Button
              className={`${styles.link} ${
                path === "/" ? styles.activeLink : ""
              }`}
              type="link"
              href="/"
            >
              {t("home")}
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${styles.link} ${
                path === "/team" ? styles.activeLink : ""
              }`}
              type="link"
              href="/jobs"
            >
              {t("job")}
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${styles.link} ${
                path === "/resume" ? styles.activeLink : ""
              } ${styles.buttonHeader}`}
              type="link"
              href="/resume"
            >
              {t("resume")}
            </Button>
          </li>
          <li>
            <Button
              className={`${styles.buttonHeader} ${styles.link}`}
              type="link"
              href="/login"
            >
              {t("login")}
            </Button>
          </li>
        </ul>

        <Select
          options={languageOptions}
          placeholder="Кыргызча"
          value={languageOptions.find(
            (option) => option.value === activeLanguage
          )}
          onChange={(selectedOption) =>
            handleLanguageChange(selectedOption.value)
          }
          className={`${styles.languageSelect} ${styles.fixedPosition}`}
        />
      </Fade>
    </header>
  );
};

export default Header;
