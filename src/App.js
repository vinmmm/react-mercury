import React, { Component } from 'react';
//import Nav from './Nav';
import logo from './logo.svg';
import './App.css';

let Main = React.createClass({
  getInitialState: function() {
    return {
      active: false
    }
  },

  render: function() {

    let active = this.state.active ? 'Yes' : 'No'

    return (
<div className="main">
    <div>Active: {active}</div>
    <button onClick={this.toggleActive}>Toggle Active</button>
</div>  
    )  
  },

toggleActive: function() {
this.setState({
  active: !this.state.active
})

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
                <h5>{this.props.twitter}</h5> <h6> <a href={'http://twitter.com/'}>Mercury on Twitter</a></h6>
                <h5>{this.props.instagram}</h5> <h6> <a href={'http://instagram.com/'}>Mercury on Instagram</a></h6>
           </div>
  }
})

let Orbit = React.createClass({
  render: function() {
    // replace with ternary "?"
    if (this.props.currentPosition) {
       return <div><h6>{this.props.name} {this.props.one} --> "{this.props.currentPosition}"</h6></div>
    } else { 
       return <div><h6>{this.props.name} {this.props.one}</h6></div>
    }
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Mercury</h2>
        </div>
        <div className="App-main">
        <Main />
        </div>

       
        <div className="App-planet">
        <Title title="Mercury's Orbit Properties"/>
        <Orbit name="Path" one="locked tidally with the Sun in a 3:2 resonance" currentPosition="placeholder for position from XHR" /> 
        <Orbit name="Speed" one="88 Earth days" />
        <Social socialTitle="Social Media"/>


        </div>

      </div>
    );
  }
}

export default App;
