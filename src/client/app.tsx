import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '@components/organisms/Header/Header';
import { routes } from './router';

const Routes = routes.map((route) => {

    const { path, component, exact } = route;
    
    return (
        <Route
            key={path}
            path={path}
            component={component}
            exact={exact}
        />
    )
});

import "./index.scss";

export default function App(): JSX.Element {
    return (
        <>
            <Router>
                <Header auth={true}/>
                <Switch>
                    { ...Routes }
                </Switch>
            </Router>
        </>
    )
}
