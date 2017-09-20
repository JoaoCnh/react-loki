import React from 'react';

import Loki from '../../src';

const simpleSteps = [
    {
        label: 'Step 1',
        component: <h1>step 1</h1>,
    },
    {
        label: 'Step 2',
        component: <h1>step 2</h1>,
    },
];

const SimpleDemo = () => {
    const _onFinish = () => {
        alert('Simple Demo Finished');
    };

    return (
        <div className="Demo">
            <h1>Simple Demo</h1>
            <Loki
                steps={simpleSteps}
                onFinish={_onFinish} />
        </div>
    );
}

export default SimpleDemo;