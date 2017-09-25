import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

import SimpleDemo from './SimpleDemo';
import CustomDemo from './CustomDemo';
import ComplexDemo from './ComplexDemo';

class Demo extends Component {
    render() {
        return (
            <HashRouter>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <div className="card-block p-3">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <NavLink exact to="/" className="nav-link">
                                            {`Simple Demo`}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/custom" className="nav-link">
                                            {`Custom Demo`}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/formik" className="nav-link">
                                            {`Formik Demo`}
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="card">
                            <div className="card-block p-3">
                                <Switch>
                                    <Route exact path="/" component={SimpleDemo} />
                                    <Route path="/custom" component={CustomDemo} />
                                    <Route path="/formik" component={ComplexDemo} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));
