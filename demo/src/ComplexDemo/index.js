import React, { Component } from 'react';

import FaUser from 'react-icons/lib/fa/user';
import FaLock from 'react-icons/lib/fa/lock';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import Loki from '../../../src';

import UserForm from './UserForm';
import PasswordForm from './PasswordForm';
import NewsletterForm from './NewsletterForm';

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

    _mergeValues(values) {
        this.setState({
            user: {
                ...this.state.user,
                ...values
            },
        });
    }

    _finishWizard() {
        const data = JSON.stringify(this.state.user);
        alert(`This is your data ${data}`);
    }

    render() {
        const complexSteps = [
            {
                label: 'Step 1',
                icon: <FaUser className="mt-3" />,
                component: <UserForm user={this.state.user} />,
            },
            {
                label: 'Step 2',
                icon: <FaLock className="mt-3" />,
                component: <PasswordForm user={this.state.user} />,
            },
            {
                label: 'Step 3',
                icon: <FaEnvelope className="mt-3" />,
                component: <NewsletterForm user={this.state.user} />,
            },
        ];

        return (
            <div className="Demo">
                <h1>Complex Formik Demo</h1>
                <Loki
                    steps={complexSteps}
                    onNext={this._mergeValues.bind(this)}
                    onBack={this._mergeValues.bind(this)}
                    onFinish={this._finishWizard.bind(this)}
                    noActions />
            </div>
        );
    }
}