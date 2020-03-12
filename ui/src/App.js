import React from 'react';
import {Route, Router} from 'react-router';
import createBrowserHistory from './helpers/history';
import './App.css';
import {Register} from "./components/register/Register";
import {Organization} from "./components/requisites/Organization";
import {Supervisor} from "./components/requisites/Supervisor";
import {StateRegistrationOfLegal} from "./components/requisites/StateRegistrationOfLegal";
import {SubjectHistory} from "./components/requisites/SubjectHistory";
import {SubjectHistoryEvent} from "./components/requisites/SubjectHistoryEvent";

function App() {
    return (
        <Router history={createBrowserHistory}>
            <Route exact path='/requisites' component={Organization}/>
            <Route exact path='/requisites/supervisor' component={Supervisor}/>
            <Route exact path='/requisites/stateRegistrationOfLegal' component={StateRegistrationOfLegal}/>
            <Route exact path='/requisites/subjectHistory' component={SubjectHistory}/>
            <Route exact path='/requisites/subjectHistory/:id' component={SubjectHistoryEvent}/>
            <Route path='/register' component={Register}/>
        </Router>
    );
}

export default App;
