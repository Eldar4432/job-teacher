import React, { useState } from "react";
import styles from "./ResumePage5.module.css";

const ResumePage5 = () => {
  const [languages, setLanguages] = useState("");

  const handleLanguagesChange = (e) => {
    setLanguages(e.target.value);
  };

  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>
        ИНОСТРАННЫЕ ЯЗЫКИ И КОМПЬЮТЕРНЫЕ НАВЫКИ
      </h1>

      <label htmlFor="languagesInput">Иностранные языки:</label>
      <input
        type="text"
        id="languagesInput"
        value={languages}
        onChange={handleLanguagesChange}
        className={styles.inputs}
      />

      <div className={styles.ComputerSkillsSection}>
        <h2>Компьютерные навыки:</h2>
        <label>
          <input type="checkbox" />
          Печать, сканирование, копирование документов
        </label>
        <label>
          <input type="checkbox" />
          Интернет
        </label>
        <label>
          <input type="checkbox" />
          Электронная почта
        </label>
        <label>
          <input type="checkbox" />
          Microsoft Word
        </label>
        <label>
          <input type="checkbox" />
          Microsoft Excel
        </label>
        <label>
          <input type="checkbox" />
          Microsoft Power Point
        </label>
      </div>
    </div>
  );
};

export default ResumePage5;