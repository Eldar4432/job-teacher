import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./ResumePage2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import EducationForm from "./EducationForm/EducationForm";

Modal.setAppElement("#root");

const ResumePage2 = ({ onClose, handleNext }) => {
  const [experiences, setExperiences] = useState([
    {
      hiredDate: "",
      resignedDate: "",
      currentPosition: false,
      position: "",
      fullTime: false,
      organization: "",
      responsibilities: "",
      achievements: "",
    },
  ]);

  const handleCheckboxChange = (index, field) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index][field] = !updatedExperiences[index][field];
      return updatedExperiences;
    });
  };

  const handleChange = (index, field, value) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index][field] = value;
      return updatedExperiences;
    });
  };

  const handleAddExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        hiredDate: "",
        resignedDate: "",
        currentPosition: false,
        position: "",
        fullTime: false,
        organization: "",
        responsibilities: "",
        achievements: "",
      },
    ]);
  };

  const handleRemoveExperience = (index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences.splice(index, 1);
      return updatedExperiences;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experiences);
    onClose();
  };
  
  return (
    <div className={styles.ModalContent}>
      <h1 className={styles.ModalTitle}>ОПЫТ РАБОТЫ</h1>
      <form className={styles.ModalForm} onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.ExperienceContainer}>
            <div className={styles.FirstContainer}>
              <label>
                <p className={styles.textP}>Устролися</p>
                <input
                  className={styles.inputs}
                  type="date"
                  value={experience.hiredDate}
                  onChange={(e) =>
                    handleChange(index, "hiredDate", e.target.value)
                  }
                />
              </label>

              <label>
                <p className={styles.textP}>Уволился</p>

                <input
                  className={styles.inputs}
                  type="date"
                  value={experience.resignedDate}
                  onChange={(e) =>
                    handleChange(index, "resignedDate", e.target.value)
                  }
                />
              </label>

              <label className={styles.checkboxLabel}>
                <p className={styles.textP}>По настоящее время</p>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  checked={experience.currentPosition}
                  onChange={() =>
                    handleCheckboxChange(index, "currentPosition")
                  }
                />
              </label>
            </div>
            <div className={styles.MiddleContainer}>
              <label>
                <p className={styles.textP}>Должность</p>

                <input
                  className={styles.inputs}
                  placeholder="пример: учитель физики"
                  type="text"
                  value={experience.position}
                  onChange={(e) =>
                    handleChange(index, "position", e.target.value)
                  }
                />
              </label>

              <label className={styles.checkboxLabel}>
                <p className={styles.textP}>Полная занятость</p>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  checked={experience.fullTime}
                  onChange={() => handleCheckboxChange(index, "fullTime")}
                />
              </label>
            </div>

            <label>
              <p className={styles.textP}>Школа</p>
              <input
                className={styles.inputs}
                placeholder="Например: Средняя общеобразовательная школа имени Жаналы уулу Абдыракман"
                type="text"
                value={experience.organization}
                onChange={(e) =>
                  handleChange(index, "organization", e.target.value)
                }
              />
            </label>

            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => handleRemoveExperience(index)}
            >
              <FontAwesomeIcon icon={faTrash} /> Удалить
            </button>
          </div>
        ))}

        <button
          className={styles.addButton}
          type="button"
          onClick={handleAddExperience}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>

    </div>
  );
};

export default ResumePage2;