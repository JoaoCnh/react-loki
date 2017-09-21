[build-badge]: https://travis-ci.org/JoaoCnh/react-loki.svg?branch=master
[build]: https://travis-ci.org/JoaoCnh/react-loki
[npm-badge]: https://badge.fury.io/js/react-loki.svg
[npm]: https://www.npmjs.org/package/react-loki
[coveralls-badge]: https://coveralls.io/repos/github/JoaoCnh/react-loki/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/user/repo

# react-loki

## react-loki is a Wizard Component made with React.... and yes.... the pun is intended.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
[![license](http://img.shields.io/npm/l/react-loki.svg)](./LICENSE)

## Overview

The goal of this component is to simplify the implementation of a Wizard like experience on a react application.

**Loki** is an uncommited React component. It doesn't force anything on you and you hold the control over everything on each and every single step component.

You can use it for presentational content and forms. **Loki** only handles the back and forth mechanic of wizards.

## Installation

Add react-loki to your project

```shell
yarn add react-loki
```

You can also try out the [demo](https://joaocnh.github.io/react-loki)

## How to use

### First define your steps

```js
const mySteps = [
    {
        label: 'Step 1',
        icon: <AnyComponentYouWant /> //optional,
        component: <Step1Component />,
    },
    ...
];
```

### Then pass them into Loki

```js
import React from 'react';
import Loki from 'react-loki';

class Demo extends React.Component {
    _onFinish() {
        alert('Loki finished!');
    }

    render() {
        return (
            <div className="myWizard">
                <Loki steps={mySteps} onFinish={this._onFinish.bind(this)} />
            </div>
        );
    }
}
```

## API

### `<Loki />`

`<Loki />` is the component that controls the wizard like behaviour

#### Loki props

##### `steps: array [required]`

The required steps array. A step is an object composed of:
- label - string
- icon - element optional 
- component - element

##### `onFinish: function [required]`

The required handler function for when the wizard hits the last step.
Whenever you click that final button of the whole wizard this function will be called.

##### `backLabel: string|element`

By default the backLabel is 'Back'. This prop will allow you to replace it with a new string value or even a React Component.

##### `nextLabel: string|element`

By default the nextLabel is 'Next'. This prop will allow you to replace it with a new string value or even a React Component.

##### `finishLabel: string|element`

By default the finishLabel is 'Finish'. This prop will allow you to replace it with a new string value or even a React Component.

### `<LokiStepContainer />`

`<LokiStepContainer />` is the component that renders the wizard progress steps `<ol>` container

**react-loki** exposes it to give the option of using it whenever you want. It only needs children passed in.
[any doubts? check the customizing section](##customizing)`

### `<LokiStep />`

`<LokiStep />` is the default component for rendering a progress step.

**react-loki** exposes it to give the option of using it whenever you want.
[any doubts? check the customizing section](##customizing)`

#### LokiStep props

##### `currentStep: integer [required]`
##### `totalSteps: integer [required]`
##### `step: object [required]`
##### `isLokiComplete: boolean [required]`

All these props are required and are responsible for rendering out the proper classNames for the correct progress steps.
If a step is currently being rendered it will have the class `LokiStep-Active`.
If a step has been complete then it will have the class `LokiStep-Complete`.
By default a step already has the class `LokiStep`.

## CUSTOMIZING


