import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';

import Layout from './app/layouts/Layout';
import About from './app/pages/About';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Comments from './app/components/comments/Comments';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path='about' component={About} />
            <Route path='comments' component={Comments} />
            <Route path='users' component={Users} >
                <Route path=":userId" component={User} />
            </Route>
        </Route>
        <Redirect from='/redirect' to="/" />
    </Router>,
app);