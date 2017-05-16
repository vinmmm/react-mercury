import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import PhysicianHome from './PhysicianHome';


let cardsList = [ {
    id: 1,
    title: "Find Your Physician",
    description: "I'm looking for a specific doctor",
    status: "in-progress",
    tasks: []
}, {
    id: 2,
    title: "Find Your Plan",
    description: "I know the name of my Medic plan",
    status: "todo",
    tasks: [
{
id: 1,
        name: "Mission Health Pratt",
done: true },
{
id: 2,
        name: "Mission Health Pratt Health and Rehab",
        done: false
      },
{
id: 3,
        name: "My own",
done: false }
] },
];




class New extends Component {
		render(){ 
				return (
	  <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Martian React App</h2>
          

        </div>
        <h2>New Page</h2>
        <div className="nav">
          <Link className="link" to="/">App</Link> 
          <Link className="link" to="/rovers">Rovers</Link> 
          <Link className="link" to="/flintstones">Flintstones</Link> 
         </div>
         
        <PhysicianHome cards={cardsList} />








      </div>

      

					)

		}
}

export default New;
