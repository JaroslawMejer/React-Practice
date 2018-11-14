import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greetings.js'
import Clock from './components/time.js'

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
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstNameChange(event) {
    console.log('Firstname: ' + event.target.value);
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastNameChange(event) {
    console.log('Lastname: ' + event.target.value);
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' +this.state.firstName + ' ' + this.state.lastName);
    this.setState({
      viewForm: false,
      isLoggedIn: true
    })
    event.preventDefault();
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
    const isLoggedIn = this.state.isLoggedIn
    let loggedGreeting;
    let loggedButton;
    if (isLoggedIn) {
      loggedGreeting = <p>Hello, <Greeting Fname={this.state.firstName} Lname={this.state.lastName} /> </p>
      loggedButton = <button className="login-button" onClick={this.handleLogoutClick}>Logout</button>
    } else {
      loggedGreeting = <p>Hello, Stranger</p>
      loggedButton = <button className="login-button" onClick={this.handleLoginClick}>Login</button>
    }
    return (
      <div className="App">
      {(this.state.viewForm) ?
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value2={this.state.lastName} onChange={this.handleLastNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div> : ''}
      

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
