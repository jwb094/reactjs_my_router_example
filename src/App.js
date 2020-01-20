import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
// function App() {
const user = ({match}) => {

  return(<h1> Welcome User {match.params.username}</h1>)
}
  class App extends Component{
    state = {
      loggedIn:false
    }
    loginHandle = () => {
      this.setState({
        loggedIn:false
      })
    }
  render(){
    return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink exact activeStyle={
              {color:'green'}
            } to="/">Home</NavLink>
              </li>
          <li>
            <NavLink exact activeStyle={
              {color:'green'}
            } to="/about">About</NavLink>
              </li>
          <li>
            <NavLink exact activeStyle={
              {color:'green'}
            } to="/user/john">User John</NavLink>
            </li>
            <li>
            <NavLink exact activeStyle={
              {color:'green'}
            } to="/user/peter">User Peter</NavLink>
            </li>
        </ul>
        
        <input type="button" value="log in" onClick={this.loginHandle.bind(this)}/>
    
      <Route path="/" exact strict render={
        () => {
          return(<h1>Welcome Home</h1>)
        }} />
        <Route path="/about" exact strict render={
        () => {
          return(<h1>Welcome About</h1>)
        }} />
        <Route path="/user/:username" exact strict render={()=>(
          this.state.loggedIn ? (<user/>) :(<Redirect to="/"/>)
        )}
         />
    </div>
    </Router>
    );
  }
  
  
  
}

export default App;
