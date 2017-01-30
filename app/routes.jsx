import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import HomePage from 'app/components/HomePage';
import NotFound from 'app/components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFound} />
  </Route>
)
