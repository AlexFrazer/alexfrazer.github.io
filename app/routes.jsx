import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import About from 'app/components/About';
import NotFound from 'app/components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
