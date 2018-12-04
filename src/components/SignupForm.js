import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupAction } from '../actions/signupActions';
import { toast } from 'react-toastify';
import history from '../history';
import image from "../images/diary2.jpeg"


export class SignupForm extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    status: "none"
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.status) {
      if (nextProps.status === 'loading') {
        console.log("SHOW THE LOADER")
      } else if (nextProps.status === 'success') {
        history.push('/');
      } else if (nextProps.status === 'error') {
        this.displayError(nextProps.message)
      }
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userdata = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword
    };
    this.props.signupAction(userdata);
  };

  displayError = message => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar:true
    });
  };

  render() {
    return (
      <div className="container auth-form">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={this.handleSubmit} id="login-form">
                  <h2 className="centred">Register</h2>
                  <br />
                  <div className="row">
                    <input
                      className="auth-input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name here"
                      onChange={this.onChange}/>
                  </div>
                  <div className="row">
                    <input
                      className="auth-input"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter email here"
                      onChange={this.onChange}/>
                  </div>
                  <div className="form-group row">
                    <input
                      className="form-control auth-input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password here"
                      onChange={this.onChange}/>
                  </div>
                  <div className="form-group row">
                    <input
                      className="form-control auth-input"
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Confirm password here"
                      onChange={this.onChange}/>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="auth-submit"
                    id="submit">
                    Submit
                  </button>
                  <br />
                  <p className="small-text">
                  <br />
                    <u>
                      <Link to="/">already have an account?</Link>
                    </u>
                  </p>
                </form>
              </div>
              <div className="col-md-8">
                <div id="login-image">
                <img
                  className="auth-img"
                  src={image}
                  alt="Authentication"
                  height="480px"/>
                </div>  
              </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signupAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.signup.user,
  message: state.signup.message,
  status: state.signup.status
});

export default withRouter(
  connect(
    mapStateToProps,
    { signupAction }
  )(SignupForm)
);
// export default SignupForm;
