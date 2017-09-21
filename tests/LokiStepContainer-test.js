import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { LokiStepContainer } from 'src/';

describe('LokiStepContainer', () => {
    let node
    let validLokiStepContainer

    beforeEach(() => {
        node = document.createElement('div')
        validLokiStepContainer = <LokiStepContainer></LokiStepContainer>
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('renders an ol by default', () => {
        render(validLokiStepContainer, node, () => {
            expect(node.firstChild.tagName).toEqual('OL')
        })
    })

    it('has the LokiStep css class', () => {
        render(validLokiStepContainer, node, () => {
            expect(node.firstChild.classList.item(0)).toEqual('LokiSteps')
        })
    })
});