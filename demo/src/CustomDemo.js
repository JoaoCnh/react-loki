import React from 'react';

import FaUser from 'react-icons/lib/fa/user';
import FaPaw from 'react-icons/lib/fa/paw';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import Loki from '../../src';

const customSteps = [
    {
        label: 'Step 1',
        icon: <FaUser />,
        component: <h1>step 1</h1>,
    },
    {
        label: 'Step 2',
        icon: <FaPaw />,
        component: <h1>step 2</h1>,
    },
    {
        label: 'Step 3',
        icon: <FaEnvelope />,
        component: <h1>step 3</h1>,
    },
];

const CustomDemo = () => {
    const _customRenderer = ({ currentStep }) => {
        const steps = customSteps.map((step, index) => {
            const isActive = currentStep === index + 1;
            return <li key={index} className="custom-step">{`${step.label} ${isActive && 'active'}`}</li>
        });

        return <ul className="custom-step-renderer">{steps}</ul>;
    };

    const _onFinish = () => {
        alert('Custom Demo Finished');
    };

    return (
        <div className="Demo">
            <h1>Custom Demo</h1>
            <Loki
                steps={customSteps}
                renderSteps={_customRenderer}
                onFinish={_onFinish} />
        </div>
    );
};

export default CustomDemo;