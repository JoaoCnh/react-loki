import React, { Component } from 'react';

import FaUser from 'react-icons/lib/fa/user';
import FaLock from 'react-icons/lib/fa/lock';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import Loki from '../../../src';

import UserForm from './UserForm';

export default class ComplexDemo extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            receiveNewsletter: false,
        },
    }

    render() {
        const complexSteps = [
            {
                label: 'Step 1',
                icon: <FaUser />,
                component: <UserForm user={this.state.user} />,
            },
            {
                label: 'Step 2',
                icon: <FaLock />,
                component: <h1>step 2</h1>,
            },
            {
                label: 'Step 3',
                icon: <FaEnvelope />,
                component: <h1>step 3</h1>,
            },
        ];

        return (
            <div className="Demo">
                <h1>Complex Formik Demo</h1>
                <Loki
                    steps={complexSteps}
                    noActions />
            </div>
        );
    }
}