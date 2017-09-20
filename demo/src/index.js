import React, { Component } from 'react';
import { render } from 'react-dom';
import FaUser from 'react-icons/lib/fa/user';
import FaPaw from 'react-icons/lib/fa/paw';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import Loki from '../../src'

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

const complexSteps = [
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

class Demo extends Component {
    _onFinishCallback() {
        alert('Loki has finished!');
    }

    _customStepRenderer({ currentStep }) {
        const steps = simpleSteps.map((step, index) => {
            const isActive = currentStep === index + 1;
            return <li className="custom-step">{`${step.label} ${isActive && 'active'}`}</li>
        });
        
        return <ul className="custom-step-renderer">{steps}</ul>;
    }

    _submitDataToServer() {
        alert('submitting data to server');
    }

    render() {
        return (
            <div>
                <h1>Simple Demo</h1>
                <Loki 
                    steps={simpleSteps} 
                    onFinish={this._onFinishCallback.bind(this)} />
                <hr />
                <h1>Custom Steps Demo</h1>
                <Loki 
                    steps={simpleSteps}
                    renderSteps={this._customStepRenderer.bind(this)}
                    onFinish={this._onFinishCallback.bind(this)} />
                <hr />
                <h1>Complex Formik Demo</h1>
                <Loki
                    steps={complexSteps}
                    onFinish={this._submitDataToServer.bind(this)} />
            </div>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));
