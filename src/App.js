import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';

import Home from './components/cv_sections/Home';
import Minigame from './components/cv_sections/Minigame';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar branding="MyCV" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/minigame" component={Minigame} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
