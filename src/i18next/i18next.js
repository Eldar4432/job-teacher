import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      job: "Vacancies",
      resume: "Create Resume",
      login: "Login",
      heroH1: "Search for reserve teachers",
      heroUnderH1: "Under the Ministry of Education and Science of the Kyrgyz Republic",
      placeholder: "Subject,  profession,  school,  region",
      findJob: "to find a job",
      forgotLogin: "forgot password?",
      clickForgot: "click here!",
      h1Service: "Recently added vacancies",
    },
  },
  ru: {
    translation: {
      home: "Главное",
      job: "Вакансии",
      resume: "Создать резюме",
      login: "Войти",
      heroH1: "Поиск резервных учителей",
      heroUnderH1: "При Министерстве образования и науки Кыргызской Республики",
      placeholder: "Предмет,  профессия,  школа,  регион",
      findJob: "Найти работу",
      forgotLogin: "Забыл пароль?",
      clickForgot: "Жми сюда!",
      h1Service: "Недавно добавленные вакансии"
    },
  },
  ky: {
    translation: {
      home: "Башкы бет",
      job: "Жумуштар",
      resume: " Резюме жасоо",
      login: "Кируу",
      heroH1: "Запастагы мугалимдерди издөө",
      heroUnderH1: "Кыргыз Республикасынын Билим берүү жана илим Министрлиги",
      placeholder: "Сабак,  кесип,  мектеп,  аймак",
      findJob: "Жумуш издөө",
      forgotLogin: "Паролду унуттунбу?",
      clickForgot: "бул жакты бас!",
      h1Service: "Жаны кошулган бош орундар"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ky",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;