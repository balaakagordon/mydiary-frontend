import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userLogin from '../actionCreators/userLogin';
import { toast } from 'react-toastify';
import history from '../history';
import FormInputField from './FormComponents/FormInputField';
import FormSubmitButton from './FormComponents/FormSubmitButton';


export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      message: null,
      status: '',
      errors: null
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      console.log('loading...');
    }
    if (nextProps.status === 'success') {
      this.handleSuccess(nextProps.message, nextProps.token);
    } else if (nextProps.status === 'error') {
      this.handleErrors(nextProps.errors);
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.userLogin(this.state.user);
  }

  handleClearForm = (event) => {
    event.preventDefault();
    this.setState({
      user: {
        email: '',
        password: ''
      },
      loading: false,
      message: null,
      status: '',
      token: '',
      errors: null
    })
  }

  handleFormInput(event) {
    let {name, value} = event.target;
    this.setState( prevState => {
        return {
        user :{
          ...prevState.user, [name]: value
        }
      }
    })
  }

  handleSuccess = (message, token) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true
    });
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('isLoggedIn', true);
    history.push('/home');
  }

  handleErrors = errors => {
    for (let err in errors) {
      toast.error(errors[err][0], {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar:true
      });
    }
  };

  render() {
    return (
      <div className="container auth-form">
        <FormInputField type={'text'}
            title={'Email'}
            name={'email'}
            value={this.state.user.email}
            placeholder={'Enter your email address'}
            handleChange={this.handleFormInput}
        />
        <FormInputField type={'password'}
            title={'Password'}
            name={'password'}
            value={this.state.user.password}
            placeholder={'Enter your password'}
            handleChange={this.handleFormInput}
        />
        <Link to="/">don't have an account?</Link>
        <br />
        <FormSubmitButton
            action={this.handleFormSubmit}
            title={'Submit'}
        />
        <FormSubmitButton
            action={this.handleClearForm}
            title={'Cancel'}
        />
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
