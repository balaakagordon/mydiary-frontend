import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import NavLinks from './NavLinks';


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
      this.setState({authenticated: isLoggedIn});
      // REDIRECT IF ON AUTH PAGE
      // history.push('/home');
    } else {
      history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated) {
      this.setState({authenticated: nextProps.authenticated});
    }
    // } else {
    //   this.setState({authenticated: false});
    // }
  }

  logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('isLoggedIn')
    history.push('/');
  }

  render() {
    return (
      <div className="navbar-display">
        <ul>
          <NavLinks
            authenticated={this.state.authenticated}
            logOut={this.logOut}
          />
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
