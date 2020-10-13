import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Components/login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/register';
import Home from './Components/home';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path='/' component={ Home }/>
              <Route exact path='/login' component={ Login }/>
              <Route path='/register' component={ Register }/>
              <Route exact path='/dashboard' component={ Dashboard }/>
            </Switch>
          </div>
          <Footer /> 
        </Router>
      </>
    )
  }
}
export default App;
