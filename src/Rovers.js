import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import api from './xhr/nasa-api';


//API

class Rovers extends Component {

constructor(props){
  super(props);
  this.state = {
    rovers: [],
    roverName:'',
    roverLaunchDate:'',
    roverLandingDate:'',
    roverStatus:'',
    roverCameras: [],
    roverCameras0: []
  }
}

componentWillMount(){
  api.getRovers().then((res) => {
    this.setState({
      rovers: res.rovers,
      roverName: res.rovers[1].name,
      roverLaunchDate: res.rovers[1].launch_date,
      roverLandingDate: res.rovers[1].landing_date,
      roverStatus: res.rovers[1].status,
      roverCameras: res.rovers[1].cameras[0].name,
      roverCameras0: res.rovers[1].cameras[0].full_name,
      roverMaxSol: res.rovers[1].max_sol,
      roverMaxDate: res.rovers[1].max_date
    })
  });
}

  render() {
    console.log("Rovers: ", this.state.rovers);
    return (
      <div>
      <div>
      
      </div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Martian React App</h2>
          

        </div>
        <h2>This is the mars rovers page</h2>
        <div className="nav">
          <Link className="link" to="/">App</Link> 
          <Link className="link" to="/rovers">Rovers</Link> 
          <Link className="link" to="/flintstones">Flintstones</Link>
          <Link className="link" to="/new">New</Link> 
         </div>
      </div>
      <div class="index">
<h1 id="header"><a>Index</a></h1>
    <table>
    
      <tr>
        <td>1</td>
        <td>Rover Name: {this.state.roverName}</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Launch Date: {this.state.roverLaunchDate}</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Landing Date: {this.state.roverLandingDate}</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Rover Status: {this.state.roverStatus}</td>
      </tr>

      <tr>
        <td>4</td>
        <td>Rover Cameras: {this.state.roverCameras} : {this.state.roverCameras0}</td>
      </tr>  

      <tr>
        <td>5</td>
        <td>Rover Max Sol: {this.state.roverMaxSol}</td>
      </tr>  

      <tr>
        <td>6</td>
        <td>Rover Max Date: {this.state.roverMaxDate}</td>
      </tr>        
      
    </table>
  </div>
        

</div>
    );
  }
}

export default Rovers;