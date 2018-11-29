import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import store from './store';
import Home from './views/Home';
import Login from './views/Login';
import Registration from './views/Registration';
import NotFound from './views/NotFound';
import EntryView from './views/EntryView';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <div>
              <ToastContainer />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/register" component={Registration} />
                <Route exact path="/:entry_id" component={EntryView} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
