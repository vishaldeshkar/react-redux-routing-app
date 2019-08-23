/*eslint-disable*/

import React, { Component } from 'react';
import ErrorHandler from '../common/ErrorHandler';
import NavigationComponent from '../navigation/NavigationComponent';

class RootComponent extends Component {
    render() {
        return (
            <div className="container">
                <ErrorHandler>
                    <NavigationComponent/>
                </ErrorHandler>
            </div>
        );
    }
}

export default RootComponent;