import React from "react";
import PropTypes from "prop-types";

const LokiStep = ({
  currentStep,
  renderStep,
  totalSteps,
  step,
  isLokiComplete,
  goTo
}) => {
  const isActive = currentStep === step.index;
  const isComplete = currentStep > step.index;
  const isDisabled = !isActive && !isComplete;

  return (
    <li
      className={`LokiStep ${isActive && "LokiStep-Active"} ${(isComplete ||
        isLokiComplete) &&
        "LokiStep-Complete"}`}
    >
      <a
        href="#"
        onClick={event => {
          event.preventDefault();

          if (isDisabled || renderStep === step.index) {
            return;
          }

          goTo(step.index);
        }}
        className={`LokiStep-Link ${isDisabled && "disabled"}`}
        disabled={isDisabled}
      >
        <div className="LokiStep-Icon">{step.icon || step.index}</div>
      </a>
    </li>
  );
};

LokiStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  step: PropTypes.object.isRequired,
  isLokiComplete: PropTypes.bool.isRequired
};

export default LokiStep;
