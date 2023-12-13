import React, { useState } from "react";
import styles from "./ResumePage3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const ResumePage3 = ({
  index,
  onEducationChange,
}) => {
  const [educations, setEducations] = useState([
    {
      institution: "",
      faculty: "",
      specialty: "",
      graduationYear: "",
      studyForm: "",
    },
  ]);

  const handleAddEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        institution: "",
        faculty: "",
        specialty: "",
        graduationYear: "",
        studyForm: "",
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations.splice(index, 1);
      return updatedEducations;
    });
  };

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
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>ОБРАЗОВАНИЕ</h1>
      <form className={styles.ModalForm}>
        {educations.map((education, educationIndex) => (
          <div key={educationIndex} className={styles.EducationContainer}>
            <label>
              <p className={styles.textP}>Учебное заведение</p>
              <input
                className={styles.inputs}
                placeholder="например: Институт Информационных Технологий"
                type="text"
                value={
                  education && education.institution
                    ? education.institution
                    : ""
                }
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
                value={education && education.faculty ? education.faculty : ""}
                onChange={(e) =>
                  onEducationChange(index, "faculty", e.target.value)
                }
              />
            </label>

            <label>
              <p className={styles.textP}>Специальность</p>
              <input
                className={styles.inputs}
                placeholder="например: Прикладная информатика"
                type="text"
                value={
                  education && education.specialty ? education.specialty : ""
                }
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
                    value:
                      education && education.graduationYear
                        ? education.graduationYear
                        : "",
                    label:
                      education && education.graduationYear
                        ? education.graduationYear.toString()
                        : "",
                  }}
                  onChange={(selectedOption) =>
                    onEducationChange(
                      index,
                      "graduationYear",
                      selectedOption.value
                    )
                  }
                />
              </label>

              <label>
                <p className={styles.textP}>Форма обучения</p>
                <Select
                  options={studyFormOptions}
                  value={{
                    value:
                      education && education.studyForm
                        ? education.studyForm
                        : "",
                    label:
                      education && education.studyForm
                        ? education.studyForm
                        : "",
                  }}
                  onChange={(selectedOption) =>
                    onEducationChange(index, "studyForm", selectedOption.value)
                  }
                />
              </label>
            </div>
            <button
          className={styles.deleteButton}
          type="button"
          onClick={() => handleRemoveEducation(index)}
        >
          <FontAwesomeIcon icon={faTrash} /> Удалить
        </button>
          </div>
        ))}

       
        <button
          className={styles.addButton}
          type="button"
          onClick={handleAddEducation}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default ResumePage3;