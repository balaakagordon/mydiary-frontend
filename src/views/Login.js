import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
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


class Login extends Component {
	render() {
		return (
		<div style={sectionStyle}>
			<Header />
			<LoginForm />
		</div>
		)
	}
}

export default Login;

