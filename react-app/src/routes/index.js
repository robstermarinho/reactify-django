import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" isPrivate exact component={Home} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/sign-up/" component={SignUp} />
  </Switch>
);

export default Routes;
