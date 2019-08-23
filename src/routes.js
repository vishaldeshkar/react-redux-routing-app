import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeComponent from './components/home/HomeComponent';
const AboutComponent = lazy(() => import('./components/about/AboutComponent'));
const CounterContainer = lazy(() => import('./containers/counter/CounterContainer'));
const ProductsContainer = lazy(() => import('./containers/products/ProductsContainer'));
const ManageProductContainer = lazy(() => import('./containers/products/ManageProductContainer'));
export default (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/counter" component={CounterContainer} />
            <Route path="/products" component={ProductsContainer} />
            <Route path="/product/:id" component={ManageProductContainer} />
            <Route path="/product" component={ManageProductContainer} />
            <Route path="**" render={
                () => (
                    <article>
                        <h1 className="text-danger">No Route Configured!</h1>
                        <p className="text-danger">Please check your Route Configuration</p>
                    </article>
                )
            } />
        </Switch>
    </Suspense>
)