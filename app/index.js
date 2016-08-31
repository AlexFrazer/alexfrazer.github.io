import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router';
import { render } from 'react-dom';

import './app.global.css';
import './animate.global.css';
import routes from './routes';

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
