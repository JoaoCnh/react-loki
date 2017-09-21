import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { renderToString } from 'react-dom';

import Loki from 'src/';

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
  let invalidLoki
  let validLoki

  beforeEach(() => {
    node = document.createElement('div')
    invalidLoki = <Loki />
    validLoki = <Loki steps={simpleSteps} onFinish={() => {}} />
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('should render loki', () => {
    render(validLoki, node, () => {
      expect(node.firstChild.classList.item(0)).toEqual('Loki')
    })
  })

  it('should render the steps container', () => {
    render(validLoki, node, () => {
      expect(node.firstChild.firstChild.classList.item(0)).toEqual('LokiSteps')
    })
  })

  it('should not render if invalid', () => {
    render(invalidLoki, node, () => {
      expect(node.innerHtml).toBe(undefined)
    })
  })
});