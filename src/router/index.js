import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home';
import GoOutMg from '../pages/GoOutMg';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/goOutMg">出入管理</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/goOutMg" component={GoOutMg}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;