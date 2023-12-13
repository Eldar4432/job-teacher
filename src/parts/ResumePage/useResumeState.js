import { useState } from "react";

const useResumeState = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    languages: [],
    languageProficiency: {},
    education: "",
    diploma: "",
    certificates: "",
    teachingSubject: "",
    workExperience: "",
    skills: "",
    salaryExpectation: "",
    profileImage: "https://w7.pngwing.com/pngs/390/453/png-transparent-basic-add-new-create-plus-user-avatar-office-icon-thumbnail.png",
    workSchedule: "",
    employmentSchedule: "",
    relocation: "",
    readyToTravel: false,
    phone: "",
    email: "",
    city: "",
    birthDate: null,
    gender: "",
    maritalStatus: "",
    citizenship: "",
  });

  const workScheduleOptions = [
    { value: "fullTime", label: "Полный день" },
    { value: "shiftWork", label: "Сменный график" },
    { value: "flexible", label: "Гибкий график" },
    { value: "remote", label: "Удаленная работа" },
  ];

  const employmentScheduleOptions = [
    { value: "fullEmployment", label: "Полная" },
    { value: "shiftEmployment", label: "Частичная" },
    { value: "flexibleEmployment", label: "Проектная" },
    { value: "remoteEmployment", label: "Стажировка" },
    { value: "volonterEmployment", label: "Волонтерство" },
  ];

  const educationOptions = [
    { value: "secondary", label: "Среднее" },
    { value: "incompleteHigher", label: "Неоконченное высшее" },
    { value: "higher", label: "Высшее" },
  ];

  const citizenshipOptions = [
    { value: "kyrgyzstan", label: "Кыргызстан" },
    { value: "other", label: "Другое" },
  ];

  const maritalStatusOptions = [
    { value: "single", label: "Холост/Не замужем" },
    { value: "married", label: "Женат/Замужем" },
  ];

  const proficiencyLevels = ["Начальный", "Средний", "Продвинутый"];

  const options = [
    { value: "yes", label: "Да" },
    { value: "no", label: "Нет" },
  ];

  const [relocationOptions] = useState([
    { value: "yes", label: "Да" },
    { value: "no", label: "Нет" },
  ]);

  const [readyToTravelOptions] = useState([
    { value: true, label: "Да" },
    { value: false, label: "Нет" },
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Добавьте здесь вашу логику для отправки данных, например, на сервер
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    setFormData,
    workScheduleOptions,
    employmentScheduleOptions,
    educationOptions,
    citizenshipOptions,
    maritalStatusOptions,
    proficiencyLevels,
    options,
    handleImageChange,
    handleSubmit,
    handleChange,
    cityOptions,
    readyToTravelOptions,
    relocationOptions
  };
};


export const maritalStatusOptions = [
  { value: "single", label: "Холост/Не замужем" },
  { value: "married", label: "Женат/Замужем" },
  { value: "divorced", label: "Разведен(а)" },
  // Другие опции
];

const cityOptions = [
  { value: 'Талас', label: 'Талас' },
  { value: 'Нарын', label: 'Нарын' },
  { value: 'Ысык-Көл', label: 'Ысык-Көл' },
  { value: 'Чуй', label: 'Чуй' },
  { value: 'Ош', label: 'Ош' },
  { value: 'Баткен', label: 'Баткен' },
  { value: 'Жалал-Абад', label: 'Жалал-Абад' },
  { value: 'Бишкек',  label: 'Бишкек'}
];
export default useResumeState;
