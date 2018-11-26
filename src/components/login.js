import React, { Component } from 'react';
import '../App.css';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			firstName: '',
      		lastName: '',
      		show: false
		}
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
  componentDidMount(){
  	this.timeoutId = setTimeout(function () {
  		this.setState({show:true});
  	}.bind(this), 500)
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' +this.state.firstName + ' ' + this.state.lastName);
    if(this.state.firstName == '' || this.statelastName == ''){
    	alert('Fill inputs correctly!');
    } else{
    	this.props.callbackName(this.state.firstName, this.state.lastName);
    }
    event.preventDefault();
  }
	render() {
		return (
			<div className={this.state.show ? 'menu menu-active' : 'menu'}>
				<form onSubmit={this.handleSubmit}>
					<label>
						First Name:
						<input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
					</label>
					<label>
						Last Name:
						<input type="text" value2={this.state.lastName} onChange={this.handleLastNameChange} />
					</label>
					<input className="submit-button" type="submit" value="Submit" />
				</form>
		    </div>
		) 
	}
}

export default Login;