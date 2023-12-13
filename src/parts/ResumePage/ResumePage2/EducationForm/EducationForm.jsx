import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../ResumePage2.module.css";
import Select from "react-select";

const EducationForm = ({
  education,
  index,
  onEducationChange,
  onRemoveEducation,
}) => {
  const graduationYearOptions = Array.from(
    { length: 45 },
    (_, i) => 1980 + i
  ).map((year) => ({
    value: year,
    label: year.toString(),
  }));

  const studyFormOptions = [
    { value: "Очная", label: "Очная" },
    { value: "Заочная", label: "Заочная" },
  ];

  return (
    <div className={styles.EducationContainer}>
      <label>
        <p className={styles.textP}>Учебное заведение</p>
        <input
          className={styles.inputs}
          placeholder="например: КГТУ"
          type="text"
          value={education.institution}
          onChange={(e) =>
            onEducationChange(index, "institution", e.target.value)
          }
        />
      </label>

      <label>
        <p className={styles.textP}>Факультет</p>

        <input
          className={styles.inputs}
          placeholder="например: Институт Информационных Технологий"
          type="text"
          value={education.faculty}
          onChange={(e) => onEducationChange(index, "faculty", e.target.value)}
        />
      </label>

      <label>
        <p className={styles.textP}>Специальность</p>

        <input
          className={styles.inputs}
          placeholder="например: Прикладная информатика"
          type="text"
          value={education.specialty}
          onChange={(e) =>
            onEducationChange(index, "specialty", e.target.value)
          }
        />
      </label>
      <div className={styles.yearFlex}>
        <label>
          <p className={styles.textP}>Год окончания</p>
          <Select
            options={graduationYearOptions}
            value={{
              value: education.graduationYear,
              label: education.graduationYear.toString(),
            }}
            onChange={(selectedOption) =>
              onEducationChange(index, "graduationYear", selectedOption.value)
            }
          />
        </label>

        <label>
          <p className={styles.textP}>Форма обучения</p>
          <Select
            options={studyFormOptions}
            value={{ value: education.studyForm, label: education.studyForm }}
            onChange={(selectedOption) =>
              onEducationChange(index, "studyForm", selectedOption.value)
            }
          />
        </label>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => onRemoveEducation(index)}
      >
        <FontAwesomeIcon icon={faTrash} /> Удалить
      </button>
    </div>
  );
};

export default EducationForm;
