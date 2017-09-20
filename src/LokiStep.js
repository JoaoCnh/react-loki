import React from 'react';

const LokiStep = ({ currentStep, totalSteps, step }) => {
    const isActive = currentStep === step.index;
    const isComplete = currentStep > step.index;

    return (
        <li className={`LokiStep ${isActive && 'LokiStep-Active'} ${isComplete && 'LokiStep-Complete'}`}>
            <div className="LokiStep-Icon">{step.icon || step.index}</div>
        </li>
    );
};

export default LokiStep;