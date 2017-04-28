import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import New from './New';
import Rovers from './Rovers';




import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Route path="/" component={App} />
  	<Route path="/new" component={New} />
  	<Route path="/rovers" component={Rovers} />
  	
  	
  </Router>
  ), document.getElementById('root'))

