import React from 'react';
import PropTypes from 'prop-types';

const LokiStep = ({ currentStep, totalSteps, step, isLokiComplete }) => {
    const isActive = currentStep === step.index;
    const isComplete = currentStep > step.index;

    return (
        <li className={`LokiStep ${isActive && 'LokiStep-Active'} ${(isComplete || isLokiComplete) && 'LokiStep-Complete'}`}>
            <div className="LokiStep-Icon">{step.icon || step.index}</div>
        </li>
    );
};

LokiStep.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    step: PropTypes.object.isRequired,
    isLokiComplete: PropTypes.bool.isRequired,
};

export default LokiStep;