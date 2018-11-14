import React, { Component } from 'react';

class Greeting extends React.Component {
	render() {
		return this.props.Fname + ' ' + this.props.Lname;
	}
}

export default Greeting