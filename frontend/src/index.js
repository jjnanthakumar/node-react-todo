import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './styles/App.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            {/* <Route component={NotFound}/> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);