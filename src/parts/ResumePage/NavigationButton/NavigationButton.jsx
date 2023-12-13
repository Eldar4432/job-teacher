import React from 'react';
import styles from "../ResumePage.module.css"

const NavigationButtons = ({ currentStep, handleNext, setCurrentStep }) => {
  return (
    <div className={styles.ButtonContainer}>
      {currentStep > 1 && (
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
          className={styles.BackButton}
        >
          Назад
        </button>
      )}
      {currentStep < 5 && (
        <button
          className={styles.NextButton}
          type="button"
          onClick={handleNext}
        >
          Далее
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
