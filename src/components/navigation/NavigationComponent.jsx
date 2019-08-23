import React from 'react';
import './NavigationComponent.css';
import { Link } from 'react-router-dom';
import SwitchComponent from '../../routes';

const NavigationComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">React Routing</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/counter">Counter</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">
                                    <span className="glyphicon glyphicon-user"></span> Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <span className="glyphicon glyphicon-log-in"></span> Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {SwitchComponent}
        </div>
    );
}

export default NavigationComponent;