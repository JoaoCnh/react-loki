import React, { Component } from 'react';

import LokiStep from './LokiStep';
import LokiStepContainer from './LokiStepContainer';

import './scss/index.scss';

class Loki extends Component {
    static defaultProps = {
        steps: [],
        backLabel: 'Back',
        nextLabel: 'Next',
        finishlabel: 'Finish',
    }

    state = {
        currentStep: 1,
    }

    _back() {
        this.setState({ currentStep: this.state.currentStep - 1 });
    }

    _next() {
        if (this.state.currentStep === this.props.steps.length) {
            return this.props.onFinish();
        }
        
        this.setState({ currentStep: this.state.currentStep + 1 });
    }

    _renderSteps() {
        if (this.props.renderSteps) {
            return this.props.renderSteps({ 
                currentStep: this.state.currentStep, 
                steps: this.props.steps 
            });
        }

        return this.props.steps.map((step, index) => (
            <LokiStep 
                key={index} 
                currentStep={this.state.currentStep} 
                totalSteps={this.props.steps.length} 
                step={{...step, index: index + 1}} />
        ));
    }

    _renderComponents() {
        return null;
    }

    render() {
        const cantBack = this.state.currentStep === 1;
        const isInFinalStep = this.state.currentStep === this.props.steps.length;

        return (
            <div className="Loki">
                <LokiStepContainer>
                    {this._renderSteps()}
                </LokiStepContainer>
                {this._renderComponents()}
                <div className="Loki-Actions">
                    <button type="button" onClick={this._back.bind(this)} disabled={cantBack}>
                        {this.props.backLabel}
                    </button>
                    <button type="button" onClick={this._next.bind(this)}>
                        {isInFinalStep ? this.props.finishlabel : this.props.nextLabel}
                    </button>
                </div>
            </div>
        );
    }
}

export {
    Loki as default,
    LokiStepContainer,
    LokiStep,
};