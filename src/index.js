import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import New from './New';



import { Router, Route, browserHistory, Link } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Route path="/" component={App} />
  	<Route path="/new" component={New} />
  	
  	
  </Router>
  ), document.getElementById('root'))

