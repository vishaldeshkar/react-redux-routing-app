/*eslint-disable*/
import 'bootstrap/dist/css/bootstrap.css';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import RootComponent from './components/root/RootComponent';
import $ from 'jquery';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

window.$ = $;
window.jQuery = $;
global.jQuery = $;
const bootstrap = require('bootstrap');

const appStore = configureStore();
// const appStore = configureStore({ counterReducer: 1000 });

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter>
            <RootComponent />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));