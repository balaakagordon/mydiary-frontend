import React, { Component } from 'react';
import SignupForm from '../components/SignupForm'
import Header from '../components/Header';
import Background from '../images/diary1.jpg';


var sectionStyle = {
    position: "fixed",
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };


class Registration extends Component {
	render() {
		return (
		<div style={sectionStyle}>
			<Header />
			<SignupForm />
		</div>
		)
	}
}

export default Registration;