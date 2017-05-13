import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import New from './New';
import Rovers from './Rovers';
import Flintstones from './Flintstones';

import PhysicianHome from './PhysicianHome';



import { Router, Route, browserHistory } from 'react-router';




ReactDOM.render((
  <Router history={browserHistory}>
  	<Route path="/" component={App} />
  	<Route path="/new" component={New} />
  	<Route path="/rovers" component={Rovers} />
  	<Route path="/flintstones" component={Flintstones} />
  
  	
  	
  </Router>
  ), document.getElementById('root'))

