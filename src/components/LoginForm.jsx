import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import history from "../history";
import userLogin from "../actionCreators/userLogin";
import FormInputField from "./FormComponents/FormInputField";
import Button from "./FormComponents/Button";

export class LoginForm extends Component {
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

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "success") {
      return this.handleSuccess(nextProps.message, nextProps.token)
    } else if (nextProps.status === "error") {
      this.handleErrors(nextProps.errors);
    }
  }

  handleFormSubmit(event) {
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

  handleFormInput(event) {
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

  handleSuccess = async (message, token) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: false
    });

    await sessionStorage.setItem("token", token);
    await sessionStorage.setItem("isLoggedIn", true);
    // console.log('======awaited======');

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
      <div className="auth-form">
        {showLoader}
        <FormInputField
          type={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.user.email}
          placeholder={"Enter your email address"}
          handleChange={this.handleFormInput}
          className={'auth-form-input'}
        />
        <FormInputField
          type={"password"}
          title={"Password"}
          name={"password"}
          value={this.state.user.password}
          placeholder={"Enter your password"}
          handleChange={this.handleFormInput}
          className={'auth-form-input'}
        />
        <div className="auth-link">
          <Link to="/">don't have an account?</Link>
        </div>
        <div className="row">
          <div className="form-buttons">
            <Button
              action={this.handleFormSubmit}
              title={"Submit"}
              className='auth-button auth-submit'
            />
            <Button
              action={this.handleClearForm}
              title={"Cancel"}
              className='auth-button auth-cancel'
            />

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // user: state.login.user,
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
  )(LoginForm)
);
