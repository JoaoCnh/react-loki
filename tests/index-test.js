import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Loki, { LokiStep } from 'src/'

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

describe('Loki', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('should render 2 steps', () => {
    render(<Loki steps={simpleSteps}/>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
});

describe('LokiStep', () => {
  let node
  
  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders an li by default', () => {
    render(<LokiStep currentStep={1} totalSteps={2} step={simpleSteps[0]} isLokiComplete={false} />, node, () => {
      expect(node.firstChild.tagName).toEqual('LI');
    });
  })

  it('has the LokiStep css class', () => {
    render(<LokiStep currentStep={1} totalSteps={2} step={simpleSteps[0]} isLokiComplete={false} />, node, () => {
      expect(node.firstChild.classList.item(0)).toEqual('LokiStep');
    });
  })

  it('has Active className if is active', () => {
    render(<LokiStep currentStep={1} totalSteps={2} step={simpleSteps[0]} isLokiComplete={false} />, node, () => {
      expect(node.firstChild.classList.item(1)).toEqual('LokiStep-Active');
    })
  })

  it('has Complete className if is complete', () => {
    render(<LokiStep currentStep={2} totalSteps={2} step={simpleSteps[1]} isLokiComplete={true} />, node, () => {
      expect(node.firstChild.classList.item(2)).toEqual('LokiStep-Complete');
    })
  })
});