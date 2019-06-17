import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../history';
import jwt_decode from 'jwt-decode';
// import {logoutAction} from '../../actions/loginActions';
import NavLinks from './NavLinks';
// import { logOut } from '../../common/functions';


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        authenticated: false
      };
  }

    componentWillMount() {
      var isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        // const token = sessionStorage.getItem('token');
        // let user = jwt_decode(token);
        this.setState({authenticated: isLoggedIn});
        // REDIRECT IF ON AUTH PAGE
      } else {
        history.push('/');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.authenticated) {
        this.setState({authenticated: nextProps.authenticated});
      }
    }

  render() {
    return (
      <div className="navbar-display">
        <ul>
          <NavLinks authenticated={this.state.authenticated} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.navbar.authenticated
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
    )(NavigationBar)
    );
