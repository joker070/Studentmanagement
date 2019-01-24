import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Login from './Login';
import AdminDashboard from './user/adminDashboard';
import appHistory from './util/history.js';

export const routes = [
  {
    path: '/admin',
    component: AdminDashboard,
    nav: true,
    heading: null
  },
  {
    path: '/',
    title: 'Login',
    component: Login,
    nav: true,
    icon: 'home',
    heading: null,
    id: 3
  }
];

const Routes = ({ component, history = appHistory }) => {
    console.log('com', component);
  const Component = component;
  return (
    <Router history={history}>
      {/* <Component> */}
        <Switch>
          {routes.map(route => (
            <Route key={route.id} path={route.path} exact component={route.component} />
          ))}
        </Switch>
      {/* </Component> */}
    </Router>
  );
// return( <Router history = {appHistory}><div><Route path='/' exact component={Login} /></div></Router>
//     )
//     return ( <Login/>)
};

export default Routes;
