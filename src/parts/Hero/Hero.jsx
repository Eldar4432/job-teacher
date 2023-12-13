import React from "react";
import Fade from "react-reveal/Fade";
import BuildWebsite from "../../assets/images/8600.jpg";
import Button from "../../elements/Button";
import styles from "./Hero.module.css";
import useResumeState from "../ResumePage/useResumeState";
import Select from "react-select";

import { useTranslation } from "react-i18next";
export default function Hero(props) {
  const { formData, setFormData, cityOptions } = useResumeState();
  const { t } = useTranslation();

  const handleCityChange = (selectedCity) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      city: selectedCity,
    }));
  };

  return (
    <div className={styles.hero}>
      <Fade bottom>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroH1}>{t("heroH1")}</h1>
          <p className={styles.heroText}>{t("heroUnderH1")} </p>
          <label className={styles.FormLabel}>
            Регион или город проживания:
            <Select
              options={cityOptions}
              value={cityOptions.find(
                (option) => option.value === formData.city
              )}
              onChange={(selectedOption) =>
                handleCityChange(selectedOption.value)
              }
              className={styles.FormSelect}
              placeholder={t("placeholder")}
              isSearchable
            />
          </label>{" "}
          <Button className={styles.heroButton} type="link" href="/jobs">
            {t("findJob")}
          </Button>
        </div>

        <div className={styles.flexContainer}>
          <img
            className={styles.imgHero}
            src={BuildWebsite}
            alt="Build Website"
          />
        </div>
      </Fade>
    </div>
  );
}
