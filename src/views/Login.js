import React, { Component } from 'react';
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";
import userLogin from "../actionCreators/userLogin";
import LoginForm from '../components/LoginForm'


export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  user: {
			email: "",
			password: ""
		  },
		  loading: false,
		  message: null,
		  status: "",
		  errors: null
		};
	  }

	componentWillReceiveProps(nextProps) {
		if (nextProps.status === "success") {
			return this.handleSuccess(nextProps.message)
		} else if (nextProps.status === "error") {
			this.handleErrors(nextProps.errors);
		}
	}

	handleFormSubmit = event => {
		event.preventDefault();
		this.props.userLogin(this.state.user);
	}

	handleClearForm = event => {
		event.preventDefault();
		this.setState({
				user: {
				email: "",
				password: ""
			},
			loading: false,
			message: null,
			status: "",
			token: "",
			errors: null
		});
	};

	handleFormInput = event => {
		let { name, value } = event.target;
		this.setState(prevState => {
			return {
				user: {
					...prevState.user,
					[name]: value
				}
			};
		});
	}

	handleSuccess = message => {
		toast.success(message, {
			position: toast.POSITION.TOP_CENTER,
			hideProgressBar: false
		});

		if (sessionStorage.getItem("token")) {
			history.push("/home");
		}
	};

	handleErrors = errors => {
		for (let err in errors) {
			toast.error(errors[err][0], {
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar: true
			});
		}
	};

	handleLoader = () => {
		return (
		  	<Loader
				type="Circles"
				color="black"
				height={40}
				width={40}
		  	/>
		)
	};

	render() {
		let showLoader = null;
		if (this.props.loading) {
			showLoader = this.handleLoader();
		}
		return (
			<div>
				<LoginForm
					user={this.state.user}
					showLoader={showLoader}
					handleFormSubmit={this.handleFormSubmit}
					handleClearForm={this.handleClearForm}
					handleFormInput={this.handleFormInput}
					handleSuccess={this.handleSuccess}
					handleErrors={this.handleErrors}
				/>
			</div>
		)
	}
}

export const mapStateToProps = state => ({
	user: state.login.user,
	loading: state.login.loading,
	message: state.login.message,
	status: state.login.status,
	token: state.login.token,
	errors: state.login.errors
  });

export default withRouter(
	connect(
	  mapStateToProps,
	  { userLogin }
	)(Login)
  );

