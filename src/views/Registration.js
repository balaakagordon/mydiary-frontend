import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import userSignup from '../actionCreators/userSignup';
import history from '../history';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import SignupForm from '../components/SignupForm';


class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  	user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmedPassword: ''
			},
			loading: false,
			message: null,
			status: '',
			errors: null
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.status === 'success') {
		  	this.handleSuccess(nextProps.message, nextProps.token);
		} else if (nextProps.status === 'error') {
		  	this.handleErrors(nextProps.errors);
		}
	}

	handleLoader = () => {
		return (
		  	<Loader
				type="Circles"
				color="black"
				height={40}
				width={40}
		  	/>
		)
	}

	handleClearForm = (event) => {
		event.preventDefault();
		this.setState({
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmedPassword: ''
			},
			loading: false,
			message: null,
			status: '',
			token: '',
			errors: null
		})
	}

	handleFormInput = (event) => {
		let {name, value} = event.target;
		this.setState( prevState => {
			return {
				user: {
				...prevState.user, [name]: value
				}
		  	}
		})
		// console.log('the state => ', this.state);
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.props.userSignup(this.state.user);
	}

	handleSuccess = (message) => {
		toast.success(message, {
			position: toast.POSITION.TOP_CENTER,
			hideProgressBar: true
		});

		if (sessionStorage.getItem("token")) {
			history.push("/home");
		}
	}

	handleErrors = errors => {
		for (let err in errors) {
		  	toast.error(errors[err][0], {
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar:true
		  	});
		}
	}

	render() {
		let showLoader = null;
		if (this.props.loading) {
			showLoader = this.handleLoader();
		}
		return (
			<div>
				<SignupForm
					user={this.state.user}
					showloader={this.showLoader}
					// handleLoader={this.handleLoader}
					handleClearForm={this.handleClearForm}
					handleFormSubmit={this.handleFormSubmit}
					handleFormInput={this.handleFormInput}
					handleSuccess={this.handleSuccess}
					handleErrors={this.handleErrors}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.signup.user,
	loading: state.signup.loading,
	message: state.signup.message,
	status: state.signup.status,
	errors: state.signup.errors
  });


export default withRouter(
	connect(
	  mapStateToProps,
	  { userSignup }
	)(Registration)
  );