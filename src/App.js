import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import GithubState from './context/github/GithubState'


const App = () => {
  const [alert, setAlert] = useState(null);



  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })

  }

  const clearAlert = () => setAlert(null)



  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>

              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    showAlert={showAlert}
                    clearAlert={clearAlert}
                  />
                  <Alert alert={alert} />
                  <Users />
                </Fragment>
              )}>
              </Route>
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>

  );

}

export default App;
