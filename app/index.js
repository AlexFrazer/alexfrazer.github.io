import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';

import routes from './routes';

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
