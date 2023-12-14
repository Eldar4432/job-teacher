import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./ResumePage.module.css";
import ResumePage1 from "./ResumePage1/ResumePage1";
import ResumePage2 from "./ResumePage2/ResumePage2";
import ResumePage3 from "./ResumePage3/ResumePage3";
import ResumePage4 from "./ResumePage4/ResumePage4";
import ResumePage5 from "./ResumePage5/ResumePage5";
import useResumeState from "./useResumeState";
import IndicatorForm from "./IndicatorForm/IndicatorForm";
import { Fade } from "react-reveal";
import NavigationButtons from "./NavigationButton/NavigationButton";

Modal.setAppElement("#root");

const ResumePage = ({ onClose }) => {
  const {} = useResumeState();

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // оюработка данных
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Fade bottom>
      <div className={styles.ModalContent}>
        <IndicatorForm currentStep={currentStep} />
        <form className={styles.ModalForm} onSubmit={handleSubmit}>
          {currentStep === 1 && <ResumePage1 handleNext={handleNext} />}
          {currentStep === 2 && <ResumePage2 handleNext={handleNext} />}
          {currentStep === 3 && <ResumePage3 handleNext={handleNext} />}
          {currentStep === 4 && <ResumePage4 handleNext={handleNext} />}
          {currentStep === 5 && <ResumePage5 handleNext={handleNext} />}
          <NavigationButtons
            currentStep={currentStep}
            handleNext={handleNext}
            setCurrentStep={setCurrentStep}
          />
        </form>
      </div>
    </Fade>
  );
};

export default ResumePage;
