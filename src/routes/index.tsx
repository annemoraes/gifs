import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/media/:detail+" component={Details} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
};

export default Routes;
