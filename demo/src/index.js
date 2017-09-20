import React, { Component } from 'react';
import { render } from 'react-dom';

import SimpleDemo from './SimpleDemo';
import CustomDemo from './CustomDemo';
import ComplexDemo from './ComplexDemo';

class Demo extends Component {
    render() {
        return (
            <div>
                <SimpleDemo />
                <hr />
                <CustomDemo />
                <hr />
                <ComplexDemo />
            </div>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));
