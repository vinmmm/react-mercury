import React, { Component } from 'react';
//import Nav from './Nav';
import logo from './logo.svg';
import './App.css';
//import New from './New';
import { Link } from 'react-router';
// XHR module - axios - A promise based http client for the browser and node. npm axios.
//import axios from 'axios';
//import Fetch1 from './Fetch1';
// import { Router, Route, browserHistory, Link } from 'react-router'

//nasa api
//import api from './xhr/api';


class App extends Component {
  //constructor(props) {
    //super(props)
  //}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Martian React App</h2>
          <div className="nav">
          <Link className="link" to="/">App</Link> 
          <Link className="link" to="/rovers">Rovers</Link> 
          <Link className="link" to="/flintstones">Flintstones</Link> 
          <Link className="link" to="/new">New</Link>
         </div>

        </div>
      </div>
    );
  }
}




export default App;

