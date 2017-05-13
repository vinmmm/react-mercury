import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';




// Child Component
class XItem extends Component {
render() { 
	return (
<li>
{this.props.all} is {this.props.nall}
</li> 

   );

} 

}



// Parent Component
class Flintstones extends Component {
render() { 

	return (

 <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Martian React App</h2>
         
          
        </div>
        <h2>Flintstones Page</h2>
        <div className="nav">
          <Link className="link" to="/">App</Link> 
          <Link className="link" to="/rovers">Rovers</Link> 
          <Link className="link" to="/flintstones">Flintstones</Link> 
          <Link className="link" to="/new">New</Link>
         </div>

<div className="Space-list">
<ul>

		<ListItem when="1960s" name="Great Gazoo" /> 
		<ListItem when="1960s" name="Spacely, Jetsons" /> 
		<ListItem when="1980s" name="Spacely, Mudd Club" />
		<ListItem when="1970s" name="Space Ace, Kiss" />
		<XItem all="1960s" nall="GG" />
		
	</ul>
</div>	
	  </div>







 );

} 

}
// Child Component
class ListItem extends Component {
render() { 
	return (
<li>
{this.props.when} is {this.props.name}
</li> 

   );

} 

}

export default Flintstones;


