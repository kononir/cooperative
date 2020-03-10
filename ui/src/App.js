import React from 'react';
import {Route, Router} from 'react-router';
import createBrowserHistory from './helpers/history';
import './App.css';
import {Register} from "./components/register/Register";
import {Organization} from "./components/requisites/Organization";

function App() {
    return (
        <Router history={createBrowserHistory}>
            <Route path='/requisites' component={Organization}/>
            <Route path='/register' component={Register}/>
        </Router>
    );
}

export default App;
