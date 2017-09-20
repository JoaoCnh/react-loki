import React from 'react';
import PropTypes from 'prop-types';

const LokiStep = ({ currentStep, totalSteps, step }) => {
    const isActive = currentStep === step.index;
    const isComplete = currentStep > step.index;

    return (
        <li className={`LokiStep ${isActive && 'LokiStep-Active'} ${isComplete && 'LokiStep-Complete'}`}>
            <div className="LokiStep-Icon">{step.icon || step.index}</div>
        </li>
    );
};

LokiStep.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    step: PropTypes.object.isRequired,
};

export default LokiStep;