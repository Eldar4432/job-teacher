import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import styles from "./ResumePage1.module.css";
import "react-datepicker/dist/react-datepicker.css";
import useResumeState from "../useResumeState";

Modal.setAppElement("#root");

const ResumePage1 = ({ onClose }) => {
  const {
    formData,
    setFormData,
    workScheduleOptions,
    employmentScheduleOptions,
    educationOptions,
    maritalStatusOptions,
    handleImageChange,
    handleChange,
    cityOptions,
    relocationOptions,
    readyToTravelOptions,
  } = useResumeState();

  const [] = useState(1);

  // изменения города
  const handleCityChange = (selectedCity) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      city: selectedCity,
    }));
  };

  const [pin, setPin] = useState('');

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/\D/g, '').slice(0, 14);

    if (/^[1-2]?$/.test(inputValue[0])) {
      setPin(inputValue);
    }
  };
  
  return (
    <div>
      <h1>ЗАПОЛНИТЕ РЕЗЮМЕ</h1>
      <div className={styles.ModalFormFlex}>
        <div className={styles.NameRow}>
          <label>
            <p className={styles.textP}>Фамилия</p>
            <input
              className={styles.inputs}
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder="Асанов"
            />
          </label>

          <label>
            <p className={styles.textP}>Имя</p>
            <input
              className={styles.inputs}
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder="Асан"
            />
          </label>

          <label>
            <p className={styles.textP}>Отчество</p>
            <input
              className={styles.inputs}
              required
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={(e) =>
                setFormData({ ...formData, middleName: e.target.value })
              }
              placeholder="Асанович"
            />
          </label>
        </div>
        <div
          className={styles.ProfileImageContainer}
          onClick={() => document.getElementById("profileImageInput").click()}
        >
          <img
            required
            src={formData.profileImage}
            alt="Profile"
            className={styles.ProfileImage}
          />
          <input
            required
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="profileImageInput"
          />
        </div>
      </div>

      <label>
        <p className={styles.textP}>ПИН</p>
        <input
          className={styles.inputs}
          value={pin}
          maxLength="14"
          placeholder="например: 12345678901234"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label>
        <p className={styles.textP}>Должность</p>
        <input
          className={styles.inputs}
          required
          type="text"
          name="teachingSubject"
          value={formData.teachingSubject}
          onChange={(e) =>
            setFormData({
              ...formData,
              teachingSubject: e.target.value,
            })
          }
          placeholder="например: кыргызский язык"
        />
      </label>
      <div className={styles.FormLabelContainer}>
        <label className={styles.FormLabel}>
          <p className={styles.textP}>Занятость</p>
          <Select
            required
            options={employmentScheduleOptions}
            value={employmentScheduleOptions.find(
              (option) => option.value === formData.employmentSchedule
            )}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                employmentSchedule: selectedOption.value,
              }))
            }
            placeholder="Выберите..."
          />
        </label>

        <label className={styles.FormLabel}>
          <p className={styles.textP}>График работы</p>
          <Select
            required
            options={workScheduleOptions}
            value={workScheduleOptions.find(
              (option) => option.value === formData.workSchedule
            )}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                workSchedule: selectedOption.value,
              }))
            }
            placeholder="Выберите..."
          />
        </label>
      </div>

      <div className={styles.ContactInfo}>
        <label>
          <p className={styles.textP}>Телефон</p>
          <input
            className={styles.inputs}
            required
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Введите номер телефона..."
          />
        </label>

        <label>
          <p className={styles.textP}>Почта</p>
          <input
            className={styles.inputs}
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Введите адрес электронной почты..."
          />
        </label>
      </div>
      <div className={styles.FormRow}>
        <label className={styles.FormLabel}>
          <p className={styles.textP}>Образование</p>
          <Select
            required
            options={educationOptions}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                education: selectedOption.value,
              }))
            }
            value={educationOptions.find(
              (option) => option.value === formData.education
            )}
            className={styles.FormSelect}
            placeholder="Выберите..."
          />
        </label>

        <label>
          <p className={styles.textP}>График работы</p>
          <Select
            required
            options={workScheduleOptions}
            value={formData.workSchedule}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                workSchedule: selectedOption,
              }))
            }
            placeholder="Выберите..."
          />
        </label>
      </div>

      <div className={styles.FormRow}>
        <label className={styles.FormLabel}>
          <p className={styles.textP}>Регион или город проживание</p>
          <Select
            options={cityOptions}
            value={cityOptions.find((option) => option.value === formData.city)}
            onChange={(selectedOption) =>
              handleCityChange(selectedOption.value)
            }
            className={styles.FormSelect}
            placeholder="Введите город..."
            isSearchable
          />
        </label>

        <label className={styles.FormLabel}>
          <p className={styles.textP}>Возможность переезда</p>

          <Select
            required
            placeholder="Выберите..."
            name="relocation"
            value={relocationOptions.find(
              (option) => option.value === formData.relocation
            )}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                relocation: selectedOption.value,
              }))
            }
            options={relocationOptions}
            className={styles.FormSelect}
          />
        </label>
      </div>
      <div className={styles.MiddleContainer}>
        <label>
          <p className={styles.textP}>Семейное положение</p>
          <Select
            placeholder="Выберите..."
            name="maritalStatus"
            value={maritalStatusOptions.find(
              (option) => option.value === formData.maritalStatus
            )}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                maritalStatus: selectedOption.value,
              }))
            }
            options={maritalStatusOptions}
            className={styles.FormSelect}
          />
        </label>

        <label className={styles.FormLabel}>
          <p className={styles.textP}>Готовность к командировке</p>
          <Select
            placeholder="Выберите..."
            name="readyToTravel"
            value={readyToTravelOptions.find(
              (option) => option.value === formData.readyToTravel
            )}
            onChange={(selectedOption) =>
              setFormData((prevData) => ({
                ...prevData,
                readyToTravel: selectedOption.value,
              }))
            }
            options={readyToTravelOptions}
            className={styles.FormSelect}
          />
        </label>
      </div>
    </div>
  );
};

export default ResumePage1;
