import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';

class New extends Component {
		render(){ 
				return (
	  <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Martian React App</h2>
          <Link className="link" to="/">App</Link> 
          <Link className="link" to="/rovers">Rovers</Link> 
        </div>
        <h2>This is the new page</h2>
      </div>

      

					)

		}
}

export default New;
