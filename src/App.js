import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greetings.js'
import Clock from './components/time.js'
import Login from './components/login.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      viewForm: false,
      firstName: '',
      lastName: ''
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.passName = this.passName.bind(this)
  }
  passName(firstName, lastName){
    console.log('First name: ' + firstName + ' , Last name:' + lastName)
    this.setState({
      firstName: firstName,
      lastName: lastName,
      isLoggedIn: true,
      viewForm: false
    })
  }
  handleLoginClick() {
    this.setState({
      viewForm: true
    });
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() { 
    let loggedGreeting;
    let loggedButton;
    if (this.state.isLoggedIn) {
      loggedGreeting = <p>Hello, <Greeting Fname={this.state.firstName} Lname={this.state.lastName} /> </p>
      loggedButton = <button className="login-button" onClick={this.handleLogoutClick}>Logout</button>
    } else {
      loggedGreeting = <p>Hello, Stranger</p>
      loggedButton = <button className="login-button" onClick={this.handleLoginClick}>Login</button>
    }
    return (
      <div className="App">
      {(this.state.viewForm) ?
        <Login chooseDisplay ={this.state.viewForm} callbackName = {this.passName} callbackForm = {this.loginFormSubmit} /> : ''}
      

        <div className="login-button-container">
          {loggedButton}
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            {loggedGreeting}
          
          <p className="App-link">
            How are you feeling today?
          </p>
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
