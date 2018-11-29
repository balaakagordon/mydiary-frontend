import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginActions';
import { toast } from 'react-toastify';
import history from '../history';


export class LoginForm extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    status: "none"
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.status) {
      if (nextProps.status === 'loading') {
        console.log("SHOW THE LOADER")
      } else if (nextProps.status === 'success') {
        history.push('/home');
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
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginAction(userdata);
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
                <br /><br />
                  <h2 className="centred">Login</h2>
                  <br />
                  <div className="row">
                    <input
                      className="auth-input"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter email here"
                      onChange={this.onChange}/>
                  </div>
                  <div className="row">
                    <input
                      className="auth-input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password here"
                      onChange={this.onChange}/>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="auth-submit"
                    id="submit">
                    Submit
                  </button>
                  <br /><br />
                  <p className="small-text">
                    <u>
                      <Link to="/register">don't have an account?</Link>
                    </u>
                  </p>
                </form>
              </div>
              <div className="col-md-8">
                <div id="login-image">
                  <img className="auth-img" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="Authentication" />
                </div>  
              </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.login.user,
  message: state.login.message,
  status: state.login.status
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginAction }
  )(LoginForm)
);
