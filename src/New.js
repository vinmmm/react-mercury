import React, { Component } from 'react';
import App from './App.js';
import { Router, Route, browserHistory, Link } from 'react-router';

class New extends Component {
		render(){ 
				return (
						<div>
								<h1>hello new page</h1>
								<Link to="/">App</Link>
						</div>

					)

		}
}

export default New;
