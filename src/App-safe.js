import React, { Component } from 'react';
//import Nav from './Nav';
import logo from './logo.svg';
import './App.css';
import New from './New';
import { Router, Route, browserHistory, Link } from 'react-router';
// XHR module - axios - A promise based http client for the browser and node. npm axios.
import axios from 'axios';
import Fetch1 from './Fetch1';
// import { Router, Route, browserHistory, Link } from 'react-router'

//nasa api
//import api from './xhr/api';



let Arcade = function(props) {
  
    return(
      <div className="arcade">
        <div>Name: {props.name}</div>
      </div>
      )
  
}

let Airport = function(props) {

    return(
      <div className="arcade">
        <div>Name: {props.code}</div>
      </div>
      )
}


let ArcadeApp = React.createClass({
  getInitialState: function() {
  return {
     photos: []
  }
},

componentDidMount: function() {
//Because of sigle argument set of () can be removed from fat arrow function to be - .then(results =>
axios.get('http://swapi.co/api/people/').then(results => {
this.setState({
  photos: results.data.results
})
})
},

render: function() {

return (

    <div>
        <h1>Saturns</h1>
        <Link to="/new">New</Link> 
        {this.state.photos.map(function(photo) {
           return <Arcade name={photo.height} key={photo.name} />
         }

        )}
       
        
        
    </div>
  )

 }

})




let Main = React.createClass({
  getInitialState: function() {
    return {
      rotation: 0
    }
  },


componentDidMount: function() {

setInterval(() => {
  this.setState({
    rotation: this.state.rotation + 0
  })
}, 1000)

},

  render: function(){
    return <div>Saturn Rotation: {this.state.rotation}</div>
  }

})


let Title = React.createClass({
  render: function() {
    return <div><h4>{this.props.title} :</h4></div>
  }
})

let Social = React.createClass({
  render: function() {
    return <div><h5>{this.props.socialTitle}:</h5> 
                <h5>{this.props.twitter}</h5> <h6> <a href={'http://twitter.com/'}>Saturn on Twitter</a></h6>
                <h5>{this.props.instagram}</h5> <h6> <a href={'http://instagram.com/'}>Saturn on Instagram</a></h6>
           </div>
  }
})

let Orbit = React.createClass({
  render: function() {
    // replace with ternary "?"
    if (this.props.currentPosition) {
       return <div><h6>{this.props.name}: {this.props.one} --> "{this.props.currentPosition}"</h6></div>
    } else { 
       return <div><h6>{this.props.name}: {this.props.one}</h6></div>
    }
  }
})




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Saturn React App</h2>
        </div>

        <div>
       
        <ArcadeApp  />
        
        </div>

        <div className="App-main">
        <Main />
        </div>

       
        <div className="App-planet">
        <Title title="Venus's Orbit Properties"/>
        <Orbit name="Path" one="Venus orbits within Earth's orbit" currentPosition="placeholder for position from XHR" /> 
        <Orbit name="Speed" one="224.7 Earth days" />
        <Social socialTitle="Social Media"/>


        </div>

      </div>
    );
  }
}

export default App;

