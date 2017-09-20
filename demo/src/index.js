import React, { Component } from 'react'
import { render } from 'react-dom'
import FaUser from 'react-icons/lib/fa/user';

import Loki from '../../src'

class Demo extends Component {
  render() {
    const steps = [
        {
            label: 'Step 1',
            icon: <FaUser />,
            component: <h1>step 1</h1>,
        },
        {
            label: 'Step 2',
            component: <h1>step 2</h1>,
        },
    ];

    return (
        <div>
            <h1>test Demo</h1>
            <Loki steps={steps} />
        </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
