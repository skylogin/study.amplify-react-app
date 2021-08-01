import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Profile from './Profile';
import Admin from './Admin';
import Main from './Main';


export default function Router(){
    const [current, setCurrent] = useState('home');

    useEffect(() => {
        setRoute();
        window.addEventListener('hashchange', setRoute);
        return () => window.removeEventListener('hashchange', setRoute);
    }, []);

    function setRoute(){
        const location = window.location.href.split('/');
        const pathname = location[location.length - 1];
        setCurrent(pathname? pathname: 'home');
    }

    return (
        <HashRouter>
            <Nav current={current} />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/admin" component={Admin} />
                <Route path="/profile" component={Profile} />
                <Route component={Main} />
            </Switch>
        </HashRouter>
    )
}