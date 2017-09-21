import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { LokiStep } from 'src/';

const simpleSteps = [
    {
        label: 'Step 1',
        component: <h1>step 1</h1>,
        index: 1,
    },
    {
        label: 'Step 2',
        component: <h1>step 2</h1>,
        index: 2,
    },
];

describe('LokiStep', () => {
    let node
    let validLokiStep
    let completeLokiStep

    beforeEach(() => {
        node = document.createElement('div')
        validLokiStep = <LokiStep currentStep={1} totalSteps={2} step={simpleSteps[0]} isLokiComplete={false} />
        completeLokiStep = <LokiStep currentStep={2} totalSteps={2} step={simpleSteps[1]} isLokiComplete={true} />
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('renders an li by default', () => {
        render(validLokiStep, node, () => {
            expect(node.firstChild.tagName).toEqual('LI')
        })
    })

    it('has the LokiStep css class', () => {
        render(validLokiStep, node, () => {
            expect(node.firstChild.classList.item(0)).toEqual('LokiStep')
        })
    })

    it('has Active className if is active', () => {
        render(validLokiStep, node, () => {
            expect(node.firstChild.classList.item(1)).toEqual('LokiStep-Active')
        })
    })

    it('has Complete className if is complete', () => {
        render(completeLokiStep, node, () => {
            expect(node.firstChild.classList.item(2)).toEqual('LokiStep-Complete')
        })
    })
});